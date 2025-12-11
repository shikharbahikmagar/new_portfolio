import {
  Code,
  Server,
  Globe,
  MessagesSquare,
  Smartphone,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Full-Stack Web Development",
      description: "Professional and scalable web applications using Laravel, React, and MERN Stack with clean and maintainable code."
    },
    {
      icon: <Server size={40} />,
      title: "API Development",
      description: "Secure and high-performance REST APIs using Laravel, Node.js, and NestJS including authentication, validation, and integrations."
    },
    {
      icon: <Globe size={40} />,
      title: "Website Development",
      description: "Responsive static and dynamic websites built with React and Laravel, optimized for performance and SEO."
    },
    {
      icon: <MessagesSquare size={40} />,
      title: "Real-Time Features",
      description: "Real-time chat systems, messaging, and live notifications using Socket.IO and WebSockets."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Frontend Development",
      description: "Modern and interactive user interfaces using React, styled components, TailwindCSS, and animation libraries like GSAP."
    },
    {
      icon: <Settings size={40} />,
      title: "System Integration & Automation",
      description: "Integration of external services such as payment gateways (eSewa), email verification systems, and backend automation."
    }
  ];

  return (
    <div className='min-h-screen w-full py-8 md:py-16  mt-[-70px] relative'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url("/api/placeholder/1920/1080")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-tr from-sky-950 via-gray-900 antialiased to-sky-950'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 h-auto mx-4 md:mx-8 lg:mx-32'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>Services</h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>Empowering your digital journey with comprehensive solutions tailored to your needs</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm
                border border-gray-800 hover:border-sky-500
                transform hover:-translate-y-2 transition-all duration-300
                hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]'
            >
              <div className='space-y-4'>
                <div className='text-sky-500 group-hover:text-sky-400 transition-colors duration-300'>
                  {service.icon}
                </div>

                <h3 className='text-white text-xl md:text-2xl font-semibold group-hover:text-sky-400 transition-colors duration-300'>
                  {service.title}
                </h3>

                <p className='text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base leading-relaxed'>
                  {service.description}
                </p>

                <div className='absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='text-sky-500 text-sm font-medium'>Learn More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
