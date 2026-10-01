const DATA = {
    lang: 'es',
    persona: 'recruiter',
    theme: 'light',
    translations: {
        es: {
            nav_profile: "01. Perfil",
            nav_method: "02. Método AI-DLC",
            nav_exp: "03. Trayectoria",
            nav_work: "04. Proyectos",
            nav_edu: "05. Educación",
            title_exp: "Trayectoria Experta",
            title_proj: "Proyectos Estratégicos",
            desc_proj: "Productos digitales de alto impacto diseñados para escalar valor de negocio.",
            btn_more: "Ver Behance ↗",
            footer_chat: "¿Escalamos?",
            footer_sub: "Product Leadership / Design Operations / Estrategia IA.",
            header_method: "Excelencia de Producto",
            method_desc: "Mi metodología AI-DLC utiliza IA Estratégica para entregar unidades listas para producción con agilidad extrema.",
            title_stack: "Stack Experto",
            title_edu: "Educación",
            dor_desc: "DoR: Definición de Ready",
            dod_desc: "DoD: Definición de Done",
            btn_cv: "Ver Trayectoria ↓",
            theme_light: "Modo Claro",
            theme_dark: "Modo Oscuro",
            title_methods: "Design Ops & Estrategia",
            modal_impact: "Impacto y Resultados Clave",
            nav_contact: "06. Contacto",
            nav_blog: "05. Blog",
            title_process: "Mi Proceso: AI-DLC",
            process_desc: "De la intención de diseño a producción en 4 etapas optimizadas por IA.",
            title_blog: "Notas de campo",
            desc_blog: "Lo que aprendo construyendo software real: IA agéntica, UX bajo presión y producto que sobrevive al mundo físico.",
            read_post: "Leer nota",
            back_blog: "← Volver al blog",
            title_stats: "Resultados en números",
            min_read: "min de lectura",
            visit_live: "Ver en producción ↗",
            latest_posts: "Último del blog"
        },
        en: {
            nav_profile: "01. Profile",
            nav_method: "02. AI-DLC Method",
            nav_exp: "03. Career Path",
            nav_work: "04. Projects",
            nav_edu: "05. Education",
            title_exp: "Expert Career Path",
            title_proj: "Strategic Showcase",
            desc_proj: "High-impact digital products designed to scale business value.",
            btn_more: "Explore Behance ↗",
            footer_chat: "Ready to scale?",
            footer_sub: "Product Leadership / Design Operations / AI Strategy.",
            header_method: "Product Excellence",
            method_desc: "My AI-DLC methodology leverages Strategic AI to deliver production-ready units with extreme agility.",
            title_stack: "Expert Stack",
            title_edu: "Education",
            dor_desc: "DoR: Definition of Ready",
            dod_desc: "DoD: Definition of Done",
            btn_cv: "Full Journey ↓",
            theme_light: "Light Mode",
            theme_dark: "Dark Mode",
            title_methods: "Design Ops & Strategy",
            modal_impact: "Key Impact & Results",
            nav_contact: "06. Contact",
            nav_blog: "05. Blog",
            title_process: "My Process: AI-DLC",
            process_desc: "From design intent to production in 4 AI-optimized stages.",
            title_blog: "Field notes",
            desc_blog: "What I learn building real software: agentic AI, UX under pressure, and products that survive the physical world.",
            read_post: "Read note",
            back_blog: "← Back to blog",
            title_stats: "Results in numbers",
            min_read: "min read",
            visit_live: "View live ↗",
            latest_posts: "Latest from the blog"
        }
    },
    personas: {
        recruiter: {
            es: "Director UX / AI Engineer con +10 años liderando ecosistemas digitales masivos en AB InBev, Colsubsidio y la Cruz Roja Colombiana. Creador de FARO (ERP y plataforma de gestión de emergencias de la Cruz Roja) e instructor de IA aplicada (Universidad EAN · Universidad Piloto), escalando productos mediante IA Agéntica, Multi-agentes y Cloud con un enfoque radical en ROI.",
            en: "UX Director / AI Engineer with 10+ years leading massive digital ecosystems at AB InBev, Colsubsidio and the Colombian Red Cross. Creator of FARO (the Red Cross ERP and emergency management platform) and Applied AI instructor (Universidad EAN · Universidad Piloto), scaling products through Agentic AI, Multi-agent architectures, and Cloud with a radical focus on ROI.",
        },
        designer: {
            es: "UX Engineer especializado en escalabilidad y Design Systems robustos (WCAG). Mi metodología AI-DLC fusiona investigación conductual con automatización multi-agente, permitiendo que la intención de diseño sea código real en tiempo récord.",
            en: "UX Engineer specialized in scalability and robust Design Systems (WCAG). My AI-DLC methodology fuses behavioral research with multi-agent automation, allowing design intent to be production-ready code in record time."
        },
        vp: {
            es: "Estratega de Producto y Líder de Operaciones enfocado en eficiencia operativa mediante IA Generativa. Diseño soluciones que optimizan el LTV y reducen costos mediante arquitecturas de nube avanzadas y automatización de flujos complejos.",
            en: "Product Strategist & Operations Leader focused on operational efficiency through Generative AI. I design solutions that optimize LTV and reduce costs through advanced cloud architectures and complex workflow automation.",
        }
    },
    experience: {
        es: [
            {
                period: "2026 - Presente", role: "Director UX / AI Engineer — Ecosistema FARO", company: "Cruz Roja Colombiana · Seccional Santander",
                desc: "Diseño, construcción y despliegue del ecosistema digital completo de la Seccional: ERP, gestión de emergencias, teleasistencia y portal público.",
                details: [
                    "Faro Emergency (faroemergency.org): plataforma de coordinación de respuesta a emergencias, implantada en dos seccionales (Santander y Valle del Cauca) y usada en la respuesta al terremoto Chocó–Valle del Cauca de 2026.",
                    "Faro Management: ERP de 118 módulos en 14 áreas funcionales — logística FEFO, compras con aprobaciones, ingeniería biomédica, talento humano, ISO 9001/14001/45001, SARLAFT e intranet con firma electrónica.",
                    "Amparo: servicio de teleasistencia para personas mayores con planes de suscripción, pagos recurrentes y UX amigable con la edad.",
                    "Portal institucional (cruzrojasantander.org): 22 páginas conectadas al ERP — donaciones, Tienda Humanitaria con pasarela de pagos y asistente de IA con datos en vivo del sistema."
                ]
            },
            {
                period: "2026", role: "Catedrático de Diplomado en IA para Alta Gerencia", company: "Universidad EAN",
                desc: "Facilitador estratégico para juntas directivas y ejecutivos senior, guiando en la implementación práctica de IA Generativa y workflows autónomos.",
                details: [
                    "Diseño curricular de alto nivel enfocado en la adopción estratégica de herramientas de IA y Prompt Engineering experto.",
                    "Liderazgo en la transformación de procesos corporativos mediante la integración de ecosistemas de agentes inteligentes.",
                    "Mentoría senior en toma de decisiones basada en datos y optimización de eficiencia operativa a gran escala."
                ]
            },
            {
                period: "2026", role: "Instructor de IA Aplicada — Programa Falabella", company: "Universidad Piloto de Colombia",
                desc: "Dos cohortes de IA aplicada a la productividad para equipos corporativos de Falabella: compras, importaciones, logística e impuestos.",
                details: [
                    "Prompting estructurado, master prompts y construcción de agentes con Microsoft Copilot.",
                    "Automatización con Power Automate, bots de ventas y asistentes a medida con Gemini Gems.",
                    "Metodología práctica: cada participante construyó una solución de IA sobre un dolor real de su propio proceso."
                ]
            },
            {
                period: "2024 - 2026", role: "Founder & Product Design Director", company: "DEXIO Technology",
                desc: "Liderazgo de transformación digital integral, uniendo diseño UX/UI con ingeniería de datos y estrategias de automatización IA.",
                details: [
                    "Dirección estratégica de productos para maximizar el ROI y la escalabilidad de negocios digitales competitivos.",
                    "Liderazgo en migraciones de bases de datos críticas y arquitecturas de nube en AWS y Supabase.",
                    "Diseño de software a medida con enfoque en UX/UI de alta gama y arquitecturas de producto avanzadas.",
                    "Implementación de soluciones de automatización inteligente y ecosistemas de Multi-agentes para optimización de LTV."
                ]
            },
            {
                period: "2024 - 2024", role: "Product Designer / B2B FinTech", company: "Retorna",
                desc: "Especialista en diseño de plataformas transaccionales y protocolos de seguridad corporativa.",
                details: [
                    "Arquitectura de la interfaz Know Your Business (KYB) para onboarding corporativo de alta seguridad.",
                    "Optimización de flujos de back-office para la gestión eficiente de transacciones y cumplimiento regulatorio.",
                    "Prototipado de alta fidelidad con cumplimiento estricto de accesibilidad (WCAG) y Hand-off técnico optimizado."
                ]
            },
            {
                period: "2024 - 2024", role: "Senior Growth UX/UI Specialist", company: "Aguayo (Colsubsidio)",
                desc: "Optimización de ecosistemas masivos mediante estrategias de crecimiento basadas en datos.",
                details: [
                    "Liderazgo en la optimización de conversión para colsubsidio.com, Teatro y portales de Hotelería.",
                    "Refinamiento de la arquitectura de información para mejorar el engagement y reducir el churn en servicios digitales.",
                    "Implementación de metodologías Lean UX y experimentación A/B continua para maximizar métricas de negocio."
                ]
            },
            {
                period: "2023 - 2024", role: "Software Product Designer / Healthcare", company: "ABA Tech",
                desc: "Diseño de productos digitales centrados en el usuario para análisis conductual y salud clínica.",
                details: [
                    "Investigación profunda de usuarios para simplificar la complejidad de flujos de trabajo clínicos de salud y ABA.",
                    "Implementación de arquitecturas de bases de datos y estrategias de despliegue en la nube para optimizar la gestión de datos clínicos.",
                    "Creación de sistemas de diseño coherentes y prototipos iterativos validados mediante pruebas de usabilidad intensivas.",
                    "Colaboración experta con ingeniería para asegurar la estética y funcionalidad de nivel médico."
                ]
            },
            {
                period: "2021 - 2022", role: "UX / UI Lead - Digital Growth & Loyalty", company: "Bavaria - AB Inbev",
                desc: "Estrategia regional para programas de fidelización (My Cooler) y ecosistemas de marketing en zona MAZ.",
                details: [
                    "Implementación del proyecto 'My Cooler' (USA Benchmarking) en mercados Latam, elevando el LTV mediante diseño emocional.",
                    "Gestión integral de canales digitales para el portafolio Global de marcas: Budweiser, Corona y Stella Artois.",
                    "Estandarización de componentes modulares (Design Ops) para reducir drásticamente los costos de implementación regional."
                ]
            },
            {
                period: "2020 - 2022", role: "Sr. UX Designer - Digital Portfolio", company: "AB Inbev",
                desc: "Diseño y escalabilidad de ecosistemas digitales para el portafolio de 18+ marcas multinacionales.",
                details: [
                    "Región Chile: Liderazgo creativo para Cusqueña, Becker, Baltica y Budweiser (Estrategia BE A KING).",
                    "Región Paraguay: Diseño transaccional para Skol, Brahma, Patagonia, Ouro fino y Budweiser 66.",
                    "Región Bolivia & Dominicana: Arquitectura para Huari, Paceña, Presidente, Black Model y Crown.",
                    "Validación de arquitecturas de información complejas mediante prototipado interactivo de alta gama."
                ]
            },
            {
                period: "2019 - 2021", role: "Agile UX/UI Designer", company: "Bavaria - AB Inbev",
                desc: "Investigación de usuarios y diseño de herramientas críticas de Business Continuity.",
                details: [
                    "Framework SIXPACK: Solución estratégica en 8 países, optimizando la operación para 16,000 usuarios.",
                    "Proyecto TANGRAM: Diseño de la plataforma integral para ejecución y rastreo de innovaciones corporativas.",
                    "Auditoría de paint points y consultoría de experiencia en mercados de Colombia, Perú y Ecuador."
                ]
            },
            {
                period: "2018 - 2019", role: "Director de Diseño y Estrategia", company: "Grupo Rta Autolagos",
                desc: "Dirección creativa de plataformas transaccionales y soluciones de movilidad digital.",
                details: [
                    "Diseño de la infraestructura digital para corresponsalía bancaria y pagos masivos (Crédiprosperar).",
                    "Conceptualización de la línea Rtaxi: Automatización de reservas online y gestión de flota en tiempo real.",
                    "Desarrollo de portafolio virtual premium y sistemas avanzados de rastreo satelital GPS."
                ]
            }
        ],
        en: [
            {
                period: "2026 - Present", role: "UX Director / AI Engineer — FARO Ecosystem", company: "Colombian Red Cross · Santander Branch",
                desc: "Design, build and deployment of the branch's complete digital ecosystem: ERP, emergency management, tele-assistance and public portal.",
                details: [
                    "Faro Emergency (faroemergency.org): emergency response coordination platform, deployed in two branches (Santander and Valle del Cauca) and used during the 2026 Chocó–Valle del Cauca earthquake response.",
                    "Faro Management: 118-module ERP across 14 functional areas — FEFO logistics, purchasing with approval workflows, biomedical engineering, HR, ISO 9001/14001/45001, SARLAFT and an intranet with electronic signature.",
                    "Amparo: tele-assistance service for older adults with subscription plans, recurring billing and age-friendly UX.",
                    "Institutional portal (cruzrojasantander.org): 22 pages connected to the ERP — donations, Humanitarian Store with payment gateway and an AI assistant answering with live system data."
                ]
            },
            {
                period: "2026", role: "Generative AI Executive Lecturer", company: "EAN University",
                desc: "Strategic facilitator for senior executives and board members, guiding the practical implementation of Generative AI and autonomous workflows.",
                details: [
                    "Curriculum design focused on the strategic adoption of AI tools and executive-level Prompt Engineering.",
                    "Strategic leadership in transforming corporate processes by integrating multi-agent intelligent ecosystems.",
                    "Expert mentorship in data-driven decision making and massive operational efficiency optimization."
                ]
            },
            {
                period: "2026", role: "Applied AI Instructor — Falabella Program", company: "Universidad Piloto de Colombia",
                desc: "Two cohorts of applied AI for productivity for Falabella corporate teams: purchasing, imports, logistics and tax.",
                details: [
                    "Structured prompting, master prompts and agent building with Microsoft Copilot.",
                    "Automation with Power Automate, sales bots and custom assistants with Gemini Gems.",
                    "Hands-on methodology: each participant built an AI solution for a real pain point in their own process."
                ]
            },
            {
                period: "2024 - 2026", role: "Founder & Product Design Director", company: "DEXIO Technology",
                desc: "Comprehensive digital transformation leadership, merging UX/UI design with data engineering and AI automation strategies.",
                details: [
                    "Strategic product direction to maximize ROI and scalability for competitive digital businesses.",
                    "Leadership in critical database migrations and cloud architectures on AWS and Supabase.",
                    "Custom software design with a focus on high-end UX/UI and advanced product architectures.",
                    "Implementation of intelligent automation solutions and Multi-agent ecosystems for LTV optimization."
                ]
            },
            {
                period: "2024 - 2024", role: "Product Designer / B2B FinTech", company: "Retorna",
                desc: "Specialist in designing transactional platforms and corporate security protocols.",
                details: [
                    "Architecture of the Know Your Business (KYB) interface for high-security corporate onboarding.",
                    "Optimization of back-office flows for efficient transaction management and regulatory compliance.",
                    "High-fidelity prototyping with strict adherence to accessibility (WCAG) and optimized technical Hand-off."
                ]
            },
            {
                period: "2024 - 2024", role: "Senior Growth UX/UI Specialist", company: "Aguayo (Colsubsidio)",
                desc: "Optimization of massive ecosystems through data-driven growth strategies.",
                details: [
                    "Conversion optimization leadership for colsubsidio.com, Theater, and Hospitality portals.",
                    "Refining information architecture to enhance engagement and reduce churn in digital services.",
                    "Implementation of Lean UX methodologies and continuous A/B experimentation to maximize business metrics."
                ]
            },
            {
                period: "2023 - 2024", role: "Software Product Designer / Healthcare", company: "ABA Tech",
                desc: "User-centric digital product design for behavioral analysis and clinical health.",
                details: [
                    "In-depth user research to simplify the complexity of clinical health and ABA workflows.",
                    "Implementation of database architectures and cloud deployment strategies to optimize clinical data management.",
                    "Creation of cohesive design systems and iterative prototypes validated through intensive usability testing.",
                    "Expert collaboration with engineering to ensure medical-standard aesthetics and functionality."
                ]
            },
            {
                period: "2021 - 2022", role: "UX / UI Lead - Digital Growth & Loyalty", company: "Bavaria - AB Inbev",
                desc: "Regional strategy for loyalty programs (My Cooler) and marketing ecosystems in the MAZ zone.",
                details: [
                    "Implementation of the 'My Cooler' project (USA Benchmarking) in Latam markets, driving LTV through emotional design.",
                    "End-to-end digital channel management for the Global brand portfolio: Budweiser, Corona, and Stella Artois.",
                    "Standardization of modular components (Design Ops) to drastically reduce regional implementation costs."
                ]
            },
            {
                period: "2020 - 2022", role: "Sr. UX Designer - Digital Portfolio", company: "AB Inbev",
                desc: "Design and scalability of digital ecosystems for the 18+ multinational brands portfolio.",
                details: [
                    "Chile Region: Creative leadership for Cusqueña, Becker, Baltica, and Budweiser (BE A KING Strategy).",
                    "Paraguay Region: Transactional design for Skol, Brahma, Patagonia, Ouro fino, and Budweiser 66.",
                    "Bolivia & DR Region: Architecture for Huari, Paceña, Presidente, Black Model, and Crown.",
                    "Validation of complex information architectures through high-end interactive prototyping."
                ]
            },
            {
                period: "2019 - 2021", role: "Agile UX/UI Designer", company: "Bavaria - AB Inbev",
                desc: "User research and design of critical Business Continuity tools.",
                details: [
                    "SIXPACK Framework: Strategic solution across 8 countries, optimizing operations for 16,000 users.",
                    "TANGRAM Project: Design of the comprehensive platform for corporate innovation execution and tracking.",
                    "Pain point audit and experience consultancy in Colombian, Peruvian, and Ecuadorian markets."
                ]
            },
            {
                period: "2018 - 2019", role: "Design & Strategy Director", company: "Grupo Rta Autolagos",
                desc: "Creative direction of transactional platforms and digital mobility solutions.",
                details: [
                    "Digital infrastructure design for bank correspondents and mass payments (Crédiprosperar).",
                    "Rtaxi line conceptualization: Online reservation automation and real-time fleet management.",
                    "Development of a premium virtual portfolio and advanced GPS satellite tracking systems."
                ]
            }
        ]
    },
    projects: {
        es: [
            { title: "Faro Emergency — Cruz Roja", tags: "Humanitarian Tech / IA", img: "p10.jpg", url: "https://faroemergency.org", live: true },
            { title: "Portal Cruz Roja Santander", tags: "ERP / Donaciones en línea", img: "p11.jpg", url: "https://cruzrojasantander.org", live: true },
            { title: "Simulador de Flujos IA", tags: "Agentes / 120 pilotos en 43 áreas", img: "p14.jpg", url: "https://eva2080ai.github.io/simulador-flujos-ia/", live: true },
            { title: "Sportech — GPS Fútbol", tags: "SaaS Deportivo / E-commerce", img: "p12.jpg", url: "https://sportech-app.com", live: true },
            { title: "Jetour Colombia", tags: "Automotriz / Catálogo digital", img: "p13.jpg", url: "https://agenciajetour.com", live: true },
            { title: "Elecciones CO 2026", tags: "Cívico / Análisis con IA", img: "p15.jpg", url: "https://eva2080ai.github.io/elecciones-co-2026/", live: true },
            { title: "Framework Bill Search", tags: "B2B / FinTech", img: "p9.jpg" },
            { title: "Green City APP", tags: "UX Research / Eco", img: "p1.jpg" },
            { title: "Éxito.com Optimization", tags: "Growth / Retail", img: "p3.jpg" },
            { title: "Budweiser Prediction", tags: "Gamification / Sports", img: "p5.jpg" },
            { title: "Retorna Crypto", tags: "Trust / UX Refinement", img: "p7.jpg" },
            { title: "Mercado Libre Dark", tags: "Aesthetics / Payment", img: "p4.jpg" }
        ],
        en: [
            { title: "Faro Emergency — Red Cross", tags: "Humanitarian Tech / AI", img: "p10.jpg", url: "https://faroemergency.org", live: true },
            { title: "Red Cross Santander Portal", tags: "ERP / Online Donations", img: "p11.jpg", url: "https://cruzrojasantander.org", live: true },
            { title: "AI Workflow Simulator", tags: "Agents / 120 pilots across 43 areas", img: "p14.jpg", url: "https://eva2080ai.github.io/simulador-flujos-ia/", live: true },
            { title: "Sportech — Football GPS", tags: "Sports SaaS / E-commerce", img: "p12.jpg", url: "https://sportech-app.com", live: true },
            { title: "Jetour Colombia", tags: "Automotive / Digital catalog", img: "p13.jpg", url: "https://agenciajetour.com", live: true },
            { title: "Elections CO 2026", tags: "Civic / AI-powered analysis", img: "p15.jpg", url: "https://eva2080ai.github.io/elecciones-co-2026/", live: true },
            { title: "Framework Bill Search", tags: "B2B / FinTech", img: "p9.jpg" },
            { title: "Green City APP", tags: "UX Research / Eco", img: "p1.jpg" },
            { title: "Éxito.com Optimization", tags: "Growth / Retail", img: "p3.jpg" },
            { title: "Budweiser Prediction", tags: "Gamification / Sports", img: "p5.jpg" },
            { title: "Retorna Crypto", tags: "Trust / UX Refinement", img: "p7.jpg" },
            { title: "Mercado Libre Dark", tags: "Aesthetics / Payment", img: "p4.jpg" }
        ]
    },
    stack: [
        { name: "React (Modern Ecosystem)", icon: "fab fa-react" },
        { name: "QA & Testing Protocols", icon: "fas fa-shield-alt" },
        { name: "AWS & Cloud Logic", icon: "fab fa-aws" },
        { name: "Supabase & Backend", icon: "fas fa-database" },
        { name: "GitHub & CI/CD", icon: "fab fa-github" },
        { name: "DB Migrations", icon: "fas fa-file-export" },
        { name: "Product Strategy (PO/PM)", icon: "fas fa-chess" },
        { name: "AI-DLC Automation", icon: "fas fa-robot" },
        { name: "Figma (Advanced DS)", icon: "fab fa-figma" },
        { name: "UX Engineering (ES6+)", icon: "fas fa-code" }
    ],
    education: {
        es: [
            { title: "Certificado en Scrum Master", school: "Scrum.org / International Qualification" },
            { title: "Diseñador Gráfico Profesional", school: "Artes y Letras (2017)" },
            { title: "Inglés B2 (British Council)", school: "Professional Working Proficiency" },
            { title: "Certificación UX Expert", school: "Fundación Slim / Google" }
        ],
        en: [
            { title: "Scrum Master Certified", school: "Scrum.org / International Qualification" },
            { title: "Professional Graphic Designer", school: "Artes y Letras (2017)" },
            { title: "English B2 (British Council)", school: "Professional Working Proficiency" },
            { title: "UX Expert Certification", school: "Slim Foundation / Google" }
        ]
    },
    designOps: {
        dor: {
            es: [
                "User Stories con criterios de aceptación claros.",
                "Data real de performance (GA4, Hotjar) analizada.",
                "Arquitectura de información y flujos validados.",
                "Requerimientos técnicos y limitantes de API definidos."
            ],
            en: [
                "User Stories with clear acceptance criteria.",
                "Analyzed real performance data (GA4, Hotjar).",
                "Validated information architecture and flows.",
                "Defined technical requirements and API constraints."
            ]
        },
        dod: {
            es: [
                "Prototipos de alta fidelidad con Design Tokens.",
                "Documentación para Hand-off a desarrollo.",
                "QA Visual realizado y aprobado.",
                "Accesibilidad (WCAG) verificada en componentes clave."
            ],
            en: [
                "High-fidelity prototypes with Design Tokens.",
                "Development Hand-off documentation.",
                "Visual QA completed and approved.",
                "Accessibility (WCAG) verified on key components."
            ]
        },
        methodology: {
            es: [
                { name: "Lean UX (Build-Measure-Learn)", icon: "fas fa-sync" },
                { name: "UX Engineering (Design-to-Code)", icon: "fas fa-file-code" },
                { name: "Strategic Design Ops", icon: "fas fa-cogs" },
                { name: "Agile Product Strategy", icon: "fas fa-tasks" }
            ],
            en: [
                { name: "Lean UX (Build-Measure-Learn)", icon: "fas fa-sync" },
                { name: "UX Engineering (Design-to-Code)", icon: "fas fa-file-code" },
                { name: "Strategic Design Ops", icon: "fas fa-cogs" },
                { name: "Agile Product Strategy", icon: "fas fa-tasks" }
            ]
        }
    },
    process: {
        es: [
            { step: "01", title: "Investigación Estratégica", desc: "Análisis de data real y pain points de usuario para definir el ROI.", icon: "fas fa-search" },
            { step: "02", title: "Arquitectura & Prototipado", desc: "Creación de ecosistemas de alta fidelidad validados con stakeholders.", icon: "fas fa-drafting-pencil" },
            { step: "03", title: "Automatización AI-DLC", desc: "Conversión de diseño a código mediante agentes inteligentes y Multi-agentes.", icon: "fas fa-bolt" },
            { step: "04", title: "QA & Entrega Continua", desc: "Validación WCAG y despliegue optimizado para performance máxima.", icon: "fas fa-check-double" }
        ],
        en: [
            { step: "01", title: "Strategic Research", desc: "Real data analysis and user pain points to define ROI goals.", icon: "fas fa-search" },
            { step: "02", title: "Architecture & Prototyping", desc: "High-fidelity ecosystem creation validated with stakeholders.", icon: "fas fa-drafting-pencil" },
            { step: "03", title: "AI-DLC Automation", icon: "fas fa-bolt", desc: "Design-to-code conversion via intelligent agents and Multi-agents." },
            { step: "04", title: "QA & Continuous Delivery", icon: "fas fa-check-double", desc: "WCAG validation and optimized deployment for maximum performance." }
        ]
    },
    stats: {
        es: [
            { n: 10, suffix: "+", label: "años de experiencia" },
            { n: 118, suffix: "", label: "módulos ERP en producción" },
            { n: 18, suffix: "+", label: "marcas globales (AB InBev)" },
            { n: 16, suffix: "K", label: "usuarios · framework SIXPACK" }
        ],
        en: [
            { n: 10, suffix: "+", label: "years of experience" },
            { n: 118, suffix: "", label: "ERP modules in production" },
            { n: 18, suffix: "+", label: "global brands (AB InBev)" },
            { n: 16, suffix: "K", label: "users · SIXPACK framework" }
        ]
    },
    blog: {
        es: [
            {
                slug: "faro-offline-first",
                date: "2026-10-01", read: 6, tag: "Humanitarian Tech",
                title: "Construyendo FARO: software que funciona cuando no hay señal",
                excerpt: "En una emergencia real no hay 4G, no hay tiempo y no hay segunda oportunidad. Lo que aprendí diseñando la plataforma de emergencias de la Cruz Roja.",
                body: `
                    <p>Cuando la Cruz Roja Colombiana me pidió una plataforma para administrar emergencias, la primera decisión de diseño no fue un color ni un componente: fue aceptar que <strong>el usuario estará en un albergue sin señal, con guantes, bajo lluvia y con estrés</strong>. Todo lo demás se deriva de ahí.</p>
                    <blockquote>El requisito más importante de UX no estaba en ningún brief: era que la aplicación no podía depender de la red.</blockquote>
                    <h2>Offline no es un modo: es la arquitectura</h2>
                    <p>En Faro Emergency las operaciones de terreno —donaciones, entregas, afectaciones, verificación de albergues— se encolan localmente y sincronizan cuando vuelve la señal. Eso cambia todo: el cliente genera los identificadores antes de encolar, el inventario nunca guarda saldos sino movimientos append-only, y anular algo significa crear un contra-movimiento, nunca borrar. La trazabilidad es un requisito humanitario: cada frazada donada tiene que poder rastrearse hasta su entrega con firma digital.</p>
                    <h2>UX bajo estrés</h2>
                    <p>Diseñar para una sala de crisis es diseñar para la atención fragmentada: acciones frecuentes en máximo 3 toques, botones de 48 píxeles como mínimo, undo de 10 segundos en los registros y el estado de sincronización siempre visible. Los siete estados de cada pantalla (cargando, vacío, error, offline, pendiente, conflicto, solo lectura) se diseñan primero, porque en una emergencia los estados "raros" son los normales.</p>
                    <h2>La prueba de fuego</h2>
                    <p>La plataforma se usó en la respuesta al terremoto de Chocó–Valle del Cauca de 2026, operando en dos seccionales a la vez. La lección más grande no fue técnica: fue que <strong>la confianza del voluntariado se gana con software que nunca le hace perder un registro</strong>.</p>`
            },
            {
                slug: "metodo-ai-dlc",
                date: "2026-09-15", read: 5, tag: "AI Engineering",
                title: "AI-DLC: de la intención de diseño al código en producción",
                excerpt: "Mi metodología para que un equipo pequeño entregue como uno grande: diseño como fuente de verdad y agentes de IA como fuerza de construcción.",
                body: `
                    <p>Durante años el hand-off fue la herida del diseño digital: el prototipo decía una cosa y producción entregaba otra. Mi respuesta es <strong>AI-DLC (AI Development Life Cycle)</strong>: tratar la intención de diseño como especificación ejecutable y usar agentes de IA para construirla, con el diseñador como director técnico del proceso.</p>
                    <h2>Las cuatro etapas</h2>
                    <p><strong>1. Investigación estratégica:</strong> datos reales y pain points antes que pantallas; el ROI se define aquí. <strong>2. Arquitectura y prototipado:</strong> flujos, design tokens y reglas de negocio escritas de forma que una máquina no las pueda malinterpretar. <strong>3. Construcción con agentes:</strong> unidades de código generadas, revisadas y depuradas en ciclos cortos con múltiples agentes. <strong>4. QA y entrega continua:</strong> accesibilidad WCAG, pruebas y despliegue; nada se da por hecho sin verificarlo en el navegador real.</p>
                    <h2>Lo que cambia en la práctica</h2>
                    <p>Con AI-DLC construí el ecosistema FARO —un ERP de 118 módulos, una plataforma de emergencias, un servicio de teleasistencia y un portal público— en meses, no años. El secreto no es que la IA escriba rápido: es que <strong>la calidad del sistema depende de la calidad de las decisiones de diseño que se le entregan</strong>. El criterio sigue siendo humano; la velocidad es de los agentes.</p>
                    <blockquote>La IA no reemplaza al diseñador. Convierte sus decisiones en el cuello de botella más valioso del proceso.</blockquote>`
            },
            {
                slug: "ia-para-alta-direccion",
                date: "2026-08-20", read: 4, tag: "Docencia",
                title: "Enseñando IA a la alta dirección: lo que de verdad funciona",
                excerpt: "Dos universidades, cientos de ejecutivos y una conclusión: la adopción de IA no falla por la herramienta, falla por el problema mal elegido.",
                body: `
                    <p>Este año dicté el diplomado de IA para alta dirección en la Universidad EAN y el programa corporativo de Falabella con la Universidad Piloto. Perfiles distintos —juntas directivas por un lado; compras, logística e impuestos por el otro— y el mismo patrón: <strong>la brecha no es tecnológica, es de formulación del problema</strong>.</p>
                    <h2>La regla del dolor real</h2>
                    <p>El formato que mejor funciona es simple: cada participante identifica un dolor concreto de su propio proceso y construye una solución con IA durante el curso. Nada de demos genéricas. Cuando alguien de impuestos automatiza la clasificación que le robaba sus viernes, la adopción deja de ser un mandato corporativo y se vuelve interés propio.</p>
                    <h2>Prompting como diseño</h2>
                    <p>Enseño prompting con la misma estructura con la que diseño software: rol, contexto, instrucción y formato de salida. Un master prompt bien construido es una especificación; un prompt vago es un ticket mal escrito. Los ejecutivos lo entienden de inmediato porque llevan años sufriendo tickets mal escritos.</p>
                    <p>La conclusión que repito en cada cierre: <strong>la ventaja competitiva no está en tener IA, sino en la calidad de las preguntas que la organización le sabe hacer</strong>.</p>`
            }
        ],
        en: [
            {
                slug: "faro-offline-first",
                date: "2026-10-01", read: 6, tag: "Humanitarian Tech",
                title: "Building FARO: software that works when there is no signal",
                excerpt: "In a real emergency there is no 4G, no time and no second chance. What I learned designing the Red Cross emergency platform.",
                body: `
                    <p>When the Colombian Red Cross asked me for an emergency management platform, the first design decision wasn't a color or a component: it was accepting that <strong>the user will be in a shelter with no signal, wearing gloves, in the rain, under stress</strong>. Everything else follows from that.</p>
                    <blockquote>The most important UX requirement wasn't in any brief: the app could not depend on the network.</blockquote>
                    <h2>Offline is not a mode: it's the architecture</h2>
                    <p>In Faro Emergency, field operations — donations, deliveries, damage reports, shelter verification — are queued locally and sync when the signal returns. That changes everything: the client generates identifiers before queueing, inventory never stores balances but append-only movements, and voiding something means creating a counter-movement, never deleting. Traceability is a humanitarian requirement: every donated blanket must be traceable to its digitally signed delivery.</p>
                    <h2>UX under stress</h2>
                    <p>Designing for a crisis room means designing for fragmented attention: frequent actions in 3 taps or fewer, buttons at least 48 pixels, a 10-second undo on records, and sync status always visible. The seven states of every screen (loading, empty, error, offline, pending, conflict, read-only) get designed first, because in an emergency the "edge" states are the normal ones.</p>
                    <h2>Trial by fire</h2>
                    <p>The platform was used in the 2026 Chocó–Valle del Cauca earthquake response, operating across two branches at once. The biggest lesson wasn't technical: <strong>volunteers' trust is earned with software that never loses a single record</strong>.</p>`
            },
            {
                slug: "metodo-ai-dlc",
                date: "2026-09-15", read: 5, tag: "AI Engineering",
                title: "AI-DLC: from design intent to production code",
                excerpt: "My methodology for small teams that deliver like big ones: design as the source of truth and AI agents as the construction force.",
                body: `
                    <p>For years, hand-off was digital design's open wound: the prototype said one thing and production shipped another. My answer is <strong>AI-DLC (AI Development Life Cycle)</strong>: treating design intent as an executable specification and using AI agents to build it, with the designer as technical director of the process.</p>
                    <h2>The four stages</h2>
                    <p><strong>1. Strategic research:</strong> real data and pain points before screens; ROI is defined here. <strong>2. Architecture & prototyping:</strong> flows, design tokens and business rules written so a machine cannot misread them. <strong>3. Agent construction:</strong> code units generated, reviewed and debugged in short cycles with multiple agents. <strong>4. QA & continuous delivery:</strong> WCAG accessibility, tests and deployment; nothing counts as done until verified in a real browser.</p>
                    <h2>What changes in practice</h2>
                    <p>With AI-DLC I built the FARO ecosystem — a 118-module ERP, an emergency platform, a tele-assistance service and a public portal — in months, not years. The secret isn't that AI writes fast: it's that <strong>system quality depends on the quality of the design decisions you hand it</strong>. Judgment stays human; speed belongs to the agents.</p>
                    <blockquote>AI doesn't replace the designer. It turns their decisions into the most valuable bottleneck in the process.</blockquote>`
            },
            {
                slug: "ia-para-alta-direccion",
                date: "2026-08-20", read: 4, tag: "Teaching",
                title: "Teaching AI to senior leadership: what actually works",
                excerpt: "Two universities, hundreds of executives and one conclusion: AI adoption doesn't fail because of the tool — it fails because of the wrong problem.",
                body: `
                    <p>This year I taught the executive AI program at Universidad EAN and the Falabella corporate program with Universidad Piloto. Different profiles — boards on one side; purchasing, logistics and tax teams on the other — and the same pattern: <strong>the gap isn't technological, it's problem formulation</strong>.</p>
                    <h2>The real-pain rule</h2>
                    <p>The format that works best is simple: every participant identifies a concrete pain in their own process and builds an AI solution for it during the course. No generic demos. When someone in tax automates the classification that used to eat their Fridays, adoption stops being a corporate mandate and becomes self-interest.</p>
                    <h2>Prompting as design</h2>
                    <p>I teach prompting with the same structure I use to design software: role, context, instruction and output format. A well-built master prompt is a specification; a vague prompt is a badly written ticket. Executives get it immediately — they've suffered badly written tickets for years.</p>
                    <p>The conclusion I repeat at every closing session: <strong>the competitive advantage is not having AI, but the quality of the questions your organization knows how to ask it</strong>.</p>`
            }
        ]
    }
};

const PREFERS_REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const app = {
    init: () => {
        app.loadTheme();
        app.loadLang();
        app.renderAll();
        app.initMotion();
        app.openFromHash();
    },

    /* ---------- preferences ---------- */
    toggleMenu: () => {
        const sidebar = document.getElementById('main-sidebar');
        const icon = document.getElementById('menu-icon');
        if (sidebar && icon) {
            const open = sidebar.classList.toggle('active');
            icon.classList.toggle('fa-bars', !open);
            icon.classList.toggle('fa-times', open);
            document.querySelector('.hamburger')?.setAttribute('aria-expanded', open);
        }
    },
    toggleTheme: () => {
        DATA.theme = DATA.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', DATA.theme);
        try { localStorage.setItem('portfolio-theme', DATA.theme); } catch (e) {}
        app.renderThemeBtn();
    },
    loadTheme: () => {
        let saved = 'light';
        try { saved = localStorage.getItem('portfolio-theme') || 'light'; } catch (e) {}
        DATA.theme = saved;
        document.documentElement.setAttribute('data-theme', saved);
    },
    loadLang: () => {
        let saved = 'es';
        try { saved = localStorage.getItem('portfolio-lang') || 'es'; } catch (e) {}
        DATA.lang = saved;
    },
    setLang: (l) => {
        DATA.lang = l;
        try { localStorage.setItem('portfolio-lang', l); } catch (e) {}
        app.renderAll();
    },
    renderThemeBtn: () => {
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) {
            const icon = DATA.theme === 'dark' ? 'fa-sun' : 'fa-moon';
            const label = DATA.lang === 'es' ? (DATA.theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro') : (DATA.theme === 'dark' ? 'Light Mode' : 'Dark Mode');
            btn.innerHTML = `<i class="fas ${icon}"></i> <span>${label}</span>`;
            btn.setAttribute('aria-label', label);
        }
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`btn-${DATA.lang}`)?.classList.add('active');
        document.documentElement.lang = DATA.lang;
    },

    /* ---------- hero ---------- */
    setPersona: (p) => {
        DATA.persona = p;
        document.querySelectorAll('.p-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`p-${p}`)?.classList.add('active');
        app.renderBio();
    },
    renderBio: () => {
        const el = document.getElementById('hero-bio');
        if (el) el.innerHTML = DATA.personas[DATA.persona][DATA.lang];
    },
    renderKinetic: () => {
        document.querySelectorAll('.kinetic').forEach(line => {
            if (line.dataset.done) return;
            line.dataset.done = '1';
            const delay = parseInt(line.dataset.delay || 0, 10);
            line.innerHTML = `<span style="--kd:${delay}ms">${line.innerHTML}</span>`;
        });
    },

    /* ---------- stats ---------- */
    renderStats: () => {
        const container = document.getElementById('stats-grid');
        if (!container) return;
        container.innerHTML = DATA.stats[DATA.lang].map((s, i) => `
            <div class="stat glass reveal" style="--d:${i * 90}ms">
                <b><span class="counter" data-n="${s.n}">0</span><em>${s.suffix}</em></b>
                <span>${s.label}</span>
            </div>
        `).join('');
        app.observeReveals();
    },
    animateCounter: (el) => {
        if (el.dataset.done) return;
        el.dataset.done = '1';
        const target = parseInt(el.dataset.n, 10);
        if (PREFERS_REDUCED) { el.textContent = target; return; }
        const t0 = performance.now(), dur = 1400;
        const tick = (t) => {
            const p = Math.min((t - t0) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    },

    /* ---------- experience ---------- */
    renderExperience: () => {
        const container = document.getElementById('exp-list');
        if (!container) return;
        container.innerHTML = DATA.experience[DATA.lang].map((job, idx) => `
            <button class="job-row reveal" style="--d:${Math.min(idx, 5) * 70}ms" onclick="app.openModal(${idx})" aria-haspopup="dialog">
                <span class="mono" style="color:var(--ink-muted); padding-top:0.4rem;">${job.period}</span>
                <div>
                    <h3>${job.role}</h3>
                    <span class="company">${job.company}</span>
                    <p class="desc">${job.desc || ''}</p>
                </div>
                <i class="fas fa-plus arrow-icon" aria-hidden="true"></i>
            </button>
        `).join('');
        app.observeReveals();
    },
    openModal: (idx) => {
        const job = DATA.experience[DATA.lang][idx];
        const content = document.getElementById('modal-content');
        if (!content) return;
        content.innerHTML = `
            <button class="close-modal" onclick="app.closeModal(event)" aria-label="Cerrar">&times;</button>
            <span class="mono" style="background:var(--highlight-deep); color:white; padding:4px 14px; border-radius:50px;">${job.period}</span>
            <h2 style="font-size:clamp(1.8rem,4vw,3rem); margin-top:1.5rem; line-height:1.1;">${job.role}</h2>
            <h3 style="color:var(--highlight); font-size:clamp(1.1rem,2.5vw,1.5rem); margin-bottom:1.5rem;">${job.company}</h3>
            <p style="font-size:1.2rem; color:var(--ink); margin-bottom:2.5rem; line-height:1.6; border-left:4px solid var(--highlight); padding-left:1.5rem; font-style:italic;">${job.desc || ''}</p>
            <h4 class="mono" style="color:var(--ink-muted); margin-bottom:1.5rem; font-size:0.9rem;">${DATA.translations[DATA.lang].modal_impact}</h4>
            <ul style="list-style:none;">
                ${job.details.map(d => `
                    <li style="margin-bottom:1.4rem; display:flex; gap:1.2rem; align-items:flex-start;">
                        <i class="fas fa-arrow-right" style="color:var(--highlight); margin-top:6px;" aria-hidden="true"></i>
                        <span style="font-size:1.08rem; color:var(--ink-light); line-height:1.6;">${d}</span>
                    </li>`).join('')}
            </ul>`;
        app.showOverlay();
        content.querySelector('.close-modal')?.focus();
    },
    showOverlay: () => {
        document.getElementById('modal-overlay')?.classList.add('open');
        document.body.style.overflow = 'hidden';
    },
    closeModal: (e) => {
        const overlay = document.getElementById('modal-overlay');
        if (!overlay) return;
        if (!e || e.target.id === 'modal-overlay' || e.target.classList.contains('close-modal')) {
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto';
            if (location.hash.startsWith('#post-')) history.replaceState(null, '', location.pathname);
        }
    },

    /* ---------- projects ---------- */
    renderProjects: () => {
        const container = document.getElementById('projects-grid');
        if (!container) return;
        const t = DATA.translations[DATA.lang];
        container.innerHTML = DATA.projects[DATA.lang].map((p, i) => `
            <a href="${p.url || 'https://behance.net/masmela'}" target="_blank" rel="noopener" class="project-card reveal" style="--d:${(i % 3) * 90}ms" aria-label="${p.title}">
                <div class="p-img"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
                <div class="p-info">
                    <h3>${p.title}</h3>
                    <span class="mono">${p.tags}</span>
                    <span class="p-cta">${p.live ? t.visit_live : 'Behance ↗'}</span>
                </div>
            </a>
        `).join('');
        app.observeReveals();
    },

    /* ---------- education / stack / method ---------- */
    renderEducation: () => {
        const container = document.getElementById('edu-list');
        if (!container) return;
        container.innerHTML = DATA.education[DATA.lang].map((edu, i) => `
            <div class="edu-item reveal" style="--d:${i * 80}ms">
                <h4>${edu.title}</h4>
                <p>${edu.school}</p>
            </div>
        `).join('');
        app.observeReveals();
    },
    renderStack: () => {
        const container = document.getElementById('stack-list') || document.querySelector('.stack-grid');
        if (!container) return;
        container.innerHTML = DATA.stack.map((s, i) => `
            <div class="stack-item glass reveal" style="--d:${(i % 5) * 60}ms">
                <i class="${s.icon}" aria-hidden="true"></i> <span>${s.name}</span>
            </div>
        `).join('');
        app.observeReveals();
    },
    renderDesignOps: () => {
        const dor = document.getElementById('dor-list');
        const dod = document.getElementById('dod-list');
        const methods = document.getElementById('method-list');
        if (dor) dor.innerHTML = DATA.designOps.dor[DATA.lang].map(li => `<li>${li}</li>`).join('');
        if (dod) dod.innerHTML = DATA.designOps.dod[DATA.lang].map(li => `<li>${li}</li>`).join('');
        if (methods) {
            methods.innerHTML = DATA.designOps.methodology[DATA.lang].map(m => `
                <div class="stack-item glass"><i class="${m.icon}" aria-hidden="true"></i> <span>${m.name}</span></div>
            `).join('');
        }
    },
    renderProcess: () => {
        const container = document.getElementById('process-grid');
        if (!container) return;
        container.innerHTML = DATA.process[DATA.lang].map((step, i) => `
            <div class="process-card glass reveal" style="--d:${i * 100}ms">
                <div class="mono" style="color:var(--highlight); font-size:0.8rem; margin-bottom:1rem;">[ STEP ${step.step} ]</div>
                <i class="${step.icon}" style="font-size:2rem; margin-bottom:1.5rem; color:var(--ink);" aria-hidden="true"></i>
                <h3 style="font-size:1.4rem; margin-bottom:1rem;">${step.title}</h3>
                <p style="color:var(--ink-light); font-size:0.95rem; line-height:1.5;">${step.desc}</p>
            </div>
        `).join('');
        app.observeReveals();
    },

    /* ---------- blog ---------- */
    fmtDate: (iso) => {
        const d = new Date(iso + 'T12:00:00');
        return d.toLocaleDateString(DATA.lang === 'es' ? 'es-CO' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    },
    renderBlog: () => {
        const container = document.getElementById('blog-grid');
        if (!container) return;
        const t = DATA.translations[DATA.lang];
        container.innerHTML = DATA.blog[DATA.lang].map((post, i) => `
            <button class="blog-card reveal" style="--d:${i * 90}ms" onclick="app.openPost('${post.slug}')" aria-haspopup="dialog">
                <span class="meta"><b>${post.tag}</b><span>${app.fmtDate(post.date)}</span><span>${post.read} ${t.min_read}</span></span>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
            </button>
        `).join('');
        app.observeReveals();
    },
    renderBlogTeaser: () => {
        const container = document.getElementById('blog-teaser');
        if (!container) return;
        const t = DATA.translations[DATA.lang];
        const post = DATA.blog[DATA.lang][0];
        container.innerHTML = `
            <span class="eyebrow">${t.latest_posts}</span>
            <h2 class="txt-title" style="margin-top:1rem; max-width:22ch;">${post.title}</h2>
            <p class="txt-lead" style="margin-top:1rem;">${post.excerpt}</p>
            <a href="blog.html" class="btn-brutalist" style="margin-top:2rem;">${t.nav_blog.replace(/^\d+\.\s*/, '')} →</a>`;
    },
    openPost: (slug) => {
        const post = DATA.blog[DATA.lang].find(p => p.slug === slug);
        const content = document.getElementById('modal-content');
        if (!post || !content) return;
        const t = DATA.translations[DATA.lang];
        content.innerHTML = `
            <button class="close-modal" onclick="app.closeModal(event)" aria-label="Cerrar">&times;</button>
            <span class="meta mono" style="color:var(--ink-muted); font-size:0.75rem; display:block; margin-bottom:1rem;">
                <span style="color:var(--highlight)">${post.tag}</span> · ${app.fmtDate(post.date)} · ${post.read} ${t.min_read}
            </span>
            <h2 style="font-size:clamp(1.8rem,4vw,2.8rem); line-height:1.1; margin-bottom:1.6rem;">${post.title}</h2>
            <div class="article-body">${post.body}</div>
            <div style="margin-top:3rem; padding-top:1.5rem; border-top:var(--border);">
                <span class="mono" style="color:var(--ink-muted); font-size:0.75rem;">Juan Sebastián Másmela · Director UX / AI Engineer</span>
            </div>`;
        app.showOverlay();
        history.replaceState(null, '', `#post-${slug}`);
        content.scrollTop = 0;
        content.querySelector('.close-modal')?.focus();
    },
    openFromHash: () => {
        if (location.hash.startsWith('#post-')) app.openPost(location.hash.slice(6));
    },

    /* ---------- motion engine ---------- */
    observeReveals: () => {
        if (!app._io) {
            app._io = new IntersectionObserver((entries) => {
                entries.forEach(en => {
                    if (en.isIntersecting) {
                        en.target.classList.add('in');
                        en.target.querySelectorAll('.counter').forEach(app.animateCounter);
                        app._io.unobserve(en.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        }
        document.querySelectorAll('.reveal:not(.in)').forEach(el => app._io.observe(el));
    },
    initMotion: () => {
        app.renderKinetic();
        app.observeReveals();
        if (PREFERS_REDUCED) return;
        const orbs = document.querySelectorAll('[data-speed]');
        if (orbs.length) {
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(() => {
                    const y = window.scrollY;
                    orbs.forEach(o => { o.style.transform = `translateY(${y * parseFloat(o.dataset.speed)}px)`; });
                    ticking = false;
                });
            }, { passive: true });
        }
    },

    renderAll: () => {
        const trans = DATA.translations[DATA.lang];
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (trans[key]) el.innerText = trans[key];
        });
        app.renderBio();
        app.renderExperience();
        app.renderProjects();
        app.renderEducation();
        app.renderStack();
        app.renderDesignOps();
        app.renderProcess();
        app.renderStats();
        app.renderBlog();
        app.renderBlogTeaser();
        app.renderThemeBtn();
    }
};

document.addEventListener('DOMContentLoaded', app.init);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') app.closeModal(); });
