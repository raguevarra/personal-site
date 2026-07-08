import type { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <Box minH="100vh" bg="#fbf9ff" color="#24213a">
            <Container maxW="7xl" py={6}>
                <Navbar />
                <Box as="main">{children}</Box>
            </Container>
        </Box>
    );
}

export default Layout;