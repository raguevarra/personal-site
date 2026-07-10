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

import {
  HandWavingIcon,
  UserCircleIcon,
  StarIcon,
  CodeIcon,
  HeartIcon,
  GameControllerIcon,
  SparkleIcon,
} from "@phosphor-icons/react";

import { Link as RouterLink } from "react-router-dom";

import { projects } from "../data/projects";

const interests = [
  {
    label: "Gaming",
    name: "Steam",
    image: "/interests/steam-mono.svg",
  },
  {
    label: "Anime",
    name: "Crunchyroll",
    image: "/interests/crunchyroll-mono.svg",
  },
  {
    label: "Music",
    name: "Spotify",
    image: "/interests/spotify-mono.svg",
  },
  {
    label: "Fitness",
    name: "Nike",
    image: "/interests/nike-mono.svg",
  },
  {
    label: "Tech",
    name: "OpenAI",
    image: "/interests/openai.svg",
  },
];

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
            <HStack gap={2}>
              <HandWavingIcon
                size={18}
                weight="duotone"
                color="var(--chakra-colors-yellow-500)"
              />
              Hi there! I'm Roman
            </HStack>
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
              <RouterLink to="/contact">Get In Touch</RouterLink>
            </Button>
          </HStack>

          <HStack gap={3} flexWrap="wrap" color="gray.500" fontSize="sm">
            <Box color="purple.500">
              <GameControllerIcon size={17} weight="duotone"/>
            </Box>

            <Text color="gray.300">•</Text>

            <Box color="pink.500">
              <HeartIcon size={17} weight="duotone"/>
            </Box>

            <Text color="gray.300">•</Text>

            <Box color="blue.500">
              <CodeIcon size={17} weight="duotone"/>
            </Box>

            <Text color="gray.300">•</Text>

            <Text>Open to new opportunities!</Text>
          </HStack>
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
          <Card.Body gap={3}>
            <UserCircleIcon
              size={30}
              weight="duotone"
              color="var(--chakra-colors-purple-500)"
            />
            <Heading size="md">About Me</Heading>
            <Text color="gray.700">
              I'm a full-stack engineer who enjoys building polished and thoughtful
              web experiences. I'm especially drawn to projects where I can combine
              creativity, problem-solving, and my attention to detail.
            </Text>
            <Text color="gray.700">
              My background spans full-stack development, automation, and business, giving me experience
              building technical solutions with both the user and broader project goals in mind.
            </Text>
            <Button
              asChild
              alignSelf="flext-start"
              variant="outline"
              colorPalette="purple"
              rounded="xl"
              maxW="125px"
            >
              <RouterLink to="/about">Read more →</RouterLink>
            </Button>
          </Card.Body>
        </Card.Root>

        <Card.Root id="projects" rounded="2xl" borderColor="purple.100">
          <Card.Body gap={4}>
            <Flex justify="space-between" align="center">
              <HStack gap={2}>
                <StarIcon
                  size={22}
                  weight="duotone"
                  color="var(--chakra-colors-yellow-500)"
                />
                <Heading size="md">Featured Projects</Heading>
              </HStack>
              <Link asChild color="purple.500" fontWeight="bold">
                <RouterLink to="/projects">View all projects →</RouterLink>
              </Link>

            </Flex>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              {featuredProjects.map((project) => (
                <Card.Root key={project.name} overflow="hidden" rounded="xl">
                  {project.image? (
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      h="96px"
                      w="100"
                      objectFit="cover"
                      objectPosition="center 35%"
                    />
                  ) : (
                    <Box h="96px" bg="purple.100" />
                  )}
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
            <CodeIcon
              size={22}
              weight="duotone"
              color="var(--chakra-colors-blue-500)"
            />
            <Heading size="md">My Tech Stack</Heading>

            <Text color="gray.700">
              I work with a mix of front-end, back-end, database, and deployment
              technologies to build complete web applications. You can find a closer
              look at the tools I use and how I use them on my About page.
            </Text>

            <Button
              asChild
              alignSelf="flex-start"
              variant="outline"
              colorPalette="purple"
              rounded="xl"
              width="fit-content"
            >
              <RouterLink to="/about">Explore my tech stack →</RouterLink>
            </Button>
          </Card.Body>
        </Card.Root>

        <Card.Root id="interests" rounded="2xl" borderColor="purple.100">
          <Card.Body gap={5}>
            <HStack gap={2}>
              <HeartIcon
                size={22}
                weight="duotone"
                color="var(--chakra-colors-pink-500)"
              />
              <Heading size="md">Interests</Heading>
            </HStack>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} gap={3}>
              {interests.map((interest) => (
                <Box
                  key={interest.label}
                  position="relative"
                  h="90px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="purple.50"
                  border="1px solid"
                  borderColor="purple.100"
                  rounded="xl"
                  overflow="hidden"
                  cursor="pointer"
                  transition="all 0.2s ease"
                  css={{
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "var(--chakra-colors-purple-300)",
                      boxShadow: "var(--chakra-shadows-sm)",
                    },
                    "&:hover .interest-logo": {
                      opacity: 0,
                      transform: "scale(0.9)",
                    },
                    "&:hover .interest-text": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  }}
                >
                  <Box
                    className="interest-logo"
                    w="52px"
                    h="52px"
                    bg="purple.500"
                    transition="all 0.2s ease"
                    maskImage={`url(${interest.image})`}
                    maskRepeat="no-repeat"
                    maskPosition="center"
                    maskSize="contain"
                    WebkitMaskImage={`url(${interest.image})`}
                    WebkitMaskRepeat="no-repeat"
                    WebkitMaskPosition="center"
                    WebkitMaskSize="contain"
                  />

                  <Stack
                    className="interest-text"
                    position="absolute"
                    inset={0}
                    align="center"
                    justify="center"
                    gap={0}
                    opacity={0}
                    transform="translateY(6px)"
                    pointerEvents="none"
                    transition="all 0.2s ease"
                  >
                    <Text fontWeight="semibold" color="purple.700">
                      {interest.label}
                    </Text>

                    <Text fontSize="xs" color="gray.500">
                      {interest.name}
                    </Text>
                  </Stack>
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
          <HStack gap={2}>
            <SparkleIcon
              size={22}
              weight="duotone"
              color="var(--chakra-colors-yellow-500)"
            />
            <Heading size="md">Let&apos;s build something amazing together</Heading>
          </HStack>
          <Text color="gray.700">
            I'm currently open to new opportunities and exciting projects.
          </Text>
        </Box>

        <HStack gap={3} flexWrap="wrap">
          <Button variant="outline" rounded="xl">
            <Link 
              href="https://github.com/raguevarra"
              target="_blank"
              rel="noreferrer"
              >
              GitHub
            </Link>
          </Button>
          <Button variant="outline" rounded="xl">
            <Link
              href="https://www.linkedin.com/in/raguevarra"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" rounded="xl">
            <Link href="mailto:romanguevarra2003@gmail.com">Email Me</Link>
          </Button>
        </HStack>
      </Flex>
    </>
  );
}

export default Home;