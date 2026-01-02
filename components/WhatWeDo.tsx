import { Cloud, Zap, Lock, Globe, TrendingUp, ShoppingCart, Check } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      title: 'Cloud Architecture',
      icon: Cloud,
      description: 'Scalable cloud infrastructure designed for performance, security, and cost optimization.'
    },
    {
      title: 'AI & Automation',
      icon: Zap,
      description: 'Intelligent automation solutions to streamline processes and enhance efficiency.'
    },
    {
      title: 'Cybersecurity',
      icon: Lock,
      description: 'Advanced security measures and compliance frameworks to protect your digital assets.'
    },
    {
      title: 'Web Development',
      icon: Globe,
      description: 'Custom-built web solutions with responsive design and seamless user experience.'
    },
    {
      title: 'Digital Transformation',
      icon: TrendingUp,
      description: 'Strategic guidance to modernize your business and drive growth.'
    },
    {
      title: 'E-Commerce Solutions',
      icon: ShoppingCart,
      description: 'Full-featured online stores with payment integration and analytics.'
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
            <span className="text-teal-700 text-xs font-medium">Our Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            What We <span className="italic">Do</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light">
            We deliver comprehensive technology solutions tailored to your business needs, from strategy to implementation and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="flex items-start mb-4">
                  <IconComponent size={32} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3 font-light">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
