import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import {
  HambergerMenu,
  ChartCircle,
  AddCircle,
  Warning2,
  Flash,
} from "iconsax-react";
import DashboardPage from '@/components/projectCard'
import DonutChart from "../public/images/Donut Chart.svg";
import completed from "../public/images/Completed.svg";
import ontrack from "../public/images/ontrack.svg";
import delayed from "../public/images/overdue.svg";
import pending from "../public/images/pending.svg";
import ProjectIcon1 from "../public/images/PrrojectIcon1.svg";
import ProjectIcon2 from "../public/images/ProjectIcon2.svg";
import ProjectIcon3 from "../public/images/ProjectIcon3.svg";
function dashboard() {
  return (
    <Box bgColor="#FCFCFC" mt='6' color="black">
      <Box display="flex" m='auto' gap="2" alignItems="center">
        <Box>
          <Box
            width="260px"
            p="4"
            borderRadius="20px"
            h="180px"
            border="1px solid rgba(235, 235, 235,1)"
          >
            <Box
              display="flex"
              alignItems="center"
              gap="2"
              pb="4"
              borderBottom="2px solid rgba(235, 235, 235,1)"
            >
              <HambergerMenu size={18} color={"rgba(10, 38, 86, 1)"} />
              <Text fontWeight="600" display="inline">
                PROJECT COUNT
              </Text>
            </Box>
            <Text
              fontWeight="500"
              color="rgba(8, 14, 26, 1)"
              mt="4"
              fontSize="42px"
              textAlign="center"
            >
              20
            </Text>
          </Box>
        </Box>

        <Box m='auto'>
          <Box
            width="260px"
            p="4"
            borderRadius="20px"
            h="180px"
            border="1px solid rgba(235, 235, 235,1)"
          >
            <Box
              display="flex"
              alignItems="center"
              gap="2"
              pb="4"
              borderBottom="2px solid rgba(235, 235, 235,1)"
            >
              <ChartCircle size={18} color={"rgba(10, 38, 86, 1)"} />
              <Text fontWeight="600" display="inline">
                PROJECT STATUS
              </Text>
            </Box>

            <Box mt="3" display="flex" gap="2" alignItems="center">
              <Box>
                <Image src={DonutChart} alt="Logo" />
              </Box>

              <Box>
                <Flex gap="2" mb="3">
                  <Box display="flex" alignItems="center" gap="1">
                    <Image src={completed} alt="Logo" />
                    <Text fontWeight="600" fontSize="12px" display="inline">
                      Completed
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" gap="1">
                    <Image src={ontrack} alt="Logo" />
                    <Text fontWeight="600" fontSize="12px" display="inline">
                      On-track
                    </Text>
                  </Box>
                </Flex>
                <Flex gap="2">
                  <Box display="flex" alignItems="center" gap="1">
                    <Image src={pending} alt="Logo" />
                    <Text fontWeight="600" fontSize="12px" display="inline">
                      Pending
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" gap="1">
                    <Image src={delayed} alt="Logo" />
                    <Text fontWeight="600" fontSize="12px" display="inline">
                      Overdue
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box m='auto'>
          <Box
            width="260px"
            p="4"
            borderRadius="20px"
            h="180px"
            border="1px solid rgba(235, 235, 235,1)"
          >
            <Box
              display="flex"
              alignItems="center"
              gap="2"
              pb="4"
              borderBottom="2px solid rgba(235, 235, 235,1)"
            >
              <Warning2 size={18} color={"rgba(10, 38, 86, 1)"} />
              <Text fontWeight="600" display="inline">
                UPCOMING DEADLINES
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              mt="2"
              alignItems="center"
              gap="4"
            >
              <Box>
                <Flex gap="2">
                  <Image src={ProjectIcon1} alt="Logo" />
                  <Box>
                    <Text fontSize="10px" fontWeight="500">
                      Project name
                    </Text>
                    <Text
                      fontSize="8px"
                      fontWeight="400"
                      color="rgba(164, 170, 178, 1)"
                    >
                      ID: 1324547839
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(164, 170, 178, 1)"
                >
                  Due: 11-08-2023
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              mt="2"
              alignItems="center"
              gap="4"
            >
              <Box>
                <Flex gap="2">
                  <Image src={ProjectIcon2} alt="Logo" />
                  <Box>
                    <Text fontSize="10px" fontWeight="500">
                      Project name
                    </Text>
                    <Text
                      fontSize="8px"
                      fontWeight="400"
                      color="rgba(164, 170, 178, 1)"
                    >
                      ID: 1324547839
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(164, 170, 178, 1)"
                >
                  Due: 11-08-2023
                </Text>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              mt="2"
              alignItems="center"
              gap="4"
            >
              <Box>
                <Flex gap="2">
                  <Image src={ProjectIcon3} alt="Logo" />
                  <Box>
                    <Text fontSize="10px" fontWeight="500">
                      Project name
                    </Text>
                    <Text
                      fontSize="8px"
                      fontWeight="400"
                      color="rgba(164, 170, 178, 1)"
                    >
                      ID: 1324547839
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(164, 170, 178, 1)"
                >
                  Due: 11-08-2023
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box m='auto'>
          <Box
            width="260px"
            p="4"
            borderRadius="20px"
            h="180px"
            border="1px solid rgba(235, 235, 235,1)"
          >
            <Box
              display="flex"
              alignItems="center"
              gap="2"
              pb="4"
              mb="2"
              borderBottom="2px solid rgba(235, 235, 235,1)"
            >
              <Flash size={18} color={"rgba(10, 38, 86, 1)"} />
              <Text fontWeight="600" display="inline">
              QUICK ACTIONS
              </Text>
            </Box>
        <Button border='1px solid rgba(208, 225, 255, 1)' w='full' my='2' borderRadius='12px'>
            <AddCircle size={26} color={"rgba(59, 130, 246, 1)"} />
            <Text fontWeight="400" display="inline" ml='4' color={"rgba(59, 130, 246, 1)"}>
            Add New Project
            </Text>
        </Button>
        <Button border='1px solid rgba(208, 225, 255, 1)' w='full' my='2' borderRadius='12px'>
            <AddCircle size={26} color={"rgba(59, 130, 246, 1)"} />
            <Text fontWeight="400" display="inline" ml='4' color={"rgba(59, 130, 246, 1)"}>
           Invite New User
            </Text>
        </Button>
          </Box>
        </Box>
      </Box>
      <Box mt='10'>
      <DashboardPage />
    </Box>
    </Box>
  );
}

export default dashboard;
