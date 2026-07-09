import {
    Badge,
    Box,
    Button,
    Card,
    Flex,
    Grid,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const skills = [
    "Linux",
    "React",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Prisma",
    "Python",
    "Git",
    "Vercel",
];

const values = [
    {
        title: "User-focused",
        description:
            "I like building things that feel clean, intuitive, and useful instead of just technically functional.",
    },
    {
        title: "Business-minded",
        description:
            "My background in computer science and business helps me think about both the technical solution and the actual impact.",
    },
    {
        title: "Always learning",
        description:
            "I enjoy picking up new tools, improving my workflow, and turning messy ideas into polished projects.",
    },
];

function About() {
    return (
        <Stack gap={8}>
            <Box>
                <Badge colorPalette="purple" rounded="full" px={4} py={2} mb={4}>
                    👤 About
                </Badge>

                <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    lineHeight="1"
                    letterSpacing="-0.04em"
                    mb={4}
                >
                    A Little More About Me
                </Heading>

                <Text maxW="2xl" fontSize="lg" color="gray.700">
                    I'm Roman, a recent Business Administration and Computer Science graduate
                    with an interest in full-stack development. I enjoy building clean, practical web applications
                    that solve real problems and provide a satisfying user experience.
                </Text>
            </Box>

            <Grid
                templateColumns={{ base: "1fr", lg: "1fr 360px" }}
                gap={6}
                alignItems="stretch"
            >
                <Card.Root rounded="2xl" borderColor="purple.100" bg="white">
                    <Card.Body gap={4} p={6}>
                        <Heading size="md">My Story</Heading>

                        <Text color="gray.700">
                            My experience spans web development, automation, and technical problem-solving.
                            Through internships, coursework, and personal projects, I've worked on building
                            interfaces, improving workflows, connecting systems, and translating requirements
                            into usable solutions.
                        </Text>

                        <Text color="gray.700">
                            I care about writing maintainable code, designing thoughtful user experiences, and
                            building projects that are actually useful or interesting to me.
                        </Text>
                    </Card.Body>
                </Card.Root>

                <Box 
                    rounded="2xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="purple.100"
                    bg="purple.100"
                    w="360px"
                    maxW="100%"
                    justifySelf="center"
                >
                    <Image
                        src="/gradphoto2.webp"
                        alt="Roman Guevarra"
                        w="100%"
                        h="460px"
                        objectFit="cover"
                        objectPosition="center 35%"
                    />
                </Box>
            </Grid>

            <Box maxW="1100px" mx="auto" w="100%">
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
                    {values.map((value) => (
                        <Card.Root
                            key={value.title}
                            rounded="2xl"
                            borderColor="purple.100"
                            bg="purple.50"
                        >
                            <Card.Body gap={3} p={6} >
                                <Heading size="sm">{value.title}</Heading>
                                <Text fontSize="sm" color="gray.700">
                                    {value.description}
                                </Text>
                            </Card.Body>
                        </Card.Root>
                    ))}
                </SimpleGrid>
            </Box>

            <Card.Root rounded="2xl" borderColor="purple.100" bg="white">
                <Card.Body gap={4} p={6}>
                    <Heading size="md">Tech I Like Working With</Heading>

                    <Flex gap={2} flexWrap="wrap">
                        {skills.map((skill) => (
                            <Badge key={skill} colorPalette="purple" variant="subtle">
                                {skill}
                            </Badge>
                        ))}
                    </Flex>
                </Card.Body>
            </Card.Root>

            <Button
                asChild
                alignSelf="flex-start"
                variant="outline"
                colorPalette="purple"
                rounded="xl"
            >
                <RouterLink to="/">← Back Home</RouterLink>
            </Button>
        </Stack>
    );
}

export default About;