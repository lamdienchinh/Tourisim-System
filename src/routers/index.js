import React from "react";
import { Routes, Route } from "react-router-dom";
//import layout
import General_Layout from "../layouts/general_layout";
//import pages
import Intro from "../pages/intro";
import Home from "../pages/home";
import PlaceInfor from "../pages/placeInfor";
import User from "../pages/user";
import Album from "../pages/album";
import ViewAlbum from "../pages/viewAlbum";
import UserLayout from "../layouts/user_layout";
import CreateAlbum from "../pages/createAlbum";
import Trip from "../pages/trips";

const RouterList = () => {
  return (
    <Routes>
      <Route element={<General_Layout />}>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/404" element={<></>} />
        <Route path="/placeinfor" element={<PlaceInfor />} />
      </Route>
      <Route element={<UserLayout />}>
        <Route path="/user" element={<User />} />
        <Route path="/album" element={<Album />} />
        <Route path="/viewalbum" element={<ViewAlbum />} />
        <Route path="/createalbum" element={<CreateAlbum />} />
        <Route path="/trips" element={<Trip />} />
      </Route>
    </Routes>
  );
};

export default RouterList;
