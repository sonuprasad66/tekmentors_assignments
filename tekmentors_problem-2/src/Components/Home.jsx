import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, postData } from "../Redux/Calculator/action";

export const Home = () => {
  const [calculator, setCalculator] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const isLoading = useSelector((state) => state.CalculatorReducer.isLoading);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCalculator({
      ...calculator,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(calculator);
    dispatch(postData(calculator)).then((res) => {
      dispatch(getData());
      setCalculator({});
      toast({
        title: "Data Added Successfuly",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    });
  };

  return (
    <>
      <Box
        borderRadius={5}
        w={"30%"}
        p={6}
        m={"auto"}
        mt={"130px"}
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <Heading size={"md"} textAlign={"center"}>
          Tax Calculator
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Enter Amount</FormLabel>
            <Input
              type="number"
              placeholder="Enter Amount"
              name="amount"
              onChange={handleChange}
            />
            <FormLabel>Enter Item Type</FormLabel>
            <Input
              type="number"
              placeholder="Enter Item Type"
              name="item_type"
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" w={"full"} mt={3} colorScheme={"blue"}>
            {isLoading ? (
              <>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              </>
            ) : (
              "Add Data"
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};
