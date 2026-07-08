export type Experience = {
    company: string;
    role: string;
    location: string;
    date: string;
    description: string;
    bullets: string[];
    tags: string[];
    logo?: string;
}

export const experience: Experience[] = [
    {
        company: "Civiconnect",
        role: "Web Development & Cloud Deployment Associate",
        location: "Beamsville, ON (Remote)",
        date: "Jan. 2023 - Apr. 2023",
        description:
            "Developed and deployed client-facing web applications with a focus on usability, responsive design, and iterative improvements based on client needs.",
        bullets: [
            "Built and improved responsive web interfaces using modern frontend tools.",
            "Collaborated with clients and team members to turn requirements into functional features.",
            "Supported deployment workflows and helped maintain clean, usable application experiences.",
        ],
        tags: ["Webflow", "Figma", "Web Development", "Client Work", "Teamwork", "Communication"],
        logo: "civiconnect.webp",
    },
    {
        company: "Billyard Insurance Group",
        role: "Automation Engineer",
        location: "Welland, ON (Hybrid)",
        date: "Jan. 2024 - Apr. 2024 | Apr. 2025 - Apr. 2025",
        description:
            "Designed automation workflows and internal tracking tools to improve visibility into business processes, Jira requests, and Power Automate workflows.",
        bullets: [
            "Built an internal automation tracking dashboard concept to monitor Jira requests, workflow statuses, ownership, and process visibility.",
            "Worked with Power Automate workflows to support internal business processes and reduce repetitive manual tasks.",
            "Organized automation-related data into a clearer tracking structure so stakeholders could better understand progress, blockers, and completed work.",
        ],
        tags: ["Power Automate", "Jira", "Automation", "React", "TypeScript"],
        logo: "/billyardlogo.webp",
    }
]