import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const Me = ({children}) => {
  return (
    <Box>
    <Flex w='80%' m='auto'>
        {/* Left Story Box*/}
        <Box   w='70%'>
          <Box m='30px 0'>
         <Text fontSize='40px' fontWeight='bold'>Refine recommendations</Text> 
         <Text fontSize='14px' color='grey'>Adjust recommendations by updating what you're following, your reading history, and who you've muted.</Text> 
          </Box>
        <Box border="1px solid black" h="60px" m='40px 0'>
            {/* Tab Box */}
        </Box>
       <Box>
        {children}
       </Box>
        </Box>
        {/* Right Sidebar */}
        {/* <Box border="1px solid black" h="500px" w='30%'></Box> */}
        {/* Right Sidebar */}
      </Flex>
    </Box>
  )
}

export default Me