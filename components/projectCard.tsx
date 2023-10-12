import React from "react";
import ProjectIcon from "../public/images/ProjectIcon2.svg";
import { Box, Progress, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import Person from "../public/images/Person2.svg";
import progress from "../public/images/Progress bar.svg";
import {ProjectCardProps} from '../@types';
import ProjectCard from './card'


//  interface ProjectCardProps {
//     projectName: string;
//     projectId: string;
//     dueDate: string;
//     track: string;
//     client: string;
//     accountExecutive: string;
//     csmManager: string;
//     githubUrl: string;
//     }

const Card: ProjectCardProps []= [
  {
        id:'1',
        projectName: 'Project Name',
        projectId:'ID: 1324547839',
        dueDate: 'Due: 11-08-2023',
        track: 'On Track',
        client: 'Sandra Audu',
        accountExecutive: 'Sandra Audu',
        csmManager: 'Sandra Audu',
        githubUrl: 'https://www.xufhflfo.mnc/mkd/o103/ifjn',
        },
  {
        id:'2',
        projectName: 'Project Name',
        projectId:'ID: 1324547839',
        dueDate: 'Due: 11-08-2023',
        track: 'On Track',
        client: 'Sandra Audu',
        accountExecutive: 'Sandra Audu',
        csmManager: 'Sandra Audu',
        githubUrl: 'https://www.xufhflfo.mnc/mkd/o103/ifjn',
        },
  {
        id:'3',
        projectName: 'Project Name',
        projectId:'ID: 1324547839',
        dueDate: 'Due: 11-08-2023',
        track: 'On Track',
        client: 'Sandra Audu',
        accountExecutive: 'Sandra Audu',
        csmManager: 'Sandra Audu',
        githubUrl: 'https://www.xufhflfo.mnc/mkd/o103/ifjn',
        },
  {
        id:'3',
        projectName: 'Project Name',
        projectId:'ID: 1324547839',
        dueDate: 'Due: 11-08-2023',
        track: 'On Track',
        client: 'Sandra Audu',
        accountExecutive: 'Sandra Audu',
        csmManager: 'Sandra Audu',
        githubUrl: 'https://www.xufhflfo.mnc/mkd/o103/ifjn',
        },
  {
        id:'3',
        projectName: 'Project Name',
        projectId:'ID: 1324547839',
        dueDate: 'Due: 11-08-2023',
        track: 'On Track',
        client: 'Sandra Audu',
        accountExecutive: 'Sandra Audu',
        csmManager: 'Sandra Audu',
        githubUrl: 'https://www.xufhflfo.mnc/mkd/o103/ifjn',
        },
  {
        id:'3',
        projectName: 'Project Name',
        projectId:'ID: 1324547839',
        dueDate: 'Due: 11-08-2023',
        track: 'On Track',
        client: 'Sandra Audu',
        accountExecutive: 'Sandra Audu',
        csmManager: 'Sandra Audu',
        githubUrl: 'https://www.xufhflfo.mnc/mkd/o103/ifjn',
        },

]
const dashboardPage: React.FC = () => {
    return (
    <Box bgColor="#FCFCFC"  h='100vh' m='auto'  color="black">

<Box display='grid' gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}}m='auto' >
          { Card.map((card) => (
            <ProjectCard key={card.id} data={card} />
          ))}
          </Box>
          </Box>
    );
  };

export default dashboardPage