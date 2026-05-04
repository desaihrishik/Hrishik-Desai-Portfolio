import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">About Me</h2>

        <div className="space-y-8">
          {/* Bio */}
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-medium">Master's student</span> in Computer Engineering at <span className="text-foreground font-medium">New York University</span> with a passion for deploying
              intelligent systems at scale. My academic focus spans{" "}
              <span className="text-foreground font-medium">AI/ML, Big Data systems, and Robotics</span>, where I
              combine theoretical knowledge with practical implementation to solve real-world challenges.
            </p>
            <p>
              Beyond academics, I've demonstrated leadership and impact as{" "}
              <span className="text-foreground font-medium">Co-Founder & Co-President of the Robotics & EV Club</span>,
              organizing 50+ events and leading competitive deployments that have gained national recognition. I believe
              in building systems that not only work but deliver measurable business outcomes.
            </p>
            <p>
              When I'm not engineering solutions, I channel my creativity and discipline through my passion for music, whether exploring melodies on the piano or immersing myself in new compositions.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
            <div className="space-y-6">
              {/* NYU */}
              <div className="relative pl-8 border-l-2 border-primary pb-6">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="flex items-start gap-3 mb-2">
                  <Image
                    src="/logos/nyu-logo.png"
                    alt="NYU Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Master of Science, Computer Engineering</h4>
                    <p className="text-muted-foreground font-medium">New York University</p>
                    <p className="text-sm text-muted-foreground">2024 – 2026 • GPA: 3.9/4.0</p>
                  </div>
                </div>
              </div>

              {/* Bachelor's */}
              <div className="relative pl-8 border-l-2 border-secondary pb-6">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
                <div className="flex items-start gap-3 mb-2">
                  <Image
                    src="/logos/msu-logo.png"
                    alt="MSU Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Bachelor of Engineering, Electronics</h4>
                    <p className="text-muted-foreground font-medium">The Maharaja Sayajirao University of Baroda</p>
                    <p className="text-sm text-muted-foreground">2020 – 2024 • GPA: 3.98/4.0</p>
                  </div>
                </div>
              </div>

              {/* Music Diploma */}
              <div className="relative pl-8 border-l-2 border-accent pb-6">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                <div className="flex items-start gap-3 mb-2">
                  <Image
                    src="/logos/msu-logo.png"
                    alt="MSU Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Diploma in Performing Arts</h4>
                    <p className="text-sm text-muted-foreground">(Indian Classical Music: Instrument - Sitar)</p>
                    <p className="text-muted-foreground font-medium">The Maharaja Sayajirao University of Baroda</p>
                    <p className="text-sm text-muted-foreground">2019 – 2023 • First Class Distinction</p>
                  </div>
                </div>
              </div>

              {/* Upantya Visharad */}
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                <div className="flex items-start gap-3 mb-2">
                  <Image
                    src="/logos/brihad-gujarat-logo.png"
                    alt="Brihad Gujarat Sangeet Samiti Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Upantya Visharad</h4>
                    <p className="text-sm text-muted-foreground">(Indian Classical Music: Instrument - Keyboard)</p>
                    <p className="text-muted-foreground font-medium">Brihad Gujarat Sangeet Samiti</p>
                    <p className="text-sm text-muted-foreground">2018 • First Class Distinction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
