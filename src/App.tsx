import { useEffect, useState, type ReactNode } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Download,
  FileText,
  Menu,
  X,
} from "lucide-react";

import ParticleBackground from "./components/ParticleBackground";
import ProjectCard, { type ProjectCardProps } from "./components/ProjectCard";

import holdingArmImage from "./images/bloodbridge-web.jpg";
import profileImage from "./images/aref-web.jpg";
import p2 from "./images/megablog-web.jpg";
import documindImage from "./images/documind.svg";
import certificateImage from "./images/deans-list-certificate.jpg";

import "./index.css";

const EMAIL = "sajedullaharef@gmail.com";
const GITHUB = "https://github.com/rf104";
const LINKEDIN = "https://www.linkedin.com/in/sajedullah-aref/";
const LEETCODE = "https://leetcode.com/u/rf_104/";
const RESUME = "/Resume_Sajedullah_Aref.pdf";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
];

const socials = [
  { href: GITHUB, label: "GitHub", icon: Github },
  { href: LINKEDIN, label: "LinkedIn", icon: Linkedin },
  { href: LEETCODE, label: "LeetCode", icon: Code2 },
  { href: `mailto:${EMAIL}`, label: "Email", icon: Mail },
];

const highlights = [
  { value: "690+", label: "Problems solved" },
  { value: "8th", label: "BUP IAUPC" },
  { value: "2×", label: "Dean's List" },
];

const featuredProjects: ProjectCardProps[] = [
  {
    title: "DocuMind",
    subtitle: "AI · RAG Application",
    description:
      "Chat with your PDFs. Generates executive summaries and answers questions strictly from the document, citing the exact page for every answer.",
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
      "Connects blood donors with recipients nearby, with a built-in chatbot that answers questions about blood-related health issues.",
    image: holdingArmImage,
    technologies: ["Next.js", "TypeScript", "Bun", "Hono"],
    githubUrl: "https://github.com/istiaqueahmedarik/blood_bridge",
    liveUrl: "https://bloodbridge.vercel.app/",
  },
  {
    title: "MegaBlog",
    subtitle: "Content Platform",
    description:
      "A full-stack blog with user registration, rich-text editing and live publishing, backed by Appwrite for auth and storage.",
    image: p2,
    technologies: ["React.js", "Appwrite", "TinyMCE", "TailwindCSS"],
    githubUrl: "https://github.com/rf104/react.js_2.0/tree/master/12_MegaBlog",
    liveUrl: "https://megablog-chi.vercel.app/",
  },
];

const moreProjects = [
  {
    title: "CareerPilot AI",
    description:
      "Matches resumes to job descriptions using embeddings and pgvector, highlights skill gaps and generates role-specific interview prep.",
    technologies: ["PostgreSQL", "pgvector", "Embeddings", "REST APIs"],
  },
  {
    title: "Virtual Shop",
    description:
      "Flutter e-commerce app with an AI virtual try-on powered by Google Gemini.",
    technologies: ["Flutter", "Gemini API"],
    githubUrl: "https://github.com/rf104/VirtualShop/",
  },
  {
    title: "EyeCare",
    description: "Eye-care appointment booking and product store.",
    technologies: ["React.js", "Node.js", "Oracle"],
    liveUrl: "https://eyecare-neon.vercel.app",
  },
];

const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "C", "SQL"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Flutter"] },
  { title: "Backend", items: ["Node.js", "FastAPI", "Hono", "REST APIs", "SSLCOMMERZ", "Webhooks"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Oracle", "Appwrite", "pgvector"] },
  { title: "AI", items: ["LangChain", "RAG", "Embeddings", "Gemini API", "OpenAI API"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "Bun", "Ubuntu", "Vercel"] },
];

const judges = [
  { name: "Codeforces", count: "362", href: "https://codeforces.com/profile/rf_104" },
  { name: "VJudge", count: "214", href: "https://vjudge.net/user/aerf_104" },
  { name: "CodeChef", count: "114", href: "https://www.codechef.com/users/rf_104" },
  { name: "LeetCode", count: "Profile", href: LEETCODE },
];

const contests = [
  "8th place, BUP Inter-University Programming Contest (IAUPC)",
  "Intra MIST Hackathon 2024",
  "Independence Day Programming Contest 2023",
];

const leadership = [
  {
    role: "Executive Director, Research & Development",
    org: "MIST Computer Club",
    period: "Jul 2025 – May 2026",
  },
  {
    role: "Assistant Secretary",
    org: "MIST Cyber Security Club",
    period: "Apr 2024 – Jun 2025",
  },
  {
    role: "Executive Member, Research & Development",
    org: "MIST Computer Club",
    period: "Mar 2024 – Jun 2025",
  },
];

const card = "bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-blue-400 font-medium uppercase tracking-[0.2em] text-xs mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
    >
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [certificateOpen, setCertificateOpen] = useState(false);

  useEffect(() => {
    if (!certificateOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCertificateOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [certificateOpen]);

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-x-hidden">
      <ParticleBackground />

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-wide hover:text-blue-400 transition">
            AREF<span className="text-blue-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            ))}
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition"
            >
              <FileText size={15} />
              Resume
            </a>
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
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="py-2 inline-flex items-center gap-2 hover:text-white transition"
            >
              <FileText size={16} />
              Resume (PDF)
            </a>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <header id="home" className="min-h-screen flex items-center px-6 pt-28 pb-16">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Open to new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
              Md. Sajedullah{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Aref
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-200 mb-5">
              Full-Stack Developer building fast, AI-powered web apps.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
              CSE graduate from MIST. I ship end-to-end products with React,
              Next.js and Node.js, and back them with a competitive programmer's
              eye for clean, efficient code.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-medium transition shadow-lg shadow-blue-500/20"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
              <div className="inline-flex rounded-lg border border-white/15 overflow-hidden">
                <a
                  href={RESUME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 hover:bg-white/5 font-medium transition"
                >
                  <FileText size={18} />
                  View Resume
                </a>
                <a
                  href={RESUME}
                  download="Resume_Sajedullah_Aref.pdf"
                  aria-label="Download resume (PDF)"
                  title="Download PDF"
                  className="inline-flex items-center justify-center px-4 border-l border-white/15 text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  <Download size={18} />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-6">
              <div className="flex gap-8">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="hidden sm:block w-px self-stretch bg-white/10"></div>

              <div className="flex gap-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-500/15 blur-3xl"></div>
              <div className="relative p-1.5 rounded-full bg-gradient-to-br from-blue-400/80 via-cyan-400/60 to-blue-600/80">
                <img
                  src={profileImage}
                  alt="Md. Sajedullah Aref"
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
          <SectionHeading eyebrow="About" title="Code that solves real problems" />

          <div className="grid md:grid-cols-5 gap-6">
            <div className={`md:col-span-3 ${card} p-7`}>
              <p className="text-gray-200 text-lg leading-relaxed">
                I'm a Computer Science graduate who enjoys turning ideas into
                working products, from responsive interfaces to the APIs,
                authentication and databases behind them.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                I've built platforms for blood donation, blogging, e-commerce and
                healthcare, integrated payment gateways, and recently focused on
                applied AI: RAG pipelines, semantic search and LLM-powered tools
                that give grounded, useful answers.
              </p>
            </div>

            <div className={`md:col-span-2 ${card} p-7`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                Education
              </p>
              <h3 className="font-semibold text-white leading-snug">
                BSc in Computer Science &amp; Engineering
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Military Institute of Science and Technology (MIST)
              </p>
              <p className="text-gray-500 text-sm mt-1">2022 – 2026</p>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                <li>Dean's List Award: 2024–25 &amp; 2025–26</li>
                <li>CGPA: 3.44 / 4.00</li>
              </ul>

              <button
                type="button"
                onClick={() => setCertificateOpen(true)}
                className="group mt-6 w-full flex items-center gap-4 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-blue-400/40 text-left transition"
              >
                <img
                  src={certificateImage}
                  alt=""
                  className="w-20 h-14 rounded object-cover shrink-0"
                />
                <span>
                  <span className="block text-sm font-medium text-white">
                    Dean's List Certificate
                  </span>
                  <span className="block text-xs text-gray-500 group-hover:text-blue-400 transition">
                    Click to view
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-24 px-6 bg-black/20" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <SectionHeading eyebrow="Projects" title="Selected work" />
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mb-10 text-sm text-gray-400 hover:text-white transition"
            >
              More on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mt-16 mb-2">
            More projects
          </h3>
          <ul className="divide-y divide-white/10">
            {moreProjects.map((project) => (
              <li
                key={project.title}
                className="py-5 grid md:grid-cols-[200px_1fr_auto] gap-x-8 gap-y-2 md:items-center"
              >
                <p className="font-semibold text-white">{project.title}</p>
                <div>
                  <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                  <p className="text-xs text-gray-500 mt-1.5">{project.technologies.join(" · ")}</p>
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && <ExternalLink href={project.liveUrl}>Live</ExternalLink>}
                  {project.githubUrl && <ExternalLink href={project.githubUrl}>Code</ExternalLink>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-24 px-6" id="skills">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Skills" title="My toolkit" />

          <dl className="grid md:grid-cols-2 gap-x-12">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="py-4 border-b border-white/10 grid grid-cols-[96px_1fr] gap-4 items-baseline"
              >
                <dt className="text-sm text-gray-500">{group.title}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-24 px-6 bg-black/20" id="achievements">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Beyond the code" title="Problem solving & leadership" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${card} p-7`}>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-white">690+</span>
                <span className="text-gray-400">problems solved</span>
              </div>

              <ul className="grid grid-cols-2 gap-3 mb-7">
                {judges.map((judge) => (
                  <li key={judge.name}>
                    <a
                      href={judge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 hover:border-blue-400/40 transition"
                    >
                      <span>
                        <span className="block text-xs text-gray-500">{judge.name}</span>
                        <span className="block font-semibold text-white">{judge.count}</span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="text-gray-600 group-hover:text-blue-400 transition"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2.5 text-sm text-gray-300">
                {contests.map((contest) => (
                  <li key={contest} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                    {contest}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${card} p-7`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
                Leadership
              </p>
              <ol className="relative border-l border-white/10 ml-1 space-y-7">
                {leadership.map((item) => (
                  <li key={item.role + item.period} className="pl-6 relative">
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-gray-950"></span>
                    <p className="font-semibold text-white leading-snug">{item.role}</p>
                    <p className="text-sm text-gray-400 mt-0.5">{item.org}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.period}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-24 px-6" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-medium uppercase tracking-[0.2em] text-xs mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Let's build something together
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            I'm open to software engineering roles and interesting projects. My
            inbox is always open.
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
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-white/15 hover:bg-white/5 hover:border-white/30 font-medium transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={RESUME}
              download="Resume_Sajedullah_Aref.pdf"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-white/15 hover:bg-white/5 hover:border-white/30 font-medium transition"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">{EMAIL}</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Md. Sajedullah Aref
          </p>
          <div className="flex gap-4">
            {[
              ...socials,
              { href: "https://www.facebook.com/sajedullah.aref.13", label: "Facebook", icon: Facebook },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="text-gray-500 hover:text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ================= CERTIFICATE VIEWER ================= */}
      {certificateOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Dean's List Certificate"
          onClick={() => setCertificateOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-950/85 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            autoFocus
            onClick={() => setCertificateOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            <X size={24} />
          </button>
          <img
            src={certificateImage}
            alt="MIST Dean's List 2024 certificate awarded to Md. Sajedullah Aref"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default App;
