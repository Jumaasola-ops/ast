import { Check, Shield, Zap, Target, Users } from 'lucide-react';

export default function About() {
  const coreValues = [
    { title: 'Professionalism & Integrity', icon: Users },
    { title: 'Security & Reliability', icon: Shield },
    { title: 'Innovation with Purpose', icon: Zap },
    { title: 'Long-term Partnership', icon: Target }
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-teal-700" />
            </div>
            <span className="text-teal-700 text-xs font-medium">About AsolaSMART-Tech</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-light">
            Delivering Smart <span className="italic">Digital Solutions</span>
          </h1>
        </div>

        {/* Overview & Background */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-light">
              AsolaSMART-Tech is a technology consultancy delivering smart, secure, and scalable digital solutions to businesses and organizations. Established in late 2024, the company was founded to address the growing need for well-architected systems, reliable software, and intelligent automation in an increasingly digital world.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              We support clients by combining technical expertise, strategic consulting, and practical execution to solve complex technology challenges and enable sustainable growth.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-4 font-light">Our Background</h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-light">
              Since its formation in late 2024, AsolaSMART-Tech has focused on providing structured and dependable technology services across consulting, software development, automation, and cybersecurity. The consultancy has evolved with a clear emphasis on system design, performance, and security.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              Today, AsolaSMART-Tech continues to expand its capabilities while maintaining a strong commitment to professionalism, innovation, and measurable client outcomes.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-16"></div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-gray-900 mb-8 font-light">What We <span className="italic">Do</span></h2>
          <p className="text-gray-600 leading-relaxed mb-8 font-light max-w-3xl">
            We help organizations plan, build, and optimize digital systems that improve efficiency and operational resilience.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
              <h3 className="text-lg font-serif text-gray-900 mb-3 font-light">Technology & IT Consulting</h3>
              <p className="text-gray-600 text-sm font-light">Strategic guidance on technology selection, architecture, and implementation aligned with your business goals.</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
              <h3 className="text-lg font-serif text-gray-900 mb-3 font-light">Software & Web Development</h3>
              <p className="text-gray-600 text-sm font-light">Custom-built applications and web solutions designed for performance, scalability, and user experience.</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
              <h3 className="text-lg font-serif text-gray-900 mb-3 font-light">Automation & Intelligent Workflows</h3>
              <p className="text-gray-600 text-sm font-light">Streamline operations with intelligent automation and workflow solutions that reduce manual effort and errors.</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
              <h3 className="text-lg font-serif text-gray-900 mb-3 font-light">Cybersecurity & Infrastructure</h3>
              <p className="text-gray-600 text-sm font-light">Security advisory and infrastructure support ensuring your systems are protected and resilient.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-16"></div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-gray-900 mb-8 font-light">Our <span className="italic">Approach</span></h2>
          <p className="text-gray-600 leading-relaxed mb-8 font-light max-w-3xl">
            Our consulting approach is founded on clarity, structure, and long-term value. We prioritize:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Thorough Analysis</h3>
                <p className="text-gray-600 font-light">Deep understanding of your needs before implementation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Secure Architecture</h3>
                <p className="text-gray-600 font-light">Systems built with security and scalability at their core.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Performance by Design</h3>
                <p className="text-gray-600 font-light">Reliability and efficiency built into every solution.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check size={24} className="text-teal-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-gray-900 mb-2 font-light">Goal Alignment</h3>
                <p className="text-gray-600 font-light">Technology solutions aligned with your business objectives.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-16"></div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-serif text-gray-900 mb-4 font-light">Mission</h3>
            <p className="text-gray-700 leading-relaxed font-light">
              To provide smart, secure, and efficient technology solutions that help organizations operate effectively and scale with confidence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100">
            <h3 className="text-xl font-serif text-gray-900 mb-4 font-light">Vision</h3>
            <p className="text-gray-700 leading-relaxed font-light">
              To be a trusted technology consultancy recognized for intelligent system design, automation-driven efficiency, and reliable digital infrastructure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-xl font-serif text-gray-900 mb-4 font-light">Values</h3>
            <ul className="space-y-2 text-gray-700 text-sm font-light">
              <li className="flex gap-2">
                <span className="text-teal-600">•</span>
                <span>Professionalism & Integrity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600">•</span>
                <span>Security & Reliability</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600">•</span>
                <span>Innovation with Purpose</span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600">•</span>
                <span>Long-term Partnership</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-gray-900 mb-8 font-light text-center">Core <span className="italic">Values</span></h2>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100">
                      <IconComponent size={24} className="text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif text-gray-900 font-light">{value.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-16"></div>

        {/* Highlight Strip */}
        <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 rounded-2xl p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-light uppercase tracking-wide mb-2">Founded</h4>
              <p className="text-3xl font-serif font-light">2024</p>
            </div>
            <div>
              <h4 className="text-sm font-light uppercase tracking-wide mb-2">Focus</h4>
              <p className="text-xl font-serif font-light">Smart Digital Consulting</p>
            </div>
            <div>
              <h4 className="text-sm font-light uppercase tracking-wide mb-2">Expertise</h4>
              <p className="text-lg font-light">Systems • Automation • Security</p>
            </div>
          </div>
        </div>

        {/* Where We Are Today */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-12">
          <h2 className="text-2xl font-serif text-gray-900 mb-6 font-light">Where We Are <span className="italic">Today</span></h2>
          <p className="text-gray-600 leading-relaxed font-light max-w-3xl">
            AsolaSMART-Tech continues to grow as a consultancy, supporting clients across multiple sectors while refining its frameworks, expanding technical expertise, and preparing for future advancements in digital platforms and intelligent systems. Our commitment to delivering reliable, secure, and innovative solutions remains at the core of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
