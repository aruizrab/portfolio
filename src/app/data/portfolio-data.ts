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
    };
    email: string;
    location: string;
    phone: string;
    phoneLink: string;
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
            intro: "The projects listed here are either personal or academic, I cannot disclose details of my professional work. You might notice they're all are about videogames; that's because computer engineering is my profession, but games are my hobby. When I'm done coding for a living, I keep coding for fun.",
            linkLabel: 'View details',
            items: [
                {
                    title: 'GAIDGG',
                    description: "Generative AI-Driven Game Generation. Exploring the integration of AI for revolutionizing the way videogames interact with the player.",
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
            title: "My journey",
            achievementLabel: 'Achievements',
            tasksLabel: 'Responsibilities',
            items: [
                {
                    role: 'Software Engineer',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Jun 2025 - Present',
                    description: 'Stepped up from participating in projects to leading the technical decisions of them.',
                    achievements: [
                        "Lead front-end development of financial platform's",
                    ],
                    tasks: [
                        'Lead software design and architecture decisions.',
                        'Gather business requirements from product owners and translate them into technical requirements',
                        'Manage integrations, deployments and version releases',
                        'Lead code reviews',
                        'Establish development pipelines for dev teams to follow',
                        'Write, refactor, analyze and document code',
                        'Define and write test suites',
                        'Work with agile methodologies',
                        'Mentor junior developers',
                    ]
                },
                {
                    role: 'Junior Software Engineer',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Apr 2022 - May 2025',
                    description: "Most of my experience came from finding myself in the middle of a major bank's large-scale modernization towards new technologies and frameworks.",
                    achievements: [
                        "Participated in the modernization of a major bank's applications and platforms",
                        'Co-designed the technical onboarding program and learning modules for new recruits',
                        'Defined best-practice guidelines for teams'
                    ],
                    tasks: [
                        'Contribute to design and architecture decisions',
                        'Gather and refine requirements from product owners',
                        'Manage integrations, deployments and version releases',
                        'Lead code reviews',
                        'Write, refactor, analyze and document code',
                        'Define and write test suites',
                        'Work with agile methodologies',
                    ]
                },
                {
                    role: 'Software Developer',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar',
                    period: 'Oct 2021 - Mar 2022',
                    description: 'Proving myself from the start.',
                    achievements: [
                        'Singlehandedly designed, developed and delivered a leave management platform for HR.'
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
                    details: 'Gameplay programming, production workflows, and collaborative projects.'
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
                phone: 'Phone'
            },
            email: 'a.ruiz.rabasseda@gmail.com',
            location: 'Barcelona, Spain / Bonn, Germany',
            phone: '+34 656 974 640',
            phoneLink: '+34656974640',
            socials: [
                { label: 'LinkedIn', url: 'https://linkedin.com/in/aruizrab' },
                { label: 'GitHub', url: 'https://github.com/aruizrab' }
            ]
        },
        blog: {
            eyebrow: 'Writing',
            title: 'Blog',
            description: 'Notes on anything I feel like talking about.',
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
            summary: 'Más de 4 años de experiencia en la industria tecnológica y doble grado en Ingeniería Informática y Producción de Videojuegos.',
            availability: 'Enfocado en la belleza de las soluciones simples para problemas complejos.',
            focusAreas: ['Desarrollo Full-Stack', 'Arquitectura de Software', 'DevOps', 'Liderazgo Técnico', 'Entrega Ágil', 'Versatilidad y Multidisciplina'],
            ctaPrimary: 'Leer el blog',
            ctaSecondary: 'Ver proyectos'
        },
        projects: {
            eyebrow: 'Proyectos',
            title: 'En qué he estado trabajando',
            intro: 'Los proyectos listados aquí son personales o académicos, ya que no puedo revelar detalles de mi trabajo profesional. Notarás que todos giran en torno a los videojuegos; la ingeniería informática es mi profesión, pero los juegos son mi afición. Cuando termino de programar para ganarme la vida, sigo programando por diversión.',
            linkLabel: 'Ver detalles',
            items: [
                {
                    title: 'GAIDGG',
                    description: 'Generación de Juegos Impulsada por IA Generativa. Explorando la integración de la IA para revolucionar la forma en que los videojuegos interactúan con el jugador.',
                    tech: ['IA Generativa', 'Unity', 'C#'],
                    link: './blog/gaidgg'
                },
                {
                    title: 'SODD Framework',
                    description: 'Framework de ScriptableObject Driven Development para Unity que agiliza la arquitectura de gameplay para diseñadores e ingenieros.',
                    tech: ['Unity', 'C#', 'Patrones de diseño'],
                    link: './blog/sodd-framework'
                },
                {
                    title: 'Heist Academy',
                    description: 'Un juego 3D de puzles y sigilo producido junto a siete compañeros en la universidad, donde actué como programador principal. Fue un camino lleno de baches.',
                    tech: ['Unity', 'C#', 'Arquitectura de Juegos'],
                    link: './blog/heist-academy'
                }
            ]
        },
        experience: {
            eyebrow: 'Experiencia',
            title: 'Mi trayectoria',
            achievementLabel: 'Logros',
            tasksLabel: 'Responsabilidades',
            items: [
                {
                    role: 'Ingeniero de software',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Híbrido',
                    period: 'Jun 2025 - Actualidad',
                    description: 'Pasé de participar en proyectos a liderar sus decisiones técnicas.',
                    achievements: [
                        'Liderar el desarrollo front-end de plataformas financieras',
                    ],
                    tasks: [
                        'Liderar decisiones de diseño y arquitectura de software.',
                        'Recopilar requisitos de negocio de los product owners y traducirlos a requisitos técnicos',
                        'Gestionar integraciones, despliegues y lanzamientos de versiones',
                        'Liderar revisiones de código',
                        'Establecer pipelines de desarrollo para los equipos',
                        'Escribir, refactorizar, analizar y documentar código',
                        'Definir y escribir suites de pruebas',
                        'Trabajar con metodologías ágiles',
                        'Mentorizar a desarrolladores junior',
                    ]
                },
                {
                    role: 'Ingeniero de software junior',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Híbrido',
                    period: 'Abr 2022 - May 2025',
                    description: 'La mayor parte de mi experiencia proviene de encontrarme en medio de la modernización a gran escala de un banco importante hacia nuevas tecnologías y frameworks.',
                    achievements: [
                        'Participé en la modernización de aplicaciones y plataformas de un gran banco',
                        'Co-diseñé el programa de onboarding técnico y módulos de aprendizaje para nuevas incorporaciones',
                        'Definí guías de mejores prácticas para los equipos'
                    ],
                    tasks: [
                        'Contribuir a decisiones de diseño y arquitectura',
                        'Recopilar y refinar requisitos con product owners',
                        'Gestionar integraciones, despliegues y lanzamientos de versiones',
                        'Liderar revisiones de código',
                        'Escribir, refactorizar, analizar y documentar código',
                        'Definir y escribir suites de pruebas',
                        'Trabajar con metodologías ágiles',
                    ]
                },
                {
                    role: 'Desarrollador de software',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar',
                    period: 'Oct 2021 - Mar 2022',
                    description: 'Demostrando mi valía desde el principio.',
                    achievements: [
                        'Diseñé, desarrollé y entregué en solitario una plataforma de gestión de vacaciones para RR.HH.'
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
                phone: 'Teléfono'
            },
            email: 'a.ruiz.rabasseda@gmail.com',
            location: 'Barcelona, España / Bonn, Alemania',
            phone: '+34 656 974 640',
            phoneLink: '+34656974640',
            socials: [
                { label: 'LinkedIn', url: 'https://linkedin.com/in/aruizrab' },
                { label: 'GitHub', url: 'https://github.com/aruizrab' }
            ]
        },
        blog: {
            eyebrow: 'Blog',
            title: 'Escritura',
            description: 'Notas sobre cualquier cosa de la que me apetezca hablar.',
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
            summary: 'Über 4 Jahre Erfahrung in der Tech-Branche und ein Doppelabschluss in Informatik und Videospielproduktion.',
            availability: 'Fokussiert auf die Schönheit einfacher Lösungen für komplexe Probleme.',
            focusAreas: ['Full-Stack-Entwicklung', 'Softwarearchitektur', 'DevOps', 'Technische Führung', 'Agile Delivery', 'Vielseitigkeit & Interdisziplinarität'],
            ctaPrimary: 'Zum Blog',
            ctaSecondary: 'Zu den Projekten'
        },
        projects: {
            eyebrow: 'Projekte',
            title: 'Was ich so mache',
            intro: 'Die hier aufgeführten Projekte sind entweder persönlich oder akademisch, da ich keine Details meiner beruflichen Arbeit preisgeben darf. Vielleicht fällt auf, dass sich alles um Videospiele dreht; Informatik ist mein Beruf, aber Spiele sind mein Hobby. Wenn ich mit dem Programmieren für den Lebensunterhalt fertig bin, programmiere ich zum Spaß weiter.',
            linkLabel: 'Details ansehen',
            items: [
                {
                    title: 'GAIDGG',
                    description: 'Generative AI-Driven Game Generation. Erforschung der Integration von KI, um die Interaktion von Videospielen mit dem Spieler zu revolutionieren.',
                    tech: ['Generative KI', 'Unity', 'C#'],
                    link: './blog/gaidgg'
                },
                {
                    title: 'SODD Framework',
                    description: 'ScriptableObject Driven Development Framework für Unity, das die Gameplay-Architektur für Designer und Entwickler vereinfacht.',
                    tech: ['Unity', 'C#', 'Designmuster'],
                    link: './blog/sodd-framework'
                },
                {
                    title: 'Heist Academy',
                    description: 'Ein 3D-Puzzle- und Stealth-Spiel, das ich an der Universität zusammen mit sieben Teammitgliedern produziert habe, wobei ich als Lead Programmer fungierte. Es war eine holprige Fahrt.',
                    tech: ['Unity', 'C#', 'Spielarchitektur'],
                    link: './blog/heist-academy'
                }
            ]
        },
        experience: {
            eyebrow: 'Erfahrung',
            title: 'Mein Werdegang',
            achievementLabel: 'Erfolge',
            tasksLabel: 'Aufgaben',
            items: [
                {
                    role: 'Softwareingenieur',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Jun 2025 - Heute',
                    description: 'Vom Projektteilnehmer zum technischen Entscheidungsträger aufgestiegen.',
                    achievements: [
                        'Leitung der Frontend-Entwicklung von Finanzplattformen',
                    ],
                    tasks: [
                        'Leitung von Software-Design- und Architekturentscheidungen.',
                        'Geschäftsanforderungen von Product Ownern sammeln und in technische Anforderungen übersetzen',
                        'Management von Integrationen, Deployments und Versionsfreigaben',
                        'Leitung von Code-Reviews',
                        'Etablierung von Entwicklungspipelines für die Teams',
                        'Code schreiben, refaktorisieren, analysieren und dokumentieren',
                        'Test-Suites definieren und schreiben',
                        'Arbeiten mit agilen Methoden',
                        'Mentoring von Junior-Entwicklern',
                    ]
                },
                {
                    role: 'Junior Software Engineer',
                    company: 'NTT DATA Europe & Latam',
                    location: 'Barcelona · Hybrid',
                    period: 'Apr 2022 - Mai 2025',
                    description: 'Der Großteil meiner Erfahrung stammt aus der groß angelegten Modernisierung einer Großbank hin zu neuen Technologien und Frameworks.',
                    achievements: [
                        'Beteiligt an der Modernisierung von Anwendungen und Plattformen einer Großbank',
                        'Mitgestaltung des technischen Onboarding-Programms und der Lernmodule für neue Mitarbeiter',
                        'Definition von Best-Practice-Richtlinien für Teams'
                    ],
                    tasks: [
                        'Beitrag zu Design- und Architekturentscheidungen',
                        'Anforderungen mit Product Ownern sammeln und verfeinern',
                        'Management von Integrationen, Deployments und Versionsfreigaben',
                        'Leitung von Code-Reviews',
                        'Code schreiben, refaktorisieren, analysieren und dokumentieren',
                        'Test-Suites definieren und schreiben',
                        'Arbeiten mit agilen Methoden'
                    ]
                },
                {
                    role: 'Softwareentwickler',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar',
                    period: 'Okt 2021 - Mär 2022',
                    description: 'Von Anfang an bewiesen.',
                    achievements: [
                        'Eigenständiges Design, Entwicklung und Bereitstellung einer Urlaubsverwaltungsplattform für die Personalabteilung.'
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
                phone: 'Telefon'
            },
            email: 'a.ruiz.rabasseda@gmail.com',
            location: 'Barcelona, Spanien / Bonn, Deutschland',
            phone: '+34 656 974 640',
            phoneLink: '+34656974640',
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
