"use client"

import { useState } from "react"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Download } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const projects = [
    {
      title: "ABC Bank - Online Banking System",
      description:
        "Web-based banking system providing secure user authentication, transaction management, and role-based access control with Spring Security and email notifications.",
      tech: ["Spring Boot", "Hibernate", "Thymeleaf", "Spring Security", "MySQL"],
      link: "https://github.com/VIVEK-P-V",
      icon: Server,
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive hospital management system designed to manage patient records, staff details, and medical inventory with full CRUD operations.",
      tech: ["Spring Boot", "Hibernate", "MySQL", "PostgreSQL", "Spring Web MVC"],
      link: "https://github.com/VIVEK-P-V",
      icon: Database,
    },
    {
      title: "Product Management System - ProductApp",
      description:
        "Spring Boot-based product management system for managing inventory, product details, and transactions with responsive MVC architecture.",
      tech: ["Spring Boot", "Hibernate", "JSP", "Bootstrap", "MySQL"],
      link: "https://github.com/VIVEK-P-V",
      icon: Database,
    },
    {
      title: "Student Management System",
      description:
        "Simple yet effective student management system enabling CRUD operations on student records with console-based interface.",
      tech: ["Java", "JDBC", "MySQL 8.0.28"],
      link: "https://github.com/VIVEK-P-V",
      icon: Code2,
    },
    {
      title: "AI-Powered Automated Penetration Testing Tool",
      description:
        "AI-driven penetration testing tool that automates vulnerability detection in network traffic with real-time assessment via Flask web interface.",
      tech: ["Python", "Flask", "PyTorch", "Machine Learning", "JavaScript"],
      link: "https://github.com/VIVEK-P-V",
      icon: Code2,
    },
  ]

  const skills = [
    { category: "Backend", items: ["Java 17+", "Spring Boot", "Hibernate ORM", "Spring Security", "JPA"] },
    { category: "Databases", items: ["MySQL 8.0.28", "PostgreSQL", "MongoDB", "JDBC", "Oracle 10g+"] },
    {
      category: "Tools & Technologies",
      items: ["IntelliJ IDEA", "Eclipse", "Maven", "Git", "GitHub", "Postman", "Swagger", "Jenkins"],
    },
    { category: "Web Technologies", items: ["HTML5", "CSS3", "JavaScript", "REST APIs", "JSP", "Thymeleaf"] },
  ]

  const experience = [
    {
      role: "Java Backend Developer",
      company: "Inloops Innovations, Palakkad",
      period: "10 / 2024 - Present",
      description:
        "Built scalable backend systems using Java and Spring Boot. Designed RESTful APIs and implemented Spring Security for secure authentication and role-based access control. Worked with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
    },
    {
      role: "Software Developer Intern",
      company: "JSpiders, Test Yantra Software Solutions India Pvt Ltd, Kochi",
      period: "06 / 2024 - 02 / 2025",
      description:
        "Developed backend systems using Java, Spring Boot, and Hibernate. Designed and implemented RESTful APIs tested with Postman. Optimized Hibernate ORM queries for improved database efficiency.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            VIVEK P V
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-400 hover:text-cyan-400">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-400 hover:text-cyan-400 transition-colors font-medium py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 text-balance">
                Java Full Stack{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 md:mb-8 leading-relaxed text-balance">
                Highly motivated developer with expertise in Java, Spring Boot, and Hibernate. Building scalable web
                applications with secure authentication and efficient database management. Passionate about automation
                and emerging AI/ML technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-center whitespace-nowrap"
                >
                  View My Work
                </a>
                <a
                  href="https://github.com/VIVEK-P-V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-center whitespace-nowrap"
                >
                  GitHub
                </a>
                <a
                  href="/resume.pdf"
                  download="VIVEK_PV_Resume.pdf"
                  className="w-full sm:w-auto border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-center inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Download size={18} /> Resume
                </a>
              </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-3xl rounded-full"></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 backdrop-blur-sm">
                  <div className="space-y-4 font-mono text-xs sm:text-sm">
                    <div className="text-cyan-400">{"> mvn spring-boot:run"}</div>
                    <div className="text-green-400">{"✓ Started Application"}</div>
                    <div className="text-cyan-400">{"> curl localhost:8080/api/status"}</div>
                    <div className="text-emerald-400">{'{"status": "ready", "version": "2.0"}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm a Java Full Stack Developer with expertise in building scalable web applications. Currently working
                at Inloops Innovations as a Backend Developer, I specialize in designing RESTful APIs, implementing
                secure authentication, and optimizing database performance.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                With a strong foundation in Java, Spring Boot, and database management, I'm passionate about developing
                intelligent solutions for real-world challenges. I have hands-on experience with both SQL and NoSQL
                databases, and I'm always exploring emerging technologies like AI/ML.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-cyan-400 font-semibold mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-slate-300 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-balance">Experience</h2>

          <div className="relative">
            {/* Vertical line connector */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

            <div className="space-y-8 md:space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-32 flex-shrink-0 items-start justify-end">
                    <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 relative z-10 -mr-12"></div>
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden absolute -left-6 top-2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-slate-900"></div>

                  {/* Content card */}
                  <div className="flex-1 md:ml-0 ml-0 bg-slate-800 border border-slate-700 rounded-lg p-4 md:p-6 hover:border-cyan-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{job.role}</h3>
                        <p className="text-cyan-400 font-semibold text-sm md:text-base">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="hidden md:block w-1 h-1 bg-slate-500 rounded-full"></div>
                        <p className="text-slate-400 text-xs md:text-sm whitespace-nowrap font-medium">{job.period}</p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 md:mb-12 text-balance">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <div
                  key={project.title}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 hover:border-cyan-500 transition-all group flex flex-col h-full"
                >
                  <Icon className="w-10 md:w-12 h-10 md:h-12 text-cyan-400 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 md:px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm md:text-base"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 md:mb-6 text-balance">Get In Touch</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-2">
            I'm always interested in discussing new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-12 px-2">
            <a
              href="mailto:vivekpv1610@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm md:text-base whitespace-nowrap"
            >
              <Mail size={18} /> Email Me
            </a>
          </div>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/VIVEK-P-V" },
              { icon: Linkedin, label: "LinkedIn", href: "https://in.linkedin.com/in/pvvivek" },
              { icon: Mail, label: "Email", href: "mailto:vivekpv1610@gmail.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 md:w-12 h-10 md:h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2025 VIVEK P V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
