import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
export default function SocialIcons() {
  return (
    <Flex gap={6} alignItems={"center"}>
      <Text>Or login with </Text>
      <Flex gap={2}>
        {" "}
        <ImFacebook2 color="#4267B2" fontSize={"1.5rem"} />{" "}
        <FcGoogle fontSize={"1.5rem"} />{" "}
        <FaTwitter fontSize={"1.5rem"} color={"#1DA1F2"} />{" "}
      </Flex>
    </Flex>
  );
}
