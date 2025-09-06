import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import Sphere from "./Components/Sphere/Sphere";
import Title from "./Components/Title/Title";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Sphere page at the root ("/") */}
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
