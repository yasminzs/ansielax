import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../Pages/About/About";
import Exercises from "../Pages/Exercises/Exercises";
// import { FirstTask } from "../Pages/Exercises/Tasks/FirstTask";
import Help from "../Pages/Help/Help";
import Home from "../Pages/Home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/exercises" element={<Exercises />} />
      {/* <Route path="/exec1" element={<FirstTask />} /> */}
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};
