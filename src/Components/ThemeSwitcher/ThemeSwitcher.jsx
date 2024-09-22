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
      className={`flex items-center w-16 h-8 lg:w-20 lg:h-10 rounded-full transition-all duration-300 ease-in-out ${
        darkMode
          ? "bg-gradient-to-bl from-blue-600 via-cyan-600 to-green-600"
          : "bg-gradient-to-bl from-blue-600 via-cyan-600 to-green-600"
      }`}
    >
      <div
        className={`rounded-full absolute p-1 lg:p-2 bg-slate-300 ${
          darkMode
            ? "translate-x-[2.25rem] lg:translate-x-[2.75rem] transition-all duration-300 ease-in-out"
            : "translate-x-[0.25rem] lg:translate-x-[0.25rem] transition-all duration-300 ease-in-out"
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
