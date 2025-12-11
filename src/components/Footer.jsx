import { Mail, Github, Linkedin, ExternalLink, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-950 via-gray-900 to-sky-950 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Shikhar
              <span className="text-sky-400"> Web Developer</span>
            </h2>
            <p className="text-gray-300">
              Creating modern, secure, and scalable web applications using Laravel, MERN, and modern web technologies.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-5 pt-3">
              <a
                href="https://github.com/shikharbahikmagar"
                target="_blank"
                className="text-gray-300 hover:text-sky-400 transition group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/shikhar-magar-70b2aa282/"
                target="_blank"
                className="text-gray-300 hover:text-sky-400 transition group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition" />
              </a>

              <a
                href="mailto:shikharbahik5@gmail.com"
                className="text-gray-300 hover:text-sky-400 transition group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-sky-400 transition">About Me</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-400 transition">Experience</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>

            <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-sky-400" />
              <a href="mailto:shikharbahik5@gmail.com" className="hover:text-sky-400">shikharbahik5@gmail.com</a>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-sky-400" />
              <span>+977-9864894584</span>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-sky-400" />
              <span>Pokhara, Nepal</span>
            </div>

            <a
              href="/attached_assets/my_cv_1765258774082.pdf"
              target="_blank"
              className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Download My CV</span>
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-sky-400 font-medium">Shikhar Bahik</span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

