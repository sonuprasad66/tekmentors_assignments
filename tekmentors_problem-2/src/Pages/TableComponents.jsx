import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Heading,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";

export const TableComponents = () => {
  const [tax, setTax] = useState(0);
  const toast = useToast();
  const data = useSelector((state) => state.CalculatorReducer.data);

  // console.log(data);

  const handleTax = (amount, item_type) => {
    if (item_type == "0") {
      let value = (amount * 5) / 100;
      setTax(value);
      toast({
        title: "Tax Calculated Successfuly",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else if (item_type == "1") {
      let value = (amount * 8) / 100;
      setTax(value);
      toast({
        title: "Tax Calculated Successfuly",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else if (item_type == "2") {
      let value = (amount * 12) / 100;
      setTax(value);
      toast({
        title: "Tax Calculated Successfuly",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      setTax(0);
      toast({
        title: "I can`t calculate tax which item_type is greater than 2",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      {tax != 0 && (
        <>
          <Flex
            w={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            mt={"30px"}
          >
            <Heading size={"sm"}>Calculated Tax Value :</Heading>
            <Box border={"1px solid black"} p={"5px 15px"}>
              {tax}
            </Box>
          </Flex>
        </>
      )}

      <Box w={"50%"} m={"30px auto"} boxShadow="outline" p={6} borderRadius={5}>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th bg={"black"} color={"white"} border={"1px solid white"}>
                  S.No
                </Th>
                <Th bg={"black"} color={"white"} border={"1px solid white"}>
                  Amount
                </Th>
                <Th bg={"black"} color={"white"} border={"1px solid white"}>
                  Item Type
                </Th>
                <Th bg={"black"} color={"white"} border={"1px solid white"}>
                  Calculate Tax
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item) => (
                <>
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.amount}</Td>
                    <Td>{item.item_type}</Td>
                    <Td>
                      <Button
                        onClick={() => handleTax(item.amount, item.item_type)}
                        colorScheme={"blue"}
                      >
                        Calculate
                      </Button>
                    </Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
