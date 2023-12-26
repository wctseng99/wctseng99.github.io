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
      className={`flex items-center justify-start w-16 h-10 rounded-full transition-all duration-300 ease-in-out ${
        darkMode ? "bg-blue-700" : "bg-gray-500"
      }`}
    >
      <div
        className={`rounded-full py-1 px-1 m-2 bg-slate-300 ${
          darkMode
            ? "translate-x-full transition-all duration-300 ease-in-out"
            : "translate-x-0 transition-all duration-300 ease-in-out"
        }`}
      >
        {darkMode ? (
          <MdDarkMode className="text-base text-zinc-700" />
        ) : (
          <MdLightMode className="text-base text-zinc-700" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
