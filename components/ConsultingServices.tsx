'use client';

import { Check, Zap, Layers, Code, Lock, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ConsultingServices() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const services = [
    {
      title: 'IT Strategy & Digital Transformation',
      icon: Zap,
      description: 'We help organizations define and execute technology strategies that support growth and operational efficiency.',
      details: [
        'Technology roadmaps and system planning',
        'Digital transformation advisory',
        'Legacy system evaluation and modernization guidance',
        'Startup and enterprise IT strategy support'
      ]
    },
    {
      title: 'System Architecture & Solution Design',
      icon: Layers,
      description: 'We design secure, scalable, and resilient system architectures.',
      details: [
        'Application and infrastructure architecture',
        'Cloud and hybrid system design',
        'Integration planning and data flow design',
        'Performance and scalability assessments'
      ]
    },
    {
      title: 'Software Advisory & Product Consulting',
      icon: Code,
      description: 'We provide expert guidance throughout the software development lifecycle.',
      details: [
        'Requirements analysis and technical specifications',
        'Solution feasibility and technology selection',
        'Development oversight and quality assurance advisory',
        'Product scalability and maintainability reviews'
      ]
    },
    {
      title: 'Automation & Process Optimization',
      icon: Wrench,
      description: 'We advise organizations on implementing automation to improve efficiency and reduce operational overhead.',
      details: [
        'Workflow analysis and automation strategy',
        'Intelligent process optimization',
        'Monitoring and alerting system design',
        'Automation roadmap development'
      ]
    },
    {
      title: 'Cybersecurity & Risk Advisory',
      icon: Lock,
      description: 'We help organizations strengthen security posture and manage technology risks.',
      details: [
        'Security assessments and best-practice recommendations',
        'Access control and data protection advisory',
        'Infrastructure hardening guidance',
        'Risk identification and mitigation planning'
      ]
    }
  ];

  const engagementSteps = [
    {
      title: 'Discovery & Assessment',
      description: 'Understanding systems, risks, and objectives'
    },
    {
      title: 'Strategy & Design',
      description: 'Developing actionable recommendations'
    },
    {
      title: 'Implementation Support',
      description: 'Guiding execution and decision-making'
    },
    {
      title: 'Review & Optimization',
      description: 'Ensuring performance, security, and scalability'
    }
  ];

  const audiences = [
    'Startups and SMEs',
    'Corporates and institutions',
    'NGOs, churches, and organizations',
    'Product teams and digital initiatives'
  ];

  const values = [
    'Clear and actionable recommendations',
    'Reduced technology risk',
    'Improved system reliability and efficiency',
    'Solutions aligned with long-term business goals'
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-teal-700" />
            </div>
            <span className="text-teal-700 text-xs font-medium">Consulting Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            Technology <span className="italic">Consulting Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light">
            AsolaSMART-Tech provides specialized technology consulting services designed to help organizations plan, implement, and manage digital systems effectively. Our consulting engagements are structured to deliver clarity, reduce risk, and ensure technology investments align with business objectives.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light mt-4">
            We support clients across the full lifecycle—from strategic assessment to execution and optimization.
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 font-light">Our Consulting Services</h2>

          {/* Accordion Services */}
          <div className="space-y-4">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden transition">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                    className="w-full px-6 py-5 bg-white hover:bg-gray-50 flex items-start justify-between transition text-left"
                  >
                    <div className="flex items-start gap-4">
                      <IconComponent size={24} className="text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-teal-600 transition ${activeAccordion === idx ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </button>
                  {activeAccordion === idx && (
                    <div className="px-6 py-5 bg-teal-50 border-t border-gray-200">
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-3 text-gray-700 text-sm">
                            <Check size={16} className="text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement Model */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 font-light">Engagement Model</h2>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light mb-8">
            Our consulting services follow a structured engagement model:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {engagementSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.description}</p>
                </div>
                {idx < engagementSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-teal-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 font-light">Who We Serve</h2>
            <div className="space-y-4">
              {audiences.map((audience, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{audience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value We Deliver */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 font-light">Value We Deliver</h2>
            <div className="space-y-4">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 font-light">Ready to Transform Your Technology Strategy?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our consulting services can help your organization achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Request a Consultation
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
