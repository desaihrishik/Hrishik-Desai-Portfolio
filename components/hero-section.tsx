"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
                Hrishik B. Desai
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-medium">AI/ML • Data Science • Robotics</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">New York City, NY</span>
              </div>
              <p className="text-2xl sm:text-3xl text-muted-foreground italic text-balance">
                "Turning Data into Intelligence, and Ideas into Impact."
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-muted border border-border">
                <span className="text-sm font-medium text-foreground">M.S. Computer Engineering @ NYU</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-muted border border-border">
                <span className="text-sm font-medium text-foreground">Robotics & EV Club Co-Founder</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://drive.google.com/file/d/1SdLHb3myBQ1ZYPXD2E8Tav08pem0VySd/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/hrishik-desai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a href="mailto:hbd9580@nyu.edu" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-muted/30">
                <Image
                  src="/profile-picture.png"
                  alt="Hrishik B. Desai"
                  fill
                  className="object-contain object-center scale-125"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
