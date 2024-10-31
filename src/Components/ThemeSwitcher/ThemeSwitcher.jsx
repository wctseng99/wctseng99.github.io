import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../ThemeContext/ThemeContext";

const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center w-16 h-8 lg:w-20 lg:h-10 border-2 rounded-full transition-all duration-300 ease-in-out group ${
        darkMode
          ? "border-slate-500 hover:border-slate-200"
          : "border-slate-500 hover:border-blue-600"
      }`}
    >
      <div
        className={`rounded-full absolute p-1 lg:p-2 ${
          darkMode
            ? "bg-slate-500 group-hover:bg-slate-200 translate-x-[2.1rem] lg:translate-x-[2.6rem] transition-all duration-300 ease-in-out"
            : "bg-slate-500 group-hover:bg-blue-600 translate-x-[0.1rem] lg:translate-x-[0.1rem] transition-all duration-300 ease-in-out"
        }`}
      >
        {darkMode ? (
          <MdDarkMode className="text-base text-slate-700" />
        ) : (
          <MdLightMode className="text-base text-slate-200" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
