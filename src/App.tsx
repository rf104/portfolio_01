
import {
  Github,
  Linkedin,
  Mail,
  Code,
  User,
  Briefcase,
  Facebook,
  ArrowRight,
  ExternalLink,
  MapPin,
} from "lucide-react";

import ParticleBackground from "./components/ParticleBackground";
import ProjectCard from "./components/ProjectCard";

import holdingArmImage from "./images/holding_arm.jpg";
import profileImage from "./images/aref.png";
import p2 from "./images/42.png";

import "./index.css";

function App() {
  const projects = [
    {
      title: "Blood Bridge",
      description:
        "A blood donation platform connecting donors with recipients and making blood requests easier to manage.",
      image: holdingArmImage,
      technologies: [
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Bun.js",
        "Hono.js",
      ],
      githubUrl: "https://github.com/istiaqueahmedarik/blood_bridge",
      liveUrl: "https://bloodbridge.vercel.app/",
    },
    {
      title: "MegaBlog",
      description:
        "A modern blogging platform where users can create, publish, and read blog posts.",
      image: p2,
      technologies: ["JavaScript", "React.js", "TailwindCSS", "Node.js"],
      githubUrl: "https://github.com/rf104/megablog.git",
      liveUrl: "https://megablog-chi.vercel.app/",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "C++",
    "C",
    "SQL",
    "Git",
    "GitHub",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white overflow-hidden">
      <ParticleBackground />

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide hover:text-blue-400 transition"
          >
            AREF<span className="text-blue-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-blue-400/40 hover:bg-blue-500/20 hover:border-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header
        id="home"
        className="min-h-screen flex items-center px-6 pt-24"
      >
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* PROFILE IMAGE */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">

                {/* Glow */}
                <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-2xl group-hover:bg-blue-500/30 transition duration-500"></div>

                {/* Outer ring */}
                <div className="relative p-2 rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-500 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Md Sajedullah Aref"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-950 transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Available badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/90 border border-green-400/30 backdrop-blur-md shadow-lg">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-200">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="text-center md:text-left">
              <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-4">
                Computer Science Graduate
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  AREF
                </span>{" "}
                👋
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
                Full-Stack Developer
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
                I build modern web applications, solve real-world problems,
                and continuously explore new technologies to become a better
                software engineer.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/20"
                >
                  View My Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                  Contact Me
                  <Mail size={18} />
                </a>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex justify-center md:justify-start gap-3">
                <a
                  href="https://github.com/rf104"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 transition"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sajedullah-aref/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 transition"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="mailto:sajedullah_aref_104@yahoo.com"
                  aria-label="Email"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 transition"
                >
                  <Mail size={20} />
                </a>

                <a
                  href="https://www.facebook.com/sajedullah.aref.13"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 hover:text-blue-400 transition"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <a
              href="#about"
              className="text-gray-500 hover:text-blue-400 transition animate-bounce"
            >
              ↓
            </a>
          </div>
        </div>
      </header>

      {/* ================= ABOUT ================= */}
      <section className="py-24 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
              Get to know me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
              <User size={34} />
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-400/20 transition">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a Computer Science graduate from the Military Institute
                of Science and Technology (MIST), passionate about software
                development and problem solving.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mt-5">
                I enjoy building full-stack web applications using modern
                technologies such as React, Next.js, Node.js and TypeScript.
                I'm also interested in exploring AI, system design and
                software engineering practices.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mt-5">
                My goal is simple: keep learning, build useful products, and
                become a stronger software engineer through real-world
                experience.
              </p>
            </div>

            {/* Quick info */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Quick Info
              </h3>

              <div className="space-y-5 text-gray-400">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-400" />
                  Bangladesh
                </div>

                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="text-gray-300 mt-1">
                    BSc in Computer Science & Engineering
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="text-gray-300 mt-1">
                    Full-Stack Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        className="py-24 px-6 bg-black/20"
        id="skills"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
              What I work with
            </p>

            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
              <Code size={34} />
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 text-center hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/5 transition duration-300"
              >
                <span className="text-gray-200 group-hover:text-blue-400 transition">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-24 px-6" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
                Some of my work
              </p>

              <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
                <Briefcase size={34} />
                Projects
              </h2>
            </div>

            <a
              href="https://github.com/rf104"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              View GitHub
              <ExternalLink size={17} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        className="py-24 px-6 bg-black/20"
        id="contact"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
            Let's work together
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a project in mind?
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities,
            interesting projects, and ideas.
          </p>

          <a
            href="mailto:sajedullah_aref_104@yahoo.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg shadow-blue-500/20"
          >
            <Mail size={19} />
            Get In Touch
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 px-6 text-center border-t border-white/10">
        <p className="text-gray-500 text-sm">
          © 2026 Md Sajedullah Aref. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
