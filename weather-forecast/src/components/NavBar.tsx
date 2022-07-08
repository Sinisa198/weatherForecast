import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherFraces from "./WeatherFraces";
import News from "./news/News";
import DarkMode from "./darkMode/DarkMode";
const NavBar = () => {
  return (
    <div>
      <Routes>
        <Route path="/news" element={<News />}></Route>
      </Routes>
    </div>
  );
};

export default NavBar;
