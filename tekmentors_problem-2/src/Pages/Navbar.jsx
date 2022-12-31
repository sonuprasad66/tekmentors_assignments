import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <Flex
        w={"100%"}
        p={6}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        position={"fixed"}
        top={0}
        zIndex={1}
        bg={"white"}
      >
        <Flex gap={1}>
          <Box
            p={"2px 10px"}
            color={"white"}
            bg={"red"}
            borderRadius={2}
            mt={1}
          >
            T
          </Box>
          <Box
            color={"white"}
            bg={"blue"}
            borderRadius={2}
            p={"2px 10px"}
            mb={1}
          >
            A
          </Box>
          <Box
            color={"white"}
            bg={"black"}
            borderRadius={2}
            p={"2px 10px"}
            mt={1}
          >
            X
          </Box>
        </Flex>
        <Flex gap={1}>
          <Box
            color={"white"}
            bg={"red"}
            borderRadius={2}
            p={"2px 10px"}
            mt={1}
          >
            C
          </Box>
          <Box
            color={"white"}
            bg={"#33FFE3"}
            borderRadius={2}
            p={"2px 10px"}
            mb={1}
          >
            A
          </Box>
          <Box
            color={"white"}
            bg={"black"}
            borderRadius={2}
            p={"2px 10px"}
            mt={1}
          >
            L
          </Box>
          <Box
            color={"white"}
            bg={"teal"}
            borderRadius={2}
            p={"2px 10px"}
            mb={1}
          >
            C
          </Box>
          <Box
            color={"white"}
            bg={"green"}
            borderRadius={2}
            p={"2px 10px"}
            mt={1}
          >
            U
          </Box>
          <Box
            color={"white"}
            bg={"grey"}
            borderRadius={2}
            p={"2px 10px"}
            mb={1}
          >
            L
          </Box>
          <Box
            color={"white"}
            bg={"#FF6433"}
            borderRadius={2}
            p={"2px 10px"}
            mt={1}
          >
            A
          </Box>
          <Box
            color={"white"}
            bg={"#FF33D4"}
            borderRadius={2}
            p={"2px 10px"}
            mb={1}
          >
            T
          </Box>
          <Box
            color={"white"}
            bg={"blue"}
            borderRadius={2}
            p={"2px 10px"}
            mt={1}
          >
            O
          </Box>
          <Box
            color={"white"}
            bg={"#FFE933"}
            borderRadius={2}
            p={"2px 10px"}
            mb={1}
          >
            R
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
