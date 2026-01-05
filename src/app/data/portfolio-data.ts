export type LanguageCode = 'en' | 'es' | 'de';

export interface NavigationLabels {
    projects: string;
    experience: string;
    skills: string;
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
    bullets: string[];
}

export interface ExperienceSection {
    eyebrow: string;
    title: string;
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

export interface SkillItem {
    name: string;
    icon: string;
}

export interface SkillsSection {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: SkillItem[];
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
    phones: { display: string; link: string }[];
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
    skills: SkillsSection;
    contact: ContactContent;
    blog: BlogContent;
}

const SKILLS_LIST: SkillItem[] = [
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
    { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
    { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg' },
    { name: 'OpenRouter', icon: 'assets/icons/openrouter.svg' },
    { name: 'GitHub Copilot', icon: 'https://www.vectorlogo.zone/logos/github_copilot/github_copilot-icon.svg' },
    { name: 'LLMs', icon: 'https://www.svgrepo.com/show/431962/sparkles.svg' },
    { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg' },
    { name: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg' },
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' },
    { name: 'Pytest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg' },
    { name: 'Elastic Stack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg' }
];

export const PORTFOLIO_CONTENT: Record<LanguageCode, PortfolioData> = {
    en: {
        navigation: {
            projects: 'Projects',
            experience: 'Experience',
            skills: 'Skills',
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
            intro: "The projects listed here are either personal or academic, I cannot disclose details of my professional work. You might notice they're all about videogames; that's because computer engineering is my profession, but games are my hobby. When I'm done coding for a living, I keep coding for fun.",
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
            items: [
                {
                    role: 'Senior Software Engineer',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, Spain',
                    period: 'Jul 2024 - Present',
                    description: 'Leading front-end development and technical decisions for critical banking applications.',
                    bullets: [
                        'Led front-end (React) development of a debt management application for Caixabank.',
                        'Led front-end (React) development of an investment advisory order execution application for high-net-worth individuals under MiFID-II regulations.',
                        'Co-designed technical onboarding and training programs for new engineers as part of Caixabank\'s expert league.',
                        'Defined and enforced reference architectures, coding standards and best practices across teams.',
                        'Led code reviews, PR approvals, feature integrations, and version releases across multiple projects and environments.',
                        'Served as reference for AI integration in development workflows and tooling as part of Caixabank\'s expert league.',
                        'Worked within Agile (Scrum/Kanban) frameworks.'
                    ]
                },
                {
                    role: 'Mid-Level Software Engineer',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, Spain',
                    period: 'Jul 2023 - Jun 2024',
                    description: 'Migrated legacy systems to modern microservices architecture and improved development quality standards.',
                    bullets: [
                        'Migrated Caixabank\'s e-shop from legacy Java/JSP stack into modular Spring Boot microservices and React front-end.',
                        'Proposed architectural improvements, quality standards, best practices and development workflows that were adopted by seniors and tech leads.',
                        'Led code reviews, PR approvals, and feature integration for new versions.',
                        'Deployed and released new versions across environments through Gitlab CI/CD pipelines and Jenkins.',
                        'Employed Elastic Stack and dashboards to monitor server logs and tracking issues.',
                        'Collaborated closely with stakeholders to align technical solutions with business needs.',
                        'Worked within Agile (Scrum) frameworks.'
                    ]
                },
                {
                    role: 'Junior Software Engineer',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, Spain',
                    period: 'Apr 2022 - Jun 2023',
                    description: 'Developed features and maintained legacy applications while learning enterprise workflows.',
                    bullets: [
                        'Rebuilt the e-shop\'s main landing page.',
                        'Developed new features and fixed bugs for Caixabank\'s e-shop (legacy stack).',
                        'Participated in refinement, planning, reviews and retrospectives with client stakeholders.',
                        'Wrote and maintained unit tests.',
                        'Performed code reviews and pair programming with senior developers.',
                        'Worked within Agile (Scrum) frameworks.'
                    ]
                },
                {
                    role: 'Software Developer Intern',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar, Spain',
                    period: 'Oct 2021 - Mar 2022',
                    description: 'Developed internal tools for HR and employees.',
                    bullets: [
                        'Developed a leave management web platform for HR to manage employee leave requests.',
                        'Led the development of the company\'s intranet platform for employees.',
                        'Gathered requirements directly from the HR manager and iterated on MVP feedback.',
                        'Maintained applications and implemented features based on user feedback from ~200 employees.',
                        'Participated in a data processing project collecting physical sensor data from cargo transport.'
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
        skills: {
            eyebrow: 'Skills',
            title: 'Technologies I work with',
            subtitle: "Though I'm always learning new ones",
            items: SKILLS_LIST
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
            phones: [
                { display: '+34 656 974 640', link: '+34656974640' },
                { display: '+49 170 430 5441', link: '+491704305441' }
            ],
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
            skills: 'Habilidades',
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
            items: [
                {
                    role: 'Ingeniero de Software Senior',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, España',
                    period: 'Jul 2024 - Actualidad',
                    description: 'Liderando el desarrollo front-end y las decisiones técnicas para aplicaciones bancarias críticas.',
                    bullets: [
                        'Lideré el desarrollo front-end (React) de una aplicación de gestión de deuda para Caixabank.',
                        'Lideré el desarrollo front-end (React) de una aplicación de ejecución de órdenes de asesoramiento de inversión para individuos de alto patrimonio bajo regulaciones MiFID-II.',
                        'Co-diseñé programas de incorporación técnica y formación para nuevos ingenieros como parte de la liga de expertos de Caixabank.',
                        'Definí e impuse arquitecturas de referencia, estándares de código y mejores prácticas en los equipos.',
                        'Lideré revisiones de código, aprobaciones de PR, integraciones de funcionalidades y lanzamientos de versiones en múltiples proyectos y entornos.',
                        'Serví como referencia para la integración de IA en flujos de trabajo de desarrollo y herramientas como parte de la liga de expertos de Caixabank.',
                        'Trabajé dentro de marcos Agile (Scrum/Kanban).'
                    ]
                },
                {
                    role: 'Ingeniero de Software Mid-Level',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, España',
                    period: 'Jul 2023 - Jun 2024',
                    description: 'Migré sistemas heredados a una arquitectura moderna de microservicios y mejoré los estándares de calidad de desarrollo.',
                    bullets: [
                        'Migré la tienda electrónica de Caixabank de una pila heredada Java/JSP a microservicios modulares Spring Boot y front-end React.',
                        'Propuse mejoras arquitectónicas, estándares de calidad, mejores prácticas y flujos de trabajo de desarrollo que fueron adoptados por seniors y líderes técnicos.',
                        'Lideré revisiones de código, aprobaciones de PR e integración de funcionalidades para nuevas versiones.',
                        'Desplegué y lancé nuevas versiones en entornos a través de pipelines CI/CD de Gitlab y Jenkins.',
                        'Empleé Elastic Stack y paneles para monitorear registros de servidores y rastrear problemas.',
                        'Colaboré estrechamente con las partes interesadas para alinear las soluciones técnicas con las necesidades del negocio.',
                        'Trabajé dentro de marcos Agile (Scrum).'
                    ]
                },
                {
                    role: 'Ingeniero de Software Junior',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, España',
                    period: 'Abr 2022 - Jun 2023',
                    description: 'Desarrollé funcionalidades y mantuve aplicaciones heredadas mientras aprendía flujos de trabajo empresariales.',
                    bullets: [
                        'Reconstruí la página de aterrizaje principal de la tienda electrónica.',
                        'Desarrollé nuevas funcionalidades y corregí errores para la tienda electrónica de Caixabank (pila heredada).',
                        'Participé en refinamiento, planificación, revisiones y retrospectivas con las partes interesadas del cliente.',
                        'Escribí y mantuve pruebas unitarias.',
                        'Realicé revisiones de código y programación en pareja con desarrolladores senior.',
                        'Trabajé dentro de marcos Agile (Scrum).'
                    ]
                },
                {
                    role: 'Becario de Desarrollo de Software',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar, España',
                    period: 'Oct 2021 - Mar 2022',
                    description: 'Desarrollé herramientas internas para RRHH y empleados.',
                    bullets: [
                        'Desarrollé una plataforma web de gestión de permisos para que RRHH gestione las solicitudes de permisos de los empleados.',
                        'Lideré el desarrollo de la plataforma intranet de la empresa para los empleados.',
                        'Recopilé requisitos directamente del gerente de RRHH e iteré sobre la retroalimentación del MVP.',
                        'Mantuve aplicaciones e implementé funcionalidades basadas en la retroalimentación de ~200 empleados.',
                        'Participé en un proyecto de procesamiento de datos recolectando datos de sensores físicos del transporte de carga.'
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
        skills: {
            eyebrow: 'Habilidades',
            title: 'Tecnologías con las que trabajo',
            subtitle: 'Aunque siempre estoy aprendiendo nuevas',
            items: SKILLS_LIST
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
            phones: [
                { display: '+34 656 974 640', link: '+34656974640' },
                { display: '+49 170 430 5441', link: '+491704305441' }
            ],
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
            skills: 'Fähigkeiten',
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
            items: [
                {
                    role: 'Senior Softwareingenieur',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, Spanien',
                    period: 'Jul 2024 - Heute',
                    description: 'Leitung der Frontend-Entwicklung und technischer Entscheidungen für kritische Bankanwendungen.',
                    bullets: [
                        'Leitung der Frontend-Entwicklung (React) einer Schuldenmanagement-Anwendung für Caixabank.',
                        'Leitung der Frontend-Entwicklung (React) einer Anwendung zur Ausführung von Anlageberatungsaufträgen für vermögende Privatkunden gemäß MiFID-II-Vorschriften.',
                        'Mitgestaltung von technischen Onboarding- und Schulungsprogrammen für neue Ingenieure als Teil der Expertenliga von Caixabank.',
                        'Definition und Durchsetzung von Referenzarchitekturen, Codierungsstandards und Best Practices in den Teams.',
                        'Leitung von Code-Reviews, PR-Genehmigungen, Feature-Integrationen und Versionsfreigaben über mehrere Projekte und Umgebungen hinweg.',
                        'Referenzperson für KI-Integration in Entwicklungsabläufe und Tools als Teil der Expertenliga von Caixabank.',
                        'Arbeit in agilen Frameworks (Scrum/Kanban).'
                    ]
                },
                {
                    role: 'Softwareingenieur (Mid-Level)',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, Spanien',
                    period: 'Jul 2023 - Jun 2024',
                    description: 'Migration von Altsystemen auf moderne Microservices-Architektur und Verbesserung der Entwicklungsqualitätsstandards.',
                    bullets: [
                        'Migration des E-Shops von Caixabank vom alten Java/JSP-Stack zu modularen Spring Boot-Microservices und React-Frontend.',
                        'Vorschlag von Architekturverbesserungen, Qualitätsstandards, Best Practices und Entwicklungsabläufen, die von Senioren und technischen Leitern übernommen wurden.',
                        'Leitung von Code-Reviews, PR-Genehmigungen und Feature-Integration für neue Versionen.',
                        'Bereitstellung und Veröffentlichung neuer Versionen in verschiedenen Umgebungen über Gitlab CI/CD-Pipelines und Jenkins.',
                        'Einsatz von Elastic Stack und Dashboards zur Überwachung von Serverprotokollen und zur Problemverfolgung.',
                        'Enge Zusammenarbeit mit Stakeholdern, um technische Lösungen an den Geschäftsanforderungen auszurichten.',
                        'Arbeit in agilen Frameworks (Scrum).'
                    ]
                },
                {
                    role: 'Junior Softwareingenieur',
                    company: 'NTT DATA Europe & Latam S.L.',
                    location: 'Barcelona, Spanien',
                    period: 'Apr 2022 - Jun 2023',
                    description: 'Entwicklung von Funktionen und Wartung von Altanwendungen bei gleichzeitigem Erlernen von Unternehmensabläufen.',
                    bullets: [
                        'Neuaufbau der Haupt-Landingpage des E-Shops.',
                        'Entwicklung neuer Funktionen und Fehlerbehebung für den E-Shop von Caixabank (Legacy-Stack).',
                        'Teilnahme an Refinement, Planung, Reviews und Retrospektiven mit Kunden-Stakeholdern.',
                        'Schreiben und Warten von Unit-Tests.',
                        'Durchführung von Code-Reviews und Pair Programming mit Senior-Entwicklern.',
                        'Arbeit in agilen Frameworks (Scrum).'
                    ]
                },
                {
                    role: 'Softwareentwickler-Praktikant',
                    company: 'Conservas Dani S.A.U.',
                    location: 'Vilassar de Mar, Spanien',
                    period: 'Okt 2021 - Mär 2022',
                    description: 'Entwicklung interner Tools für HR und Mitarbeiter.',
                    bullets: [
                        'Entwicklung einer Webplattform für das Urlaubsmanagement, damit die Personalabteilung Urlaubsanträge von Mitarbeitern verwalten kann.',
                        'Leitung der Entwicklung der Intranet-Plattform des Unternehmens für Mitarbeiter.',
                        'Erfassung von Anforderungen direkt vom HR-Manager und Iteration basierend auf MVP-Feedback.',
                        'Wartung von Anwendungen und Implementierung von Funktionen basierend auf Benutzerfeedback von ca. 200 Mitarbeitern.',
                        'Teilnahme an einem Datenverarbeitungsprojekt zur Erfassung physischer Sensordaten aus dem Frachttransport.'
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
        skills: {
            eyebrow: 'Fähigkeiten',
            title: 'Technologien, mit denen ich arbeite',
            subtitle: 'Obwohl ich immer neue lerne',
            items: SKILLS_LIST
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
            phones: [
                { display: '+34 656 974 640', link: '+34656974640' },
                { display: '+49 170 430 5441', link: '+491704305441' }
            ],
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
