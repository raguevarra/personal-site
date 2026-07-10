import {
    Badge,
    Box,
    Button,
    Card,
    Grid,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Stack,
    Text
} from "@chakra-ui/react";

import {
    SiCss,
    SiDocker,
    SiExpress,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiLinux,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiPython,
    SiReact,
    SiTypescript,
    SiVercel,
    SiVite
} from "react-icons/si";

import { Link as RouterLink } from "react-router-dom";

const skillGroups = [
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Python", icon: SiPython },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vite", icon: SiVite },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Linux", icon: SiLinux },
            { name: "Postman", icon: SiPostman },
            { name: "Docker", icon: SiDocker },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];

type Skill = {
    name: string;
    icon: React.ElementType;
};

function SkillIcon({ skill }: { skill: Skill }) {
    return (
        <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "72px", md: "84px" }}
            h={{ base: "72px", md: "84px" }}
            rounded="2xl"
            border="1px solid"
            borderColor="purple.100"
            bg="purple.50"
            overflow="hidden"
            cursor="default"
            tabIndex={0}
            aria-label={skill.name}
            transition="transform 0.2s ease, box-shadow 0.2s ease"
            css={{
                "& .skill-logo": {
                    transition:
                        "filter 0.2s ease, opacity 0.2s ease, transform 0.2s ease",
                },

                "& .skill-label": {
                    opacity: 0,
                    transition: "opacity 0.2s ease",
                },

                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "var(--chakra-shadows-md)",
                },

                "&:hover .skill-logo, &:focus-visible .skill-logo": {
                    filter: "blur(4px)",
                    opacity: 0.25,
                    transform: "scale(1.12)",
                },

                "&:hover .skill-label, &:focus-visible .skill-label": {
                    opacity: 1,
                },
            }}
            _focusVisible={{
                outline: "2px solid",
                outlineColor: "purple.400",
                outlineOffset: "3px",
            }}
        >
            <Icon
                className="skill-logo"
                as={skill.icon}
                boxSize={{ base: 9, md: 11 }}
                color="purple.600"
            />

            <Box
                className="skill-label"
                position="absolute"
                inset={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={2}
                bg="rgba(255, 255, 255, 0.35)"
                backdropFilter="blur(1px)"
            >
                <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="bold"
                    color="purple.800"
                    textAlign="center"
                    lineHeight="short"
                >
                    {skill.name}
                </Text>
            </Box>
        </Box>
    );
}

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
                <Card.Body gap={7} p={{ base: 5, md: 7 }}>
                    <Box>
                        <Heading size="md">Tech I Like Working With</Heading>

                        <Text mt={2} color="gray.600" fontSize="sm">
                            Languages, frameworks, databases, and tools I've used across
                            my work and personal projects.
                        </Text>
                    </Box>

                    <Stack gap={7}>
                        {skillGroups.map((group) => (
                            <Box key={group.title}>
                                <Heading size="sm" mb={4}>
                                    {group.title}
                                </Heading>

                                <SimpleGrid
                                    columns={{
                                        base: 3,
                                        sm: 4,
                                        md: 6,
                                        lg: 8,
                                    }}
                                    gap={4}
                                >
                                    {group.skills.map((skill) =>(
                                        <SkillIcon key={skill.name} skill={skill} />
                                    ))}
                                </SimpleGrid>
                            </Box>
                        ))}
                    </Stack>
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