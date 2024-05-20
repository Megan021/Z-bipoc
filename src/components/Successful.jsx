// import React from 'react'
import { Box, Button, Heading } from "@chakra-ui/react"

const Successful = () => {
  return (
    <>
    <Box w="60%" mx={"auto"} my={20}>
        <Box p={16} textAlign={"center"} border={"2px"} borderColor={"#1b5422"} borderRadius={"3xl"} bg={"#f6fff8"} >
            <Heading pb={12}>Your Form is Succesfully Uploaded</Heading>
            {/* <Text fontSize={22} fontWeight={400} pb={"10"}>Make sure your Documents are clear and Valid</Text> */}
            {/* <Flex py={22} gap={5} justify={"end"}> */}
                {/* <Button border={"1px"} color={"#1b5422"} borderRadius={"xl"} px={12} py={6}>Back</Button> */}
                <Button borderRadius={"xl"} bg={"#1b5422"} px={12} py={6} color={"white"}>Download as zip</Button>
            {/* </Flex> */}
        </Box>
    </Box>
    </>
  )
}

export default Successful