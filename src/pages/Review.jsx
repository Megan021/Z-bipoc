// import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { Box, Button, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react"

const Review = () => {
  return (
    <>
        <Box paddingX={32}> 
            <Text fontSize={28} fontWeight={500} py="5" textAlign={"center"}>Review before Submitting</Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={10} >
            <GridItem border={"dashed"} borderRadius={"2xl"} p="6" w='100%' marginX={"auto"} textAlign={'center'}>
                <Text fontSize={20} fontWeight={500}>SF-424 - Application for Federal Assistance</Text>
                <Icon fontSize={24} my={6}>
                    <FaRegFileLines />
                </Icon> <br />
                <Button>Edit</Button>
            </GridItem>
            <GridItem border={"dashed"} borderRadius={"2xl"} p="6" w='100%' marginX={"auto"} textAlign={'center'}>
                <Text fontSize={20} fontWeight={500}>SF-424 - Application for Federal Assistance</Text>
                <Icon fontSize={24} my={6}>
                    <FaRegFileLines />
                </Icon> <br />
                <Button>Edit</Button>
            </GridItem>
            <GridItem border={"dashed"} borderRadius={"2xl"} p="6" w='100%' marginX={"auto"} textAlign={'center'}>
                <Text fontSize={20} fontWeight={500}>SF-424 - Application for Federal Assistance</Text>
                <Icon fontSize={24} my={6}>
                    <FaRegFileLines />
                </Icon> <br />
                <Button>Edit</Button>
            </GridItem>
            <GridItem border={"dashed"} borderRadius={"2xl"} p="6" w='100%' marginX={"auto"} textAlign={'center'}>
                <Text fontSize={20} fontWeight={500}>SF-424 - Application for Federal Assistance</Text>
                <Icon fontSize={24} my={6}>
                    <FaRegFileLines />
                </Icon> <br />
                <Button>Edit</Button>
            </GridItem>
            <GridItem border={"dashed"} borderRadius={"2xl"} p="6" w='100%' marginX={"auto"} textAlign={'center'}>
                <Text fontSize={20} fontWeight={500}>SF-424 - Application for Federal Assistance</Text>
                <Icon fontSize={24} my={6}>
                    <FaRegFileLines />
                </Icon> <br />
                <Button>Edit</Button>
            </GridItem>
            <GridItem border={"dashed"} borderRadius={"2xl"} p="6" w='100%' marginX={"auto"} textAlign={'center'}>
                <Text fontSize={20} fontWeight={500}>SF-424 - Application for Federal Assistance</Text>
                <Icon fontSize={24} my={6}>
                    <FaRegFileLines />
                </Icon> <br />
                <Button>Edit</Button>
            </GridItem>
            </Grid>
            <Flex py={22} gap={5} justify={"end"}>
                <Button border={"1px"} color={"#1b5422"} borderRadius={"xl"} px={12} py={6}>Back</Button>
                <Button borderRadius={"xl"} bg={"#1b5422"} px={12} py={6} color={"white"}>Upload</Button>
            </Flex>
        </Box>
    </>
  )
}

export default Review