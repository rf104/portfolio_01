import  { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Code, User, Briefcase, Facebook } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import ProjectCard from './components/ProjectCard';
import holdingArmImage from './images/holding_arm.jpg';
import profile1 from './images/2.jpg';
import profile2 from './images/6.jpg';
import profile3 from './images/11.jpeg';
import profile4 from './images/12.jpeg';
import profile5 from './images/14.jpeg';
import p2 from './images/42.png'

import './index.css';

function App() {
  const profiles = [profile1, profile2, profile3, profile4, profile5];
  const [profileImage, setProfileImage] = useState(profile1);
  const [fadeClass, setFadeClass] = useState('animate-fade-in');
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Reset animation class
      setFadeClass('');
      setTimeout(() => {
        currentIndex.current = (currentIndex.current + 1) % profiles.length;
        setProfileImage(profiles[currentIndex.current]);
        setFadeClass('animate-fade-in');
      }, 10); // Small timeout to ensure class reset
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const projects = [
    {
      title: "Blood Bridge",
      description: "A blood donation platform for connecting donors with recipients",
      image: holdingArmImage,
      technologies: ["TypeScript","next.js", "TailwindCSS", 'bun.js',"Hono.js"],
      githubUrl: "https://github.com/istiaqueahmedarik/blood_bridge",
      liveUrl: "https://bloodbridge.vercel.app/"
    },
    {
      title: "MegaBlog",
      description: "A platfrom where people can post blog and read also",
      image: p2,
      technologies: ["Javascript","react.js", "TailwindCSS","node.js"],
      githubUrl: "https://github.com/rf104/megablog.git",
      liveUrl: "https://megablog-chi.vercel.app/"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <ParticleBackground />
      
      {/* Header/Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-4 md:flex-row md:justify-between">
        <div className={`profile-image ${fadeClass} mb-4 md:mb-0 p-20`}>
          <img src={profileImage} alt="profile picture" className="rounded h-90 w-80 mx-auto" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-400"><i>AREF</i>👋</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
            Tech enthusiast, a passionate learner. I love to build things that make a difference.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://github.com/rf104" className="text-white hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sajedullah-aref/" className="text-white hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sajedullah_aref_104@yahoo.com" className="text-white hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.facebook.com/sajedullah.aref.13" className="text-white hover:text-blue-400 transition-colors">
              <Facebook size={24} />
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
              I am an undergraduate student in Computer Science and Engineering at Military Institute of Science and Technology. I am a self-taught web developer. I have been working with web technologies for the past few years. I have experience in building web applications using React, Next.js, and Node.js.
              I am passionate about learning new technologies and building projects that make a difference. I am always looking for new opportunities to learn and grow as a developer.
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
            {['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Next.js','C++','C','Git','Github'].map((skill) => (
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