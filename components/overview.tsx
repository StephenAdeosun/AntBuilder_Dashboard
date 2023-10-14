import React from "react";
import { Box, Flex, Badge, Text, Button } from "@chakra-ui/react";
import {
  Location,
  Flash,
  AddCircle,
  DollarCircle,
  Calendar,
  Copy,
  Eye,
} from "iconsax-react";
import Image from "next/image";
import Progress from "../public/images/Progress bar.svg";
import Graph from "../public/images/graphicon.svg";
import Graph2 from "../public/images/Graph Blue Outline (2).svg";
import ProjectIcon1 from "../public/images/PrrojectIcon1.svg";
import Person2 from "../public/images/Personn2.svg";
import Person1 from "../public/images/Person.svg";
import Person from "../public/images/Person2.svg";
import progress from "../public/images/Progress bar.svg";
import { ProjectCardProps } from "../@types";
import pushpin from "../public/images/pushpin.svg";
import completed from "../public/images/Completed.svg";
import ontrack from "../public/images/ontrack.svg";
import delayed from "../public/images/overdue.svg";
import pending from "../public/images/pending.svg";
import DonutChart from "../public/images/Donut Chart8.svg";
import NewFeatures from "../public/images/newfeat.svg";
import incomplete from "../public/images/incom.svg";

function overview() {
  return (
    <Box h="150vh" bgColor={"white"} color={"black"}>
      <Box w="1000px">
        <Box display={"flex"} mb="8" height="420px">
          <Box
            w="700px"
            height="full"
            display={"flex"}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box display={"flex"} justifyContent="space-between">
              <Box>
                <Box
                  width="310px"
                  p="4"
                  borderRadius="20px"
                  h="190px"
                  border="1px solid rgba(235, 235, 235,1)"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="2"
                    pb="4"
                    borderBottom="2px solid rgba(235, 235, 235,1)"
                  >
                    <Location size={18} color={"rgba(10, 38, 86, 1)"} />
                    <Text fontWeight="600" display="inline">
                      PROJECT STAGE
                    </Text>
                  </Box>
                  <Flex
                    mt="3"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      border="1px solid rgba(208, 225, 255, 1)"
                      my="1"
                      borderRadius="12px"
                    >
                      <Text
                        fontWeight="400"
                        display="inline"
                        color={"rgba(59, 130, 246, 1)"}
                      >
                        Development stage
                      </Text>
                    </Button>
                    <Button
                      py="1"
                      px="2"
                      bgColor="rgba(0, 196, 140, 0.13)"
                      mb="1"
                      _hover={{ color: "none" }}
                      fontSize="14px"
                      borderRadius="18px"
                      color="rgba(0, 196, 140, 1)"
                    >
                      On Track
                    </Button>
                  </Flex>
                  <Box mt="3">
                    <Image src={Progress} alt="Logo" />
                  </Box>
                  <Text
                    my="2"
                    fontSize="12px"
                    color="rgba(164, 170, 178, 1)"
                    fontWeight={"400"}
                  >
                    256 tasks to completion
                  </Text>
                </Box>
              </Box>

              <Box>
                <Box
                  width="310px"
                  p="4"
                  borderRadius="20px"
                  h="190px"
                  border="1px solid rgba(235, 235, 235,1)"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="2"
                    pb="4"
                    borderBottom="2px solid rgba(235, 235, 235,1)"
                  >
                    <Image src={Graph} alt="Logo" />
                    <Text fontWeight="600" display="inline">
                      TASK COMPLETION RATE
                    </Text>
                  </Box>

                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                      <Text
                        fontWeight="500"
                        color="rgba(8, 14, 26, 1)"
                        mt="4"
                        fontSize="42px"
                        //   textAlign="center"
                      >
                        98%
                      </Text>
                      <Text
                        color="rgba(164, 170, 178, 1)"
                        fontSize="12px"
                        fontWeight={"400"}
                      >
                        From Last Week 53%
                      </Text>
                    </Box>
                    <Box>
                      <Image src={Graph2} alt="Logo" />
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                m="auto"
                gap="6"
                mt="8"
                alignItems="center"
              >
                <Box>
                  <Box
                    width="200px"
                    p="4"
                    borderRadius="20px"
                    h="190px"
                    border="1px solid rgba(235, 235, 235,1)"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="2"
                      pb="4"
                      borderBottom="2px solid rgba(235, 235, 235,1)"
                    >
                      <Calendar size={18} color={"rgba(10, 38, 86, 1)"} />
                      <Text fontWeight="600" display="inline">
                        PROJECT TIMELINE
                      </Text>
                    </Box>
                    <Text
                      fontWeight="500"
                      color="rgba(8, 14, 26, 1)"
                      fontSize="42px"
                      textAlign="center"
                    >
                      1 YEAR
                    </Text>
                    <Text
                      color="rgba(164, 170, 178, 1)"
                      textAlign="center"
                      fontSize="12px"
                      fontWeight={"400"}
                    >
                      Dec 2023 - Mar 2024
                    </Text>
                  </Box>
                </Box>

                <Box m="auto">
                  <Box
                    width="200px"
                    p="4"
                    borderRadius="20px"
                    h="190px"
                    border="1px solid rgba(235, 235, 235,1)"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="2"
                      pb="4"
                      borderBottom="2px solid rgba(235, 235, 235,1)"
                    >
                      <DollarCircle size={18} color={"rgba(10, 38, 86, 1)"} />
                      <Text fontWeight="600" display="inline">
                        PROJECT BUDGET
                      </Text>
                    </Box>

                    <Box mt="3">
                      <Box>
                        <Text
                          fontWeight="500"
                          color="rgba(8, 14, 26, 1)"
                          fontSize="42px"
                          textAlign="center"
                        >
                          200M
                        </Text>
                        <Text
                          color="rgba(164, 170, 178, 1)"
                          textAlign="center"
                          fontSize="12px"
                          fontWeight={"400"}
                        >
                          53% Used in 3 Months{" "}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box m="auto">
                  <Box
                    width="200px"
                    p="4"
                    borderRadius="20px"
                    h="190px"
                    border="1px solid rgba(235, 235, 235,1)"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="2"
                      pb="2"
                      mb="2"
                      borderBottom="2px solid rgba(235, 235, 235,1)"
                    >
                      <Flash size={18} color={"rgba(10, 38, 86, 1)"} />
                      <Text fontWeight="600" display="inline">
                        QUICK ACTIONS
                      </Text>
                    </Box>
                    <Button
                      border="1px solid rgba(208, 225, 255, 1)"
                      w="full"
                      my="2"
                      borderRadius="12px"
                    >
                      <AddCircle size={22} color={"rgba(59, 130, 246, 1)"} />
                      <Text
                        fontWeight="400"
                        display="inline"
                        ml="2"
                        fontSize="12px"
                        color={"rgba(59, 130, 246, 1)"}
                      >
                        Create Invoice
                      </Text>
                    </Button>
                    <Button
                      border="1px solid rgba(208, 225, 255, 1)"
                      w="full"
                      my="2"
                      borderRadius="12px"
                    >
                      <AddCircle size={22} color={"rgba(59, 130, 246, 1)"} />
                      <Text
                        fontWeight="400"
                        display="inline"
                        ml="2"
                        fontSize="12px"
                        color={"rgba(59, 130, 246, 1)"}
                      >
                        Add Estimation
                      </Text>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* 2nd flex */}
          <Box ml="4">
            <Box
              width="340px"
              p="4"
              borderRadius="20px"
              h="full"
              border="1px solid rgba(235, 235, 235,1)"
            >
              <Box
                display="flex"
                alignItems="center"
                gap="2"
                pb="4"
                borderBottom="3px solid rgba(235, 235, 235,1)"
              >
                <Copy size={22} color={"rgba(10, 38, 86, 1)"} />
                <Text fontWeight="600" display="inline">
                  CURRENT PROJECT
                </Text>
              </Box>
              <Box>
                <Box mt="4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box display="flex" justifyContent="space-between" gap="2">
                      <Box>
                        <Image src={ProjectIcon1} width={45} alt="Logo" />
                      </Box>
                      <Box>
                        <Text
                          fontWeight="600"
                          fontSize="16px"
                          color="rgba(59, 67, 80, 1)"
                          mb="2"
                        >
                          Project Name
                        </Text>
                        <Text
                          fontSize="12px"
                          fontWeight="600"
                          color="rgba(164, 170, 178, 1)"
                        >
                          ID: 1324547839
                        </Text>
                      </Box>
                    </Box>

                    <Box>
                      <Button
                        py="1"
                        px="2"
                        bgColor="rgba(251, 188, 5, 0.13)"
                        mb="1"
                        _hover={{ color: "none" }}
                        fontSize="12px"
                        borderRadius="18px"
                        color="rgba(251, 188, 5, 1)"
                      >
                        In Progress
                      </Button>
                    </Box>
                  </Flex>
                </Box>
                <Box my="5">
                  <Text fontSize="10px" color="rgba(108, 116, 128, 1)">
                    Description
                  </Text>
                  <Text fontSize="12px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </Text>
                </Box>

                <Flex alignItems="center" justifyContent="space-between">
                  <Box>
                    <Text
                      my="2"
                      fontSize="12px"
                      fontWeight="400"
                      color="rgba(164, 170, 178, 1)"
                    >
                      Client
                    </Text>
                    <Box display="flex" gap="2">
                      <Image src={Person2} width={25} alt="Logo" />
                      <Text>Sandra Audu</Text>
                    </Box>
                  </Box>
                  <Text fontSize="10px" color="rgba(108, 116, 128, 1)">
                    25 Team Members
                  </Text>
                </Flex>

                <Box
                  display="flex"
                  mt="4"
                  gap="8"
                  justifyContent="space-between"
                >
                  <Box>
                    <Text
                      mb="2"
                      fontSize="12px"
                      fontWeight="400"
                      color="rgba(164, 170, 178, 1)"
                    >
                      Account Executive
                    </Text>
                    <Box display="flex" gap="2">
                      <Image src={Person1} width={25} alt="Logo" />
                      <Text>Sandra Audu</Text>
                    </Box>
                  </Box>
                  <Box>
                    <Text
                      mb="2"
                      fontSize="12px"
                      fontWeight="400"
                      color="rgba(164, 170, 178, 1)"
                    >
                      CSM Manager
                    </Text>
                    <Box display="flex" gap="2">
                      <Image src={Person} width={25} alt="Logo" />
                      <Text> Sandra Audu</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt="3">
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(164, 170, 178, 1)"
                >
                  Git Link
                </Text>

                <Text
                  color={"rgba(59, 130, 246, 1)"}
                  my="1"
                  mt="-1"
                  fontSize={"16px"}
                  fontWeight={"400px"}
                >
                  https://www.xufhflfo.mnc/mkd/o103/ifjn
                </Text>
                <Box w="full">
                  <Image src={progress} width={400} alt="Logo" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" maxWidth="1100px">
          <Box
            width="550px"
            p="2"
            borderRadius="20px"
            h="full"
            border="1px solid rgba(235, 235, 235,1)"
          >
            <Box
              display="flex"
              alignItems="center"
              gap="2"
              pb="4"
              borderBottom="2px solid rgba(235, 235, 235,1)"
            >
              <Image src={pushpin} width="20" alt="Logo" />
              <Text fontWeight="600" display="inline">
                ACTIVITY FEED
              </Text>
            </Box>

            <Box
              borderRadius="20px"
              mt="4"
              p="2"
              border="1px solid rgba(235, 235, 235,1)"
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </Text>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mt="4"
              >
                <Flex justifyContent={"space-between"} gap="4">
                  <Image src={Person} width={25} alt="Logo" />
                  <Box>
                    <Text>Sandra Audu</Text>
                    <Text fontSize="12px" fontWeight="400">
                      Role
                    </Text>
                  </Box>
                </Flex>
                <Text fontSize="12px" fontWeight="400">
                  2hrs ago
                </Text>
              </Flex>
            </Box>
            <Box
              borderRadius="20px"
              mt="4"
              p="2"
              border="1px solid rgba(235, 235, 235,1)"
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </Text>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                mt="4"
              >
                <Flex justifyContent={"space-between"} gap="4">
                  <Image src={Person} width={25} alt="Logo" />
                  <Box>
                    <Text>Sandra Audu</Text>
                    <Text fontSize="12px" fontWeight="400">
                      Role
                    </Text>
                  </Box>
                </Flex>
                <Text fontSize="12px" fontWeight="400">
                  2hrs ago
                </Text>
              </Flex>
            </Box>
          </Box>

          <Box>
            <Box
              width="400px"
              p="4"
              borderRadius="20px"
              h="250px"
              border="1px solid rgba(235, 235, 235,1)"
            >
              <Box
                display="flex"
                alignItems="center"
                gap="2"
                pb="4"
                borderBottom="2px solid rgba(235, 235, 235,1)"
              >
                <Eye size={18} color={"rgba(10, 38, 86, 1)"} />
                <Text fontWeight="600" display="inline">
                  PROJECT FEATURES STATUS
                </Text>
              </Box>

              <Box mt="3" display="flex" gap="2" alignItems="center">
                <Box>
                  <Image src={DonutChart} alt="Logo" />
                </Box>

                <Box>
                  <Box display="flex" my="4" alignItems="center" gap="1">
                    <Image src={NewFeatures} alt="Logo" />
                    <Text fontWeight="600" fontSize="12px" display="inline">
                      New Features:3
                    </Text>
                  </Box>

                  <Box display="flex" my="4" alignItems="center" gap="1">
                    <Image src={completed} alt="Logo" />
                    <Text fontWeight="600" fontSize="12px" display="inline">
                      Completed Features:3
                    </Text>
                  </Box>
                  <Box display="flex" my="4" alignItems="center" gap="1">
                    <Image src={incomplete} alt="Logo" />
                    <Text fontWeight="600" fontSize="12px" display="inline">
                      Incomplete Features:3
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default overview;
