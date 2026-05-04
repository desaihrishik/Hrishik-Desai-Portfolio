import { Code, Brain, Database, BarChart, Wrench, Cpu, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming & Web",
    icon: Code,
    skills: ["Python", "R", "C", "SQL", "JavaScript", "Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    title: "ML/AI",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "XGBoost", "OpenCV", "Weka"],
  },
  {
    title: "Data Eng & Big Data",
    icon: Database,
    skills: ["Hadoop", "Apache Spark", "MapReduce", "Kafka", "Hive", "Cassandra", "MongoDB"],
  },
  {
    title: "Analytics & Viz",
    icon: BarChart,
    skills: ["Pandas", "NumPy", "Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    skills: ["Git", "Bash", "Docker", "Streamlit", "Flask", "AWS", "Azure"],
  },
  {
    title: "Hardware Design & Architecture",
    icon: Cpu,
    skills: [
      "Verilog",
      "VHDL",
      "RTL Design",
      "CMOS Circuits",
      "Computer Arithmetic",
      "Parallel Programming",
      "FPGA Design",
      "Parallel Processing",
    ],
  },
  {
    title: "Creative Tools",
    icon: Palette,
    skills: ["Adobe Photoshop", "Illustrator", "CorelDraw", "After Effects", "Premiere Pro", "Audacity", "FL Studio"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-medium rounded-md bg-muted text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
