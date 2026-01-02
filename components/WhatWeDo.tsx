import { Check, Lightbulb, Code, Zap, Shield, CheckCircle } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      title: 'Technology & IT Consulting',
      icon: Lightbulb,
      items: [
        'Technology audits and system assessments',
        'Digital transformation planning',
        'System architecture and solution design',
        'Startup and SME technology advisory'
      ]
    },
    {
      title: 'Software & Web Development',
      icon: Code,
      items: [
        'Web applications and business systems',
        'Admin dashboards and internal tools',
        'API development and system integrations',
        'Performance-optimized, scalable solutions'
      ]
    },
    {
      title: 'Automation & Intelligent Solutions',
      icon: Zap,
      items: [
        'Workflow and process automation',
        'AI-powered assistants and tools',
        'Monitoring and notification systems',
        'Operational optimization solutions'
      ]
    },
    {
      title: 'Cybersecurity & Infrastructure',
      icon: Shield,
      items: [
        'Security assessments and best-practice advisory',
        'Infrastructure setup and hardening',
        'Cloud configuration and migration support',
        'Data protection and access control guidance'
      ]
    }
  ];

  const worksteps = [
    { step: '01', title: 'Assessment', description: 'Understanding the problem, systems, and objectives' },
    { step: '02', title: 'Design', description: 'Creating secure and scalable solutions' },
    { step: '03', title: 'Implementation', description: 'Executing with precision and reliability' },
    { step: '04', title: 'Optimization', description: 'Improving performance and long-term value' }
  ];

  const commitments = [
    'Security and reliability',
    'Scalability and performance',
    'Practical, business-aligned outcomes',
    'Long-term partnership with our clients'
  ];

  return (
    <section className="pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Our Focus Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6 sm:mb-8">
            <div className="w-4 h-4 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-teal-700" />
            </div>
            <span className="text-teal-700 text-xs font-medium">Our Focus</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 sm:mb-6 leading-tight font-light">
            What We <span className="italic">Do</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mb-6 font-light leading-relaxed">
            AsolaSMART-Tech delivers technology consulting and digital solutions that help organizations design, implement, and optimize reliable systems. We work with businesses to turn complex requirements into secure, scalable, and efficient digital infrastructure.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-3xl font-light">
            Our services are structured to support both strategic decision-making and hands-on execution.
          </p>
        </div>

        {/* Our Services Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-8 sm:mb-12 font-light">
            Our <span className="italic">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <IconComponent size={28} className="text-teal-600" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-serif text-gray-900 font-light">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <Check size={16} className="text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-xs sm:text-sm font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* How We Work Section */}
        <div className="mb-16 sm:mb-20 md:mb-24 bg-gradient-to-b from-teal-50 to-cyan-50 rounded-2xl p-8 sm:p-10 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-8 sm:mb-12 font-light">
            How We <span className="italic">Work</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base font-light mb-8 sm:mb-10 max-w-3xl">
            Our work is guided by a structured consulting approach:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {worksteps.map((work, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-2xl sm:text-3xl font-serif text-teal-600 mb-2 font-light">
                  {work.step}
                </div>
                <h3 className="text-base sm:text-lg font-serif text-gray-900 mb-2 font-light">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-8 sm:mb-10 font-light">
            Our <span className="italic">Commitment</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base font-light mb-6 sm:mb-8">
            Every service we deliver is built on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 sm:p-5 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <CheckCircle size={20} className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base font-light">{commitment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
