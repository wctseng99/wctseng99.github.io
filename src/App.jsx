import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";

function App() {
  return (
    <>
      <div className="font-serif relative px-6 py-24 md:px-24 md:py-32 lg:py-0 lg:px-36 dark:bg-slate-900 bg-[#eff2f2] selection:bg-sky-200 selection:text-slate-900 dark:selection:bg-sky-200 dark:selection:text-slate-900">
        <div className="absolute top-5 right-4 md:right-10">
          <ThemeSwitcher />
        </div>
        <div className="lg:flex lg:flex-row lg:justify-between lg:gap-8">
          <Home />
          <div className="lg:w-1/2 lg:py-32 ">
            <About />
            <Experience />
            <Project />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
