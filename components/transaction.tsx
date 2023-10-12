import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Box,
  Text,
  Flex,
  Badge,
  Td,
  Select,
  HStack,
  Input,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {  InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {Filter,Sort} from 'iconsax-react'
import ListView from '../public/images/List view.svg'
import library from "../public/images/library.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { HambergerMenu } from "iconsax-react";
import Menu from "../public/images/menu-dots-horizontal.svg";
import ProjectIcon2 from "../public/images/PrrojectIcon1.svg";
import ProjectIcon1 from "../public/images/ProjectIcon2.svg";
import ProjectIcon3 from "../public/images/logos_iron-icon.svg";

const MyTable = () => {
  return (
    <Box bgColor="#FCFCFC" h="150vh" color={"black"}>
      <Box w="1040px" m="auto">
        <Flex justifyContent={"space-between"} mb="4" gap='3' alignItems="center">
          <Text fontWeight="300" color="rgba(8, 14, 26, 1)">
            View the transaction history for all projects
          </Text>

          <HStack
            border="2px solid rgba(235, 235, 235,1)"
            borderRadius="6"
            px="2"
          >
            <Image src={library} alt="Logo" />
            <Select
              icon={<ChevronDownIcon />}
              placeholder="Select Project"
              width="300px"
              border=""
              _placeholder={{ fontWeight: "300", color: "rgba(8, 14, 26, 1)" }}
              _active={{ border: "none" }}
              _focus={{ border: "none" }}
              _hover={{ border: "none" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
        </Flex>

        <Flex justifyContent={'space-between'}  mt='8' mb='4' alignItems={'center'}>

<Box >
<Image src={ListView} alt='list' />
</Box>
<Box>
<Badge mr='-14' colorScheme="green" p='2' borderRadius={'8px'}>Filter</Badge>

<Input
        type="text"
        _placeholder={{ color: "rgba(164, 170, 178, 1)" }}
        // placeholder="Search..."
        // You can use "outline" or other variants as needed
        borderRadius="20px"
        w='300px'
        h='40px'
        border={'1px solid rgba(235, 235, 235, 1)'}
        size="2xl" // You can adjust the size (sm, md, lg) as needed
      />

</Box>
<Box>
<Flex gap='4'>
<Box border={'1px solid rgba(235, 235, 235, 1)'} gap='2' p='3' alignItems={'center'} borderRadius={'8px'} display={'flex'}>
    <Filter size='15'  color='rgba(108, 116, 128, 1)'/>
    <Text fontSize={'12px'} color='rgba(108, 116, 128, 1)'>Filter</Text>
</Box>
<Box border={'1px solid rgba(235, 235, 235, 1)'} gap='2' p='3' alignItems={'center'} borderRadius={'8px'} display={'flex'}>
    <Sort size='15'  color='rgba(108, 116, 128, 1)'/>
    <Text fontSize={'12px'} color='rgba(108, 116, 128, 1)'>Sort</Text>
</Box>
</Flex>
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
        w='350px'
        border={'1px solid rgba(235, 235, 235, 1)'}
        size="2xl" // You can adjust the size (sm, md, lg) as needed
      />
    </InputGroup>
</Box>

        </Flex>

        <Text color='black' my='8' fontWeight={'700'} >Invoice History</Text>

        <Table
          w="1040px"
          borderRadius={"20px"}
          mx="auto"
          border="1px solid rgba(235, 235, 235, 1)"
        >
          <Thead>
            <Tr
              color="rgba(8, 14, 26, 1)"
              bgColor="rgba(252, 252, 252,1) "
              borderBottom={"none"}
              fontWeight="700"
            >
              <Th color="rgba(8, 14, 26, 1)" fontWeight="700">
                Invoice ID
              </Th>
              <Th color="rgba(8, 14, 26, 1)" fontWeight="700">
                Project
              </Th>
              <Th color="rgba(8, 14, 26, 1)" fontWeight="700">
                Total Amount{" "}
              </Th>
              <Th color="rgba(8, 14, 26, 1)" fontWeight="700">
                Amount Paid`
              </Th>
              <Th color="rgba(8, 14, 26, 1)" fontWeight="700">
                Payment Status
              </Th>
              <Th color="rgba(8, 14, 26, 1)" fontWeight="700">
                Next Payment Date`
              </Th>
              <Th color="rgba(8, 14, 26, 1)" fontWeight="700">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              color="rgba(8, 14, 26, 1)"
              borderColor="red"
              fontWeight="300"
              fontSize={"14px"}
            >
              <Td>233</Td>
              <Td>
                <Box>
                  <Flex gap="2">
                    <Box w={30}>
                      <Image src={ProjectIcon1} width={30} alt="Logo" />
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500">
                        Project name
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="400"
                        color="rgba(164, 170, 178, 1)"
                      >
                        ID: 1324547839
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Td>
              <Td>$20,000</Td>
              <Td>$20,000</Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="red">
                  Pending
                </Badge>
              </Td>
              <Td>24th May, 2023</Td>
              <Td>
                <Image src={Menu} alt="menu" />
              </Td>
            </Tr>
            <Tr
              color="rgba(8, 14, 26, 1)"
              borderColor="red"
              fontWeight="300"
              fontSize={"14px"}
            >
              <Td>233</Td>
              <Td>
                <Box>
                  <Flex gap="2">
                    <Box w={30}>
                      <Image src={ProjectIcon2} width={30} alt="Logo" />
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500">
                        Project name
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="400"
                        color="rgba(164, 170, 178, 1)"
                      >
                        ID: 1324547839
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Td>
              <Td>$20,000</Td>
              <Td>$20,000</Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="red">
                  Pending
                </Badge>
              </Td>
              <Td>24th May, 2023</Td>
              <Td>
                <Image src={Menu} alt="menu" />
              </Td>
            </Tr>
            <Tr
              color="rgba(8, 14, 26, 1)"
              borderColor="red"
              fontWeight="300"
              fontSize={"14px"}
            >
              <Td>233</Td>
              <Td>
                <Box>
                  <Flex gap="2">
                    <Box w={30}>
                      <Image src={ProjectIcon3} width={30} alt="Logo" />
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500">
                        Project name
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="400"
                        color="rgba(164, 170, 178, 1)"
                      >
                        ID: 1324547839
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Td>
              <Td>$20,000</Td>
              <Td>$20,000</Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="red">
                  Pending
                </Badge>
              </Td>
              <Td>24th May, 2023</Td>
              <Td>
                <Image src={Menu} alt="menu" />
              </Td>
            </Tr>
            <Tr color="rgba(8, 14, 26, 1)" fontWeight="300" fontSize={"14px"}>
              <Td>233</Td>
              <Td>
                <Box>
                  <Flex gap="2">
                    <Box w={30}>
                      <Image src={ProjectIcon1} width={30} alt="Logo" />
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500">
                        Project name
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="400"
                        color="rgba(164, 170, 178, 1)"
                      >
                        ID: 1324547839
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Td>
              <Td>$20,000</Td>
              <Td>$20,000</Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="purple">
                  Processing
                </Badge>
              </Td>
              <Td>24th May, 2023</Td>
              <Td>
                <Image src={Menu} alt="menu" />
              </Td>
            </Tr>
            <Tr color="rgba(8, 14, 26, 1)" fontWeight="300" fontSize={"14px"}>
              <Td>233</Td>
              <Td>
                <Box>
                  <Flex gap="2">
                    <Box w={30}>
                      <Image src={ProjectIcon2} width={30} alt="Logo" />
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500">
                        Project name
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="400"
                        color="rgba(164, 170, 178, 1)"
                      >
                        ID: 1324547839
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Td>
              <Td>$20,000</Td>
              <Td>$20,000</Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="green">
                  Paid
                </Badge>
              </Td>
              <Td>24th May, 2023</Td>
              <Td>
                <Image src={Menu} alt="menu" />
              </Td>
            </Tr>
            <Tr color="rgba(8, 14, 26, 1)" fontWeight="300" fontSize={"14px"}>
              <Td>233</Td>
              <Td>
                <Box>
                  <Flex gap="2">
                    <Box w={30}>
                      <Image src={ProjectIcon3} width={30} alt="Logo" />
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500">
                        Project name
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="400"
                        color="rgba(164, 170, 178, 1)"
                      >
                        ID: 1324547839
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Td>
              <Td>$20,000</Td>
              <Td>$20,000</Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="green">
                  Paid
                </Badge>
              </Td>
              <Td>24th May, 2023</Td>
              <Td>
                <Image src={Menu} alt="menu" />
              </Td>
            </Tr>
            <Tr color="rgba(8, 14, 26, 1)" fontWeight="300" fontSize={"14px"}>
              <Td>233</Td>
              <Td>
                <Box>
                  <Flex gap="2">
                    <Box w={30}>
                      <Image src={ProjectIcon1} width={30} alt="Logo" />
                    </Box>
                    <Box>
                      <Text fontSize="14px" fontWeight="500">
                        Project name
                      </Text>
                      <Text
                        fontSize="10px"
                        fontWeight="400"
                        color="rgba(164, 170, 178, 1)"
                      >
                        ID: 1324547839
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Td>
              <Td>$20,000</Td>
              <Td>$20,000</Td>
              <Td>
                <Badge borderRadius="full" px="2" colorScheme="green">
                  Paid
                </Badge>
              </Td>
              <Td>24th May, 2023</Td>
              <Td>
                <Image src={Menu} alt="menu" />
              </Td>
            </Tr>

            {/* Add more rows as needed */}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default MyTable;
