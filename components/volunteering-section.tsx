import { Card } from "@/components/ui/card"
import Image from "next/image"

const volunteering = [
  
  {
    role: "Co-Founder & Co-President",
    organization: "Robotics & AV Club",
    period: "Jan 2022 – Present",
    logo: "/logos/robotics-club-logo.jpeg",
    achievements: [
      "Led technical operations and strategic planning for robotics initiatives",
      "Organized 50+ events including workshops, competitions, and technical demonstrations",
      "Grew club to national recognition through competitive deployments and innovation",
    ],
    skills: ["Leadership", "Robotics", "Event Management", "Team Building"],
  },
  {
    role: "Global Outreach Ambassador",
    organization: "New York University",
    period: "Spring 2025",
    logo: "/logos/nyu-logo.png",
    description:
      "Representing NYU in global outreach initiatives, connecting with prospective international students and promoting university programs worldwide.",
  },
  {
    role: "Training & Placement Cell Coordinator (Head Coordinator)",
    organization: "The Maharaja Sayajirao University of Baroda",
    period: "2023–2024",
    logo: "/logos/msu-logo.png",
    description:
      "Led training and placement initiatives for the Electronics Department, coordinating with companies and organizing campus recruitment drives.",
  },
  {
    role: "Senior Team Member",
    organization: "ISEE Club",
    period: "2023–2024",
    logo: "/logos/isee-club-logo.png",
    description:
      "Industrial Synergy for Electrical and Electronics Engineers. Organized industrial trainings, workshops, expert guest lectures and seminars for students.",
  },
  {
    role: "Senior Organizing Team Member",
    organization: "Footprints'21 (National Level Technical Event)",
    period: "2020–2021",
    logo: "/logos/footprints-logo.png",
    description:
      "Worked under the Electronics department for this National Level Technical Event. Designed several models and contributed to the Designing Team using Photoshop and various software tools.",
  },
]

export function VolunteeringSection() {
  return (
    <section id="volunteering" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Leaderships & Volunteering </h2>

        <div className="space-y-6">
          {volunteering.map((vol, index) => {
            const Icon = vol.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  {vol.logo ? (
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <Image
                        src={vol.logo || "/placeholder.svg"}
                        alt={`${vol.organization} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : Icon ? (
                    <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                  ) : null}

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{vol.role}</h3>
                      <p className="text-lg text-primary font-medium">{vol.organization}</p>
                      <p className="text-sm text-muted-foreground">{vol.period}</p>
                    </div>

                    {vol.description && <p className="text-muted-foreground leading-relaxed">{vol.description}</p>}

                    {vol.achievements && (
                      <ul className="space-y-2">
                        {vol.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {vol.skills && (
                      <div className="flex flex-wrap gap-2">
                        {vol.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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
