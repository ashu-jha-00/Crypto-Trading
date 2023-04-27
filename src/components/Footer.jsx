import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import src from "../assets/Screenshot 2022-10-11 002246.png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at the very best price.
          </Text>
        </VStack>

        <VStack>
          <a
            target="blank"
            href="https://www.linkedin.com/in/ashutosh-jha-446a711bb/"
          >
            <Avatar boxSize={"28"} mt={["4", "0"]} src={src} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/ashutosh-jha-446a711bb/"
          >
            <Text>Our Founder</Text>
          </a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
