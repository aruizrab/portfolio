export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

export interface Experience {
    role: string;
    company: string;
    start: string;
    end: string;
    description: string;
    highlights: string[];
}

export interface Education {
    school: string;
    program: string;
    start: string;
    end: string;
    details: string;
}

export const HERO = {
    name: 'Alex Ruiz',
    role: 'Software Engineer',
    location: 'Barcelona, Spain / Bonn, Germany',
    summary: 'Software Engineer with dual Computer Engineering and Video Game Design degrees, leading the front-end modernization of a financial platform while advising parallel squads.',
    availability: 'Focused on secure, scalable front-end systems for high-impact teams.'
};

export const PROJECTS: Project[] = [
    {
        title: 'Debt Management Platform Modernization',
        description: 'Led the redesign and rollout of a major bank debt management platform, aligning architecture, CI/CD, and mentorship for multiple squads.',
        tech: ['React', 'TypeScript', 'Redux', 'Node', 'CI/CD']
    },
    {
        title: 'SODD Framework',
        description: 'ScriptableObject Driven Development framework for Unity that streamlines gameplay architecture for designers and engineers.',
        tech: ['Unity', 'C#', 'Design Patterns'],
        link: 'https://github.com/aruizrab/sodd-unity-framework'
    },
    {
        title: 'Heist Academy',
        description: 'Puzzle and stealth 3D game built with seven teammates during TecnoCampus studies, showcasing Unity tooling and gameplay programming.',
        tech: ['Unity', 'C#', 'Game Design']
    }
];

export const EXPERIENCE: Experience[] = [
    {
        role: 'Software Engineer',
        company: 'NTT DATA Europe and Latam',
        start: 'Jun 2025',
        end: 'Present',
        description: 'Leading the front-end track of a large bank debt management platform while coordinating integrations and releases.',
        highlights: [
            'Lead software design decisions and translate business requirements into technical plans',
            'Own integrations, deployments, and version release cadence for the platform',
            'Establish development pipelines, code reviews, and mentoring for junior engineers'
        ]
    },
    {
        role: 'Junior Software Engineer',
        company: 'NTT DATA Europe and Latam',
        start: 'Apr 2022',
        end: 'May 2025',
        description: 'Supported multiple banking migrations including online shop and loan request platforms while co-designing onboarding programs.',
        highlights: [
            'Migrated core banking experiences across React, Node, and Java stacks',
            'Co-created the technical onboarding program and best-practice guidelines',
            'Maintained CI/CD, test suites, and documentation across squads'
        ]
    },
    {
        role: 'Software Developer',
        company: 'Conservas Dani S.A.U.',
        start: 'Oct 2021',
        end: 'Mar 2022',
        description: 'Designed and delivered a leave management platform for HR while supporting day-to-day IT needs.',
        highlights: [
            'Built and maintained the HR platform end-to-end using Python, Flask, and MongoDB',
            'Handled user feedback loops, new features, and bug fixes',
            'Provided IT support and onboarding for internal stakeholders'
        ]
    }
];

export const EDUCATION: Education[] = [
    {
        school: 'TecnoCampus',
        program: 'Bachelor in Computer Engineering and Information Systems',
        start: '2018',
        end: '2025',
        details: 'Curriculum focused on engineering fundamentals, distributed systems, and applied software projects.'
    },
    {
        school: 'TecnoCampus',
        program: 'Bachelor in Video Game Design and Production',
        start: '2018',
        end: '2025',
        details: 'Specialized in gameplay programming, Unity development, and collaborative production workflows.'
    }
];

export const CONTACT = {
    email: 'a.ruiz.rabasseda@gmail.com',
    location: 'Barcelona, Spain / Bonn, Germany',
    availabilityNote: 'Let us collaborate on secure and scalable front-end systems.',
    socials: [
        { label: 'GitHub', url: 'https://github.com/aruizrab' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/aruizrab' },
        { label: 'Website', url: 'https://github.com/aruizrab' }
    ]
};
