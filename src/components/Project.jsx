import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'nepal', label: '🇳🇵 Nepal' },
    { id: 'malaysia', label: '🇲🇾 Malaysia' }
  ];

  const projects = [
    {
      title: "Cephas Investment & Holdings",
      description: "Investment-holdings company active in real estate, start-up, agriculture, hydropower and fund/asset management; also developing a luxury villa project 'Genesis Villa' in Pokhara.",
      tags: ["Real Estate", "Investments", "Fund Management", "Consultancy"],
      link: "https://cephasholdings.com/",
      company: "Websoft Technology",
      contribution: "Full Stack",
      country: "nepal",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
    },
    {
      title: "GS Sparkle Cleaning Services",
      description: "Corporate website for a cleaning-service company — offering home and office cleaning, deep-cleaning, and commercial cleaning packages; booking and payments integrated.",
      tags: ["Corporate", "Service Website", "Booking System"],
      link: "https://gssparkle.com/",
      company: "Websoft Technology",
      contribution: "Full Stack",
      country: "malaysia",
      image: "https://gssparkle.com/storage/images/hero/1740641690.jpg"
    },
    {
      title: "Miracle Institute",
      description: "Educational consultancy/agency providing study-abroad services (USA, UK, Canada, Australia, New Zealand), visa guidance, test preparation (IELTS, TOEFL, SAT, GRE, GMAT, Duolingo).",
      tags: ["Education Portal", "Consultancy", "Test Preparation"],
      link: "https://miracle.edu.np/",
      company: "Websoft Technology",
      contribution: "Full Stack",
      country: "nepal",
      image: "https://miracle.edu.np/storage/images/about/1755501868.jpg"
    },
    {
      title: "Snake Conservation Society Nepal",
      description: "Non-profit organization website for snake conservation and awareness in Nepal — promoting snake rescue & relocation, human-snake conflict mitigation, research, and public awareness campaigns.",
      tags: ["NGO Website", "Conservation", "Wildlife"],
      link: "https://scsn.org.np/",
      company: "Websoft Technology",
      contribution: "Full Stack",
      country: "nepal",
      image: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=800&q=80"
    },
    {
      title: "GY Healthcare",
      description: "Healthcare platform providing comprehensive medical services and health management solutions.",
      tags: ["Healthcare", "Medical Services", "Platform"],
      link: "https://gyhealthcare.my/",
      company: "Websoft Technology",
      contribution: "Full Stack",
      country: "malaysia",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      title: "YouTube Clone",
      description: "Video streaming platform clone with modern UI/UX, featuring video upload, playback, and user interaction capabilities.",
      tags: ["Video Platform", "Streaming", "Social Media"],
      link: "https://youtube-clone-ten-coral.vercel.app/",
      company: "Personal Project",
      contribution: "Solo",
      country: "nepal",
      image: "https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png"
    },
  ];

  const getFilteredProjects = () => {
    if (activeTab === 'All') return projects;
    if (activeTab === '🇳🇵 Nepal') return projects.filter(p => p.country === 'nepal');
    if (activeTab === '🇲🇾 Malaysia') return projects.filter(p => p.country === 'malaysia');
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  const getContributionColor = (contribution) => {
    const colors = {
      'Full Stack': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Frontend': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Backend': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Solo': 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    };
    return colors[contribution] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  const getCompanyColor = (company) => {
    const colors = {
      'Websoft Technology': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'Personal Project': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'Academic Project': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
    };
    return colors[company] || 'bg-teal-500/20 text-teal-300 border-teal-500/30';
  };

  return (
    <div id="projects" className='bg-gradient-to-bl from-sky-950 via-gray-900 to-sky-950 min-h-screen'>
      <div className='relative'>
        <div className='pt-20 pb-8'>
          <h1 className='text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent mb-6'>
            My Latest Projects
          </h1>
          <p className='text-gray-400 text-center max-w-3xl mx-auto px-4 md:px-8 leading-relaxed'>
            A collection of professional projects showcasing expertise in full-stack development,
            from enterprise solutions to innovative platforms. Each project demonstrates attention
            to detail, modern design principles, and robust functionality.
          </p>
        </div>

        <div className="py-8 flex items-center justify-center">
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-4 px-4">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.label)}
                    className={`
                      relative px-6 py-2.5 rounded-full font-medium text-sm
                      transition-all duration-300 ease-in-out
                      ${activeTab === tab.label
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                        : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800 border border-slate-700/50'}
                    `}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="px-4 md:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <div className="bg-blue-500 p-2 rounded-full shadow-lg">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCompanyColor(project.company)}`}>
                          {project.company}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getContributionColor(project.contribution)}`}>
                          {project.contribution}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-lg text-xs font-medium hover:bg-slate-700/50 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
