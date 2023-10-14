// components/TabPanel.tsx
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  extendTheme,
  ChakraProvider,
  TabPanels,
  Tabs,
  Flex,
  Select,
  VStack,
  HStack,
  Text
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ProjectName from "../public/images/logos_iron-icon.svg";
import Image from "next/image";
import Overview from "./overview";
const customTheme = extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            borderBottom: "2px solid rgba(10, 38, 86, 1)",
            color: "rgba(10, 38, 86, 1)",
            // Adjust the border style here
          },
        },
      },
    },
  },
});
const MyTabPanel = () => {
  return (
    <Box  color="black" overflow-x='hidden' bgColor="#FCFCFC">

    <ChakraProvider theme={customTheme}>
      
      <Tabs>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
        <TabList color={'rgba(108, 116, 128, 1)'} fontWeight='600' mb="1em">
          <Tab>Overview</Tab>
          <Tab>Project Requirement Document (PRD)</Tab>
          <Tab>Transactions </Tab>
          <Tab>Report</Tab>
        </TabList>

        <Box >
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
                    width="300px"
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
              </Box>

        </Flex>
        <TabPanels>
          <TabPanel>
            <Box p={4}><Overview/></Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for PRD Loading...</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for TRANSACTIONS Loading...</Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>Content for REPORTS Loading...</Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
    </Box>
  );
};

export default MyTabPanel;
