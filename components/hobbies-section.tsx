import { Card } from "@/components/ui/card"
import { Dumbbell, Music, Palette, Wrench } from "lucide-react"

const hobbies = [
  {
    category: "Sports",
    items: ["Football", "Cricket", "District-level Skating", "Certified Swimmer"],
    icon: Dumbbell,
  },
  {
    category: "Music",
    items: ["Indian Classical Music (Keyboard, Sitar, Tabla)", "Music Performance & Composition"],
    icon: Music,
  },
  {
    category: "Arts",
    items: ["Drawing Elementary & Intermediate Certifications (Grade 'A')", "Photography", "Nature Exploration"],
    icon: Palette,
  },
  {
    category: "Technical Projects",
    items: ["Hands-on Project Building", "Robotics & Electronics Prototyping", "Creative Problem Solving"],
    icon: Wrench,
  },
]

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Hobbies & Interests</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold text-foreground">{hobby.category}</h3>
                    <ul className="space-y-1">
                      {hobby.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-secondary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
