import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "../Pages/CreateBlog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Navbar from "./Navbar";

const AllRoutes = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
