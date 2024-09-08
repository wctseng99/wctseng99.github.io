import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PointsMaterial, BufferGeometry, Float32BufferAttribute } from "three";
import { gsap } from "gsap";

const Sphere = () => {
  const pointsRef = useRef();

  const numPoints = 3500;
  const positions = [];

  for (let i = 0; i < numPoints; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = 1.3;
    const x = Math.sin(phi) * Math.cos(theta) * r;
    const y = Math.sin(phi) * Math.sin(theta) * r;
    const z = Math.cos(phi) * r;
    positions.push(x, y, z);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));

  const material = new PointsMaterial({ color: "#000000", size: 0.0085 });

  useFrame(({ mouse, clock }) => {
    const time = clock.elapsedTime;

    const updatedPositions = positions.map((original, index) => {
      const offset = index * 0.01;
      const frequency1 = 20;
      const amplitude1 = 0.0025;
      const phase1 = 0.1;

      const frequency2 = 10;
      const amplitude2 = 0.002;
      const phase2 = 0.3;

      const sinValue =
        Math.sin(frequency1 * (time + offset) + phase1) * amplitude1;
      const cosValue =
        Math.cos(frequency2 * (time + offset) + phase2) * amplitude2;

      return original + sinValue + cosValue;
    });

    geometry.setAttribute(
      "position",
      new Float32BufferAttribute(updatedPositions, 3)
    );

    const targetRotation = {
      x: mouse.y * -1.0,
      y: mouse.x * -1.5,
    };

    // Use gsap for smooth rotation animation
    gsap.to(pointsRef.current.rotation, {
      x: targetRotation.x,
      y: targetRotation.y,
      duration: 2.5,
      ease: "power2.out",
    });

    const scaleFactor = Math.cos(mouse.y * 2) * 0.5 + 1.8;

    // Use gsap for smooth scaling animation
    gsap.to(pointsRef.current.scale, {
      x: scaleFactor,
      y: scaleFactor,
      z: scaleFactor,
      duration: 1.5,
      ease: "power3.out",
    });
  });

  return (
    <>
      <ambientLight />
      <pointLight />
      <points
        ref={pointsRef}
        scale={[1.7, 1.7, 1.7]}
        geometry={geometry}
        material={material}
      />
    </>
  );
};

export default Sphere;
// import React, { useRef, useEffect, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { PointsMaterial, BufferGeometry, Float32BufferAttribute, Euler } from "three";
// import { gsap } from "gsap";
// import landCoordinates from "./land_coordinates_with_random_boundaries_perturbed.json";

// // 将经纬度转换为球面坐标
// const toSphereCoords = (lat, lon, radius) => {
//   const latRad = (lat * Math.PI) / 180;
//   const lonRad = (lon * (Math.PI / 180));
//   const x = radius * Math.cos(latRad) * Math.cos(lonRad);
//   const y = radius * Math.cos(latRad) * Math.sin(lonRad);
//   const z = radius * Math.sin(latRad);
//   return [x, y, z];
// };

// // 生成多个接近的点来模拟更大的点
// const generateClusteredPoints = (coords, clusterSize, spread) => {
//   const [x, y, z] = coords;
//   const points = [];
//   for (let i = 0; i < clusterSize; i++) {
//     points.push([
//       x + (Math.random() - 0.5) * spread,
//       y + (Math.random() - 0.5) * spread,
//       z + (Math.random() - 0.5) * spread
//     ]);
//   }
//   return points;
// };

// const Sphere = () => {
//   const pointsRef = useRef();
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     const radius = 1.0;
//     const clusterSize = 5; // 每个大点由多少个小点组成
//     const spread = 0.002; // 小点之间的距离

//     let newPositions = [];
//     landCoordinates.forEach((coord) => {
//       const [x, y, z] = toSphereCoords(coord.lat, coord.lon, radius);
//       const clusteredPoints = generateClusteredPoints([x, y, z], clusterSize, spread);
//       newPositions = newPositions.concat(clusteredPoints);
//     });

//     setPositions(newPositions.flat());

//     if (pointsRef.current) {
//       const initialRotation = new Euler(
//         23.6978 * (Math.PI / 180),
//         120.9605 * (Math.PI / 180),
//         0
//       );
//       pointsRef.current.rotation.set(
//         initialRotation.x,
//         initialRotation.y,
//         initialRotation.z
//       );
//     }
//   }, []);

//   const geometry = new BufferGeometry();
//   geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));

//   const material = new PointsMaterial({ color: "#6e6b6b", size: 0.01 });

//   useFrame(({ mouse }) => {
//     const targetRotation = {
//       x: mouse.y * -2,
//       y: mouse.x * 2,
//     };

//     gsap.to(pointsRef.current.rotation, {
//       x: targetRotation.x,
//       y: targetRotation.y,
//       duration: 2.5,
//       ease: "power2.out",
//     });

//     const scaleFactor = Math.cos(mouse.y * 2) * 0.5 + 1.8;

//     gsap.to(pointsRef.current.scale, {
//       x: scaleFactor,
//       y: scaleFactor,
//       z: scaleFactor,
//       duration: 1.5,
//       ease: "power3.out",
//     });
//   });

//   return (
//     <>
//       <ambientLight />
//       <pointLight />
//       <points
//         ref={pointsRef}
//         scale={[1.7, 1.7, 1.7]}
//         geometry={geometry}
//         material={material}
//       />
//     </>
//   );
// };

// export default Sphere;
