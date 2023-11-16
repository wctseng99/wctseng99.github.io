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
      className={`px-6 py-4 rounded-full ${
        darkMode ? "bg-slate-200" : "bg-[#111729]"
      } ${
        darkMode ? "text-[#111729] hover:text-slate-600" : "text-slate-200 hover:text-white"
      } transition-colors duration-200`}
    >
      {darkMode ? (
        <MdLightMode />
      ) : (
        <MdDarkMode />
      )}
    </button>
  );
};

export default ThemeSwitcher;
