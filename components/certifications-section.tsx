import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const certifications = [
  {
    title: "Robopack Workshop",
    issuer: "Tech Analogy",
    description: "Comprehensive workshop on robotics fundamentals and practical applications.",
  },
  {
    title: "Robotics & AI Course",
    issuer: "Great Learning Academy",
    description: "Advanced course covering robotics systems and artificial intelligence integration.",
  },
  {
    title: "Emerging Technologies (AI, IoT, ERP)",
    issuer: "Edunet (SAP CSR Initiative)",
    description: "8-month intensive workshop covering AI, IoT, and ERP systems under SAP CSR initiative.",
  },
  {
    title: "IoT and RSLK Workshop",
    issuer: "Edgate Technologies (Texas Instruments India University Program)",
    description: "Hands-on workshop on IoT applications and Robotics System Learning Kit.",
  },
  {
    title: "PCB Designing with Eagle",
    issuer: "Certification Course",
    description: "Professional certification in PCB design using Eagle CAD software.",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
