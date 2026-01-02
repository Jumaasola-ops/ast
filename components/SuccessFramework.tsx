import { Check, Trophy, Zap, TrendingUp } from 'lucide-react';

export default function SuccessFramework() {
  const frameworks = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'In-depth analysis of your current infrastructure, business goals, and market positioning to develop a comprehensive strategy.',
      icon: Trophy
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Creating robust system designs and architectural blueprints that align with your business objectives and scalability needs.',
      icon: Zap
    },
    {
      number: '03',
      title: 'Implementation & Development',
      description: 'Executing the solution with agile methodologies, ensuring quality, performance, and timely delivery.',
      icon: TrendingUp
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, security audits, and optimization to ensure reliability and peak performance.',
      icon: Check
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
            <span className="text-teal-700 text-xs font-medium">Success Framework</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            Our <span className="italic">Success Framework</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed font-light">
            We follow a proven methodology to ensure every project delivers measurable results and drives your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {frameworks.map((framework, idx) => {
            return (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
                  <span className="font-serif font-light text-teal-700 text-lg">{framework.number}</span>
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-3 font-light">{framework.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{framework.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-12">
          <h2 className="text-2xl font-serif text-gray-900 mb-8 font-light">Key Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Quality First</h3>
                <p className="text-gray-600 font-light">We prioritize quality and excellence in every deliverable.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Transparency</h3>
                <p className="text-gray-600 font-light">We maintain clear communication and full visibility throughout the project.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Scalability</h3>
                <p className="text-gray-600 font-light">Solutions are built to grow with your business needs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Support</h3>
                <p className="text-gray-600 font-light">Ongoing support ensures continued success after launch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
