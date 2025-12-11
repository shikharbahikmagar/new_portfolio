import React from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-react';
import profileImage from '../assets/professional.png'
import overlay from '../assets/overlay.png';


const AboutMe = () => {

  const personalInfo = {
    name: "Shikhar Bahik",
    title: "Full Stack Web Developer (Laravel & MERN)",
    email: "shikharbahik5@gmail.com",
    phone: "+977-9864894584",
    location: "Pokhara, Nepal",
    website: "shikharbahik.com.np",
    cvLink: "/attached_assets/my_cv_1765258774082.pdf",
    social: {
      github: "https://github.com/shikharbahikmagar",
      linkedin: "https://linkedin.com/in/shikhar-bahik",
    },
    about:
      "Full Stack Web Developer specializing in Laravel and MERN Stack with strong experience building authentication systems, Focused on delivering secure, high-performance, and maintainable solutions."
  };

  return (
    <section id="about" className="py-20 -mt-16 bg-gradient-to-bl from-sky-950 via-gray-900 to-sky-950">
      <div className="mx-auto px-4 max-w-6xl"
        style={{
          backgroundImage: `url(${overlay})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '10%',
          backgroundPositionY: '80%',
          backgroundSize: 'cover',

        }}
      >
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-sky-500/30 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-sky-400/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl shadow-sky-500/20 border-2 border-sky-500/30"
              />
            </div>
          </div>

          {/* Info Content */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-sky-500/20">
              <h3 className="text-3xl font-bold text-white mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-xl text-sky-400 font-semibold mb-4">
                {personalInfo.title}
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                {personalInfo.about}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-sky-500/10">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors group">
                <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400 group-hover:bg-sky-500/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors group">
                <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400 group-hover:bg-sky-500/30 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors group">
                <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400 group-hover:bg-sky-500/30 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={personalInfo.cvLink}
                className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-sky-500/50 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-sky-500/30 hover:border-sky-500/50 hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-sky-500/30 hover:border-sky-500/50 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
