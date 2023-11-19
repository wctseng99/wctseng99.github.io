import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoToggle } from "react-icons/io5";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center w-14 h-8 md:w-20 md:h-10 lg:w-24 lg:h-10 rounded-full transition-all duration-500 ${
        darkMode ? "bg-slate-300" : "bg-slate-800"
      } ${
        darkMode ? "text-slate-900" : "text-slate-200"
      } `}
    >
      <div
        className={`rounded-full py-2 px-2 ${darkMode ? "ml-auto" : "mr-auto"} transition-all`}
      >
        {darkMode ? (
          <MdLightMode className="md:text-xl lg:text-2xl text-slate-900" />
        ) : (
          <MdDarkMode className="md:text-xl lg:text-2xl text-[#eff2f2]" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
