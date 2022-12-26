import { Avatar, Box, Flex, HStack, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getBlogById } from '../api';

const BlogDesc = () => {
    const {id}=useParams();
    const [blog,setBlog]=useState({});
    const getSingleBlog=async ()=>{
        let res=await getBlogById(id);
        setBlog(res.data.message);
    }
    useEffect(()=>{
       getSingleBlog();
    },[])


  return (
    <Box>
      <Flex w='80%' m='40px auto'>
        {/* Left Story Box*/}
        <Box w='70%'>
        <Flex justify='space-between' align='center'>
         <HStack spacing='15px'>
        <Avatar name='Vishal' />
        <Stack spacing='1px'>
        <Text>Vishal</Text>
        <Text fontSize='14px' color='grey'>{blog.postedAt}</Text>
        </Stack>
        </HStack>   
        <Img h='20px' src='https://cdn-icons-png.flaticon.com/128/3106/3106777.png' />
        </Flex>
        <Box mt='20px'>
        <Text fontSize='25px' fontWeight='600'>{blog.title}</Text>
        <Text fontSize='18px' mt='20px' dangerouslySetInnerHTML={{__html:blog.content}} />
        </Box>
        </Box>
        {/* Right Sidebar */}
      </Flex>
    </Box>
  )
}

export default BlogDesc