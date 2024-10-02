import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Components/Sphere/Sphere";
import Title from "./Components/Title/Title";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        {/* Sphere page at the root ("/") */}
        <Route
          path="/"
          element={
            <div className="bg-white h-screen w-screen">
              <Canvas style={{ position: "absolute" }}>
                <Sphere />
              </Canvas>
              <Title />
            </div>
          }
        />
        {/* Portfolio ("/about") route */}
        <Route path="/about" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
