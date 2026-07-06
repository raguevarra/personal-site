import {
    Badge,
    Box,
    Button,
    Card,
    Flex,
    Heading,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import { projects } from "../data/projects";

function Projects() {
    return (
        <Stack gap={8}>
            <Box>
                <Badge colorPalette="purple" rounded="full" px={4} py={2} mb={4}>
                    ⭐ Projects
                </Badge>

                <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    lineHeight="1"
                    letterSpacing="-0.04em"
                    mb={4}
                >
                    Things I've Built
                </Heading>

                <Text maxW="2xl" fontSize="lg" color="gray.700">
                    A collection of projects that show my experience with full-stack
                    development, frontend design, backend systems, databases, and
                    technical problem-solving.
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
                {projects.map((project) => (
                    <Card.Root
                        key={project.name}
                        rounded="2xl"
                        borderColor="purple.100"
                        overflow="hidden"
                        bg="white"
                    >
                        <Box h="180px" bg="purple.100" />

                        <Card.Body gap={4} p={6}>
                            <Stack gap={2}>
                                <Heading size="md">{project.name}</Heading>
                                <Text color="gray.700">{project.longDescription}</Text>
                            </Stack>

                            <Flex gap={2} flexWrap="wrap">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} colorPalette="purple" variant="subtle">
                                        {tag}
                                    </Badge>
                                ))}
                            </Flex>

                            <Flex gap={3} flexWrap="wrap" pt={2}>
                                {project.githubUrl ? (
                                    <Button asChild variant="outline" rounded="xl">
                                        <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                                            GitHub
                                        </Link>
                                    </Button>
                                ) : null}

                                {project.liveUrl ? (
                                    <Button asChild colorPalette="purple" rounded="xl">
                                        <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                                            Live Demo
                                        </Link>
                                    </Button>
                                ) : null}
                            </Flex>
                        </Card.Body>
                    </Card.Root>
                ))}
            </SimpleGrid>

            <Button asChild alignSelf="flex-start" variant="outline" colorPalette="purple" rounded="xl">
                <RouterLink to="/">← Back Home</RouterLink>
            </Button>
        </Stack>
    );
}

export default Projects;