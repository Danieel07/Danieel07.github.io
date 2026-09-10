export interface ProjectTranslationItem {
  id: string;
  title: string;
  status: string;
  description: string;
}

export interface Translation {
  nav: {
    home: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
  };
  whatIDo: {
    title: string;
    items: {
      id: string;
      title: string;
      detail: string;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    moreOn: string;
    items: ProjectTranslationItem[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    locationLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
  };
  footer: {
    builtWith: string;
    styledWith: string;
    deployedOn: string;
    rights: string;
  };
}

export const translations: Record<"es" | "en", Translation> = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy Daniel Nieto",
      role: "Ingeniero en <br /> Sistemas",
      description:
        "Estudiante apasionado por el desarrollo backend, la arquitectura de software y el diseño de bases de datos. Enfocado en construir soluciones robustas, eficientes y escalables mediante código limpio y buenas prácticas.",
    },
    whatIDo: {
      title: "¿Qué hago?",
      items: [
        {
          id: "backend",
          title: "Desarrollo Backend & APIs REST",
          detail:
            "Diseño e implementación de servicios del lado del servidor robustos y seguros con Java y Spring Boot, conectando lógica de negocio con interfaces limpias para consumo frontend o móvil.",
        },
        {
          id: "database",
          title: "Diseño y Gestión de Bases de Datos",
          detail:
            "Modelado, optimización y administración de bases de datos relacionales con MySQL, garantizando la integridad, consistencia y rapidez en el acceso a los datos.",
        },
        {
          id: "infrastructure",
          title: "Infraestructura y Redes",
          detail:
            "Configuración de entornos operativos basados en Linux, análisis de flujo de red y control de versiones distribuido con Git para flujos de trabajo colaborativos y continuos.",
        },
      ],
    },
    projects: {
      badge: "Mi trabajo",
      title: "Proyectos",
      moreOn: "Más proyectos en",
      items: [
        {
          id: "midaxus",
          title: "Midaxus 1.0",
          status: "Completado",
          description:
            "Plataforma web de gestión académica integral con control multi-rol, asignación inteligente de horarios y autenticación segura con JWT.",
        },
        {
          id: "pokedex",
          title: "Pokédex",
          status: "Completado",
          description:
            "Aplicación desarrollada en Java orientada a la gestión de datos de Pokémon mediante operaciones CRUD completas (crear, leer, actualizar y eliminar).",
        },
        {
          id: "invasion-espacial",
          title: "Invasión Espacial",
          status: "Completado",
          description:
            "Recreación del clásico videojuego arcade Space Invaders con mecánicas interactivas y renderizado gráfico desarrollado en Python y Pygame.",
        },
        {
          id: "motogo",
          title: "MotoGO",
          status: "En desarrollo",
          description:
            "Plataforma y ecosistema de alquiler ágil de motocicletas urbanas orientada a movilidad eficiente y servicios bajo demanda.",
        },
      ],
    },
    contact: {
      badge: "Hablemos",
      title: "Contacto",
      subtitle:
        "¿Tienes alguna pregunta o proyecto en mente? No dudes en escribirme.",
      locationLabel: "Ubicación:",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      messagePlaceholder: "Mensaje",
      submitButton: "Enviar",
      successMessage: "✅ ¡Gracias por tu mensaje!",
    },
    footer: {
      builtWith: "Construido con",
      styledWith: "Estilizado con",
      deployedOn: "Desplegado en",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Daniel Nieto",
      role: "Systems <br /> Engineer",
      description:
        "Passionate student focused on backend development, software architecture, and database design. Dedicated to building robust, efficient, and scalable solutions through clean code and best practices.",
    },
    whatIDo: {
      title: "What I do?",
      items: [
        {
          id: "backend",
          title: "Backend Development & REST APIs",
          detail:
            "Design and implementation of robust and secure server-side services with Java and Spring Boot, connecting business logic with clean interfaces for frontend or mobile consumption.",
        },
        {
          id: "database",
          title: "Database Design & Management",
          detail:
            "Modeling, optimization, and administration of relational databases with MySQL, ensuring data integrity, consistency, and high-performance access.",
        },
        {
          id: "infrastructure",
          title: "Infrastructure & Networks",
          detail:
            "Configuration of Linux-based operating environments, network traffic analysis, and distributed version control with Git for collaborative and continuous workflows.",
        },
      ],
    },
    projects: {
      badge: "My work",
      title: "Projects",
      moreOn: "More projects on",
      items: [
        {
          id: "midaxus",
          title: "Midaxus 1.0",
          status: "Completed",
          description:
            "Comprehensive academic management web platform with multi-role control, intelligent schedule allocation, and secure JWT authentication.",
        },
        {
          id: "pokedex",
          title: "Pokédex",
          status: "Completed",
          description:
            "Java-developed application for Pokémon data management through full CRUD operations (create, read, update, and delete).",
        },
        {
          id: "invasion-espacial",
          title: "Invasión Espacial",
          status: "Completed",
          description:
            "Recreation of the classic arcade game Space Invaders with interactive mechanics and graphic rendering developed in Python and Pygame.",
        },
        {
          id: "motogo",
          title: "MotoGO",
          status: "In Development",
          description:
            "Platform and ecosystem for agile urban motorcycle rentals focused on efficient mobility and on-demand services.",
        },
      ],
    },
    contact: {
      badge: "Let's talk",
      title: "Contact",
      subtitle:
        "Have a question or a project in mind? Feel free to reach out.",
      locationLabel: "Location:",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submitButton: "Submit",
      successMessage: "✅ Thank you for your message!",
    },
    footer: {
      builtWith: "Built with",
      styledWith: "Styled with",
      deployedOn: "Deployed on",
      rights: "All rights reserved.",
    },
  },
};
