import React, { useRef, useEffect } from "react";
import { select } from "d3-selection";
import { geoMercator, geoPath } from "d3-geo";
import { tile } from "d3-tile";
import { VectorTile } from "@mapbox/vector-tile";
import Pbf from "pbf";
import { useTheme } from "../ThemeContext/ThemeContext";

const API_KEY = "cfNfEQR1Qkaz-6mvWl8cpw"; // public api key from stackoverflow
const tileCache = new Map();

function MapView({ onLoadingChange }) {
  const svgRef = useRef();
  const cachedTilesRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    let cancelled = false;
    if (onLoadingChange) onLoadingChange(true);

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

    const svg = select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const projection = geoMercator()
      .center([121.54, 25.033])
      .scale(Math.pow(2, 21) / (2 * Math.PI))
      .translate([width / 2, height / 2])
      .precision(0);

    const path = geoPath(projection);

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

    const fetchTile = async (d) => {
      const key = `${d[2]}/${d[0]}/${d[1]}`;
      if (tileCache.has(key)) {
        d.layers = tileCache.get(key);
        return d;
      }
      const url = `https://tile.nextzen.org/tilezen/vector/v1/256/all/${d[2]}/${d[0]}/${d[1]}.mvt?api_key=${API_KEY}`;
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      const pbf = new Pbf(buffer);
      const vt = new VectorTile(pbf);
      tileCache.set(key, vt.layers);
      d.layers = vt.layers;
      return d;
    };

    const tilesPromise = cachedTilesRef.current
      ? Promise.resolve(cachedTilesRef.current)
      : Promise.all(tileGenerator().map(fetchTile));

    tilesPromise.then((tiles) => {
      if (cancelled) return;
      cachedTilesRef.current = tiles;
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

      if (onLoadingChange) onLoadingChange(false);
    }).catch((error) => {
      console.error('Map loading failed:', error);
      if (onLoadingChange) onLoadingChange(false);
    });

    return () => {
      cancelled = true;
    };
  }, [darkMode]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      className="rounded-2xl shadow-lg"
    ></svg>
  );
}

export default MapView;
