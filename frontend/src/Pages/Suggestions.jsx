import React from 'react'
import { Avatar, Box, Button, Flex, HStack, Img, Text } from "@chakra-ui/react";
import Me from '../Components/Me';

const Suggestions = () => {
  return (
    <Box>
      <Me>
        {/* Following Card */}
        <Box>
          <Text m='15px 0' fontWeight='600'>Who to follow</Text>
          <Box>
            <Flex justify="space-between" mb='20px' >
              <HStack spacing='20px'>
                <Avatar name="Vishal" />
                <Box>
                  <Text fontWeight='600'>Vishal Gupta</Text>
                  <Text fontWeight='600'>Description</Text>
                </Box>
              </HStack>
              <Button
                variant="solid"
                bg="green"
                borderRadius='40px'
                color="#fff"
                p="2px 10px"
              >
                Follow
              </Button>
            </Flex>
            <hr />
          </Box>
        </Box>
      </Me>
    </Box>
  )
}

export default Suggestions