import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../Pages/Blog";
import BlogDesc from "../Pages/BlogDesc";
import CreateBlog from "../Pages/CreateBlog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Navbar from "./Navbar";

const AllRoutes = () => {
  return (
    <Box>
      
      <Routes>
        <Route path="/signin" element={<><Navbar/><Login/></>}/>
        <Route path="/signup" element={<><Navbar/><SignUp/></>}/>
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blog" element={<><Navbar/><Blog/></>}/>
        <Route path="/blog/:id" element={<><Navbar/><BlogDesc/></>}/>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
