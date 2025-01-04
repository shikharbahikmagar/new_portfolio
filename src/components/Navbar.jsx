import { useState } from 'react';
import { Menu, X, Phone, Code, User, Briefcase, Mail, Home, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';

// Define MenuLink component with enhanced animations
const MenuLink = ({ icon, text }) => (
  <motion.a
    href={`#${text.toLowerCase()}`}
    className="group flex items-center space-x-3 text-gray-300 hover:text-white w-full transition-all duration-300 hover:translate-x-2"
    whileHover={{ x: 10 }}
    whileTap={{ scale: 0.98 }}
  >
    {icon && (
      <motion.span 
        className="p-2 rounded-lg bg-sky-900 group-hover:bg-sky-800 transition-colors duration-300 border border-sky-700 group-hover:border-sky-500"
        whileHover={{ rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.span>
    )}
    <span className="text-lg font-medium group-hover:text-sky-400">{text}</span>
  </motion.a>
);

// Contact Form Component
const ContactForm = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          className="bg-gradient-to-br from-sky-950 via-gray-900 to-sky-950 p-8 rounded-2xl w-full max-w-md m-4 border border-sky-800/30"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Contact Me</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-sky-800/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-sky-900/50 border border-sky-800/50 focus:border-sky-500 text-white outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-sky-900/50 border border-sky-800/50 focus:border-sky-500 text-white outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg bg-sky-900/50 border border-sky-800/50 focus:border-sky-500 text-white outline-none transition-all h-32 resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-sky-600 hover:bg-sky-500 text-white rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className='pt-6 bg-gradient-to-br from-sky-950 via-gray-900 to-sky-950 bg-transparent'>
        <motion.nav 
          className="bg-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .1, type: 'spring', stiffness: 100 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-white font-bold text-2xl group">
                  <span className="inline-block transform transition-all duration-300 hover:-translate-y-1 hover:text-sky-400">&lt;</span>
                  <span className="inline-block transform transition-all duration-300 group-hover:text-sky-400">Dev</span>
                  <span className="inline-block transform transition-all duration-300 hover:-translate-y-1 hover:text-sky-400">/&gt;</span>
                </div>
              </motion.div>

              <div className="flex items-center space-x-16">
                {/* Contact Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsContactOpen(true)}
                  className="flex items-center px-6 py-2 rounded-full bg-sky-900 hover:bg-sky-800 text-white transition-all duration-300 border border-sky-700 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-900/20"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </motion.button>

                {/* Menu Toggle Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-[11] p-3 rounded-full bg-sky-900 hover:bg-sky-800 transition-all duration-300 border border-sky-700 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-900/20"
                >
                  {isOpen ? (
                    <X className="h-6 w-6 text-white" />
                  ) : (
                    <Menu className="h-6 w-6 text-white" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

         {/* Enhanced Sidebar with new design */}
         <motion.div
            className={`fixed top-0 right-0 h-auto z-10 sm:w-86 w-80 lg:w-[30em] transform transition-all duration-500 ease-out border-l border-sky-900/50 backdrop-blur-md ${
              isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
            }`}
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* New Menu Layout */}
            <div className="h-full flex flex-col">
              {/* Top Section with Brand */}
              <motion.div 
                className="p-8 border-b border-sky-800/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Navigation</h2>
                <p className="text-gray-400">Explore my portfolio sections</p>
              </motion.div>

              {/* Menu Items with new styling */}
              <motion.div 
                className="flex-1 px-6 py-8 space-y-2 overflow-y-auto scrollbar-hide"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="space-y-6">
                  <MenuLink icon={<Home className="w-5 h-5" />} text="Home" />
                  <MenuLink icon={<Code className="w-5 h-5" />} text="Skills" />
                  <MenuLink icon={<Briefcase className="w-5 h-5" />} text="Projects" />
                  <MenuLink icon={<User className="w-5 h-5" />} text="About" />
                  <MenuLink icon={<Mail className="w-5 h-5" />} text="Contact" />
                </div>
              </motion.div>

              {/* Footer with enhanced design */}
              <motion.div 
                className="p-8 border-t border-sky-800/20 bg-gradient-to-t from-sky-950/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <p className="text-sm text-gray-400 text-center">© 2024 Portfolio</p>
                  <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Overlay */}
              {/* Overlay */}
              <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/20 transition-opacity  duration-500 ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          />
    
        </motion.nav>

        <Hero />
      </div>
      
      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;