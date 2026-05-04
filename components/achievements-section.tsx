import { Card } from "@/components/ui/card"
import { Trophy, Award, Medal, Star, Users } from "lucide-react"

const achievements = [
  {
    title: "First Rank Merit Awards",
    description: "Presented Merit awards for securing First Rank in Electronics Department for BE-1 and BE-2.",
    icon: Trophy,
    year: "2021-2022",
  },
  {
    title: "4th Position - Technoxian International Robotics Championship",
    description: "Secured 4th position in the International Robotics Championship held at New Delhi.",
    icon: Medal,
    year: "2023",
  },
  {
    title: "CV Raman Maths-Science Exhibition",
    description:
      "Participated in the 15th CV Raman Maths-Science Exhibition at district level to represent project on Soil Moisture Detector.",
    icon: Star,
    year: "2018",
  },
  {
    title: "School Council Vice-Captain",
    description: "Elected as the Vice-Captain of School Council, demonstrating leadership and responsibility.",
    icon: Users,
    year: "2016-2017",
  },
  {
    title: "Academic Excellence Certificates",
    description:
      "Presented excellence certificates for various subjects including English, Mathematics and Science at School Level.",
    icon: Award,
    
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-foreground">{achievement.title}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{achievement.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
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
