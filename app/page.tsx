/* eslint-disable react/no-array-index-key */
"use client"

import { useState } from "react"
import Image from "next/image"
import { FileText, Github, Linkedin, Mail, Phone } from "lucide-react"

const experiences = [
  {
    period: "May 2025 - Aug 2025",
    company: "Phibro Animal Health Corporation",
    location: "New York, NY",
    role: "Data & Analytics Intern, Insights",
    bullets: [
      "Built end-to-end machine learning pipelines for demand forecasting across 310+ SKUs using Python and SQL, working with large, skewed time-series datasets. Engineered temporal features such as lag variables and rolling statistics, and performed exploratory data analysis and feature selection to improve model performance and interpretability. Implemented robust training workflows using cross-validation and hyperparameter tuning, achieving a 28% improvement in forecasting accuracy and pipeline efficiency.",
      "Developed interactive Power BI dashboards to monitor financial and supply chain KPIs, enabling stakeholders to derive actionable insights and make data-driven decisions. Designed scalable and production-ready data pipelines with a focus on reliability, performance, and maintainability.",
    ],
    tags: ["Python", "SQL", "ML & Forecasting", "Feature Engineering", "Power BI", "Analytics"],
  },
  {
    period: "May 2023 - Aug 2023",
    company: "Matrix Comsec Pvt. Ltd.",
    location: "Vadodara, India",
    role: "Software Developer Intern, AI R&D",
    bullets: [
      "Developed modular and scalable machine learning pipelines for computer vision systems, enabling efficient preprocessing, training, and inference workflows across datasets with 25,000+ samples. Built and optimized object detection and classification models using architectures such as YOLO and ResNet, improving model accuracy and reliability by up to 15% through systematic benchmarking and experimentation.", 
      "Designed reusable pipeline components to support rapid iteration and deployment, while debugging and optimizing data workflows to eliminate bottlenecks and improve system stability. Collaborated with cross-functional engineering teams to ensure robust pipeline design, reproducibility, and production readiness of AI systems.",
    ],
    tags: ["Python", "PyTorch", "YOLOv5", "ResNet", "Computer Vision", "OpenCV", "Model Evaluation"],
  },
  {
    period: "Jan 2022 - May 2024",
    company: "Robotics and AV Club",
    location: "Vadodara, India",
    role: "Co-Founder & Co-President",
    bullets: [
      "Led the design and development of robotics systems by organizing and managing 50+ workshops, competitions, and technical events, fostering a hands-on engineering environment. Mentored teams in building end-to-end robotic solutions involving simulation, embedded systems, and computer vision, guiding projects from conceptual design to deployment.", 
      "Developed and tested robotic prototypes using structured simulation and validation frameworks, achieving top placements in competitive environments. Drove cross-functional collaboration and technical leadership, scaling the club’s impact while enabling members to build practical engineering and system design skills.",
    ],
    tags: ["Leadership", "Mentoring", "Team Building", "Microcontrollers", "Robotics", "Modelling"],
  }
]

const projects = [
  {
    number: "P.01",
    title: "Tradex Alpha",
    subtitle: "AI-Powered Trading Decision Engine with Alpha Copilot",
    description:
      "A backend-centric, multi-stage system that analyzes NVDA stock by combining machine learning, quantitative modeling, and LLM-driven reasoning to generate actionable trading insights.",
    longDescription:
      "A FastAPI orchestration layer executes end-to-end workflows including market data ingestion, feature engineering, ML-based prediction, sentiment aggregation, and forecasting. The system uses modular services for scalability and maintainability. Quant diagnostics such as momentum, volatility, and risk metrics guide decisions, while an Alpha Copilot offers fast and deep modes for concise guidance and detailed trade reasoning grounded in structured outputs.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "OpenAI APIs", "PostgreSQL", "Data Pipelines"],
    liveUrl: "https://tradexalpha.vercel.app/",
    codeUrl: "https://github.com/desaihrishik/Tradex-Alpha",
  },
  {
    number: "P.02",
    title: "RARP — Retrieval-Augmented Restoration Planning",
    subtitle: "LLM Based Planning for Post-Disaster Power Grid Recovery",
    description:
      "A hybrid system that combines semantic case retrieval with LLM-based planning to generate grounded, interpretable power grid restoration strategies after natural disasters.",
    longDescription:
      "RARP implements a multi-stage retrieval pipeline over a curated 100-case scenario library, encoding grid topology, fault context, and restoration strategies as 32-dimensional feature vectors indexed in FAISS. Incoming disaster scenarios are matched via approximate nearest-neighbor search, with retrieved cases surfaced as structured context for an LLM planner. A post-hoc strategy extraction layer distills reusable decision patterns from high-quality case pairs, while CaseLogger enforces consistent schema across ingestion and annotation - producing restoration plans that are contextually grounded and operator-interpretable.",
    tags: ["Research", "Python", "FAISS", "RAG", "LLM Reasoning", "Power Systems", "APIs", "NumPy"],
  },
  {
    number: "P.03",
    title: "DineNYC",
    subtitle: "Context-Aware Restaurant Discovery Platform",
    description:
      "A retrieval-augmented system that delivers relevant restaurant recommendations by combining semantic search with structured filtering over large-scale datasets.",
    longDescription:
      "Processed and indexed over 250K+ restaurant records to enable efficient retrieval and ranking. LLM-driven agents interpret natural language queries and generate personalized recommendations, improving relevance by ~80% while maintaining sub-10 second response times. The system integrates embedding-based retrieval with optimized data pipelines to ensure scalability, low latency, and consistent performance across diverse user queries.",
    tags: ["Python", "RAG", "LLM Agents", "MongoDB", "AWS"],
  },
  {
    number: "P.04",
    title: "GoSafe",
    subtitle: "NYC Crime Risk Assessment System",
    description:
      "A machine learning system that evaluates and forecasts crime risk across regions using structured data and statistical modeling.",
    longDescription:
      "Developed classification pipelines using Logistic Regression and Decision Trees to analyze data across 300+ regions, achieving up to 95% accuracy. Data preprocessing, feature engineering, and model evaluation ensured robustness and interpretability. Optimized inference workflows and API responses reduced latency by 40%, enabling near real-time risk assessment and supporting data-driven decision-making through efficient and reliable predictions.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Power BI", "API"],
  },
  {
    number: "P.05",
    title: "AI-Based Object Detection Robot",
    subtitle: "Autonomous Vision-Guided Robotic Sorting System",
    description:
      "A robotic system that autonomously detects, classifies, and sorts objects using real-time computer vision integrated with embedded control, designed for industrial automation workflows.",
    longDescription:
      "Designed and developed a 6-DOF robotic arm capable of autonomously classifying and segregating objects using computer vision. Deployed YOLOv8 on a Raspberry Pi for real-time object detection and integrated it with an ARM Cortex-M051 microcontroller to control arm movement and actuation. Built communication between vision and control layers to enable synchronized detection and response. Proposed a custom microcontroller circuit design to improve system efficiency and robustness. Achieved reliable object classification and precise arm movement, demonstrating scalable industrial applications such as automated sorting, quality inspection, and assembly line robotics.",
    tags: ["Python", "OpenCV", "YOLO", "Raspberry Pi", "Embedded Systems", "ARM Microcontroller", "Computer Vision"],
  },
]

const coreSkills = [
  "Python",
  "SQL",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "LLMs",
  "Power BI",
  "AWS",
  "Azure",
  "Spark",
  "Kafka",
  "Docker",
  "Git"
]

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "C", "C++",  "Java", "JavaScript", "R", "Bash", "Linux Shell Scripting"],
  },
  {
    title: "ML & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "Neural Networks",
      "Natural Language Processing (NLP)",
      "Statistical Modeling",
      "Feature Engineering",
      "Model Evaluation",
      "Cross Validation",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "GenAI & LLMs",
    skills: [
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation (RAG) Pipelines",
      "APIs",
      "Hugging Face",
      "Transformers",
      "LLM Agents",
      "Prompt Engineering",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Spark",
      "Apache Kafka",
      "Hadoop",
      "Hive",
      "Cassandra",
      "ETL Pipelines",
      "Data Pipelines",
      "Data Modeling",
      "Data Processing",
      "Feature Pipelines",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices Architecture",
      "Object-Oriented Programming (OOP)",
      "System Design",
      "Distributed Systems",
      "Scalable Systems",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL Databases (PostgreSQL, MySQL)", "NoSQL Databases", "Cassandra", "Vector Databases"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Vite", "ApexCharts"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Docker", "Git", "CI/CD Pipelines"],
  },
  {
    title: "Data Analytics",
    skills: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Seaborn", "KPI Dashboards"],
  },
  {
    title: "Quant",
    skills: [
      "Time-Series Analysis",
      "Return Forecasting",
      "Alpha Signal Generation",
      "Risk Modeling",
      "Backtesting",
      "Monte Carlo Simulation",
      "Sharpe Ratio",
      "Volatility Analysis",
      "Maximum Drawdown",
      "Trading Strategy Evaluation",
    ],
  },
  {
    title: "Vision & Robotics",
    skills: [
      "YOLO (v5, v8)",
      "OpenCV",
      "ResNet",
      "Object Detection",
      "Image Processing",
      "Robotics Systems Development",
      "Simulation Frameworks",
      "Embedded Systems",
      "ARM Microcontrollers",
    ],
  },
  {
    title: "Hardware",
    skills: [
      "RTL Design",
      "Verilog",
      "VHDL",
      "CMOS Circuits",
      "FPGA Design",
      "Parallel Computing",
      "Computer Architecture",
      "Performance Modeling",
      "VLSI Design",
      "Digital Signal Processing (DSP)",
    ],
  },
]

const achievements = [
  "First Rank Merit Awards (2021 - 2022)",
  "Technoxian 4th Position (2023)",
  "Academic Excellence Certificates",
  "Diploma in Performing Arts",
  "Visharad Certification in Keyboard Performance",
]

const certifications = [
  "Emerging Technologies (AI, IoT, ERP) - Edunet",
  "Robotics & AI Course - Great Learning Academy",
  "PCB Designing with Eagle",
]

export default function Home() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [expandedPublication, setExpandedPublication] = useState(false)
  const selectedSkillCategory = skillCategories.find((category) => category.title === activeSkillCategory)
  const visibleSkills =
    activeSkillCategory === "All" ? coreSkills : selectedSkillCategory?.skills ?? skillCategories[0].skills

  return (
    <>
      <nav className="paper-nav" id="hero-nav">
        <a href="#hero" className="paper-nav-logo">
          hrishik<span>.</span>
        </a>
        <ul className="paper-nav-links">
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#publications">Publication</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main className="paper-shell">
        <section className="paper-hero" id="hero">
          <div className="paper-hero-left">
            <p className="paper-eyebrow">AI/ML Engineer & Data Scientist - New York University</p>
            <h1 className="paper-name">
              Hrishik
              <br />
              <em>B. Desai</em>
            </h1>
            <p className="paper-tagline">
              I build intelligent, data-driven systems that turn messy information into usable insights and measurable
              outcomes. My work sits at the intersection of machine learning, analytics, and thoughtful product
              execution.
            </p>
            <div className="paper-cta">
              <a href="#projects" className="paper-btn-primary">
                View Work
              </a>
              <a href="#contact" className="paper-btn-ghost">
                Get in touch
              </a>
            </div>
          </div>

          <div className="paper-hero-right">
            <div className="paper-portrait-block">
              <div className="paper-portrait">
                <Image src="/profile-picture.png" alt="Hrishik B. Desai" fill sizes="88px" className="paper-image" />
              </div>
              <div>
                <div className="paper-portrait-name">Hrishik B. Desai</div>
                <div className="paper-portrait-sub">MS Computer Engineering - NYU'26</div>
              </div>
            </div>

            <div className="paper-stats">
              <div className="paper-stat-cell">
                <div className="paper-stat-val">2+</div>
                <div className="paper-stat-label">Experience</div>
              </div>
              <div className="paper-stat-cell">
                <div className="paper-stat-val">3+</div>
                <div className="paper-stat-label">Projects</div>
              </div>
              <div className="paper-stat-cell">
                <div className="paper-stat-val">1</div>
                <div className="paper-stat-label">Publication</div>
              </div>
              <div className="paper-stat-cell">
                <div className="paper-stat-val">&infin;</div>
                <div className="paper-stat-label">Learning &amp; Curiosity</div>
              </div>
            </div>

            <div className="paper-skill-block">
              <p className="paper-skill-title">Core Stack</p>
              <div className="paper-skill-tags">
                {coreSkills.map((skill) => (
                  <span key={skill} className="paper-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="paper-section" id="experience">
          <div className="paper-section-header">
            <span className="paper-section-num">01</span>
            <h2 className="paper-section-title">
              Professional <em>Experience</em>
            </h2>
          </div>

          <div className="paper-exp-list">
            {experiences.map((experience) => (
              <article key={experience.company} className="paper-exp-item">
                <div className="paper-exp-meta">
                  <div className="paper-exp-period">{experience.period}</div>
                  <div className="paper-exp-company">{experience.company}</div>
                  <div className="paper-exp-location">{experience.location}</div>
                </div>
                <div>
                  <div className="paper-exp-role">{experience.role}</div>
                  <ul className="paper-exp-bullets">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="paper-exp-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag} className="paper-exp-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="paper-section" id="projects">
          <div className="paper-section-header">
            <span className="paper-section-num">02</span>
            <h2 className="paper-section-title">
              Featured <em>Projects</em>
            </h2>
          </div>

          <div className="paper-project-grid">
            {projects.map((project) => (
              <article key={project.title} className="paper-project-card">
                <div className="paper-project-top">
                  <div className="paper-project-num">{project.number}</div>
                  {"liveUrl" in project || "codeUrl" in project ? (
                    <div className="paper-project-links">
                      {"liveUrl" in project && project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="paper-project-link">
                          Live
                        </a>
                      ) : null}
                      {"codeUrl" in project && project.codeUrl ? (
                        <a href={project.codeUrl} target="_blank" rel="noreferrer" className="paper-project-link">
                          Code
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                <h3 className="paper-project-title">{project.title}</h3>
                <p className="paper-project-subtitle">{project.subtitle}</p>
                <p className="paper-project-description">{project.description}</p>
                {"longDescription" in project && project.longDescription ? (
                  <>
                    {expandedProject === project.title ? (
                      <p className="paper-project-description">{project.longDescription}</p>
                    ) : null}
                    <button
                      type="button"
                      className="paper-read-more-btn"
                      onClick={() =>
                        setExpandedProject((current) => (current === project.title ? null : project.title))
                      }
                    >
                      {expandedProject === project.title ? "Show less" : "Read more"}
                    </button>
                  </>
                ) : null}
                <div className="paper-project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="paper-project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="paper-section" id="education">
          <div className="paper-section-header">
            <span className="paper-section-num">03</span>
            <h2 className="paper-section-title">
              Education & <em>Achievements</em>
            </h2>
          </div>

          <div className="paper-two-col">
            <div className="paper-panel">
              <div className="paper-panel-title">Education</div>
              <div className="paper-edu-item">
                <div>
                  <h3>New York University</h3>
                  <p>M.S. in Computer Engineering</p>
                </div>
                <span>2024 - 2026 - GPA 3.93/4.0</span>
              </div>
              <div className="paper-edu-item">
                <div>
                  <h3>The Maharaja Sayajirao University of Baroda</h3>
                  <p>B.E. in Electronics</p>
                </div>
                <span>2020 - 2024 - GPA 3.98/4.0</span>
              </div>
              <div className="paper-edu-item">
                <div>
                  <h3>The Maharaja Sayajirao University of Baroda</h3>
                  <p>Diploma in Performing Arts</p>
                  <p>Indian Classical Music: Instrument - Sitar</p>
                </div>
                <span>2019 - 2023 - Distinction</span>
              </div>
            </div>

            <div className="paper-panel">
              <div className="paper-panel-title">Achievements</div>
              <ul className="paper-list">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="paper-section" id="skills">
          <div className="paper-section-header">
            <span className="paper-section-num">04</span>
            <h2 className="paper-section-title">
              Technical <em>Stack</em>
            </h2>
          </div>

          <div className="paper-skill-filter">
            <button
              type="button"
              className={`paper-skill-filter-btn${activeSkillCategory === "All" ? " active" : ""}`}
              onClick={() => setActiveSkillCategory("All")}
            >
              All
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.title}
                type="button"
                className={`paper-skill-filter-btn${activeSkillCategory === category.title ? " active" : ""}`}
                onClick={() => setActiveSkillCategory(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="paper-chip-cloud">
            {visibleSkills.map((skill, index) => (
              <span key={`${activeSkillCategory}-${index}`} className="paper-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="paper-section" id="publications">
          <div className="paper-section-header">
            <span className="paper-section-num">05</span>
            <h2 className="paper-section-title">
              Publication & <em>Certifications</em>
            </h2>
          </div>

          <div className="paper-two-col">
            <div className="paper-panel">
              <div className="paper-publication-top">
                <div className="paper-panel-title">Publication</div>
                <a
                  href="https://drive.google.com/file/d/16d6SouIecCm5vv7VAjXIfwBgpD8yhHCb/view?usp=sharing"
                  className="paper-inline-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View publication
                </a>
              </div>
              <h3 className="paper-publication-title">Development of Armoured Robot</h3>
              <p className="paper-project-subtitle">Omni-Directional Defense Robotics System for All-Terrain Mobility</p>
              <p className="paper-publication-meta">Innovation - The Research Concept - Aug 2023 - Paper ID 17960</p>
              <p className="paper-publication-description">
                A research-driven robotic system focused on designing an omni-directional armored platform capable of
                navigating diverse terrains with enhanced mobility and structural resilience.
              </p>
              {expandedPublication ? (
                <p className="paper-publication-description">
                  Conducted research and development of an omni-directional armored robotic system designed for reliable
                  movement across varied terrains in defense-oriented scenarios. Explored mechanical design and control
                  strategies to enable multi-directional mobility, improving maneuverability compared to traditional
                  wheeled systems. Proposed a cost-effective and robust structural design balancing durability,
                  stability, and performance. The work combined principles of robotics, embedded systems, and
                  mechanical engineering, and was formalized into a published paper in an international journal,
                  demonstrating potential applications in defense operations, surveillance, and hazardous environment
                  navigation.
                </p>
              ) : null}
              <button
                type="button"
                className="paper-read-more-btn"
                onClick={() => setExpandedPublication((current) => !current)}
              >
                {expandedPublication ? "Show less" : "Read more"}
              </button>
              <div className="paper-project-tags">
                <span className="paper-project-tag">Research</span>
                <span className="paper-project-tag">Robotics</span>
                <span className="paper-project-tag">Embedded Systems</span>
                <span className="paper-project-tag">Mechanical Design</span>
                <span className="paper-project-tag">Control Systems</span>
                <span className="paper-project-tag">System Design</span>
              </div>
            </div>

            <div className="paper-panel">
              <div className="paper-panel-title">Certifications</div>
              <ul className="paper-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="paper-section" id="opportunities">
          <div className="paper-section-header">
            <span className="paper-section-num">06</span>
            <h2 className="paper-section-title">
              What I&apos;m Looking <em>For</em>
            </h2>
          </div>

          <div className="paper-opportunity-layout">
            <div className="paper-opportunity-list">
              <div className="paper-opportunity-item">AI &amp; Machine Learning Opportunities</div>
              <div className="paper-opportunity-item">Data Science Consulting</div>
              <div className="paper-opportunity-item">Business and Data Analyst roles</div>
              <div className="paper-opportunity-item">Forward Deployed Engineer roles</div>
              <div className="paper-opportunity-item">Open Source Collaboration</div>
            </div>

            <div className="paper-work-pref">
              <div className="paper-work-pref-title">Location &amp; Work Preferences</div>
              <div className="paper-work-pref-grid">
                <span>Current Location</span>
                <strong>New York, USA</strong>
                <span>Work Style</span>
                <strong>Remote &amp; On-site</strong>
                <span>Travel</span>
                <strong>Open to relocation</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="paper-contact" id="contact">
          <div className="paper-contact-intro">
            <div>
              <h2 className="paper-contact-heading">
                Let&apos;s
                <br />
                <em>connect.</em>
              </h2>
            </div>
            <div className="paper-contact-avatar" aria-hidden="true">
              <img src="/hrishik-profile.png" alt="" className="paper-contact-avatar-image" />
            </div>
          </div>
          <div className="paper-contact-links">
            <a className="paper-contact-link" href="mailto:hbd9580@nyu.edu">
              <span className="paper-contact-label">
                <Mail className="paper-contact-icon" />
              </span>
              <span className="paper-contact-handle">hbd9580@nyu.edu</span>
              <span className="paper-contact-arrow">-&gt;</span>
            </a>
            <a
              className="paper-contact-link"
              href="https://www.linkedin.com/in/hrishik-desai"
              target="_blank"
              rel="noreferrer"
            >
              <span className="paper-contact-label">
                <Linkedin className="paper-contact-icon" />
              </span>
              <span className="paper-contact-handle">/in/hrishik-desai</span>
              <span className="paper-contact-arrow">-&gt;</span>
            </a>
            <a
              className="paper-contact-link"
              href="https://github.com/desaihrishik"
              target="_blank"
              rel="noreferrer"
            >
              <span className="paper-contact-label">
                <Github className="paper-contact-icon" />
              </span>
              <span className="paper-contact-handle">github.com/desaihrishik</span>
              <span className="paper-contact-arrow">-&gt;</span>
            </a>
            <a
              className="paper-contact-link"
              href="https://drive.google.com/file/d/1SdLHb3myBQ1ZYPXD2E8Tav08pem0VySd/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span className="paper-contact-label">
                <FileText className="paper-contact-icon" />
              </span>
              <span className="paper-contact-handle">View latest PDF</span>
              <span className="paper-contact-arrow">-&gt;</span>
            </a>
            <a className="paper-contact-link" href="tel:+17323917091">
              <span className="paper-contact-label">
                <Phone className="paper-contact-icon" />
              </span>
              <span className="paper-contact-handle">+1 (732) 391-7091</span>
              <span className="paper-contact-arrow">-&gt;</span>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
