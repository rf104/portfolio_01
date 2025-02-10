import { Github, Linkedin, Mail, Code, User, Briefcase } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import ProjectCard from './components/ProjectCard';
import holdingArmImage from './images/holding_arm.jpg';

function App() {
  const projects = [
    {
      title: "Blood Bridge",
      description: "A blood donation platform for connecting donors with recipients",
      image: holdingArmImage,
      technologies: ["TypeScript","next.js", "TailwindCSS", 'bun.js',"Hono.js"],
      githubUrl: "https://github.com/istiaqueahmedarik/blood_bridge",
      liveUrl: "https://bloodbridge.vercel.app/"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <ParticleBackground />
      
      {/* Header/Hero Section */}
      <header className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-400">Aref👋</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer specializing in building exceptional digital experiences.
            Passionate about creating innovative solutions that make a difference.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/rf104" className="text-white hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sajedullah-aref/" className="text-white hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="" className="text-white hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <User size={32} />
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Full Stack Developer with a passion for building innovative solutions that make a difference. I specialize in creating exceptional digital experiences using the latest technologies. I have experience working with JavaScript, TypeScript, React, Node.js. I am always eager to learn new technologies and take on new challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-black/20" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <Code size={32} />
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js','C++','C','Git','Github'].map((skill) => (
              <div key={skill} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                <span className="text-white text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase size={32} />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© 2025 rf_104. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;