import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { tile } from "d3-tile";
import { VectorTile } from "@mapbox/vector-tile";
import Pbf from "pbf";
import { useTheme } from "../ThemeContext/ThemeContext";

function Map() {
  const svgRef = useRef();
  const API_KEY = "cfNfEQR1Qkaz-6mvWl8cpw"; // public api key from stackoverflow
  const { darkMode } = useTheme();

  useEffect(() => {
    const width = 600;
    const height = 400;

    const themeColors = {
      light: {
        water: { fill: "none", stroke: "none" },
        waterBoundary: { fill: "none", stroke: "none" },
        roads: { fill: "none", stroke: "#736d6d" },
        marker: { fill: "#1c5ae9", stroke: "rgba(43, 110, 218, 0.5)" },
      },
      dark: {
        water: { fill: "none", stroke: "none" },
        waterBoundary: { fill: "none", stroke: "none" },
        roads: { fill: "none", stroke: "#9ca3af" },
        marker: { fill: "#22d3ee", stroke: "rgba(14, 203, 232, 0.5)" },
      },
    };

    const colors = darkMode ? themeColors.dark : themeColors.light;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const projection = d3
      .geoMercator()
      .center([121.54, 25.033])
      .scale(Math.pow(2, 21) / (2 * Math.PI))
      .translate([width / 2, height / 2])
      .precision(0);

    const path = d3.geoPath(projection);

    const tileGenerator = tile()
      .size([width, height])
      .scale(projection.scale() * 2 * Math.PI)
      .translate(projection([0, 0]));

    const markerCoordinates = [121.5414, 25.018];
    const [markerX, markerY] = projection(markerCoordinates);

    function filter({ features }, test) {
      return { type: "FeatureCollection", features: features.filter(test) };
    }

    function geojson([x, y, z], layer, filterFunc = () => true) {
      if (!layer) return;
      const features = [];
      for (let i = 0; i < layer.length; ++i) {
        const f = layer.feature(i).toGeoJSON(x, y, z);
        if (filterFunc.call(null, f, i, features)) features.push(f);
      }
      return { type: "FeatureCollection", features };
    }

    svg.selectAll("*").remove();

    Promise.all(
      tileGenerator().map(async (d) => {
        const url = `https://tile.nextzen.org/tilezen/vector/v1/256/all/${d[2]}/${d[0]}/${d[1]}.mvt?api_key=${API_KEY}`;
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        const pbf = new Pbf(buffer);
        const tile = new VectorTile(pbf);
        d.layers = tile.layers;
        return d;
      })
    ).then((tiles) => {
      svg.selectAll("*").remove();

      svg
        .selectAll("path")
        .data(tiles)
        .enter()
        .append("g")
        .selectAll("path")
        .data((d) => {
          const water = geojson(
            d,
            d.layers.water,
            (f) => !f.properties.boundary
          );
          const waterBoundary = geojson(
            d,
            d.layers.water,
            (f) => f.properties.boundary
          );
          const roads = geojson(d, d.layers.roads);

          return [
            { feature: water, style: colors.water },
            { feature: waterBoundary, style: colors.waterBoundary },
            {
              feature: roads,
              style: { ...colors.roads, strokeWidth: 0.75 },
            },
          ];
        })
        .enter()
        .append("path")
        .attr("d", (d) => path(d.feature))
        .attr("fill", (d) => d.style.fill)
        .attr("stroke", (d) => d.style.stroke)
        .attr("stroke-width", (d) => d.style.strokeWidth || 1);

      const markerGroup = svg
        .append("g")
        .attr("transform", `translate(${markerX},${markerY})`);

      markerGroup
        .append("circle")
        .attr("id", "core")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 6)
        .attr("fill", colors.marker.fill);

      markerGroup
        .append("circle")
        .attr("id", "radar")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 6)
        .attr("fill", colors.marker.stroke)
        .attr("stroke-width", 2);
    });
  }, [darkMode]);

  return (
    <svg ref={svgRef} width="100%" height="100%" className="rounded-2xl"></svg>
  );
}

export default Map;
