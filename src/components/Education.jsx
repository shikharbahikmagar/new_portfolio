import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {

  const education = [
    {
      degree: "Bachelor in Software Engineering",
      institution: "Pokhara University",
      year: "2021 – 2025"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Pokhara Engineering College",
      year: "2016 – 2019"
    }
  ];


  return (
    <section id="education" className="py-20 bg-gradient-to-br from-sky-950 via-gray-900 to-sky-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector Line (except for last item) */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-sky-500/30 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-sky-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-sky-400 group-hover:bg-sky-500/30 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-sky-500/50 relative z-10">
                      <GraduationCap className="w-8 h-8 text-sky-400" />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-sky-500/20 hover:border-sky-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-sky-500/20 group-hover:-translate-y-1">
                  {/* Type Badge */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-500/10 rounded-full mb-4">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    <span className="text-sm text-sky-400 font-medium">{edu.type}</span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center space-x-2 text-gray-300 mb-3">
                    <Award className="w-5 h-5 text-sky-400" />
                    <p className="text-lg font-semibold">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Year */}
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-5 h-5 text-sky-400" />
                    <span className="font-medium">{edu.year}</span>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-sky-500/10 transition-all"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-sm rounded-full border border-sky-500/20">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <span className="text-gray-300 font-medium">Continuous Learning Journey</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
