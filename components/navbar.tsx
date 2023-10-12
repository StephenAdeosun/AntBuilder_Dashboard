import React from 'react'
import { Box,Flex,Text,Input} from '@chakra-ui/react'
import Logo from "../public/images/Logo.svg";
import Image from "next/image";
import {  InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Notification } from 'iconsax-react';
import Person from "../public/images/Person.svg";
import Active from "../public/images/Verification status.svg";
function navbar() {
  return (
   <Box bgColor={'#FCFCFC'} color={'black'} position={'fixed'} mb='10' zIndex={4} w='full'>
    <Box display={'flex'} justifyContent={'space-between'} mx={'6'} alignItems='center' py='4' gap='26' as='nav' >
    <Box display={'flex'}  alignItems='center'   >
<Box width={190}>
<Image src={Logo} width={900} height={600}  alt="Logo" />
</Box>

<Box >
  <Text fontWeight='700' fontSize='20px'  color={'rgba(59, 67, 80, 1)'} >Dashboard</Text>
</Box>
</Box>

<Box>
<InputGroup>
<InputLeftElement cursor="pointer">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        _placeholder={{ color: "rgba(164, 170, 178, 1)" }}
        placeholder="Search..."
        // You can use "outline" or other variants as needed
        borderRadius="20px"
        w='500px'
        border={'1px solid rgba(235, 235, 235, 1)'}
        size="2xl" // You can adjust the size (sm, md, lg) as needed
      />
    </InputGroup>
</Box>

<Box>
  <Flex justifyContent='center' alignItems='center' gap='2'>
    <Box>
      <Flex gap='2'>
<Notification size={35} color={'rgba(164, 170, 178, 1)'} />
<Box >
  <Image src={Person} width={35} alt="Logo" />
</Box>
</Flex>
</Box>
<Box>
  <Text fontWeight={'700'} fontSize='16px' color='rgba(59, 67, 80, 1)'>Sandra Audu</Text>
  <Box >
    <Flex gap='1'>
  <Text color={'rgba(59, 67, 80, 1)'} fontSize='12px'>Product Owner</Text>
  <Box>
<Image src={Active} width={8} alt="Logo" />
  </Box>
  </Flex>
  </Box>
</Box>
</Flex>
</Box>

    
   </Box>
   </Box>
  )
}

export default navbar