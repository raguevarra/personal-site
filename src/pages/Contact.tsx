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

function Contact() {
    return (
        <Stack gap={8}>
            <Box>
                <Badge colorPalette="purple" rounded="full" px={4} py={2} mb={4}>
                    📬 Contact
                </Badge>

                <Heading
                    as="h1"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    lineHeight="1"
                    letterSpacing="-0.04em"
                    mb={4}
                >
                    Let's Connect
                </Heading>

                <Text maxW="2xl" fontSize="lg" color="gray.700">
                    I'm currently open to new opportunities! Particularly software development roles that combine
                    technical problem-solving, user-focused design, and direct business impact.
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                <Card.Root rounded="2xl" borderColor="purple.100" bg="white">
                    <Card.Body gap={4} p={6}>
                        <Heading size="md">Email</Heading>
                        <Text color="gray.700">
                            The best way to reach me for new opportunities, questions, or project ideas.
                        </Text>
                        <Button asChild colorPalette="purple" rounded="xl">
                            <Link href="mailto:romanguevarra2003@gmail.com">Send Email</Link>
                        </Button>
                    </Card.Body>
                </Card.Root>

                <Card.Root rounded="2xl" borderColor="purple.100" bg="white">
                    <Card.Body gap={4} p={6}>
                        <Heading size="md">GitHub</Heading>
                        <Text color="gray.700">
                            Check out my projects, code, and what I've built.
                        </Text>
                        <Button asChild variant="outline" colorPalette="purple" rounded="xl">
                            <Link
                                href="https://github.com/raguevarra"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View GitHub
                            </Link>
                        </Button>
                    </Card.Body>
                </Card.Root>

                <Card.Root rounded="2xl" borderColor="purple.100" bg="white">
                    <Card.Body gap={4} p={6}>
                        <Heading size="md">LinkedIn</Heading>
                        <Text color="gray.700">
                            Connect with me professionally and see more about my experience.
                        </Text>
                        <Button asChild variant="outline" colorPalette="purple" rounded="xl">
                            <Link
                                href="https://www.linkedin.com/in/raguevarra"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View LinkedIn
                            </Link>
                        </Button>
                    </Card.Body>
                </Card.Root>
            </SimpleGrid>

            <Flex
                align={{ base: "stretch", md: "center" }}
                justify="space-between"
                direction={{ base: "column", md: "row" }}
                gap={5}
                bg="purple.50"
                border="1px solid"
                borderColor="purple.100"
                rounded="2xl"
                p={6}
            >
                <Box>
                    <Heading size="md">Want to see my resume?</Heading>
                    <Text color="gray.700">
                        Grab a copy of my resume or head back to the home page.
                    </Text>
                </Box>

                <Flex gap={3} flexWrap="wrap">
                    <Button asChild colorPalette="purple" rounded="xl">
                        <Link href="/Resume_Dev.pdf" download>
                            Download Resume
                        </Link>
                    </Button>

                    <Button asChild variant="outline" colorPalette="purple" rounded="xl">
                        <RouterLink to="/">← Back Home</RouterLink>
                    </Button>
                </Flex>
            </Flex>
        </Stack>
    );
}

export default Contact