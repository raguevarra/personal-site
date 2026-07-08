export type Project = {
    name: string;
    description: string;
    longDescription: string;
    tags: string[];
    featured?: boolean;
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
};

export const projects: Project[] = [
    {
        name: "Personal Finance Tracker",
        description: "A personal finance tracker built to help households manage expenses, transactions, and financial visibility.",
        longDescription: 
            "Built as a full-stack side project using Next.js, PostgreSQL, Prisma, and TypeScript. The app focuses on household-based finance tracking, transaction management, reusable components, and backend management.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "React"],
        featured: true,
        githubUrl: "https://github.com/raguevarra/financeTracker",
        liveUrl: "",
        image: "/finance_tracker_screenshot.webp",
    },
    {
        name: "Personal Website",
        description: "A portfolio website built to showcase my projects, experience, and technical background.",
        longDescription:
            "Designed and developed with React, TypeScript, Vite, and Chakra UI with a focus on clean layout, responsive design, and reusable components.",
        tags: ["React", "TypeScript", "Vite", "Chakra UI"],
        featured: true,
        githubUrl: "https://github.com/raguevarra/personal-site",
        liveUrl: "",
        image: "",
    },
    {
        name: "Reliable Data Transfer Over UDP",
        description: "A networking project implementing reliable data transfer behaviour over UDP.",
        longDescription: 
            "Built for CS456. Developed sender and receiver logic in Python to simulate reliable transport features over an unreliable protocol, including packet and protocol-level communication flow.",
        tags: ["Python", "Networking", "UDP", "RDT"],
        featured: true,
        githubUrl: "",
        liveUrl: "",
        image: "",
    },
]