
import { Code, Palette, Globe, Smartphone,  Rocket, Megaphone } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices for optimal performance."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications designed for seamless user experience across all devices."
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences."
    },
    {
      icon: <Globe size={40} />,
      title: "Digital Strategy",
      description: "Strategic planning and consultation to help businesses thrive in the digital landscape."
    },
    {
      icon: <Rocket size={40} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions to power your digital transformation."
    },
    {
      icon: <Megaphone size={40} />,
      title: "Digital Marketing",
      description: "Result-driven digital marketing strategies to boost your online presence and reach target audiences."
    }
  ]

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