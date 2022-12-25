import { Avatar, Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BlogCard = ({title,image,category,date,content}) => {
  return (
    <Box w="90%" m='30px 0'>
    
      <Flex align="center" gap='10px'>
        <Avatar name="vishal" h="30px" w='30px' />
        <Text fontSize="13px">Vishal Gupta</Text>
        <Text fontSize="13px" color="grey">
          {date}
        </Text>
      </Flex>
      <Flex justify='space-between' align='center' gap='50px'>
        <Stack>
        <Text fontSize="25px" fontWeight="bold">
          {title}
        </Text>
        <div dangerouslySetInnerHTML={{__html:content.slice(0,100)}} />
        {/* <Text align='justify'letterSpacing='1px' lineHeight='1.2rem'>
          {content.slice(0,100)}
        </Text> */}
        </Stack>
        <Img h='100px' src={image} />
      </Flex>
      <Flex m='20px' w='70%' justify='space-between' align='center'>
        <Text p='0 10px' borderRadius='20px' bg='#e3dff0' fontSize='14px'>{category}</Text>
        <Img h='20px' src='https://cdn-icons-png.flaticon.com/128/3106/3106777.png' />
       </Flex>
          
    </Box>
  );
};

export default BlogCard;
