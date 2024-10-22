import React, { useState } from 'react';
import overlay from '../assets/overlay.png';

const Project = () => {

      const [activeTab, setActiveTab] = useState('All');
      
      const tabs = [
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile App' },
        { id: 'motion', label: 'Motion' },
        { id: 'graphic', label: 'Graphic Design' }
      ];
    

  return (
    <div className='bg-gradient-to-br from-sky-950 via-gray-900 antialiased to-sky-950'>
        <div style={{
      backgroundImage: `url(${overlay})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: '60%',
      backgroundPositionY: '40%',
      backgroundSize: 'cover',

    }}>
        <div className=''>
            <h1 className='pt-20 text-center text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-teal-200 bg-clip-text antialiased font-sans text-transparent'>My Latest Projects</h1>
        </div>
        <div className='mt-16 text-white text-center ml-64 mr-64 justify-center items-center flex'>
            <p className='text-gray-400 antialiased'>I’ve developed a comprehensive LMS for efficient school management, streamlining administration and learning processes. Additionally, I created an eCommerce platform that enhances user experience.</p>
        </div>
        <div className="text-center py-16 flex items-center justify-center mx-auto">
      <nav className="mx-auto text-center">
        <ul className="flex flex-wrap items-center gap-5 text-center">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.label)}
                className={`
                  relative px-5 py-1.5 rounded-full text-sm font-medium
                  transition-all duration-300 ease-in-out text-center text-xl
                  ${activeTab === tab.label 
                    ? 'bg-[#0A1627] text-[#3B82F6] ring-1 ring-[#1D4ED8]/30  before:absolute before:inset-0 before:rounded-full before:ring-1 before:ring-[#3B82F6]/20 before:shadow-[0_0_8px_rgba(59,130,246,0.3)] before:-z-10' 
                    : 'bg-[#0A1627] text-[#799ab5] hover:text-[#3B82F6] ring-1 ring-cyan-500/30'}
                `}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Flyer Design Card */}
          <div className="group relative rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="https://ehwmisgwycz.exactdn.com/wp-content/uploads/2020/06/lms-features-1.jpg?strip=all&lossy=1&resize=1140%2C599&ssl=1" 
                alt="Flyer design"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)]"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 text-gray-400 font-sans">Mistery Message</h3>
                <p className="text-sm text-gray-400 text-gray-300 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque euismod.
                </p>
              </div>
            </div>
          </div>

          {/* Banner Design Card */}
          <div className="group relative rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="https://edusuitepk.b-cdn.net/wp-content/uploads/2021/12/Fee-Management-.jpg" 
                alt="Banner design"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)]"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 text-gray-400 font-sans">Library Management System</h3>
                <p className="text-sm text-gray-400 text-gray-300 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque euismod.
                </p>
              </div>
            </div>
          </div>

          {/* Disk Cover Card */}
          <div className="group relative rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="https://asset.gecdesigns.com/img/isometric-illustration/the-future-of-retail-e-commerce-concept-vector-illustration-1682432685910-cover.webp" 
                alt="Disk cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)]"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 text-gray-400 font-sans">E-commerce</h3>
                <p className="text-sm text-gray-400 text-gray-300 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque euismod.
                </p>
              </div>
            </div>
          </div>

          {/* Pattern Design Card */}
          <div className="group relative rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png" 
                alt="Pattern design"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)]"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 text-gray-400 font-sans">Youtube Clone</h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque euismod.
                </p>
              </div>
            </div>
          </div>

          {/* Logo Design Card */}
          <div className="group relative rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="https://media.licdn.com/dms/image/D4D12AQF4wPzUFfzVlQ/article-cover_image-shrink_600_2000/0/1715864980954?e=2147483647&v=beta&t=tNg7VcV8mPDYPi-7U86jFmNHdMjytZv_LoOChd5E9ZI" 
                alt="Logo design"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)]"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 text-gray-400 font-sans">Blog</h3>
                <p className="text-sm text-gray-400 text-gray-300 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque euismod.
                </p>
              </div>
            </div>
          </div>

          {/* Animal Pattern Card */}
          <div className="group relative rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src="https://www.mobicommerce.net/wp-content/uploads/2020/05/multivendor-marketplace-ecommerce-trend.jpg" 
                alt="Animal pattern"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)]"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2 text-gray-400 font-sans">Mutli-vendor E-commerce</h3>
                <p className="text-sm text-gray-400 text-gray-300 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque euismod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

</div>
  )

}

export default Project
