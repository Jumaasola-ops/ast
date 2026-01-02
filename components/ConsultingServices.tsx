import { Check, Target, Lightbulb, Cog } from 'lucide-react';

export default function ConsultingServices() {
  const services = [
    {
      title: 'Technology Consulting',
      icon: Lightbulb,
      description: 'Expert guidance on technology strategy, selection, and implementation to drive your business forward.'
    },
    {
      title: 'System Design',
      icon: Cog,
      description: 'Architecture and design of robust systems tailored to your specific business requirements.'
    },
    {
      title: 'Digital Transformation',
      icon: Target,
      description: 'Strategic planning and execution to modernize your operations and improve efficiency.'
    }
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-teal-700" />
            </div>
            <span className="text-teal-700 text-xs font-medium">Consulting Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            Strategic <span className="italic">Consulting</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light">
            We work as an extension of your team, providing strategic insights and practical solutions to drive your business success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div key={idx} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
                <div className="flex items-start mb-4">
                  <IconComponent size={32} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3 font-light">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-2xl font-serif text-gray-900 mb-6 font-light">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-serif text-teal-600 mb-3 font-light">Assessment</h3>
              <p className="text-gray-600 font-light">We begin by understanding your current state, challenges, and goals.</p>
            </div>
            <div>
              <h3 className="text-lg font-serif text-teal-600 mb-3 font-light">Strategy</h3>
              <p className="text-gray-600 font-light">We develop a tailored strategy aligned with your business objectives.</p>
            </div>
            <div>
              <h3 className="text-lg font-serif text-teal-600 mb-3 font-light">Implementation</h3>
              <p className="text-gray-600 font-light">We guide you through implementation with clear milestones and support.</p>
            </div>
            <div>
              <h3 className="text-lg font-serif text-teal-600 mb-3 font-light">Optimization</h3>
              <p className="text-gray-600 font-light">We continuously monitor and optimize to ensure sustained success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
