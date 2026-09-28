import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

import ParticleBackground from "./components/ParticleBackground";
import ProjectCard, { type ProjectCardProps } from "./components/ProjectCard";

import holdingArmImage from "./images/bloodbridge-web.jpg";
import profileImage from "./images/aref-web.jpg";
import p2 from "./images/megablog-web.jpg";
import documindImage from "./images/documind.svg";

import "./index.css";

const EMAIL = "sajedullah_aref_104@yahoo.com";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const socials = [
  { href: "https://github.com/rf104", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/sajedullah-aref/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: `mailto:${EMAIL}`, label: "Email", icon: Mail },
  {
    href: "https://www.facebook.com/sajedullah.aref.13",
    label: "Facebook",
    icon: Facebook,
  },
];

const projects: ProjectCardProps[] = [
  {
    title: "DocuMind",
    subtitle: "AI · RAG Application",
    description:
      "Chat with your PDFs. Generates executive summaries and answers questions strictly from the document, with page-level citations for every answer.",
    image: documindImage,
    badge: "New",
    technologies: ["Python", "FastAPI", "LangChain", "FAISS", "Next.js"],
    liveUrl: "https://pdftalk01.vercel.app/",
    note: "Free-tier backend: first load may take ~1 min to wake up.",
  },
  {
    title: "Blood Bridge",
    subtitle: "Healthcare Platform",
    description:
      "A blood donation platform connecting donors with recipients, making blood requests fast to create, find and manage.",
    image: holdingArmImage,
    technologies: ["TypeScript", "Next.js", "TailwindCSS", "Bun.js", "Hono.js"],
    githubUrl: "https://github.com/istiaqueahmedarik/blood_bridge",
    liveUrl: "https://bloodbridge.vercel.app/",
  },
  {
    title: "MegaBlog",
    subtitle: "Content Platform",
    description:
      "A modern blogging platform where users can create, publish and read posts through a clean, responsive interface.",
    image: p2,
    technologies: ["JavaScript", "React.js", "TailwindCSS", "Node.js"],
    githubUrl: "https://github.com/rf104/megablog.git",
    liveUrl: "https://megablog-chi.vercel.app/",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TailwindCSS", "HTML & CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "FastAPI", "Hono.js", "Bun.js", "REST APIs"],
  },
  {
    title: "AI & Data",
    items: ["LangChain", "RAG", "FAISS", "Gemini API", "OpenAI API"],
  },
  {
    title: "Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "Render"],
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-blue-400 font-medium uppercase tracking-[0.2em] text-xs mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-x-hidden">
      <ParticleBackground />

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold tracking-wide hover:text-blue-400 transition"
          >
            AREF<span className="text-blue-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-gray-300 hover:text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-1 text-gray-300">
            {[...navLinks, { href: "#contact", label: "Contact" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <header id="home" className="min-h-screen flex items-center px-6 pt-28 pb-16">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          {/* HERO CONTENT */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Open to new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
              Md Sajedullah{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Aref
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">
              Full-Stack Developer · AI-Powered Applications
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-9">
              I build production-ready web applications with React, Next.js and
              Node.js, and LLM-powered tools with Python, FastAPI and LangChain,
              from clean interfaces to the APIs and retrieval pipelines behind them.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mb-9">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-medium transition shadow-lg shadow-blue-500/20"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/15 hover:bg-white/5 hover:border-white/30 font-medium transition"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-500/15 blur-3xl"></div>
              <div className="relative p-1.5 rounded-full bg-gradient-to-br from-blue-400/80 via-cyan-400/60 to-blue-600/80">
                <img
                  src={profileImage}
                  alt="Md Sajedullah Aref"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-gray-950"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ABOUT ================= */}
      <section className="py-24 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="About" title="A little about me" />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <p className="text-gray-200 text-lg leading-relaxed">
                I'm a Computer Science &amp; Engineering graduate from the Military
                Institute of Science and Technology (MIST) with a strong foundation
                in problem solving, data structures and software engineering.
              </p>
              <p className="text-gray-400 leading-relaxed mt-5">
                I build full-stack web applications end to end: responsive
                interfaces in React and Next.js, typed APIs in Node.js and FastAPI,
                and deployments on Vercel and Render. Lately I've been focused on
                applied AI, building retrieval-augmented (RAG) systems with
                LangChain and vector search that give grounded, cited answers
                instead of guesses.
              </p>
              <p className="text-gray-400 leading-relaxed mt-5">
                I care about clean architecture, readable code and shipping
                things people actually use, and I'm looking for a team where I
                can keep growing as a software engineer.
              </p>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                At a glance
              </h3>
              <dl className="space-y-6">
                <div className="flex gap-3">
                  <GraduationCap size={20} className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-sm text-gray-500">Education</dt>
                    <dd className="text-gray-200 mt-0.5">BSc in CSE, MIST</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Sparkles size={20} className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-sm text-gray-500">Focus</dt>
                    <dd className="text-gray-200 mt-0.5">
                      Full-Stack &amp; AI Applications
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={20} className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-sm text-gray-500">Location</dt>
                    <dd className="text-gray-200 mt-0.5">Bangladesh</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-24 px-6 bg-black/20" id="skills">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Skills" title="Technologies I work with" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-colors"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-gray-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-24 px-6" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionHeading eyebrow="Projects" title="Selected work" />
            <a
              href="https://github.com/rf104"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mb-12 text-sm text-gray-400 hover:text-white transition"
            >
              More on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-24 px-6 bg-black/20" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-medium uppercase tracking-[0.2em] text-xs mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let's build something together
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            I'm open to full-time roles, internships and freelance projects. If
            you have an opportunity or just want to talk tech, my inbox is open.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-medium transition shadow-lg shadow-blue-500/20"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/sajedullah-aref/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-white/15 hover:bg-white/5 hover:border-white/30 font-medium transition"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Md Sajedullah Aref. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
