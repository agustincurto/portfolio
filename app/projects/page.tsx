import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span>Agustin Curto Strasorier</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#work" className="text-sm font-medium transition-colors hover:text-primary">
              Work
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#process" className="text-sm font-medium transition-colors hover:text-primary">
              Process
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button size="sm" className="hidden md:flex">
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="flex flex-col gap-4">
            <Button variant="ghost" size="sm" className="w-fit" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              A collection of my software engineering projects across various technologies and domains.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/finance-app" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Finance App Redesign"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">E-Commerce Platform</h3>
                <p className="mt-2 text-muted-foreground">
                  A scalable e-commerce solution with microservices architecture and real-time inventory management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Node.js</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">React</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">MongoDB</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/health-tracker" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Health Tracker App"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Health Monitoring System</h3>
                <p className="mt-2 text-muted-foreground">
                  An IoT-based health monitoring platform with real-time data processing and analytics dashboard.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Python</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">AWS</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">React</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/travel-platform" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Travel Platform"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Travel Booking API</h3>
                <p className="mt-2 text-muted-foreground">
                  A comprehensive RESTful API for travel bookings with payment integration and recommendation engine.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Node.js</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Express</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">PostgreSQL</div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/e-commerce" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="E-commerce Redesign"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">E-commerce Optimization</h3>
                <p className="mt-2 text-muted-foreground">
                  Performance optimization and architecture redesign for a high-traffic e-commerce platform.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Performance Tuning</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Redis</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Kubernetes</div>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/education-platform" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Education Platform"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Learning Management System</h3>
                <p className="mt-2 text-muted-foreground">
                  A full-featured LMS with video streaming, interactive assessments, and analytics dashboard.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">TypeScript</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Next.js</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">GraphQL</div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/social-app" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Social Networking App"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Social Networking Backend</h3>
                <p className="mt-2 text-muted-foreground">
                  A high-performance backend for a social networking application with real-time messaging and content
                  delivery.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Go</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">WebSockets</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Microservices</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Agustin Curto Strasorier. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="container mt-2 text-center">
          <p className="text-xs text-muted-foreground">
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
      </footer>
    </div>
  )
}

