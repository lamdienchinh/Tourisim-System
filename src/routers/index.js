import React from "react";
import { Routes, Route } from "react-router-dom";
//import layout
import General_Layout from "../layouts/general_layout";
//import pages
import Intro from "../pages/Intro";
import Home from "../pages/Home";
import PlaceInfor
 from "../pages/PlaceInfor";
const RouterList = () => {
  return (
    <Routes>
      <Route element={<General_Layout></General_Layout>}>
        <Route path="/" element={<Intro></Intro>} />
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/404" />
        <Route path="/placeinfor" element={<PlaceInfor></PlaceInfor>}/>
      </Route>
    </Routes>
  );
};

export default RouterList;
