import { Avatar, Box, Button, Flex, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";
import Me from "../Components/Me";

const Following = () => {
  return (
    <Box>
      <Me>
        {/* Following Card */}
        <Box>
          <Text fontWeight='600'>1 Writer</Text>
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
                border="1px solid green"
                borderRadius='40px'
                color="green"
                p="2px 10px"
              >
                Following
              </Button>
            </Flex>
            <hr />
          </Box>
        </Box>
      </Me>
    </Box>
  );
};

export default Following;
