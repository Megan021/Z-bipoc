// import React from 'react'

import { Box, Button, Flex, Text } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box
                backgroundImage={"../Images/bgImg.jpg"}
                style={{
                    width: '100%',
                    minHeight: '102vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                bgRepeat="no-repeat" // Apply the bgRepeat prop here
            >

                <Text p={10} color={"white"} fontSize={36} fontWeight={200} letterSpacing={5} >BIPOC</Text>
                <Text marginTop={32} fontSize={50} fontWeight={500} textAlign={"Center"} fontFamily={"Italiana"}>Harvesting Hope, Sowing Success</Text>
            </Box>

            <Box>
                <Text textAlign={"center"} paddingTop={12} fontWeight={500} fontSize={20} w='60%' marginX={"auto"}>Application package for the Local Food Promotion Program (LFPP) grants offered by the USDA Agricultural Marketing Service (AMS).</Text>
                <Flex py={6}>
                <Button bg={"#1b5422"} marginX={"auto"} w="40" borderRadius={"3xl"} textColor={"white"} py={6} fontSize={20}>Begin</Button>
                </Flex>
            </Box>

        </>
    )
}

export default Home