"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "DineNYC — AI Enhanced Restaurant Finder",
    date: "Apr 2025",
    summary:
      "RAG-powered restaurant recommendation system with LLM agents delivering personalized suggestions with <15s latency and ~80% relevance.",
    details: [
      "Integrated a Retrieval-Augmented Generation (RAG) system capable to achieve recommendation relevance by 80%, enabling faster and more context-aware results.",
      "Implemented LLM-driven agents to process user queries with <15s latency, delivering faster restaurant suggestions.",
      "Processed and optimized large datasets (250k+ records) into curated, fast-query structures for scalable deployment.",
    ],
    image: "/restaurant-recommendation-app-interface.jpg",
    metrics: ["<15s Latency", "~80% Relevance", "250k+ Records"],
    demoLink: "https://dinenyc.vercel.app/",
    githubLink: "https://github.com/desaihrishik/DineNYC",
  },
  {
    title: "GoSafe — Crime Risk Prediction Platform",
    date: "Dec 2024",
    summary:
      "Crime risk prediction system across 300+ NYC neighborhoods using ensemble ML models with 95% training accuracy.",
    details: [
      "Developed interactive ML-powered platform with real-time evaluation of predictive models across 300+ neighborhoods.",
      "Trained Random Forest, Logistic Regression, and XGBoost models achieving 95% training accuracy; reduced API response time by 40%.",
    ],
    image: "/crime-prediction-map-dashboard.jpg",
    metrics: ["95% Accuracy", "300+ Neighborhoods", "40% Faster API"],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "AI based Object Detection Robot",
    date: "May 2024",
    summary:
      "6-DOF robotic arm with autonomous object classification and segregation using computer vision and YOLOv8.",
    details: [
      "Designed and developed a 6-DOF robotic arm capable of autonomously classifying and segregating objects using computer vision.",
      "Integrated YOLOv8 on a Raspberry Pi board for real-time object detection and integrated it with an ARM Cortex-M051 microcontroller to drive the arms.",
      "Proposed a custom microcontroller circuit design to improve efficiency and robustness.",
      "Achieved accurate object classification and reliable arm movement, demonstrating scalable applications in industrial automation.",
    ],
    image: "/projects/robotic-arm.png",
    metrics: ["6-DOF Arm", "Real-time Detection", "Custom Circuit"],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "Prof-Eval — Faculty Evaluation System",
    date: "Aug 2023",
    summary:
      "Real-time faculty evaluation platform processing 500+ evaluations per semester with interactive Power BI dashboards.",
    details: [
      "Created a real-time evaluation tool for analyzing 500+ student evaluations per semester.",
      "Built interactive dashboards in PowerBI for structured insights and evaluation workflows.",
    ],
    image: "/evaluation-dashboard-analytics.jpg",
    metrics: ["500+ Evaluations/Semester", "Real-time Processing", "Interactive Dashboards"],
    demoLink: null,
    githubLink: null,
  },
]

export function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([])

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  useEffect(() => {
    const sections = ["home", "about", "experience", "skills", "projects", "publications", "certifications", "contact"]
    // You can add any additional logic here if needed
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects.includes(index)
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.date}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {!isExpanded && <p className="text-muted-foreground leading-relaxed">{project.summary}</p>}

                    {isExpanded && (
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <button
                      onClick={() => toggleProject(index)}
                      className="flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                    >
                      {isExpanded ? (
                        <>
                          Show less <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Show details <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {(project.demoLink || project.githubLink) && (
                    <div className="flex gap-3 pt-2">
                      {project.demoLink && (
                        <Button size="sm" asChild>
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
