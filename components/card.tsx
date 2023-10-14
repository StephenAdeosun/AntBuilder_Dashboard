import React from "react";
import ProjectIcon from "../public/images/ProjectIcon2.svg";
import { Box, Progress, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import Person from "../public/images/Person2.svg";
import progress from "../public/images/Progress bar.svg";
import { ProjectCardProps } from "../@types";

interface CardProps {
  data: ProjectCardProps;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
      <Box
        borderRadius="20px"
        h="280px"
        mx='auto' 
        mt='6'
        mb='6'
        width="340px"
        border="1px solid rgba(235, 235, 235,1)"
        p="3"
      >
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Box display="flex" justifyContent="space-between" gap="2">
              <Box>
                <Image src={ProjectIcon} width={45} alt="Logo" />
              </Box>
              <Box>
                <Text
                  fontWeight="600"
                  fontSize="16px"
                  color="rgba(59, 67, 80, 1)"
                  mb="2"
                >
                  {data.projectName}
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="600"
                  color="rgba(164, 170, 178, 1)"
                >
                  {data.projectId}
                </Text>
              </Box>
            </Box>

            <Box>
              <Button
                py="1"
                px="2"
                bgColor="rgba(237, 244, 255, 1)"
                mb="1"
                _hover={{ color: "none" }}
                fontSize="12px"
                borderRadius="18px"
                color="rgba(59, 130, 246, 1)"
              >
                {data.track}
              </Button>
              <Text
                fontSize="12px"
                fontWeight="400"
                color="rgba(164, 170, 178, 1)"
              >
                {data.dueDate}
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box>
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
              <Image src={Person} width={25} alt="Logo" />
              <Text>{data.client}</Text>
            </Box>
          </Box>

          <Box display="flex" mt="4" gap="8" justifyContent="space-between">
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
                <Image src={Person} width={25} alt="Logo" />
                <Text>{data.accountExecutive}</Text>
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
                <Text> {data.csmManager}</Text>
              </Box>
            </Box>
          </Box>
          {/* <Progress value={60} height="8px" borderRadius={'10px'} backgroundColor={'(0, 212, 95, 1)'} /> */}
        </Box>
        <Box mt="3">
          <Text fontSize="12px" fontWeight="400" color="rgba(164, 170, 178, 1)">
            Git Link
          </Text>

          <Text
            color={"rgba(59, 130, 246, 1)"}
            my="1"
            mt="-1"
            fontSize={"16px"}
            fontWeight={"400px"}
          >
           {data.githubUrl}
          </Text>
          <Box w="full">
            <Image src={progress} width={400} alt="Logo" />
          </Box>
        </Box>
      </Box>
  
  );
};

export default Card;
