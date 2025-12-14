import { Code, Server, Layout, Database, Palette, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "React.js", category: "Frontend", icon: "Code" },
    { name: "Next.js", category: "Frontend", icon: "Layout" },
    { name: "Laravel", category: "Backend", icon: "Server" },
    { name: "Next.js", category: "Framework", icon: "Layout" },
    { name: "Laravel", category: "Framework", icon: "Server" },
    { name: "MySQL", category: "Database", icon: "Database" },
    { name: "TailwindCSS", category: "Styling", icon: "Palette" },
  ];

  // Icon mapping
  const iconMap = {
    Code,
    Server,
    Layout,
    Database,
    Palette,
    Terminal
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-sky-950 via-gray-900 to-sky-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 border border-sky-500/20 hover:border-sky-400 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-sky-500/20 rounded-lg flex items-center justify-center group-hover:bg-sky-500/30 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="inline-block mt-1 px-3 py-1 bg-sky-500/10 text-sky-400 text-sm rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category-wise breakdown */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Skills by Category
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div
                key={category}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-sky-500/20 hover:border-sky-400 transition-all duration-300 group"
              >
                <h4 className="text-lg font-bold text-sky-400 mb-4 border-b-2 border-sky-500/30 pb-2 group-hover:text-sky-300 transition-colors">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {categorySkills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
