import { Card } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const publications = [
  {
    title: "Development of Armoured Robot",
    journal: "Innovation — The Research Concept (International Journal)",
    paperId: "17960",
    date: "Aug 2023",
    link: "https://drive.google.com/file/d/16d6SouIecCm5vv7VAjXIfwBgpD8yhHCb/view?usp=sharing",
    description:
      "Authored research on an omni-directional armoured robot restructured for all terrains, offering a cost-effective solution for defense applications. The study stemmed from a hands-on engineering project focused on robotics design and prototyping.",
    topics: ["Robotics", "Mechanical Design", "Defense Applications", "Omni-directional Systems"],
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">Publications</h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{pub.title}</h3>
                    <p className="text-lg text-primary font-medium">{pub.journal}</p>
                    <p className="text-sm text-muted-foreground">
                      Paper ID: {pub.paperId} • {pub.date}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{pub.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {pub.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {pub.link && (
                      <Button asChild variant="outline" className="bg-transparent">
                        <Link
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <span>View Publication</span>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="outline" className="bg-transparent">
                      <Link href="/publications/armoured-robot" className="flex items-center gap-2">
                        <span>Read Paper</span>
                        <FileText className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
