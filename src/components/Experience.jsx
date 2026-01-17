import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {

  const experience = [
    {
      company: "Websoft Technology Nepal",
      role: "Laravel Intern",
      period: "June 2024 – Oct 2024",
      location: "Pokhara, Nepal",
      description: [
        "Assisted in developing Laravel-based applications.",
        "Implemented CRUD operations and backend logic.",
        "Worked with Blade templates, controllers, and migrations.",
        "Gained hands-on experience with real project workflows."
      ]
    },
    {
      company: "Websoft Technology Nepal",
      role: "Full Stack Web Developer",
      period: "Oct 2024 – Present",
      location: "Pokhara, Nepal",
      description: [
        "Develop full-stack applications using Laravel and React.",
        "Build secure authentication and API features.",
        "Manage databases and optimize application performance.",
        "Work on real-time features, payment integration, and deployments."
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-bl from-sky-950 via-gray-900 to-sky-950">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sky-500/30"></div>

          {experience.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full border-4 border-gray-900 shadow-lg shadow-sky-500/50 z-10"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/20 p-6 transition-all duration-300 border border-sky-500/20 hover:border-sky-400 group">

                  <div className="flex items-center space-x-2 text-sky-400 font-semibold mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {exp.role}
                    </h3>


                    <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1 hover:text-sky-400 transition-colors">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>

                      <div className="flex items-center space-x-1 hover:text-sky-400 transition-colors">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section >
  );
};

export default Experience;

