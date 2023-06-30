import React from "react";
import { Routes, Route } from "react-router-dom";
//import layout
import General_Layout from "../layouts/general_layout";
//import pages
import Intro from "../pages/Intro";
import Home from "../pages/Home";
import PlaceInfor from "../pages/PlaceInfor";
import User from "../pages/User";
import Album from "../pages/Album";
import ViewAlbum from "../pages/ViewAlbum";
import CreateAlbum from "../pages/CreateAlbum";
import UserLayout from "../layouts/user_layout";

const RouterList = () => {
  return (
    <Routes>
      <Route element={<General_Layout></General_Layout>}>
        <Route path="/" element={<Intro></Intro>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/404" />
        <Route path="/placeinfor" element={<PlaceInfor></PlaceInfor>} />
      </Route>
      <Route element={<UserLayout></UserLayout>}>
        <Route path="/user" element={<User></User>} />
        <Route path="/album" element={<Album></Album>} />
        <Route path="/viewalbum" element={<ViewAlbum></ViewAlbum>} />
        <Route path="/createalbum" element={<CreateAlbum></CreateAlbum>} />
      </Route>
    </Routes>
  );
};

export default RouterList;
