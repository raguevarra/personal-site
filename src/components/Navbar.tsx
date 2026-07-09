import { Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#9f7aea" : "inherit",
  fontWeight: isActive ? "700" : "400",
});

function Navbar() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      bg="white"
      border="1px solid"
      borderColor="purple.100"
      rounded="2xl"
      px={{ base: 4, md: 8 }}
      py={4}
      shadow="sm"
      mb={10}
    >
      <HStack gap={3}>
        <Text fontSize="2xl">⭐</Text>
        <Text fontWeight="bold" fontSize="lg">
          Roman Guevarra
        </Text>
      </HStack>

      <HStack display={{ base: "none", md: "flex" }} gap={8} fontSize="sm">
        <Link asChild>
          <NavLink to="/" style={navLinkStyles}>
            Home
          </NavLink>
        </Link>

        <Link asChild>
          <NavLink to="/projects" style={navLinkStyles}>
            Projects
          </NavLink>
        </Link>

        <Link asChild>
          <NavLink to ="/experience" style={navLinkStyles}>
            Experience
          </NavLink>
        </Link>

        <Link asChild>
          <NavLink to="/contact" style={navLinkStyles}>
            Contact
          </NavLink>
        </Link>
      </HStack>

      <Button asChild variant="outline" colorPalette="purple" rounded="xl">
        <a href="/Resume_Dev.pdf" download>
          Download Resume
        </a>
      </Button>
    </Flex>
  );
}

export default Navbar;