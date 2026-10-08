"use client"

import { useEffect, useState, type CSSProperties, type ReactNode } from "react"
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  Copy,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Server,
  X,
} from "lucide-react"

const EMAIL = "vivekpv1610@gmail.com"
const GITHUB = "https://github.com/VIVEK-P-V"
const LINKEDIN = "https://in.linkedin.com/in/pvvivek"

const navItems = [
  { id: "work", label: "Work" },
  { id: "devops", label: "DevOps" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
]

type Project = {
  name: string
  monogram: string
  tagline: string
  tags: { label: string; live?: boolean }[]
  description: string
  did: { lead: string; rest: string }[]
  stack: string[]
  link?: { href: string; label: string }
  tint: string
  tintInk: string
  visual: "services" | "audit" | "monorepo" | "sdk"
  caption: string
}

const projects: Project[] = [
  {
    name: "CloudEagle.ai",
    monogram: "CE",
    tagline: "SaaS spend, finally under control.",
    tags: [{ label: "Live", live: true }, { label: "Backend" }, { label: "B2B SaaS" }],
    description:
      "A SaaS management and procurement platform that helps businesses discover, manage, and optimize their software applications and spending.",
    did: [
      { lead: "Scalable backend microservices", rest: " in Java and Spring Boot." },
      { lead: "Optimized complex database queries", rest: " on MySQL for faster, leaner reads." },
      { lead: "REST APIs", rest: " powering the platform's core workflows." },
    ],
    stack: ["Java", "Spring Boot", "MySQL", "REST APIs", "Microservices"],
    link: { href: "https://www.cloudeagle.ai/", label: "cloudeagle.ai" },
    tint: "#F0ECFB",
    tintInk: "#5B3FB8",
    visual: "services",
    caption: "cloudeagle.ai",
  },
  {
    name: "nseek",
    monogram: "ns",
    tagline: "Local SEO audits on autopilot.",
    tags: [{ label: "Live", live: true }, { label: "Full-stack" }, { label: "Web" }],
    description:
      "A comprehensive local SEO application that helps businesses automate NAP (name, address, phone) consistency audits across directories.",
    did: [
      { lead: "Scalable web scraper", rest: " engineered with Playwright." },
      { lead: "Interactive analytics dashboard", rest: " in Next.js and React." },
      { lead: "Automated NAP consistency audits", rest: " backed by PostgreSQL." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Playwright"],
    link: { href: "https://nseek.in/", label: "nseek.in" },
    tint: "#E7F4EC",
    tintInk: "#1F6B3F",
    visual: "audit",
    caption: "nseek.in",
  },
  {
    name: "LabBase",
    monogram: "LB",
    tagline: "Many apps, one monorepo.",
    tags: [{ label: "Live", live: true }, { label: "Full-stack" }, { label: "Enterprise" }],
    description:
      "A scalable multi-application SaaS platform built on an Nx monorepo architecture, with shared libraries across frontends and services.",
    did: [
      { lead: "Nx monorepo architecture", rest: " for multiple apps sharing code." },
      { lead: "Responsive UIs", rest: " in React and Vue." },
      { lead: "RESTful backend services", rest: " in Node.js and Express with OpenTelemetry observability." },
    ],
    stack: ["React", "Vue", "Node.js", "Express", "MongoDB", "Nx", "OpenTelemetry"],
    link: { href: "https://labbase.in/", label: "labbase.in" },
    tint: "#E9EFFB",
    tintInk: "#2B4FA8",
    visual: "monorepo",
    caption: "labbase.in",
  },
  {
    name: "IDaaS Platform & Java SDK",
    monogram: "ID",
    tagline: "Identity as a service, with a Java SDK.",
    tags: [{ label: "Private" }, { label: "Backend" }, { label: "SDK" }],
    description:
      "A comprehensive identity platform handling scalable user authentication, tenant administration, and subscription management.",
    did: [
      { lead: "Production-ready Java SDK", rest: " so client apps integrate in a few lines." },
      { lead: "Secure authentication", rest: " with JWT and Redis-backed sessions." },
      { lead: "Tenant & subscription management", rest: " on Fastify with Drizzle ORM." },
    ],
    stack: ["Java 11+", "Node.js", "Fastify", "Drizzle ORM", "Redis", "JWT"],
    tint: "#FDECEA",
    tintInk: "#A8362A",
    visual: "sdk",
    caption: "IdaasClient.java",
  },
]

const experience = [
  {
    period: "Oct 2024 — Present",
    role: "Java Backend Developer",
    company: "Inloops Innovations",
    current: true,
    summary: "Spring Boot services, server setup & management, and Docker/Dokploy CI/CD.",
    description:
      "Built scalable backend systems using Java and Spring Boot. Designed RESTful APIs and implemented Spring Security for secure authentication and role-based access control. Set up and manage the company's servers, run CI/CD pipelines, and streamline deployments using Docker and Dokploy.",
  },
  {
    period: "Jun 2024 — Feb 2025",
    role: "Software Developer Intern",
    company: "JSpiders (Test Yantra Software Solutions)",
    current: false,
    summary: "Java, Spring Boot, and Hibernate backends.",
    description:
      "Developed backend systems using Java, Spring Boot, and Hibernate. Designed and implemented RESTful APIs tested with Postman. Optimized Hibernate ORM queries for improved database efficiency for MySQL/PostgreSQL.",
  },
]

const skills = [
  { category: "Languages & Frameworks", items: ["Java 8+", "JavaScript", "Spring Boot", "Hibernate ORM", "Spring IoC", "Spring MVC"] },
  { category: "Web & APIs", items: ["HTML5", "CSS3", "REST APIs", "React", "Next.js", "Node.js"] },
  { category: "Databases", items: ["MySQL 8.0.28", "PostgreSQL", "Oracle 10g+", "MongoDB", "Redis"] },
  { category: "Servers & DevOps", items: ["Docker", "Dokploy", "CI/CD pipelines", "Server setup", "Server management", "Git"] },
  { category: "Tools", items: ["IntelliJ IDEA", "Eclipse", "Postman", "Swagger"] },
]

export default function Home() {
  useReveal()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Work />
        <Freelance />
        <Infra />
        <Experience />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

/* ---------- Hooks & primitives ---------- */

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}>{children}</div>
}

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent ${className}`}>
      <span className="h-px w-5 bg-current" />
      {children}
    </p>
  )
}

function Chip({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span
      style={style}
      className={`inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium text-ink-2 ${className}`}
    >
      {children}
    </span>
  )
}

const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97]"

/* ---------- Header ---------- */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled || open ? "border-b bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <Wrap className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-[15px] font-bold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-foreground text-xs font-extrabold text-background">
            VP
          </span>
          Vivek P V
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-2 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="VIVEK_PV_Resume.pdf"
            className="ml-2 rounded-full border border-line-strong px-4 py-2 text-sm font-semibold transition-colors hover:border-foreground"
          >
            Resume
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 text-ink-2 hover:bg-secondary sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Wrap>

      {open && (
        <Wrap className="pb-4 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b py-3 text-lg font-semibold"
            >
              {item.label}
            </a>
          ))}
          <a href="/resume.pdf" download="VIVEK_PV_Resume.pdf" className="block py-3 text-lg font-semibold">
            Resume
          </a>
        </Wrap>
      )}
    </header>
  )
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top">
      <Wrap className="grid items-center gap-12 pb-16 pt-12 md:grid-cols-[1fr_auto] md:pb-28 md:pt-24">
        <div>
          <h1
            className="reveal max-w-[16ch] text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold leading-[1.04] tracking-[-0.035em]"
            style={{ transitionDelay: "60ms" }}
          >
            I build full-stack apps that <span className="text-accent">just work.</span>
          </h1>
          <p
            className="reveal mt-5 max-w-[54ch] text-base leading-relaxed text-ink-2 sm:mt-6 sm:text-lg"
            style={{ transitionDelay: "120ms" }}
          >
            Java full stack developer. <strong className="text-foreground">Four products shipped</strong> across SaaS,
            SEO and identity
            <span className="hidden sm:inline">
              . I care about the parts users never see — the API that answers fast, the auth that just holds, and{" "}
              <strong className="text-foreground">the servers it all runs on</strong>, deployed with Docker, Dokploy
              and CI/CD.
            </span>
            <span className="sm:hidden">
              {" "}
              — plus <strong className="text-foreground">the servers they run on</strong>.
            </span>
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-2.5" style={{ transitionDelay: "180ms" }}>
            <a href="#work" className={`${btn} bg-accent text-white shadow-[0_8px_20px_-8px_var(--accent)] hover:bg-accent-ink`}>
              See the work <ArrowDown size={16} />
            </a>
            <a href="#contact" className={`${btn} border border-line-strong bg-card hover:border-foreground`}>
              Say hello
            </a>
            <span className="hidden sm:flex">
              <IconLink href={GITHUB} label="GitHub">
                <Github size={18} />
              </IconLink>
              <IconLink href={LINKEDIN} label="LinkedIn">
                <Linkedin size={18} />
              </IconLink>
            </span>
          </div>
        </div>

        <ShippedCard />
      </Wrap>
    </section>
  )
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full text-ink-2 transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </a>
  )
}

function ShippedCard() {
  return (
    <div className="reveal hidden w-[340px] md:block" style={{ transitionDelay: "240ms" }}>
      <div className="mb-3 flex items-center justify-between px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        <span>Shipped</span>
        <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
          <span className="size-1.5 rounded-full bg-ok" /> Open to work
        </span>
      </div>
      <ul className="divide-y rounded-[var(--radius)] border bg-card shadow-soft">
        {projects.map((p, i) => {
          const live = p.tags.some((t) => t.live)
          return (
            <li key={p.name}>
              <a href={`#project-${i}`} className="group flex items-center gap-3 px-5 py-4">
                <span className="size-2 shrink-0 rounded-full" style={{ background: p.tintInk }} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{p.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{live ? "Live" : "Private"}</span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ---------- Work ---------- */

function Work() {
  return (
    <section id="work" className="pb-24 md:pb-32">
      <Wrap>
        <div className="reveal mb-10 md:mb-14">
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Four products, four different problems.
          </h2>
          <p className="mt-2 text-muted-foreground">Three live today, one under NDA.</p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </Wrap>
    </section>
  )
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  const kind = p.tags.filter((t) => !t.live).map((t) => t.label).join(" · ")
  const live = p.tags.some((t) => t.live)

  return (
    <article
      id={`project-${index}`}
      className="reveal group grid overflow-hidden rounded-[28px] border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2"
    >
      {/* Text side */}
      <div className={`flex flex-col p-6 sm:p-10 lg:p-12 ${flip ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="font-mono text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-border" />
          <span style={{ color: p.tintInk }}>{kind}</span>
          <span
            className={`ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${
              live ? "bg-ok-soft text-ok" : "bg-secondary text-muted-foreground"
            }`}
          >
            <span className={`size-1.5 rounded-full ${live ? "bg-ok" : "bg-muted-foreground"}`} />
            {live ? "Live" : "Private"}
          </span>
        </div>

        <h3 className="mt-4 text-[clamp(1.6rem,3vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em] sm:mt-6">
          {p.name}
        </h3>
        <p className="mt-1 text-[15px] font-medium" style={{ color: p.tintInk }}>
          {p.tagline}
        </p>
        <p className="mt-4 hidden leading-relaxed text-ink-2 sm:block">{p.description}</p>

        <ul className="mt-5 space-y-3 border-t pt-5 sm:mt-6 sm:pt-6">
          {p.did.map((d) => (
            <li key={d.lead} className="flex gap-3 text-[15px] leading-snug text-ink-2">
              <span
                className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                style={{ background: p.tint, color: p.tintInk }}
              >
                <Check size={11} strokeWidth={3} />
              </span>
              <span>
                <strong className="font-semibold text-foreground">{d.lead}</strong>
                {d.rest}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="text-[13px] text-muted-foreground">{p.stack.join(" · ")}</p>
          {p.link && (
            <a
              href={p.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              Visit
              <ArrowUpRight size={15} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>

      {/* Visual side */}
      <div
        className={`relative order-first h-[210px] overflow-hidden sm:h-auto sm:min-h-[380px] ${flip ? "lg:order-1" : "lg:order-none"}`}
        style={{ background: `radial-gradient(circle at ${flip ? "85%" : "15%"} 0%, rgba(255,255,255,0.7), transparent 55%), ${p.tint}` }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(${p.tintInk}22 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(ellipse at 30% 20%, black, transparent 70%)",
          }}
        />
        <div
          className={`absolute bottom-0 top-6 w-[92%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-2 sm:top-14 ${
            flip ? "left-0 sm:-left-2" : "right-0 sm:-right-2"
          }`}
        >
          <Window title={p.caption} ink={p.tintInk} flip={flip}>
            <Screen project={p} />
          </Window>
        </div>
      </div>
    </article>
  )
}

/* ---------- Mock app windows (illustrations, not screenshots) ---------- */

function Window({ title, ink, flip, children }: { title: string; ink: string; flip: boolean; children: ReactNode }) {
  return (
    <div
      className={`h-full overflow-hidden border bg-white shadow-[0_30px_60px_-20px_rgba(23,23,26,0.25)] ${
        flip ? "rounded-tr-2xl border-l-0" : "rounded-tl-2xl border-r-0"
      }`}
    >
      <div className="flex items-center gap-3 border-b bg-[#fbfaf7] px-4 py-2.5">
        <div className="flex gap-1.5">
          {["#ff6159", "#ffbd2e", "#28c941"].map((c) => (
            <span key={c} className="size-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex flex-1 items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-[11px] text-muted-foreground shadow-soft">
          <span className="size-1.5 rounded-full" style={{ background: ink }} />
          {title}
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  )
}

function Screen({ project }: { project: Project }) {
  const ink = project.tintInk
  const tint = project.tint
  switch (project.visual) {
    case "services":
      return <SpendScreen ink={ink} tint={tint} />
    case "audit":
      return <AuditScreen ink={ink} tint={tint} />
    case "monorepo":
      return <WorkspaceScreen ink={ink} tint={tint} />
    case "sdk":
      return <SdkScreen ink={ink} tint={tint} />
  }
}

type ScreenProps = { ink: string; tint: string }

function Bar({ w, className = "", color }: { w: string; className?: string; color?: string }) {
  return <span className={`block h-1.5 rounded-full ${className}`} style={{ width: w, background: color ?? "#ecebe6" }} />
}

function SpendScreen({ ink, tint }: ScreenProps) {
  return (
    <div className="flex h-full">
      <div className="hidden w-28 shrink-0 space-y-2.5 border-r bg-[#fbfaf7] p-4 sm:block">
        {[60, 80, 50, 70, 55].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="size-3 rounded" style={{ background: i === 0 ? ink : "#e4e2dc" }} />
            <Bar w={`${w}%`} color={i === 0 ? `${ink}55` : undefined} />
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-4 p-5">
        <p className="text-[13px] font-bold">Software spend</p>
        <div className="grid grid-cols-3 gap-2.5">
          {["Apps", "Licenses", "Savings"].map((l, i) => (
            <div key={l} className="rounded-xl border p-3">
              <p className="text-[10px] text-muted-foreground">{l}</p>
              <span className="mt-2 block h-3 w-3/4 rounded" style={{ background: i === 2 ? ink : `${ink}30` }} />
            </div>
          ))}
        </div>
        <div className="flex h-28 items-end gap-2 rounded-xl border p-3">
          {[35, 50, 42, 65, 58, 75, 70, 88, 80, 95].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-md"
              style={{ height: `${h}%`, background: i > 6 ? ink : tint }}
            />
          ))}
        </div>
        <div className="space-y-2.5">
          {[70, 55, 62].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="size-6 rounded-lg" style={{ background: tint }} />
              <Bar w={`${w}%`} />
              <span className="ml-auto h-4 w-10 rounded-full" style={{ background: `${ink}1c` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AuditScreen({ ink, tint }: ScreenProps) {
  const rows = [
    [true, true, true],
    [true, false, true],
    [true, true, true],
    [false, true, true],
  ]
  return (
    <div className="space-y-4 p-5">
      <div className="flex items-center gap-4 rounded-xl border p-4">
        <div
          className="grid size-16 shrink-0 place-items-center rounded-full"
          style={{ background: `conic-gradient(${ink} 0 78%, ${tint} 78% 100%)` }}
        >
          <span className="grid size-12 place-items-center rounded-full bg-white text-[11px] font-bold" style={{ color: ink }}>
            NAP
          </span>
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-[13px] font-bold">Listing consistency</p>
          <Bar w="80%" />
          <Bar w="55%" />
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-[1fr_repeat(3,2.25rem)] border-b bg-[#fbfaf7] px-4 py-2 text-[10px] font-semibold text-muted-foreground">
          <span>Directory</span>
          <span className="text-center">N</span>
          <span className="text-center">A</span>
          <span className="text-center">P</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_repeat(3,2.25rem)] items-center border-b px-4 py-2.5 last:border-0">
            <Bar w={`${[70, 55, 64, 48][i]}%`} />
            {r.map((ok, j) => (
              <span key={j} className="grid place-items-center">
                <span
                  className="grid size-[18px] place-items-center rounded-full"
                  style={ok ? { background: tint, color: ink } : { background: "#FDECEA", color: "#D93E1D" }}
                >
                  {ok ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function WorkspaceScreen({ ink, tint }: ScreenProps) {
  return (
    <div className="h-full">
      <div className="flex gap-1 border-b px-4 pt-3">
        {["web", "admin", "api"].map((t, i) => (
          <span
            key={t}
            className="rounded-t-lg px-3 py-1.5 font-mono text-[11px] font-medium"
            style={i === 0 ? { background: tint, color: ink } : { color: "#7a7a83" }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 p-5">
        {[0, 1, 2].map((col) => (
          <div key={col} className="space-y-2.5 rounded-xl bg-[#fbfaf7] p-2.5">
            <Bar w="50%" color={col === 0 ? ink : "#d9d6ce"} />
            {Array.from({ length: col === 1 ? 3 : 2 }).map((_, i) => (
              <div key={i} className="space-y-2 rounded-lg border bg-white p-2.5">
                <Bar w={`${[85, 65, 75][i]}%`} />
                <Bar w="45%" />
                <div className="flex items-center justify-between pt-1">
                  <span className="h-3.5 w-9 rounded-full" style={{ background: i === 0 && col !== 2 ? tint : "#f1f0ec" }} />
                  <span className="size-4 rounded-full" style={{ background: `${ink}${col === 0 ? "" : "55"}` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function SdkScreen({ ink, tint }: ScreenProps) {
  const kw = { color: ink, fontWeight: 600 }
  const str = { color: "#1F6B3F" }
  return (
    <div className="flex h-full">
      <div className="hidden w-32 shrink-0 space-y-1.5 border-r bg-[#fbfaf7] p-3 font-mono text-[10.5px] text-muted-foreground sm:block">
        <p className="font-semibold text-foreground">idaas-sdk</p>
        {["auth/", "tenant/", "billing/"].map((f, i) => (
          <p key={f} className="rounded px-1.5 py-0.5" style={i === 0 ? { background: tint, color: ink } : undefined}>
            {f}
          </p>
        ))}
      </div>
      <pre className="flex-1 overflow-hidden p-5 font-mono text-[11.5px] leading-[1.9] text-ink-2">
        <code>
          <span className="text-muted-foreground">{"// sign in a user"}</span>
          {"\n"}
          <span style={kw}>var</span> client = IdaasClient.builder(){"\n"}
          {"    "}.tenant(<span style={str}>&quot;acme&quot;</span>){"\n"}
          {"    "}.build();{"\n"}
          {"\n"}
          <span style={kw}>var</span> session = client.auth(){"\n"}
          {"    "}.login(email, password);{"\n"}
          {"\n"}
          session.accessToken();{" "}
          <span className="rounded px-1 py-0.5 text-[10px]" style={{ background: tint, color: ink }}>
            JWT
          </span>
        </code>
      </pre>
    </div>
  )
}

/* ---------- Freelance ---------- */

const freelance = [
  {
    name: "Lenvow Post Production",
    kind: "Wedding post-production studio",
    description:
      "A fine-art website for a wedding post-production studio — full-bleed hero, gallery, love stories and booking enquiries.",
    image: "/freelance/lenvow.jpg",
    href: "https://www.lenvow.in/",
    url: "lenvow.in",
  },
  {
    name: "Akhil Cutz",
    kind: "Destination wedding films",
    description:
      "A cinematic site for a destination wedding film editor — showreel-style hero, portfolio, services and contact.",
    image: "/freelance/akhilcutz.jpg",
    href: "https://akhilcutz.in/",
    url: "akhilcutz.in",
  },
  {
    name: "Neenuz Cakez",
    kind: "Artisanal bakery",
    description:
      "A warm, appetising website for an artisanal bakery — signature cakes up front, with menu, about and contact pages.",
    image: "/freelance/neenuzcakez.jpg",
    href: "https://neenuzcakez.com/",
    url: "neenuzcakez.com",
  },
]

function Freelance() {
  return (
    <section id="freelance" className="pb-24 md:pb-32">
      <Wrap>
        <div className="reveal mb-10 md:mb-14">
          <Eyebrow>Freelance</Eyebrow>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Websites for small businesses.
          </h2>
          <p className="mt-2 text-muted-foreground">Designed, built and launched for clients on the side.</p>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {freelance.map((f, i) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group block"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden rounded-[22px] border bg-card shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lift">
                <div className="flex items-center gap-3 border-b px-4 py-2.5">
                  <div className="flex gap-1.5">
                    {["#ff6159", "#ffbd2e", "#28c941"].map((c) => (
                      <span key={c} className="size-2.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="flex-1 truncate rounded-md bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground">
                    {f.url}
                  </span>
                </div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={f.image}
                    alt={`${f.name} website homepage`}
                    loading="lazy"
                    className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-xl font-extrabold tracking-[-0.02em]">{f.name}</h3>
                  <p className="text-sm text-muted-foreground">{f.kind}</p>
                </div>
                <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <p className="mt-3 px-1 leading-relaxed text-ink-2">{f.description}</p>
              <p className="mt-3 px-1 text-[13px] text-muted-foreground">Next.js · React · Freelance</p>
            </a>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

/* ---------- Servers & DevOps ---------- */

const infraSkills = [
  { icon: Server, title: "Server setup", text: "Setting up servers from scratch, ready to host apps, databases and domains." },
  { icon: Activity, title: "Server management", text: "Keeping servers healthy and up to date so the apps on them stay up." },
  { icon: Boxes, title: "Docker", text: "Containerizing services so they run the same on a laptop as in production." },
  { icon: Rocket, title: "Dokploy", text: "Self-hosted deployments, environments and domains managed with Dokploy." },
]

const pipeline = [
  { step: "git push", detail: "main branch" },
  { step: "Build & test", detail: "CI pipeline" },
  { step: "Docker image", detail: "build & tag" },
  { step: "Deploy", detail: "via Dokploy" },
  { step: "Live", detail: "healthy" },
]

function Infra() {
  return (
    <section id="devops" className="pb-24 md:pb-32">
      <Wrap>
        <div className="reveal mb-10 md:mb-14">
          <Eyebrow>Servers & DevOps</Eyebrow>
          <h2 className="max-w-[22ch] text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em]">
            I don&apos;t just write the code. <span className="text-accent">I ship and run it.</span>
          </h2>
          <p className="mt-2 max-w-[60ch] text-muted-foreground">
            From a fresh server to a live app — the containers, pipelines and deployments behind it, set up and looked
            after.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          <div className="reveal flex flex-col overflow-hidden rounded-[28px] border bg-card shadow-soft">
            <div className="flex items-center gap-3 border-b bg-[#fbfaf7] px-5 py-3">
              <div className="flex gap-1.5">
                {["#ff6159", "#ffbd2e", "#28c941"].map((c) => (
                  <span key={c} className="size-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <p className="text-xs font-semibold">Deploy pipeline</p>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 font-mono text-[11px] text-ink-2">
                <GitBranch size={11} /> main
              </span>
            </div>

            <ol className="relative flex flex-1 flex-col justify-center px-6 py-6">
              <span className="absolute bottom-10 left-[37px] top-10 w-px bg-border" />
              {pipeline.map((s, i) => {
                const last = i === pipeline.length - 1
                return (
                  <li key={s.step} className="relative flex items-center gap-4 py-2.5">
                    <span
                      className={`relative grid size-7 shrink-0 place-items-center rounded-full ${
                        last ? "bg-ok text-white" : "bg-ok-soft text-ok"
                      }`}
                    >
                      {last && <span className="absolute inset-0 animate-ping rounded-full bg-ok opacity-30" />}
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="flex-1 text-[15px] font-semibold">{s.step}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.detail}</span>
                  </li>
                )
              })}
            </ol>

            <div className="grid grid-cols-3 border-t">
              {["api", "web", "database"].map((c, i) => (
                <div key={c} className={`px-5 py-4 ${i > 0 ? "border-l" : ""}`}>
                  <p className="font-mono text-xs font-medium">{c}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-ok">
                    <span className="size-1.5 rounded-full bg-ok" /> running
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {infraSkills.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="reveal group rounded-[20px] border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:rounded-[24px] sm:p-6"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 sm:size-11 sm:rounded-2xl">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold tracking-tight sm:mt-5 sm:text-lg">{title}</h3>
                <p className="mt-1 hidden text-[15px] leading-relaxed text-ink-2 sm:block">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  )
}

/* ---------- Experience ---------- */

function Experience() {
  return (
    <section id="experience" className="border-y bg-card py-24 md:py-32">
      <Wrap>
        <div className="reveal mb-10 md:mb-14">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Where I&apos;ve been building.
          </h2>
        </div>

        <ol className="border-t">
          {experience.map((job) => (
            <li
              key={job.role}
              className="reveal grid gap-1.5 border-b py-7 md:grid-cols-[200px_1fr] md:gap-8 md:py-9"
            >
              <p className="flex items-center gap-2 pt-0.5 text-sm font-medium text-muted-foreground">
                {job.period}
                {job.current && (
                  <span className="rounded-full bg-ok-soft px-2 py-0.5 text-[11px] font-bold text-ok md:hidden">Now</span>
                )}
              </p>
              <div>
                <h3 className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-lg font-bold tracking-tight">
                  {job.role}
                  <span className="hidden font-medium text-muted-foreground md:inline">· {job.company}</span>
                  {job.current && (
                    <span className="hidden rounded-full bg-ok-soft px-2 py-0.5 text-[11px] font-bold text-ok md:inline">
                      Now
                    </span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground md:hidden">{job.company}</p>
                <p className="mt-3 font-semibold text-foreground md:mt-2">{job.summary}</p>
                <p className="mt-2 hidden max-w-[68ch] leading-relaxed text-ink-2 md:block">{job.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  )
}

/* ---------- Toolbox ---------- */

function Toolbox() {
  return (
    <section className="py-24 md:py-32">
      <Wrap>
        <div className="reveal mb-10 md:mb-14">
          <Eyebrow>Toolbox</Eyebrow>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em]">
            What I reach for.
          </h2>
          <p className="mt-2 max-w-[60ch] text-muted-foreground">
            Java and Spring at the core, with enough frontend and DevOps to ship end to end.
          </p>
        </div>

        <div className="reveal grid gap-px overflow-hidden rounded-[var(--radius)] border bg-border shadow-soft sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group) => (
            <div key={group.category} className="bg-card p-5 sm:p-6">
              <h3 className="text-sm font-bold">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                {group.items.map((s) => (
                  <span key={s} className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-ink-2">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

/* ---------- Contact ---------- */

function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const dark = `${btn} border border-white/15 bg-white/5 text-white hover:bg-white/10`

  return (
    <section id="contact" className="pb-24 md:pb-32">
      <Wrap>
        <div className="reveal relative grid gap-10 overflow-hidden rounded-[28px] bg-[#17171a] p-8 text-white sm:p-12 md:grid-cols-[1.3fr_1fr] md:items-end md:p-14">
          <div
            className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--accent)" }}
          />
          <div className="relative">
            <Eyebrow className="text-[#FF8A6A]">Contact</Eyebrow>
            <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
              Let&apos;s build something that stays up.
            </h2>
            <p className="mt-4 max-w-[46ch] text-white/60">
              I&apos;m always interested in discussing new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="relative flex flex-col gap-2.5">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={`${btn} bg-accent text-white hover:bg-accent-ink`}>
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <div className="flex gap-2.5">
              <a href={`mailto:${EMAIL}`} className={`${dark} min-w-0 flex-1`}>
                <Mail size={16} className="shrink-0" /> <span className="truncate">{EMAIL}</span>
              </a>
              <button onClick={copy} className={`${dark} px-3.5`} aria-label="Copy email address" title="Copy email">
                {copied ? <Check size={16} className="text-[#5BD18B]" /> : <Copy size={16} />}
              </button>
            </div>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={dark}>
              GitHub <ArrowUpRight size={16} />
            </a>
            <a href="/resume.pdf" download="VIVEK_PV_Resume.pdf" className={dark}>
              Resume <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Wrap>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-lift transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <Check size={15} className="text-[#5BD18B]" /> Email copied
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <Wrap className="flex flex-col items-center justify-between gap-2 py-7 text-sm text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Vivek P V</span>
        <a href="#top" className="font-medium hover:text-foreground">
          Back to top ↑
        </a>
      </Wrap>
    </footer>
  )
}
