import { BellIcon, ChevronDownIcon, EditIcon, SearchIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList} from '@chakra-ui/react';
import { Show, Hide } from '@chakra-ui/react'
import { BiUser } from "react-icons/bi";
import { BsFileRichtext,BsBookmarks } from "react-icons/bs";

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
         <Hide below='md'>
            
        <Box w="100%" h={"75px"} px="5%" borderBottom={"1px solid #FAFAFA"} display="flex" justifyContent="space-between" alignItems={"center"}>
            <Box display="flex" gap="20px" alignItems={"center"}>
            <Link to="/"><Image w="200px" src="Images/logo.png" alt="error"/></Link>
            
            <InputGroup >
                <Input borderRadius="1em" border="none" focusBorderColor="white" bg="#FAFAFA" type='text' py="7px" fontSize='18px' pl="10px"   placeholder='Search' _placeholder={{color:"#8E8E8E"}}/>
                <InputRightElement pr="10px" width="40px" >
                    <SearchIcon color='#8E8E8E' cursor="pointer" />
                </InputRightElement>
            </InputGroup>
            </Box>


            <Box display="flex" gap="30px" alignItems={"center"}>
       {    !props.createBlog?<Link to="/create-blog">
                <Button variant="ghost" color="#8E8E8E" fontSize="18px">
                <EditIcon mr="7px"/>
                Write
                </Button>
                </Link>:
                <Button
          variant="solid"
          bg="green"
          color="#fff"
          _hover={{ background: "green", color: "#fff" }}
          onClick={props.submitHandler}
          borderRadius='40px'
        >
          Publish
        </Button>}
                <Link to="/notifications">
                <BellIcon boxSize={7} color="#8E8E8E"/>
                </Link>
               
                
                <Menu>
                    <MenuButton
                        transition='all 0.2s'
                        borderRadius='md'
                    >
                        <Box display="flex" alignItems="center">
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            <ChevronDownIcon boxSize={7} color="#8E8E8E"/>
                        </Box>
                    </MenuButton>
                    <MenuList color='#8E8E8E' zIndex="2">
                        <MenuItem  _hover={{color:"black"}}>
                            <Link to="/profile"><Box display="flex" gap="10px" alignItems="center"><BiUser/> Profile</Box></Link>
                        </MenuItem>
                        <MenuItem _hover={{color:"black"}}>
                            <Link to="/lists"><Box display="flex" gap="10px" alignItems="center"><BsBookmarks/>Lists</Box></Link>
                        </MenuItem>
                        <MenuItem _hover={{color:"black"}}>
                            <Link to="/stories" ><Box display="flex" gap="10px" alignItems="center"><BsFileRichtext/>Stories</Box></Link>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem _hover={{color:"red"}}>Sign out</MenuItem>
                    </MenuList>
                 </Menu>

                
            </Box>
        </Box>
        </Hide>



        <Show below="md">
            
        <Box w="100%" py="5%" borderBottom={"1px solid #FAFAFA"}>
            <Box w="90%" m="auto" mb="20px" display="flex" justifyContent="space-between" alignItems="center">
                <Link to="/"><Image w="200px" src="Images/logo.png" alt="error"/></Link>
                <Menu>
                    <MenuButton
                        transition='all 0.2s'
                        borderRadius='md'
                    >
                        <Box display="flex" alignItems="center">
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            <ChevronDownIcon boxSize={7} color="#8E8E8E"/>
                        </Box>
                    </MenuButton>
                    <MenuList color='#8E8E8E' zIndex="2">
                        <MenuItem  _hover={{color:"black"}}>
                            <Link to="/profile"><Box display="flex" gap="10px" alignItems="center"><BiUser/> Profile</Box></Link>
                        </MenuItem>
                        <MenuItem _hover={{color:"black"}}>
                            <Link to="/lists"><Box display="flex" gap="10px" alignItems="center"><BsBookmarks/>Lists</Box></Link>
                        </MenuItem>
                        <MenuItem _hover={{color:"black"}}>
                            <Link to="/stories" ><Box display="flex" gap="10px" alignItems="center"><BsFileRichtext/>Stories</Box></Link>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem _hover={{color:"red"}}>Sign out</MenuItem>
                    </MenuList>
                 </Menu>
            </Box>
        
        
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems={"center"}>
            <InputGroup w="60%">
                <Input   borderRadius="1em" border="none" focusBorderColor="white" bg="#FAFAFA" type='text' py="7px" fontSize='18px' pl="10px"   placeholder='Search' _placeholder={{color:"#8E8E8E"}}/>
                <InputRightElement pr="10px" width="40px" zIndex="1">
                    <SearchIcon color='#8E8E8E' cursor="pointer" />
                </InputRightElement>
            </InputGroup>
           
               <Link to="posts"> <Button variant="ghost" color="#8E8E8E" fontSize="18px">
                <EditIcon mr="7px"/>
                Write
                </Button></Link>
               <Link to="/notifications"> <BellIcon boxSize={7} color="#8E8E8E"/></Link>
               
            </Box>
          
          
         

        </Box>
        </Show>
        </>
    );
}

export default Navbar;