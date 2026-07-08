import {
    Badge,
    Box,
    Button,
    Card,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import { experience } from "../data/experience";

function Experience() {
    return (
        <Stack gap={8}>
            <Box>
                <Badge colorPalette="purple" rounded="full" px={4} py={2} mb={4}>
                    💼 Experience
                </Badge>

                <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    lineHeight="1"
                    letterSpacing="-0.04em"
                    mb={4}
                >
                    Places I've Worked
                </Heading>

                <Text maxW="2xl" fontSize="lg" color="gray.700">
                    A look at my work experience across web development, automation,
                    technical problem solving, and team-based environments.
                </Text>
            </Box>

            <Stack gap={6}>
                {experience.map((job) => (
                    <Card.Root
                        key={`${job.company}-${job.role}`}
                        rounded="2xl"
                        borderColor="purple.100"
                        bg="white"
                    >
                        <Card.Body gap={5} p={6}>
                            <Flex
                                justify="space-between"
                                align={{ base: "flex-start", md: "center" }}
                                direction={{ base: "column", md: "row" }}
                                gap={3}
                            >
                                <Box>
                                    <Heading size="md">{job.role}</Heading>
                                    <Text color="purple.500" fontWeight="bold">
                                        {job.company}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        {job.location}
                                    </Text>
                                </Box>

                                <Badge
                                    colorPalette="purple"
                                    variant="subtle"
                                    rounded="full"
                                    px={3}
                                    py={1}
                                >
                                    {job.date}
                                </Badge>
                            </Flex>

                            <Text color="gray.700">{job.description}</Text>

                            <Stack as="ul" gap={2} pl={5}>
                                {job.bullets.map((bullet) => (
                                    <Flex key={bullet} gap={3} align="flex-start">
                                        <Box
                                            as="span"
                                            mt="2"
                                            w="8px"
                                            h="8px"
                                            flexShrink={0}
                                            rounded="full"
                                            bg="purple.400"
                                        />

                                        <Text color="gray.700">{bullet}</Text>
                                    </Flex>
                                ))}
                            </Stack>

                            <Flex gap={2} flexWrap="wrap">
                                {job.tags.map((tag) =>  (
                                    <Badge key={tag} colorPalette="purple" variant="subtle">
                                        {tag}
                                    </Badge>
                                ))}
                            </Flex>
                        </Card.Body>
                    </Card.Root>
                ))}
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3}} gap={4}>
                <Card.Root rounded="2xl" borderColor="purple.100" bg="purple.50">
                    <Card.Body gap={2}>
                        <Heading size="sm">Web Development</Heading>
                        <Text fontSize="sm" color="gray.700">
                            Building responsive interfaces, reusable components, and smooth user experiences.
                        </Text>
                    </Card.Body>
                </Card.Root>

                <Card.Root rounded="2xl" borderColor="purple.100" bg="purple.50">
                    <Card.Body gap={2}>
                        <Heading size="sm">Automation</Heading>
                        <Text fontSize="sm" color="gray.700">
                            Creating workflows that reduce manual effort and improve internal processes.
                        </Text>
                    </Card.Body>
                </Card.Root>

                <Card.Root rounded="2xl" borderColor="purple.100" bg="purple.50">
                    <Card.Body gap={2}>
                        <Heading size="sm">Collaboration</Heading>
                        <Text fontSize="sm" color="gray.700">
                            Working with teams, clients, and stakeholders to turn needs into practical solutions.
                        </Text>
                    </Card.Body>
                </Card.Root>
            </SimpleGrid>

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

export default Experience;