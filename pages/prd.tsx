import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Box,
  Text,
  Th,
  Td,
  TableCaption,
  TableContainer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const MyTable = () => {
  return (
    <Box h="100vh" bgColor="#FCFCFC" color="black">
      <Table variant="simple" bgColor="#FCFCFC" color="black" width='989px'>
        <Thead>
          <Tr color={"rgba(8, 14, 26, 1)"} fontWeight={"600"} fontSize={"16"}>
            <Th color={"rgba(8, 14, 26, 1)"} fontWeight={"600"} fontSize={"12"}>
              Features
            </Th>
            <Th color={"rgba(8, 14, 26, 1)"} fontWeight={"600"} fontSize={"12"}>
              Description
            </Th>
            <Th color={"rgba(8, 14, 26, 1)"} fontWeight={"600"} fontSize={"12"}>
              Subfeatures
            </Th>
            <Th color={"rgba(8, 14, 26, 1)"} fontWeight={"600"} fontSize={"12"}>
              User Story
            </Th>
            <Th color={"rgba(8, 14, 26, 1)"} fontWeight={"600"} fontSize={"12"}>
              Remark
            </Th>
            <Th color={"rgba(8, 14, 26, 1)"} fontWeight={"600"} fontSize={"12"}>
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody bgColor="#FCFCFC" color="black">
          <Tr>
            <Td
              color={"rgba(8, 14, 26, 1)"}
              top="0"
              fontWeight={"400"}
              fontSize={"12"}
              w='172px'
            >
              Blog Page
            </Td>
              
            <Td color={"rgba(8, 14, 26, 1)"}  w='217px' fontWeight={"400"} fontSize={"12"}>
              A blog screen, where all posted blog will show up
            </Td>
            <Td w='175px'>
              <UnorderedList
                color={"rgba(8, 14, 26, 1)"}
                lineHeight={"24px"}
                fontWeight={"300"}
                fontSize={"13"}
              >
                <ListItem>Search button</ListItem>
                <ListItem>Videos</ListItem>
                <ListItem>Infographics</ListItem>
                <ListItem>Industry reports</ListItem>
                <ListItem>Freebooks</ListItem>
                <ListItem>Blogs</ListItem>
                <ListItem>
                  Top navigation bar
                  <UnorderedList>
                    <ListItem>Our vision</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Solutions</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>Button Navigation bar</ListItem>
              </UnorderedList>
            </Td>

            <Td w='224px'>
              <UnorderedList
                color={"rgba(8, 14, 26, 1)"}
                lineHeight={"24px"}
                fontWeight={"300"}
                fontSize={"13"}
              >
                <ListItem>
                  As a user i want to be able to see a list of blogs post, so
                  that i can read them
                </ListItem>
                <ListItem>
                  As a user i want to see a section where i can see all the
                  vidoes uploaded in the blogs.
                </ListItem>
                <ListItem>
                  As a user i want to be able to search for any keywords so that
                  i can see a relating blog post relating to the keywords
                </ListItem>
                <ListItem>
                  As a user i want to be able to see a section where i can see
                  all industries report
                </ListItem>
                <ListItem>
                  As user i want to be able to see a section where i can see all
                  freebooks
                </ListItem>
                <ListItem>
                  As a user i want to see the top navigation bar, so that i can
                  switch to any page i want to.
                </ListItem>
                <ListItem>
                  As a user i want to see button navigation/site map bar so that
                  i can switch to other screen
                </ListItem>
                <ListItem>
                  As a user i want to see the “Get started button” so that i can
                  go to the get started page.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td lineHeight={"24px"} w='120px' fontWeight={"300"} fontSize={"13"}>
              Demo video (
              https://www.code-brew.com/build-all-in-one-delivery-app-postmates-clone-grab-clone-delivery-app-clone-live-demo/
              ) https://prnt.sc/Ik4HupjAW3Up
            </Td>
            <Td>Data 6</Td>
          </Tr>
          {/* Add more rows as needed */}
        </Tbody>
      </Table>
    </Box>
  );
};

export default MyTable;
