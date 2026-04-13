import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 500 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
