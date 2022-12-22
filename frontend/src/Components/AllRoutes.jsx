import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "../Pages/CreateBlog";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
