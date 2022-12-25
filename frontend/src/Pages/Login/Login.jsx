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
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { useCreateSignInMutation } from "../../app/CreateAuth";
import { useState } from "react";
import handleClick from "../../app/Login";
import { useDispatch } from "react-redux";
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
    <Stack bg="rgb(248, 248, 248)" h="90vh">
      <Stack
        bg={"white"}
        shadow={"lg"}
        borderRadius={"3xl"}
        p="0.2em"
        w="55%"
        h="65%"
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

            <Stack spacing={6}>
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
                justify={"start"}
              >
                <Flex gap={6} alignItems={"center"}>
                  <Text>Or login with </Text>
                  <Flex gap={2}>
                    {" "}
                    <ImFacebook2 color="#4267B2" fontSize={"1.5rem"} />{" "}
                    <FcGoogle fontSize={"1.5rem"} />{" "}
                    <FaTwitter fontSize={"1.5rem"} color={"#1DA1F2"} />{" "}
                  </Flex>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
        <Stack
          h="100%"
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
