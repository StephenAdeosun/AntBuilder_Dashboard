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
import { Element3, Box1, People, DollarCircle, Copy } from "iconsax-react";
import Logo from "../public/images/Logo.svg";
import DashboardPage from '@/components/projectCard'
import Transaction from '@/components/transaction'
import Image from "next/image";
import Navbar from "./navbar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ProjectName from "../public/images/logos_iron-icon.svg";
import Dashboard from "./dashboardTab1";

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
  return (
    <Box h="200vh" color="black" overflow-x='hidden' bgColor="#FCFCFC">
      <Navbar />
      <ChakraProvider theme={customTheme}>
        <Box h="100vh" pt='10' color="black" border="1px solid yellow">
          <Tabs display="flex">
            <TabList display="flex" mr={'46'} pt="6" gap="4" flexDirection="column" position={'fixed'} >
              <Box maxWidth="200px" pr="6">
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>
                <Tab color="rgba(164, 170, 178, 1)" _selected={iconStyle}>
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>
              </Box>

              <Box mx="6" mt="96px" w="120px">
                <HStack
                  spacing={-12}
                  border="2px solid rgba(235, 235, 235,1)"
                  borderRadius="6"
                  px="2"
                >
                  <Image src={ProjectName}  alt="Logo" />
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
              </Box>

              <VStack>
                <Tab
                  color="rgba(164, 170, 178, 1)"
                  mt="-6"
                  _selected={iconStyle}
                >
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>

                <Tab
                  color="rgba(164, 170, 178, 1)"
                  mt="-2"
                  mb="4"
                  pb="4"
                  borderBottom="4px solid rgba(237, 244, 255, 1)"
                  _selected={iconStyle}
                >
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>

                <Tab
                  color="rgba(164, 170, 178, 1)"
                  mt="-4"
                  _selected={iconStyle}
                >
                  <Flex
                    pr="6"
                    justifyContent="space-between"
                    gap="3"
                    alignItems="center"
                  >
                    <Box as={Copy} size={20} _selected={iconStyle} />
                    <Text>Dashboard</Text>
                  </Flex>
                </Tab>
              </VStack>
            </TabList>

            {/* Vertical Tab Panels */}
            <TabPanels ml='40' mt='4'>
              <TabPanel >
              <Dashboard />
              </TabPanel>
              
              <TabPanel>
                <Transaction/>
              </TabPanel>
              
              <TabPanel>
                <p>Tab 3 Content</p>
              </TabPanel>
              <TabPanel>
                <p>Tab 3 Content</p>
              </TabPanel>
              <TabPanel>
                <p>Tab 3 Content</p>
              </TabPanel>
              <TabPanel>
                <p>Tab 3 Content</p>
              </TabPanel>
              <TabPanel>
                <p>Tab 3 Content</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </ChakraProvider>
    </Box>
  );
};

export default VerticalTabPanel;
