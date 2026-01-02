'use client';

import { Check, Target, Lightbulb, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SuccessFramework() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '1',
      title: 'Assessment & Discovery',
      description: 'We begin by gaining a clear understanding of the organization&apos;s goals, existing systems, and challenges.',
      icon: Target,
      details: [
        'Business and technical requirement analysis',
        'System and infrastructure assessment',
        'Risk and gap identification',
        'Stakeholder alignment'
      ]
    },
    {
      number: '2',
      title: 'Strategy & Planning',
      description: 'Based on insights from discovery, we develop a clear and actionable plan.',
      icon: Lightbulb,
      details: [
        'Technology strategy and roadmap',
        'Solution architecture and design',
        'Resource and timeline planning',
        'Risk mitigation strategy'
      ]
    },
    {
      number: '3',
      title: 'Design & Implementation',
      description: 'We translate strategy into practical execution with a focus on quality and reliability.',
      icon: Zap,
      details: [
        'System and application design',
        'Secure and scalable implementation',
        'Integration and configuration support',
        'Quality and performance validation'
      ]
    },
    {
      number: '4',
      title: 'Optimization & Security',
      description: 'After implementation, we refine and strengthen systems to ensure long-term performance.',
      icon: Shield,
      details: [
        'Performance tuning and optimization',
        'Security review and best-practice alignment',
        'Process improvement and automation opportunities',
        'Stability and reliability checks'
      ]
    },
    {
      number: '5',
      title: 'Review & Continuous Improvement',
      description: 'We assess outcomes and support continuous enhancement.',
      icon: TrendingUp,
      details: [
        'Results evaluation and reporting',
        'System reviews and recommendations',
        'Ongoing advisory and support',
        'Future improvement planning'
      ]
    }
  ];

  const principles = [
    'Clarity before execution',
    'Security by design',
    'Scalability and performance',
    'Measurable business outcomes'
  ];

  const outcomes = [
    'Well-structured and dependable systems',
    'Reduced operational and security risks',
    'Improved efficiency and performance',
    'Technology aligned with long-term objectives'
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
            <span className="text-teal-700 text-xs font-medium">Success Framework</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            Our <span className="italic">Success Framework</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light">
            The AsolaSMART-Tech Success Framework is a structured approach that ensures every engagement delivers clarity, measurable outcomes, and long-term value. Our framework guides clients from initial assessment through implementation and optimization, ensuring technology solutions are aligned with business objectives.
          </p>
        </div>

        {/* Framework Steps */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 font-light">Our Framework</h2>

          {/* Timeline View */}
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="group">
                <button
                  onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
                  className="w-full text-left"
                >
                  <div className="flex items-start gap-6 p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:bg-teal-50/30 transition cursor-pointer">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                        <span className="text-white font-serif text-2xl font-light">{step.number}</span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Chevron */}
                    <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-teal-600 transition ${activeStep === idx ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {activeStep === idx && (
                  <div className="mt-4 ml-6 pl-6 border-l-2 border-teal-200">
                    <div className="bg-teal-50 rounded-lg p-6">
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-3">
                            <Check size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 font-light">Key Principles</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              Our framework is guided by:
            </p>
            <div className="space-y-4">
              {principles.map((principle, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{principle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Outcomes */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 font-light">Client Outcomes</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              Through our Success Framework, clients achieve:
            </p>
            <div className="space-y-4">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 font-light">Ready to Achieve Success?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our framework can help your organization reach its goals and transform your technology infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Start Your Engagement
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
