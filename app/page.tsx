"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { EMAIL, RESUME_FILE, FULL_RESUME_FILE, GITHUB_URL, LINKEDIN_URL} from "@/lib/contants"
import { Download, Send, Linkedin, ExternalLink, Mail, MapPin, Menu, X } from "lucide-react"


export default function Home() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col dark">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            Agustin Curto Strasorier
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : "text-muted-foreground"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "work" ? "text-primary" : "text-muted-foreground"}`}
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary" : "text-muted-foreground"}`}
            >
              Contact
            </button>
            <Button asChild size="sm">
              <a href={RESUME_FILE} download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-border py-4 px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium py-2 hover:text-primary">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium py-2 hover:text-primary">
              About
            </button>
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium py-2 hover:text-primary">
              Work
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium py-2 hover:text-primary">
              Contact
            </button>
            <Button asChild size="sm" className="w-full">
              <a href={RESUME_FILE} download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="gradient-text">Agustin Curto Strasorier</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Software Engineer</h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Experienced software engineer with 7+ years of experience building scalable applications and solving complex problems with clean, efficient code.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button onClick={() => scrollToSection("about")}>Learn More About Me</Button>
                  <Button variant="outline" onClick={() => scrollToSection("contact")}>
                    Get In Touch
                  </Button>
                </div>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/profile.jpeg"
                  alt="Agustin Curto Strasorier"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

              <div className="space-y-6">
                <p className="text-lg">
                  I'm a Software Engineer with 7+ years of experience in backend development, passionate about building scalable and efficient systems.
                  A curious and analytical thinker who enjoys investigating and learning, always staying up to date with the latest technologies.
                  Committed team player with a strong sense of responsibility, effective communication skills, and a problem-solving mindset.
                  Self-motivated, persistent, and goal-oriented.
                  Holds a degree in Computer Science and a Computer Analyst certification from the <strong><a href="https://www.unc.edu.ar/" target="_blank" rel="noopener noreferrer">National University of Córdoba</a></strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="gradient-border p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Key Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Senior Software Engineer</h4>
                        <p className="text-sm text-muted-foreground">Compass </p>
                        {/* <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                          <li>Led development of microservices architecture for enterprise applications</li>
                          <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                          <li>Mentored junior developers and conducted code reviews</li>
                        </ul> */}
                      </div>
                      <div>
                        <h4 className="font-medium">Backend Engineer</h4>
                        <p className="text-sm text-muted-foreground"> Satellogic </p>
                        {/* <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                          <li>Developed and maintained RESTful APIs and web applications</li>
                          <li>Optimized database queries resulting in 30% performance improvement</li>
                        </ul> */}
                      </div>
                      <div>
                        <h4 className="font-medium">Backend Engineer</h4>
                        <p className="text-sm text-muted-foreground"> Mercado Libre </p>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Skills & Education</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Technical Skills</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Python, AWS, Docker, Kubernetes, MongoDB, PostgreSQL, etc... to be continue
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Specialties</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Full-Stack Development, Cloud Architecture, System Design, API Development, Performance
                          Optimization
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Education</h4>
                        <p className="text-sm text-muted-foreground">Bachelor’s Degree in Computer Science</p>
                        <p className="text-xs text-muted-foreground">
                          FaMAF - National University of Córdoba | 2014 - 2020
                        </p>
                        <p className="text-sm text-muted-foreground">Computer Analyst</p>
                        <p className="text-xs text-muted-foreground">
                          FaMAF - National University of Córdoba | 2014 - 2017
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button asChild>
                    <a href={FULL_RESUME_FILE} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">My Work</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Check out my portfolio on GitHub to see my latest projects.
              </p>

              <div className="gradient-border p-8 bg-card flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <ExternalLink className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">View My Portfolio</h3>
                <Button asChild size="lg">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit My GitHub Profile
                  </a>
                </Button>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Backend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building robust, scalable server-side applications and APIs with Python, Golang and cloud technologies.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating responsive, interactive user interfaces with React, TypeScript, and modern web technologies.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">DevOps & Cloud</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementing CI/CD pipelines, containerization, and cloud infrastructure for seamless deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary">
                        {EMAIL}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-muted-foreground">Córdoba, Argentina</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-6">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <Button asChild variant="outline" size="icon">
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href={`mailto:${EMAIL}`} aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="gradient-border p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Agustin Curto Strasorier. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                GitHub
              </a>
              <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary">
                Email
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>
              Original template designed by{" "}
              <a
                href="https://www.behance.net/shuaibkarim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Shuaib Karim
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

