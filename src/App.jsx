import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Components/Sphere/Sphere";
import Title from "./Components/Title/Title";
import Portfolio from "./Components/Portfolio/Portfolio"; // Portfolio page

function App() {
  return (
    <Router>
      <Routes>
        {/* Sphere page at the root ("/") */}
        <Route
          path="/"
          element={
            <div className="bg-zinc-300 h-screen w-screen">
              <Canvas style={{ position: "absolute" }}>
                <Sphere />
              </Canvas>
              <Title />
            </div>
          }
        />
        {/* Portfolio ("/portfolio") route */}
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
