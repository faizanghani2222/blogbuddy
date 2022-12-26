import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { getBlogs } from "../api";
import BlogCard from "../Components/BlogCard";
const Blog = () => {
   const [data,setData]=useState([]);
   const getHandler=async ()=>{
    let res= await getBlogs();
    setData(res.data.message);
   }
   useEffect(()=>{
      getHandler();
   },[])

  return (
    <Box>
      <Flex w='80%' m='auto'>
        {/* Left Story Box*/}
        <Box   w='70%'>
        <Box border="1px solid black" h="60px" m='40px 0'>
            {/* Tab Box */}
        </Box>
        {
          data?.map((el)=>
          <Box key={el._id}>
            <BlogCard
            id={el._id}  
            title={el.title}
            image={el.image}
            content={el.content}
            category={el.category}
            date={el.postedAt}
            />
            <hr />
            </Box>
          
          )
        }
        </Box>
        {/* Right Sidebar */}
      </Flex>
    </Box>
  );
};

export default Blog;
