import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import styles from "./SignUp.module.css";
import SideImage from "../../Assets/signup-image.jpg";
import { MdEmail } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { TiLockClosed } from "react-icons/ti";
import { useState } from "react";
import { useCreateSignUpMutation } from "../../app/CreateAuth";
export default function SignUp() {
  const [createSignUp, { isLoading }] = useCreateSignUpMutation();
  const [text, setText] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange({ target: { name, value } }) {
    setText((prev) => ({ ...prev, [name]: value }));
  }
  async function handleClick() {
    try {
      await createSignUp(text);
      alert("user Sign up successfully");
    } catch (e) {
      console.log(e.response.message);
    }
  }
  return (
    <Stack bg="rgb(248, 248, 248)" h="90vh">
      <Stack
        bg={"white"}
        shadow={"lg"}
        borderRadius={"3xl"}
        p="3em"
        w="55%"
        minH="70%"
        h="auto"
        m="auto"
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"4xl"}>Sign up</Heading>

            <InputGroup id="username">
              <InputLeftElement>
                <HiUser />
              </InputLeftElement>

              <Input
                id={styles.Input}
                name="username"
                onChange={handleChange}
                focusBorderColor="white"
                type="text"
                placeholder="Your Name"
              />
            </InputGroup>
            <InputGroup id="email">
              <InputLeftElement>
                <MdEmail />
              </InputLeftElement>
              <Input
                id={styles.Input}
                name="email"
                onChange={handleChange}
                type="email"
                focusBorderColor="white"
                placeholder="Your Email"
              />
            </InputGroup>
            <InputGroup id="email">
              <InputLeftElement>
                <BiLockAlt />
              </InputLeftElement>
              <Input
                id={styles.Input}
                name="password"
                onChange={handleChange}
                type="password"
                focusBorderColor="white"
                placeholder="Password"
              />
            </InputGroup>
            <InputGroup id="password">
              <InputLeftElement>
                <TiLockClosed />
              </InputLeftElement>
              <Input
                id={styles.Input}
                name="confirmPassword"
                onChange={handleChange}
                type="password"
                focusBorderColor="white"
                placeholder="Repeat your password"
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
                  I agree all statements in <u>Term of service</u>
                </Checkbox>
              </Stack>
              <Button
                isLoading={isLoading}
                color={"white"}
                fontWeight={100}
                w="40%"
                onClick={handleClick}
                colorScheme={"yellow"}
              >
                Register
              </Button>
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
            h={["90%", "60%", "65%"]}
            alt={"Login Image"}
            objectFit={"cover"}
            src={SideImage}
          />

          <Text color={"#555"} textDecoration={"underline"}>
            {" "}
            I am already member
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
