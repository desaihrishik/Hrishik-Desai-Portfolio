import { Card } from "@/components/ui/card"
import { MessageSquare, Users, Lightbulb, Target } from "lucide-react"

const skills = [
  {
    title: "Presentations & Public Speaking",
    description: "Confident, articulate, and professional in delivering presentations and public speaking engagements.",
    icon: MessageSquare,
  },
  {
    title: "Active Listening & Observation",
    description: "Strong listening and observational abilities with effective problem-solving approach.",
    icon: Target,
  },
  {
    title: "Leadership & Team Coordination",
    description: "Proven leadership skills with extensive experience in team coordination and mentoring.",
    icon: Users,
  },
  {
    title: "Problem-Solving",
    description: "Analytical mindset with ability to identify issues and develop effective solutions.",
    icon: Lightbulb,
  },
]

export function CommunicationSection() {
  return (
    <section id="communication" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Communication Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
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
