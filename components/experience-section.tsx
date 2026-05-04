"use client"

import { Briefcase, TrendingUp, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

const experiences = [
  {
    role: "Data & Analytics Intern",
    company: "Phibro Animal Health Corporation",
    period: "May 2025 – Aug 2025",
    icon: TrendingUp,
    logo: "/logos/phibro-logo.png",
    summary: "Transformed corporate finance and supply chain operations through data-driven insights and ML pipelines.",
    details: [
      "Transformed corporate finance and supply chain operations through data-driven insights, collaborating with a team of 7 to deliver scalable solutions and playing a pivotal role in the project.",
      "Constructed ML pipelines (classification + regression) to forecast demand from skewed datasets.",
      "Introduced temporal features to improve accuracy and streamline workflows, increasing efficiency by 28%.",
      "Designed dashboards in Power BI for monitoring financial and logistics KPIs, enabling data-driven decisions across teams.",
    ],
    skills: ["Python", "ML Pipelines", "Power BI", "Feature Engineering", "Data Analytics"],
  },
  {
    role: "Software Developer Intern, Artificial Intelligence R&D",
    company: "Matrix Comsec Pvt. Ltd.",
    period: "May 2023 – Aug 2023",
    icon: Briefcase,
    logo: "/logos/matrix-logo.png",
    summary: "Engineered object detection and classification models with YOLOv5 and ResNet, improving accuracy by 15%.",
    details: [
      "Engineered object detection and classification models (YOLOv5, ResNet), increasing accuracy by 15%.",
      "Assessed and benchmarked model reliability across datasets of 25,000+ entries.",
      "Partnered with engineering team to troubleshoot ML pipelines and strengthen system resilience.",
    ],
    skills: ["YOLOv5", "ResNet", "PyTorch", "OpenCV", "Model Optimization"],
  },
]

export function ExperienceSection() {
  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([])

  const toggleExperience = (index: number) => {
    setExpandedExperiences((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedExperiences.includes(index)
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>

                    <div className="space-y-3">
                      {!isExpanded && <p className="text-muted-foreground">{exp.summary}</p>}

                      {isExpanded && (
                        <ul className="space-y-2">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">▹</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <button
                        onClick={() => toggleExperience(index)}
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

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
