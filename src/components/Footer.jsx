import React from 'react';
import { Code, Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const projects = [
    {
      title: "Project Showcase",
      description: "Full-stack web applications built with modern technologies including React, Node.js, and MongoDB. Implemented real-time features and responsive design patterns.",
      tech: ["Laravel", "Bootstrap", "React", "Node.js", "MongoDB", "Socket.IO", "Tailwind"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Work Experience",
      description: "5+ years of professional experience developing scalable solutions. Led teams in delivering complex projects while maintaining high code quality standards.",
      tech: ["Team Leadership", "Agile", "CI/CD", "Cloud Architecture"],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "About Me",
      description: "Passionate full-stack developer with a focus on creating intuitive user experiences. Constantly learning and adapting to new technologies.",
      tech: ["Problem Solving", "Communication", "Quick Learning", "Creativity"],
      icon: <User className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-gradient-to-tr from-sky-950 via-gray-900 to-sky-950 h-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Shikhar Web
            <span className="text-sky-400">Developer Portfolio</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Building innovative web solutions with modern technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/shikharbahikmagar" target='_blank' className="text-sky-400 hover:text-sky-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/shikhar-magar-70b2aa282/" target='_blank' className="text-sky-400 hover:text-sky-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-sky-400 hover:text-sky-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400 group-hover:bg-sky-500/30 transition-colors">
                  {project.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-sky-500/10 text-sky-400 rounded-full hover:bg-sky-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;