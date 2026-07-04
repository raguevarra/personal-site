import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const projects = [
  {
    name: "featured project",
    description:
      "a clean slot for the thing you want people to see first once you start filling this out.",
    tags: ["react", "typescript"],
  },
  {
    name: "writing",
    description:
      "short notes, longer essays, or whatever brain spill deserves a nicer home than a notes app.",
    tags: ["notes", "ideas"],
  },
  {
    name: "experiments",
    description:
      "tiny prototypes, weekend builds, and proof that curiosity occasionally compiles.",
    tags: ["labs", "play"],
  },
];

function App() {
  return (
    <Box bg="gray.950" color="gray.50" minH="100vh">
      <Container maxW="6xl" py={{ base: 6, md: 10 }}>
        <Flex
          as="header"
          align="center"
          justify="space-between"
          gap={4}
          mb={{ base: 16, md: 24 }}
        >
          <Text fontWeight="bold" letterSpacing="0.04em">
            roman guevarra
          </Text>
          <HStack gap={{ base: 3, md: 5 }} color="gray.300" fontSize="sm">
            <Link href="#work">work</Link>
            <Link href="#about">about</Link>
            <Link href="mailto:hello@example.com">contact</Link>
          </HStack>
        </Flex>

        <Stack as="main" gap={{ base: 16, md: 24 }}>
          <Stack gap={8} maxW="3xl">
            <Badge
              alignSelf="flex-start"
              bg="teal.300"
              color="gray.950"
              px={3}
              py={1}
              rounded="full"
            >
              personal site scaffold
            </Badge>
            <Stack gap={5}>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl" }}
                lineHeight="0.95"
                maxW="12ch"
              >
                building useful things on the internet.
              </Heading>
              <Text color="gray.300" fontSize={{ base: "lg", md: "xl" }}>
                a fast little home base for projects, writing, and whatever
                else should look better than a random link dump.
              </Text>
            </Stack>
            <HStack gap={3} flexWrap="wrap">
              <Button asChild bg="teal.300" color="gray.950">
                <Link href="#work">see the work</Link>
              </Button>
              <Button asChild variant="outline" borderColor="gray.600">
                <Link href="https://github.com/raguevarra">github</Link>
              </Button>
            </HStack>
          </Stack>

          <SimpleGrid id="work" columns={{ base: 1, md: 3 }} gap={5}>
            {projects.map((project) => (
              <Stack
                key={project.name}
                gap={4}
                border="1px solid"
                borderColor="gray.800"
                bg="gray.900"
                p={5}
                rounded="md"
              >
                <Heading as="h2" fontSize="xl">
                  {project.name}
                </Heading>
                <Text color="gray.300">{project.description}</Text>
                <HStack gap={2} flexWrap="wrap" pt={2}>
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="subtle" colorPalette="teal">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Stack>
            ))}
          </SimpleGrid>

          <Stack id="about" gap={4} maxW="2xl">
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
              about
            </Heading>
            <Text color="gray.300">
              swap this out with your actual bio, links, and proof that you are
              employable, interesting, or at minimum very good at pretending.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
