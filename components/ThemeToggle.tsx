"use client";
import React from "react";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(localStorage.getItem("theme"));
    if (theme === "light") setDarkMode(false); else setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log('DARK!!!');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log('LIGHT!!!');
    }
  }, [darkMode]);
  return (
    <div
      className="relative w-16 h-8 flex item-center dark:bg-gray-700 bg-slate-100 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <IoSunny className="text-yellow-400  w-6 h-6"></IoSunny>
      <div
        className="absolute bg-white dark:bg-medium w-7 h-6 rounded-full shadow-md transition transform ease-in-out"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <IoMoon className="ml-auto text-white w-5 h-6"></IoMoon>
    </div>
  );
};

export default ThemeToggle;
