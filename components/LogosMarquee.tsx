'use client';

import Image from 'next/image';

export default function LogosMarquee() {
  const logos = [
    { name: 'Perfect Media', src: '/perfectmedia.png' },
    { name: 'Blaze Production', src: '/blazep.png' },
    { name: 'Event AST', src: '/eventast (2).png' },
    { name: 'Mildans Sports Hub', src: '/mildans.png' },
    { name: 'Bilhan Consultancy', src: '/bilhanconsultancy.png' },
    { name: 'Bilhan Institute', src: '/bilhaninstitute.png' },
    { name: 'Santsams Ltd', src: '/santsamsch.png' },
  ];

  // Duplicate logos for seamless loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-12 font-light">
          Trusted by Leading <span className="italic">Organizations</span>
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee */}
          <div className="flex gap-8 sm:gap-12 md:gap-16 animate-marquee">
            {marqueeLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 h-16 sm:h-20 md:h-24 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={80}
                  className="h-full w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                  priority={idx < 7}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional context */}
        <p className="text-center text-gray-600 text-sm sm:text-base mt-10 font-light max-w-2xl mx-auto">
          We partner with innovative organizations across media, events, sports, education, and corporate sectors to deliver transformative digital solutions.
        </p>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
