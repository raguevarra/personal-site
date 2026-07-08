import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { projects } from "../data/projects";

const techStack = [
  "JavaScript",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Docker",
  "Vercel",
];

const interests = ["Games", "Anime", "Music", "Fitness", "Tech"];

function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Grid
        id="home"
        templateColumns={{ base: "1fr", lg: "1fr 420px" }}
        gap={{ base: 8, lg: 12 }}
        alignItems="center"
        mb={10}
      >
        <Stack gap={5}>
          <Badge
            alignSelf="flex-start"
            colorPalette="purple"
            rounded="full"
            px={4}
            py={2}
          >
            👋 Hi there! I'm Roman
          </Badge>

          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "7xl" }}
            lineHeight="0.95"
            letterSpacing="-0.05em"
          >
            Roman{" "}
            <Box as="span" color="purple.400">
              Guevarra
            </Box>
          </Heading>

          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} color="purple.500">
            Full-Stack Engineer
          </Heading>

          <Text maxW="lg" fontSize="lg" color="gray.700">
            I build thoughtful digital products that are fast, accessible, and
            delightful to use. I love clean code, intuitive UI, and solving real
            problems with creative solutions.
          </Text>

          <HStack gap={4} flexWrap="wrap">
            <Button asChild colorPalette="purple" rounded="xl">
              <RouterLink to="/projects">View My Work</RouterLink>
            </Button>
            <Button variant="outline" colorPalette="purple" rounded="xl">
              Get In Touch
            </Button>
          </HStack>

          <Text fontSize="sm" color="gray.500">
            🎮 ・ 💗 ・ {"</>"} ・ Open to new opportunities ✨
          </Text>
        </Stack>

        <Box
          justifySelf={{ base: "center", lg: "center" }}
          w={{ base: "280px", md: "360px", lg: "420px" }}
          h={{ base: "340px", md: "440px", lg: "500px" }}
          rounded="3xl"
          overflow="hidden"
          border="8px solid white"
          shadow="xl"
          bg="purple.100"
        >
          <Image
            src="/dinnerpic.webp"
            alt="Roman Guevarra"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center 55%"
            display="block"
          />
        </Box>
      </Grid>

      <Grid templateColumns={{ base: "1fr", lg: "0.85fr 2fr" }} gap={6} mb={6}>
        <Card.Root id="about" rounded="2xl" borderColor="purple.100">
          <Card.Body gap={4}>
            <Heading size="md">👤 About Me</Heading>
            <Text color="gray.700">
              I'm a full-stack engineer who enjoys building end-to-end web
              applications that make an impact. I care about craft, performance,
              and creating smooth user experiences.
            </Text>
            <Text color="gray.700">
              When I'm not coding, you'll probably find me exploring new
              games, listening to music, hitting the gym, or sketching out ideas.
            </Text>
          </Card.Body>
        </Card.Root>

        <Card.Root id="projects" rounded="2xl" borderColor="purple.100">
          <Card.Body gap={4}>
            <Flex justify="space-between" align="center">
              <Heading size="md">⭐ Featured Projects</Heading>
              <Link asChild color="purple.500" fontWeight="bold">
                <RouterLink to="/projects">View all projects →</RouterLink>
              </Link>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              {featuredProjects.map((project) => (
                <Card.Root key={project.name} overflow="hidden" rounded="xl">
                  <Box h="96px" bg="purple.100" />
                  <Card.Body gap={2} p={4}>
                    <Heading size="sm">{project.name}</Heading>
                    <Text fontSize="sm" color="gray.700">
                      {project.description}
                    </Text>
                    <Flex gap={2} flexWrap="wrap" align="flex-start">
                      {project.tags.map((tag) => (
                        <Box
                          key={tag}
                          as="span"
                          bg="purple.50"
                          color="purple.700"
                          border="1px solid"
                          borderColor="purple.100"
                          rounded="lg"
                          px={2.5}
                          py={1}
                          fontSize="xs"
                          fontWeight="medium"
                          lineHeight="1"
                          whiteSpace="nowrap"
                        >
                          {tag}
                        </Box>
                      ))}
                    </Flex>
                  </Card.Body>
                </Card.Root>
              ))}
            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      </Grid>

      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6} mb={6}>
        <Card.Root id="stack" rounded="2xl" borderColor="purple.100">
          <Card.Body gap={4}>
            <Heading size="md">{"</>"} Tech Stack</Heading>
            <HStack gap={2} flexWrap="wrap">
              {techStack.map((tech) => (
                <Badge key={tech} colorPalette="purple" variant="subtle" px={3} py={1}>
                  {tech}
                </Badge>
              ))}
            </HStack>
          </Card.Body>
        </Card.Root>

        <Card.Root id="interests" rounded="2xl" borderColor="purple.100">
          <Card.Body gap={4}>
            <Heading size="md">💗 Interests</Heading>
            <SimpleGrid columns={{ base: 2, md: 6 }} gap={3}>
              {interests.map((interest) => (
                <Box
                  key={interest}
                  bg="purple.50"
                  border="1px solid"
                  borderColor="purple.100"
                  rounded="xl"
                  p={4}
                  textAlign="center"
                  fontWeight="medium"
                >
                  {interest}
                </Box>
              ))}
            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      </Grid>

      <Flex
        id="contact"
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
          <Heading size="md">Let&apos;s build something amazing together ✨</Heading>
          <Text color="gray.700">
            I'm currently open to new opportunities and exciting projects.
          </Text>
        </Box>

        <HStack gap={3} flexWrap="wrap">
          <Button colorPalette="purple" rounded="xl">
            Get In Touch
          </Button>
          <Button variant="outline" rounded="xl">
            GitHub
          </Button>
          <Button variant="outline" rounded="xl">
            LinkedIn
          </Button>
          <Button variant="outline" rounded="xl">
            Email
          </Button>
        </HStack>
      </Flex>
    </>
  );
}

export default Home;