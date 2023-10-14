import React from "react";
import {
  Box,
  Tab,
  Text,
  TabList,
  Flex,
  TabPanel,
  TabPanels,
  Select,
  Tabs,
  VStack,
  HStack,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  Element3,
  Box1,
  People,
  DollarCircle,
  Copy,
  Setting2,
  MessageQuestion,
  LogoutCurve,
} from "iconsax-react";
import Logo from "../public/images/Logo.svg";
import DashboardPage from "@/components/projectCard";
import Transaction from "@/components/transaction";
import Image from "next/image";
import Navbar from "./navbar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ProjectName from "../public/images/logos_iron-icon.svg";
import Dashboard from "./dashboardTab1";
import Project from "./project";

const customTheme = extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            borderRight: "2px solid blue",
            borderBottom: "none",
            color: "rgba(59, 130, 246, 1)",
            // Adjust the border style here
          },
        },
      },
    },
    Select: {
      baseStyle: {
        icon: {
          color: "black",
        },
      },
    },
  },
});
const iconStyle = {
  color: "rgba(59, 130, 246, 1)",
  borderRight: "2px solid blue",
};
const VerticalTabPanel = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // Scroll to the top of the page when the tab index changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tabIndex]);
  return (
    <Box h="200vh" color="black" overflow-x="hidden" bgColor="#FCFCFC">
      <Navbar />
      <ChakraProvider theme={customTheme}>
        <Box h="100vh" pt="10" color="black" border="1px solid yellow">
          <Tabs index={tabIndex} onChange={setTabIndex} display="flex">
            <TabList
              display="flex"
              mr={"46"}
              pt="6"
              gap="4"
              flexDirection="column"
              position={"fixed"}
            >
              <Box maxWidth="200px" pr="6">
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                               <Flex alignItems="center" gap="3">
                    <Box
                      display="inline"
                      as={Element3}
                      size={20}
                      _selected={iconStyle}
                    />
                    Dashboard
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex alignItems="center" gap="3">
                    <Box
                      display="inline"
                      as={Box1}
                      size={20}
                      _selected={iconStyle}
                    />
                    Studio
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex alignItems="center" gap="3">
                    <Box
                      display="inline"
                      as={Copy}
                      size={20}
                      _selected={iconStyle}
                    />
                    Projects
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Flex alignItems="center" gap="3">
                      <Box
                        display="inline"
                        as={People}
                        size={20}
                        _selected={iconStyle}
                      />
                      Team
                    </Flex>
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex alignItems="center" gap="3">
                    <Box
                      display="inline"
                      as={DollarCircle}
                      size={20}
                      _selected={iconStyle}
                    />
                    Transactions
                  </Flex>
                </Tab>



                <Tab
                  color="rgba(164, 170, 178, 1)"
                  mt="136px"
                  _selected={iconStyle}
                >
               
                  <Flex alignItems="center" gap="3">
                    <Box
                      display="inline"
                      as={Setting2}
                      size={20}
                      _selected={iconStyle}
                    />
                    Settings
                  </Flex>
                </Tab>
                

                <Tab
                  color="rgba(164, 170, 178, 1)"
                  mt="-2"
                  mb="4"
                  pb="4"
                  borderBottom="3px solid  rgba(237, 244, 255, 1)"
                  _selected={iconStyle}
                >
                            
               
                  <Flex alignItems="center" gap="3">
                    <Box
                      display="inline"
                      size={20}
                      as={MessageQuestion}
                      _selected={iconStyle}
                    />
                    FAQ
                  </Flex>
                </Tab>

                <Tab
                  color="rgba(164, 170, 178, 1)"
                  mt="-4"
                  _selected={iconStyle}
                >
            

                  
                  <Flex alignItems="center" gap="3">
                    <Box
                      display="inline"
                      size={20}
                      as={LogoutCurve}
                      _selected={iconStyle}
                    />
                    Sign Out
                  </Flex>
                </Tab>
              </Box>

              {/* <Box mx="6" mt="96px" >
                <HStack
                  spacing={-12}
                  border="2px solid rgba(235, 235, 235,1)"
                  borderRadius="6"
                  px="2"
                >
                  <Image src={ProjectName} alt="Logo" />
                  <Select
                    icon={<ChevronDownIcon />}
                    placeholder="Project name"
                    width="200px"
                    border="none"
                    _active={{ border: "none" }}
                    _focus={{ border: "none" }}
                    _hover={{ border: "none" }}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </HStack>
                <Box
                  width="100"
                  h="1"
                  my="4"
                  bgColor="rgba(237, 244, 255, 1)"
                ></Box>
              </Box> */}

         
              
            </TabList>

            {/* Vertical Tab Panels */}
            <TabPanels ml="40" mt="4">
              <TabPanel>
                <Dashboard />
              </TabPanel>

              <TabPanel>
                <Transaction />
              </TabPanel>

              <TabPanel>
                <Project />
              </TabPanel>
              <TabPanel>
                <p>In Progress</p>
              </TabPanel>
              <TabPanel>
                <p>In Progress</p>
              </TabPanel>
              <TabPanel>
                <p>In Progress</p>
              </TabPanel>
              <TabPanel>
                <p>In Progress</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </ChakraProvider>
    </Box>
  );
};

export default VerticalTabPanel;
