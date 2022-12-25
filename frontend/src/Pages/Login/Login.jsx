import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  Box,
  InputLeftElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import styles from "./Login.module.css";
import SideImage from "../../Assets/signin-image.jpg";
import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";

import { useCreateSignInMutation } from "../../app/CreateAuth";
import { useState } from "react";
import handleClick from "../../app/Login";
import { useDispatch } from "react-redux";
import SocialIcons from "../../Components/SocialIcons";
export default function Login() {
  const dispatch=useDispatch()
  const toast = useToast();
  const [createSignIn, { isLoading }] = useCreateSignInMutation();
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  function handleChange({ target: { name, value } }) {
    setText((prev) => ({ ...prev, [name]: value }));
  }
 
  return (
    <Stack bg="rgb(248, 248, 248)" p="10px" minH="90vh" h="auto">
      <Stack
        bg={"white"}
        shadow={"lg"}
        borderRadius={"3xl"}
        p="0.2em"
        w={["95%","90%","55%"]}
        minH="65%"
        h="auto"
        m="auto"
        direction={{ base: "column", md: "row-reverse" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"4xl"}>Sign In</Heading>

            <InputGroup id="username">
              <InputLeftElement>
                <HiUser />
              </InputLeftElement>

              <Input
                id={styles.Input}
                name="email"
                onChange={(e) => handleChange(e)}
                focusBorderColor="white"
                type="text"
                placeholder="Your Name"
              />
            </InputGroup>

            <InputGroup id="email">
              <InputLeftElement>
                <BiLockAlt />
              </InputLeftElement>
              <Input
                id={styles.Input}
                name="password"
                onChange={(e) => handleChange(e)}
                type="password"
                focusBorderColor="white"
                placeholder="Password"
              />
            </InputGroup>

            <Stack  spacing={6}>
              <Stack
                p="1rem 0px"
                direction={{ base: "row", sm: "row" }}
                align={"center"}
                justify={"start"}
              >
                <Checkbox border={"#999"} color={"#555"}>
                  Remember me
                </Checkbox>
              </Stack>
              <Button
              isLoading={isLoading}
                color={"white"}
                fontWeight={100}
                w="40%"
                onClick={()=>handleClick(text,createSignIn,toast,dispatch)}
                colorScheme={"yellow"}
              >
                Login
              </Button>
              <Stack
                p="1rem 0px"
                direction={{ base: "row", sm: "row" }}
                align={"center"}
                justify={["center","center","start"]}
              >
               <SocialIcons/> 
              </Stack>
            </Stack>
          </Stack>
        </Flex>
        <Stack
          h="100%"
          p="1rem"
          alignItems={"center"}
          justifyContent={"center"}
          flex={1}
        >
          <Image
            h={["90%", "65%", "65%"]}
            alt={"Login Image"}
            objectFit={"cover"}
            src={SideImage}
          />

          <Text color={"#555"} textDecoration={"underline"}>
            {" "}
            <Link to="/signup">Create an account</Link>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
