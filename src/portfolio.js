/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Priyanshu",
  title: "Hi all, I'm Priyanshu",
  subTitle: emoji(
    "AI & Systems Engineer | Generative AI · Agentic Systems · Cloud Engineering 🚀. Building intelligent applications. Engineering the systems behind them. Undergraduate at IIT Kharagpur."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1drOjQBDKZUz16od1NV-qZttR0Mi5HAvB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/priyanshu7739410",
  linkedin: "https://www.linkedin.com/in/priyanshu-gurjar-/",
  gmail: "",
  kaggle: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "",
  twitter: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "AI & SYSTEMS ENGINEER BRIDGING GENERATIVE AI, AGENTIC SYSTEMS, AND CLOUD INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Architect end-to-end RAG pipelines using dense embeddings, Qdrant/pgvector, hybrid retrieval, and cross-encoder reranking"
    ),
    emoji(
      "⚡ Build high-performance asynchronous REST APIs and backend systems using FastAPI, SQLAlchemy, PostgreSQL, and Docker"
    ),
    emoji(
      "⚡ Engineer low-level systems: Linux container runtimes (namespaces, cgroups v2, pivot_root) & telemetry observability daemons"
    ),
    emoji(
      "⚡ Orchestrate multi-step AI agent workflows with LangChain & LangGraph, deploying reliable cloud services on Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Generative AI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "AI Agents",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Kharagpur",
      logo: require("./assets/images/iitkgpLogoLight.png"),
      logoDark: require("./assets/images/iitkgpLogoDark.png"),
      subHeader: "B.S. (Hons.) in Applied Geology | Selected through JEE Advanced",
      duration: "2024 – 2028",
      desc: "CGPA: 8.47 / 10.0. Relevant coursework: Programming & Data Structures, Machine Learning, Probability & Statistics, Linear Algebra, Advanced Calculus.",
      descBullets: [
        "Secretary — Games and Sports Society, Azad Hall of Residence (2025–2026)",
        "Silver Medalist — General Championship, Men's Senior Hammer Throw",
        "Smart India Hackathon (SIH 2026) — Top 10 at IIT Kharagpur among 300+ competing teams"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Generative AI & Agentic Systems (RAG, LLMs, LangGraph)",
      progressPercentage: "92%"
    },
    {
      Stack: "Backend & Systems (FastAPI, PostgreSQL, Linux, C++, Go)",
      progressPercentage: "88%"
    },
    {
      Stack: "Cloud, DevOps & Observability (Azure, Docker, cgroups v2)",
      progressPercentage: "82%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern — AI & Backend",
      company: "Ozric Technologies (OPC) Pvt. Ltd.",
      date: "May 2026 – June 2026",
      desc: "Worked on retrieval-augmented generation (RAG) pipelines and backend infrastructure for AI-powered applications.",
      descBullets: [
        "Architected an end-to-end RAG pipeline using dense embeddings and Qdrant/pgvector to index and retrieve domain knowledge.",
        "Applied semantic chunking, hybrid retrieval, dynamic context assembly, sliding-window token budgeting, and cross-encoder reranking.",
        "Reported a 35% reduction in token overhead alongside significant improvements in grounding across multi-turn queries.",
        "Built asynchronous REST APIs using FastAPI, Pydantic, SQLAlchemy, PostgreSQL, Alembic migrations, JWT authentication, and RBAC.",
        "Containerized services using Docker and automated test suites with Pytest."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "SYSTEMS, AGENTIC PLATFORMS, AND INTELLIGENT APPLICATIONS BUILT FOR REAL-WORLD IMPACT",
  projects: [
    {
      projectName: "NERA — Smart Logistics Intelligence",
      projectDesc:
        "AI-based smart logistics & risk-aware routing platform (SIH 2026 Top 10 at IIT KGP). Integrates meteorological feeds, SRTM terrain elevation, XGBoost hazard classifier, custom Go graph engine (A*/Dijkstra), and React/Mapbox dashboard.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ankitjordan/NERA"
        }
      ]
    },
    {
      projectName: "MiniContainer + Observability",
      projectDesc:
        "Lightweight Linux container runtime implemented using PID/mount/UTS/network namespaces, cgroups v2, and pivot_root. Paired with companion C++ observability daemon under /sys/fs/cgroup. Achieved ~7ms cold-start latency vs 506ms Docker.",
      footerLink: [
        {
          name: "Runtime Repo",
          url: "https://github.com/priyanshu7739410/mini_container"
        },
        {
          name: "Observability Repo",
          url: "https://github.com/priyanshu7739410/container-observability-platform"
        }
      ]
    },
    {
      projectName: "Agentic Job Outreach Automation",
      projectDesc:
        "AI-assisted multi-step automation system using LangChain, LangGraph, and Azure. Validates contacts, generates personalized outreach with attached resume, handles incoming replies, and enforces human-in-the-loop approval gates.",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/priyanshu7739410"
        }
      ]
    },
    {
      projectName: "MediCloud — Healthcare Management",
      projectDesc:
        "Structured personal healthcare-management backend application. Built with FastAPI, PostgreSQL, SQLAlchemy, Alembic migrations, JWT authentication, and RBAC, fully containerized with Docker.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/priyanshu7739410/erp1"
        }
      ]
    },
    {
      projectName: "Network Security — Phishing Detection",
      projectDesc:
        "End-to-end machine learning pipeline achieving 99.1% F1-score and 98.8% precision. Features Kolmogorov–Smirnov covariate drift detection, MLflow/DagsHub experiment tracking, and automated CI/CD via GitHub Actions.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/priyanshu7739410/networksecurity"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Honors 🏆"),
  subtitle:
    "HACKATHON HONORS AND TECHNICAL CERTIFICATIONS",

  achievementsCards: [
    {
      title: "Smart India Hackathon (SIH 2026)",
      subtitle:
        "Selected in Top 10 at IIT Kharagpur among 300+ competing teams for NERA — AI-Based Smart Logistics & Accessibility Intelligence Platform.",
      footerLink: [
        {
          name: "NERA Project",
          url: "https://github.com/Ankitjordan/NERA"
        }
      ]
    },
    {
      title: "MATLAB Academy — MathWorks",
      subtitle:
        "Completed MathWorks certifications in physical systems modeling, multi-domain simulation, and dynamic system engineering.",
      footerLink: [
        {
          name: "Simscape Onramp",
          url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=e04c2954-7417-4a09-ba74-5b7ca8dfbaf4&"
        },
        {
          name: "Simulink Onramp",
          url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=8d33ab6c-b4ff-417c-b14d-0c37b6ce2a6c&"
        }
      ]
    },
    {
      title: "Kaggle Certifications",
      subtitle:
        "Completed Kaggle Learn certifications in Machine Learning modeling, Pandas data manipulation, and Relational Database Querying (SQL).",
      footerLink: [
        {
          name: "Intro to ML",
          url: "https://www.kaggle.com/learn/certification/priyanshugurjar1/intro-to-machine-learning"
        },
        {
          name: "Pandas",
          url: "https://www.kaggle.com/learn/certification/priyanshugurjar1/pandas"
        },
        {
          name: "Intro to SQL",
          url: "https://www.kaggle.com/learn/certification/priyanshugurjar1/intro-to-sql"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in discussing an AI engineering, GenAI/Agentic systems, or systems engineering role? My inbox is always open.",
  number: "+91 9627351074",
  email_address: "priyanshu7739410@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
