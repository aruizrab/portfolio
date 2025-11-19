export type LanguageCode = 'en' | 'es' | 'de';

export interface NavigationLabels {
    projects: string;
    experience: string;
    blog: string;
    contact: string;
}

export interface HeroContent {
    name: string;
    role: string;
    location: string;
    heading: string;
    summary: string;
    availability: string;
    focusAreas: string[];
    ctaPrimary: string;
    ctaSecondary: string;
}

export interface ProjectCard {
    title: string;
    description: string;
    tech: string[];
    link?: string;
}

export interface ProjectsSection {
    eyebrow: string;
    title: string;
    intro: string;
    linkLabel: string;
    items: ProjectCard[];
}

export interface ExperienceItem {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    tasks: string[];
}

export interface ExperienceSection {
    eyebrow: string;
    title: string;
    achievementLabel: string;
    tasksLabel: string;
    items: ExperienceItem[];
}

export interface EducationItem {
    school: string;
    program: string;
    period: string;
    details: string;
}

export interface EducationSection {
    eyebrow: string;
    title: string;
    items: EducationItem[];
}

export interface ContactContent {
    eyebrow: string;
    title: string;
    note: string;
    labels: {
        email: string;
        location: string;
        phone: string;
        website: string;
    };
    email: string;
    location: string;
    phone: string;
    phoneLink: string;
    website: string;
    socials: { label: string; url: string }[];
}

export interface BlogContent {
    eyebrow: string;
    title: string;
    description: string;
    backLabel: string;
    missingMessage: string;
}

export interface PortfolioData {
    navigation: NavigationLabels;
    hero: HeroContent;
    projects: ProjectsSection;
    experience: ExperienceSection;
    education: EducationSection;
    contact: ContactContent;
    blog: BlogContent;
}

export const PORTFOLIO_CONTENT: Record<LanguageCode, PortfolioData> = {
    en: {
        navigation: {
            projects: 'Projects',
            experience: 'Experience',
            blog: 'Blog',
            contact: 'Contact'
        },
        hero: {
            name: 'Alex Ruiz',
            role: 'Software Engineer',
            location: 'Barcelona, Spain / Bonn, Germany',
            heading: "Hi, I'm Alex Ruiz.",
            summary: '+4 years of experience in the tech industry and a dual Computer Engineering and Video Game Production degrees.',
            availability: 'Focused on the beauty of simple solutions for complex problems.',
            focusAreas: ['Full-Stack Development', "Software Architecture", 'DevOps', 'Technical Leadership', 'Agile Delivery', 'Versatility & Cross-Discipline'],
            ctaPrimary: 'Read the blog',
            ctaSecondary: 'See projects'
        },
        projects: {
            eyebrow: 'Projects',
            title: "What I've been up to",
            intro: 'Product work blending leadership, design systems, and hands-on engineering.',
            linkLabel: 'View details',
            items: [
                {
                    title: 'GAIDGG',
                    description: "Generative AI-Driven Game Generation. My thesis for the computer engineering side of my double degree, where I turned the virtual environment of a videogame into a sandbox for experimenting with AI's potential for revolutionizing the way videogames interact with the player.",
                    tech: ['Generative AI', 'Unity', 'C#'],
                    link: './blog/gaidgg'
                },
                {
                    title: 'SODD Framework',
                    description: 'ScriptableObject Driven Development framework for Unity that streamlines gameplay architecture for designers and engineers.',
                    tech: ['Unity', 'C#', 'Design Patterns'],
                    link: './blog/sodd-framework'
                },
                {
                    title: 'Heist Academy',
                    description: 'A puzzle and stealth 3D game produced alongside seven team members back in university, where I acted as lead programmer. It was a bumpy ride.',
                    tech: ['Unity', 'C#', 'Game Architecture'],
                    link: './blog/heist-academy'
                }
            ]
        },
        experience: {
            eyebrow: 'Experience',
            title: "What I'm shipping",
            achievementLabel: 'Achievements',
            tasksLabel: 'Responsibilities',
            items: [
                {
                    role: 'Software Engineer',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Jun 2025 - Present',
                    description: 'Leading the front-end track of a large bank debt management platform while coordinating integrations and releases.',
                    achievements: [
                        "Lead front-end development of a major bank's debt management platform",
                        'Drive architecture decisions aligned with regulatory requirements',
                        'Mentor developers and keep delivery quality consistent across teams'
                    ],
                    tasks: [
                        'Translate business requirements into technical plans',
                        'Manage integrations, deployments, and version releases',
                        'Establish CI/CD workflows, code reviews, and test suites',
                        'Analyze, document, and refactor codebases',
                        'Mentor junior developers and support agile ceremonies'
                    ]
                },
                {
                    role: 'Junior Software Engineer',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Apr 2022 - May 2025',
                    description: 'Supported migrations of the bank online shop and loan request platforms while co-designing the onboarding program for new engineers.',
                    achievements: [
                        "Participated in the migration of the bank's online shop and loan platforms",
                        'Co-designed the technical onboarding program and learning modules',
                        'Helped define best-practice guidelines for new squads'
                    ],
                    tasks: [
                        'Contribute to design and architecture decisions',
                        'Gather and refine requirements from product owners',
                        'Manage deployments, code reviews, and automation pipelines',
                        'Maintain documentation, tests, and monitoring with ELK/Jenkins'
                    ]
                },
                {
                    role: 'Software Developer (Intern)',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar',
                    period: 'Oct 2021 - Mar 2022',
                    description: 'Designed and developed a leave management platform for HR while providing IT support.',
                    achievements: [
                        'Delivered the HR leave platform end-to-end with Python and Flask'
                    ],
                    tasks: [
                        'Maintain software based on user feedback',
                        'Add new features and fix bugs quickly',
                        'Provide day-to-day IT support for employees'
                    ]
                }
            ]
        },
        education: {
            eyebrow: 'Education',
            title: 'Dual-degree background',
            items: [
                {
                    school: 'TecnoCampus',
                    program: 'BSc Computer Engineering and Information Systems',
                    period: '2018 - 2025',
                    details: 'Engineering fundamentals, distributed systems, and applied software projects.'
                },
                {
                    school: 'TecnoCampus',
                    program: 'BSc Video Game Design and Production',
                    period: '2018 - 2025',
                    details: 'Gameplay programming, Unity production workflows, and collaborative projects.'
                }
            ]
        },
        contact: {
            eyebrow: 'Contact',
            title: "Let's build together",
            note: 'Open to collaborating remotely or on-site across Spain and Germany.',
            labels: {
                email: 'Email',
                location: 'Location',
                phone: 'Phone',
                website: 'Website'
            },
            email: 'a.ruiz.rabasseda@gmail.com',
            location: 'Barcelona, Spain / Bonn, Germany',
            phone: '+34 656 974 640',
            phoneLink: '+34656974640',
            website: 'https://github.com/aruizrab',
            socials: [
                { label: 'LinkedIn', url: 'https://linkedin.com/in/aruizrab' },
                { label: 'GitHub', url: 'https://github.com/aruizrab' }
            ]
        },
        blog: {
            eyebrow: 'Writing',
            title: 'Blog',
            description: 'Field notes on modernization, tooling, and deployment workflows.',
            backLabel: '<- Back to posts',
            missingMessage: 'That post could not be found. Return to the blog list.'
        }
    },
    es: {
        navigation: {
            projects: 'Proyectos',
            experience: 'Experiencia',
            blog: 'Blog',
            contact: 'Contacto'
        },
        hero: {
            name: 'Alex Ruiz',
            role: 'Ingeniero de software',
            location: 'Barcelona, España / Bonn, Alemania',
            heading: 'Hola, soy Alex Ruiz.',
            summary: 'Ingeniero con doble grado en Informática y Diseño de Videojuegos, liderando la modernización front-end de una plataforma financiera y apoyando a otros equipos.',
            availability: 'Apasionado por soluciones seguras y escalables para equipos con alto impacto.',
            focusAreas: ['Modernización front-end', 'React y TypeScript', 'Liderazgo CI/CD', 'Mentoría técnica', 'Sistemas de diseño'],
            ctaPrimary: 'Leer el blog',
            ctaSecondary: 'Ver proyectos'
        },
        projects: {
            eyebrow: 'Proyectos',
            title: 'Iniciativas recientes',
            intro: 'Trabajo de producto que combina liderazgo técnico y ejecución práctica.',
            linkLabel: 'Ver detalles',
            items: [
                {
                    title: 'Modernización de gestión de deuda',
                    description: 'Dirigí el rediseño y despliegue de la plataforma de gestión de deuda de un gran banco, alineando arquitectura, CI/CD y mentoría.',
                    tech: ['React', 'TypeScript', 'Redux', 'Node', 'CI/CD']
                },
                {
                    title: 'SODD Framework',
                    description: 'Framework de ScriptableObject Driven Development para Unity que agiliza la arquitectura de gameplay para diseñadores e ingenieros.',
                    tech: ['Unity', 'C#', 'Patrones de diseño'],
                    link: 'https://github.com/aruizrab/sodd-unity-framework'
                },
                {
                    title: 'Heist Academy',
                    description: 'Juego 3D de puzles e infiltración desarrollado con un equipo de TecnoCampus, demostrando dominio de Unity.',
                    tech: ['Unity', 'C#', 'Diseño de juegos']
                }
            ]
        },
        experience: {
            eyebrow: 'Experiencia',
            title: 'Lo que estoy construyendo',
            achievementLabel: 'Logros',
            tasksLabel: 'Responsabilidades',
            items: [
                {
                    role: 'Ingeniero de software',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Híbrido',
                    period: 'Jun 2025 - Actualidad',
                    description: 'Lidero la rama front-end de una plataforma bancaria de gestión de deuda coordinando integraciones y entregas.',
                    achievements: [
                        'Encabecé el desarrollo front-end de la plataforma de deuda del banco',
                        'Definí decisiones arquitectónicas alineadas con normativas',
                        'Mentoricé a desarrolladores y aseguré la calidad de entrega'
                    ],
                    tasks: [
                        'Traducir requisitos de negocio en planes técnicos',
                        'Gestionar integraciones, despliegues y versiones',
                        'Establecer flujos CI/CD, revisiones y suites de pruebas',
                        'Analizar, documentar y refactorizar código',
                        'Acompañar a perfiles junior y apoyar metodologías ágiles'
                    ]
                },
                {
                    role: 'Ingeniero de software junior',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Híbrido',
                    period: 'Abr 2022 - May 2025',
                    description: 'Apoyé migraciones del e-commerce y la plataforma de préstamos del banco, además de co-diseñar el onboarding técnico.',
                    achievements: [
                        'Participé en la migración de la tienda online y la plataforma de préstamos',
                        'Co-diseñé el programa de onboarding y módulos de formación',
                        'Definí guías de buenas prácticas para nuevos equipos'
                    ],
                    tasks: [
                        'Contribuir a decisiones de diseño y arquitectura',
                        'Recopilar requisitos con product owners',
                        'Gestionar despliegues, revisiones y pipelines',
                        'Mantener documentación, pruebas y monitorización'
                    ]
                },
                {
                    role: 'Desarrollador de software (prácticas)',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar',
                    period: 'Oct 2021 - Mar 2022',
                    description: 'Diseñé y desarrollé una plataforma de gestión de vacaciones para RR.HH. ofreciendo soporte TI diario.',
                    achievements: [
                        'Entregué la plataforma de RR.HH. con Python y Flask'
                    ],
                    tasks: [
                        'Mantener el software según feedback',
                        'Añadir nuevas funcionalidades y corregir errores',
                        'Dar soporte TI a empleados'
                    ]
                }
            ]
        },
        education: {
            eyebrow: 'Formación',
            title: 'Doble titulación',
            items: [
                {
                    school: 'TecnoCampus',
                    program: 'Grado en Ingeniería Informática y Sistemas de Información',
                    period: '2018 - 2025',
                    details: 'Fundamentos de ingeniería, sistemas distribuidos y proyectos aplicados.'
                },
                {
                    school: 'TecnoCampus',
                    program: 'Grado en Diseño y Producción de Videojuegos',
                    period: '2018 - 2025',
                    details: 'Programación de gameplay, producción en Unity y proyectos colaborativos.'
                }
            ]
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Construyamos juntos',
            note: 'Disponible para colaborar en remoto o presencial entre España y Alemania.',
            labels: {
                email: 'Correo',
                location: 'Ubicación',
                phone: 'Teléfono',
                website: 'Sitio web'
            },
            email: 'a.ruiz.rabasseda@gmail.com',
            location: 'Barcelona, España / Bonn, Alemania',
            phone: '+34 656 974 640',
            phoneLink: '+34656974640',
            website: 'https://github.com/aruizrab',
            socials: [
                { label: 'LinkedIn', url: 'https://linkedin.com/in/aruizrab' },
                { label: 'GitHub', url: 'https://github.com/aruizrab' }
            ]
        },
        blog: {
            eyebrow: 'Blog',
            title: 'Escritura',
            description: 'Notas sobre modernización, herramientas y despliegues.',
            backLabel: '<- Volver al listado',
            missingMessage: 'No pudimos encontrar el artículo. Vuelve al blog.'
        }
    },
    de: {
        navigation: {
            projects: 'Projekte',
            experience: 'Erfahrung',
            blog: 'Blog',
            contact: 'Kontakt'
        },
        hero: {
            name: 'Alex Ruiz',
            role: 'Softwareingenieur',
            location: 'Barcelona, Spanien / Bonn, Deutschland',
            heading: 'Hallo, ich bin Alex Ruiz.',
            summary: 'Softwareingenieur mit Doppelstudium in Informatik und Game Design. Ich führe die Modernisierung einer Finanzplattform an und unterstütze parallele Teams.',
            availability: 'Ich arbeite an sicheren, skalierbaren Lösungen für Teams mit hoher Wirkung.',
            focusAreas: ['Modernisierung von Frontends', 'React und TypeScript', 'CI/CD-Führung', 'Technisches Mentoring', 'Designsysteme'],
            ctaPrimary: 'Zum Blog',
            ctaSecondary: 'Zu den Projekten'
        },
        projects: {
            eyebrow: 'Projekte',
            title: 'Aktuelle Initiativen',
            intro: 'Produktarbeit, die technische Führung mit praktischer Umsetzung verbindet.',
            linkLabel: 'Details ansehen',
            items: [
                {
                    title: 'Modernisierung der Schuldenplattform',
                    description: 'Leitete das Redesign und den Rollout der Schuldenplattform einer Großbank inklusive Architektur, CI/CD und Mentoring.',
                    tech: ['React', 'TypeScript', 'Redux', 'Node', 'CI/CD']
                },
                {
                    title: 'SODD Framework',
                    description: 'ScriptableObject Driven Development Framework für Unity, das die Gameplay-Architektur für Designer und Entwickler vereinfacht.',
                    tech: ['Unity', 'C#', 'Designmuster'],
                    link: 'https://github.com/aruizrab/sodd-unity-framework'
                },
                {
                    title: 'Heist Academy',
                    description: '3D-Puzzle- und Stealth-Spiel, das mit einem TecnoCampus-Team entwickelt wurde und Unity-Expertise zeigt.',
                    tech: ['Unity', 'C#', 'Spieldesign']
                }
            ]
        },
        experience: {
            eyebrow: 'Erfahrung',
            title: 'Woran ich arbeite',
            achievementLabel: 'Erfolge',
            tasksLabel: 'Aufgaben',
            items: [
                {
                    role: 'Softwareingenieur',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Jun 2025 - Heute',
                    description: 'Verantworte das Frontend einer großen Bankplattform für Schuldenmanagement und koordiniere Integrationen sowie Releases.',
                    achievements: [
                        'Frontendentwicklung der Schuldenplattform angeführt',
                        'Architekturentscheidungen mit regulatorischen Vorgaben abgestimmt',
                        'Teams betreut und Codequalität abgesichert'
                    ],
                    tasks: [
                        'Geschäftsanforderungen in technische Pläne übersetzen',
                        'Integrationen, Deployments und Versionen steuern',
                        'CI/CD-Pipelines, Reviews und Tests etablieren',
                        'Code analysieren, dokumentieren und refaktorieren',
                        'Junioren coachen und agile Prozesse begleiten'
                    ]
                },
                {
                    role: 'Junior Software Engineer',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Apr 2022 - Mai 2025',
                    description: 'Unterstützte die Migration des Online-Shops und der Kreditplattform und gestaltete das technische Onboarding mit.',
                    achievements: [
                        'Migration der Shop- und Kreditplattform unterstützt',
                        'Onboarding-Programm und Lernmodule mitgestaltet',
                        'Best-Practice-Guidelines für neue Teams erstellt'
                    ],
                    tasks: [
                        'An Architektur- und Designentscheidungen mitwirken',
                        'Anforderungen mit Product Ownern abstimmen',
                        'Deployments, Reviews und Pipelines betreuen',
                        'Dokumentation, Tests und Monitoring pflegen'
                    ]
                },
                {
                    role: 'Softwareentwickler (Praktikum)',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar',
                    period: 'Okt 2021 - Mär 2022',
                    description: 'Entwickelte eine Urlaubsverwaltungsplattform für HR und übernahm IT-Support.',
                    achievements: [
                        'HR-Plattform komplett mit Python und Flask umgesetzt'
                    ],
                    tasks: [
                        'Software nach Feedback pflegen',
                        'Neue Funktionen liefern und Bugs beheben',
                        'IT-Support für Mitarbeitende leisten'
                    ]
                }
            ]
        },
        education: {
            eyebrow: 'Ausbildung',
            title: 'Doppelabschluss',
            items: [
                {
                    school: 'TecnoCampus',
                    program: 'Bachelor Informatik und Informationssysteme',
                    period: '2018 - 2025',
                    details: 'Grundlagen der Informatik, verteilte Systeme und praxisnahe Projekte.'
                },
                {
                    school: 'TecnoCampus',
                    program: 'Bachelor Game Design und Produktion',
                    period: '2018 - 2025',
                    details: 'Gameplay-Programmierung, Unity-Produktion und Teamarbeit.'
                }
            ]
        },
        contact: {
            eyebrow: 'Kontakt',
            title: 'Lass uns zusammenarbeiten',
            note: 'Offen für Remote- oder Vor-Ort-Zusammenarbeit zwischen Spanien und Deutschland.',
            labels: {
                email: 'E-Mail',
                location: 'Standort',
                phone: 'Telefon',
                website: 'Webseite'
            },
            email: 'a.ruiz.rabasseda@gmail.com',
            location: 'Barcelona, Spanien / Bonn, Deutschland',
            phone: '+34 656 974 640',
            phoneLink: '+34656974640',
            website: 'https://github.com/aruizrab',
            socials: [
                { label: 'LinkedIn', url: 'https://linkedin.com/in/aruizrab' },
                { label: 'GitHub', url: 'https://github.com/aruizrab' }
            ]
        },
        blog: {
            eyebrow: 'Blog',
            title: 'Notizen',
            description: 'Gedanken zu Modernisierung, Tooling und Deployments.',
            backLabel: '<- Zurück zur Übersicht',
            missingMessage: 'Beitrag nicht gefunden. Zurück zur Blogliste.'
        }
    }
};
