'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, Cloud, Zap, Lock, Globe, Home as HomeIcon, TrendingUp, ShoppingCart, LayoutDashboard, GraduationCap, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const portfolioItems = [
    { title: 'Media Websites', icon: Globe, description: 'Custom-built media platforms with dynamic content management, SEO optimization, and multimedia integration.' },
    { title: 'Portfolio Websites', icon: LayoutDashboard, description: 'Showcase your work with stunning portfolio sites featuring responsive design and smooth navigation.' },
    { title: 'Real Estate Websites', icon: HomeIcon, description: 'Property listing platforms with advanced search, virtual tours, and integrated CRM systems.' },
    { title: 'Cloud Architecture', icon: Cloud, description: 'Scalable cloud infrastructure designed for performance, security, and cost optimization.' },
    { title: 'CRM Systems', icon: Zap, description: 'Custom CRM solutions to manage customer relationships, sales pipelines, and business growth.' },
    { title: 'Trading & Commodities', icon: TrendingUp, description: 'Real-time trading platforms with analytics, risk management, and market data integration.' },
    { title: 'Ecommerce Websites', icon: ShoppingCart, description: 'Full-featured online stores with payment integration, inventory management, and customer analytics.' },
    { title: 'Consultancy Websites', icon: Lock, description: 'Professional consulting sites with secure client portals, resource libraries, and case studies.' },
    { title: 'Driving School & Dashboards', icon: GraduationCap, description: 'Learning management systems with progress tracking, scheduling, and performance dashboards.' },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = 300;
    const newPosition = direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;
    setScrollPosition(Math.max(0, Math.min(newPosition, (portfolioItems.length - 3) * 300)));
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/ast.png" alt="AsolaSMART-Tech" width={60} height={60} className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex gap-12 items-center absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm">Home</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm">About Us</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm">What We Do</a>
            <a href="#solutions" className="text-gray-500 hover:text-gray-900 transition text-sm">Consulting Services</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition text-sm">Success Framework</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 transition text-sm">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-3 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-blink"></div>
                <span className="text-teal-700 text-xs font-medium">AsolaSMART-Tech</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight font-light">
                Smart Solutions for
                <br />
                <span className="italic">Digital Growth</span>
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base mb-6 leading-relaxed max-w-lg font-light">
                We are a technology consultancy delivering smart, secure, and scalable digital solutions. AsolaSMART-Tech helps businesses and organizations design systems, automate workflows, and build reliable software that drives efficiency and growth.
              </p>

              {/* CTA Button */}
              <button className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full px-5 py-2 text-sm transition">
                <span>+</span>
                <span>Book a Strategy Call</span>
              </button>

              {/* Subtext */}
              <p className="text-gray-500 text-xs mt-4 font-light">
                Trusted in IT consulting, automation, cybersecurity, and digital systems.
              </p>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="/hero.jpg"
                  alt="Hero Image"
                  width={400}
                  height={384}
                  className="rounded-3xl h-96 w-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Banner */}
      <section className="bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Stat */}
            <div>
              <h2 className="text-6xl md:text-7xl font-serif font-light text-white mb-2">
                2<span className="text-4xl">+</span>
              </h2>
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-4 py-2">
                <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                <p className="text-white text-sm font-light">Years of expertise</p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-4 py-2 mb-3">
                <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                <p className="text-white text-sm font-light">Welcome to AsolaSMART-Tech</p>
              </div>
              <p className="text-white text-sm leading-relaxed mb-4 font-light">
                A forward-thinking technology consultancy with a strong focus on smart, scalable solutions. We&apos;ve established ourselves as a trusted partner for organizations seeking expert guidance in digital transformation, software development, and intelligent automation.
              </p>
              <p className="text-white/90 text-sm leading-relaxed font-light">
                We specialize in Cloud Architecture, AI & Automation, Cybersecurity, and Digital Systems complemented by our strategic expertise in Technology Consulting, System Design, and Workflow Optimization. Our deep understanding of modern technology landscapes has made us a preferred partner for handling complex digital projects and delivering unparalleled value and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* background image with portfolio overlay */}
      <section className="w-full relative h-screen">
        <Image
          src="/back-ground.jpg"
          alt="Background"
          width={1920}
          height={600}
          className="w-full h-full object-cover"
        />
        
        {/* Portfolio Content Overlay */}
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Title Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
            <div className="w-4 h-4 rounded-full border-2 border-teal-700 flex items-center justify-center flex-shrink-0">
              <Check size={10} className="text-teal-700" />
            </div>
            <span className="text-teal-700 text-xs font-medium">Our Service Portfolio</span>
          </div>

          {/* Heading & Description */}
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 leading-tight">
              We are a team of seasoned professionals dedicated to delivering
              <span className="text-gray-500"> unparalleled value and fostering enduring partnerships.</span>
            </h2>
            <p className="text-gray-500 text-base">
              With years of experience and a proven track record, we offer strategic insights and practical solutions that deliver results.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Cards Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${scrollPosition}px)` }}
              >
                {portfolioItems.map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-80 h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 flex flex-col hover:shadow-lg transition relative"
                    >
                      <div className="flex items-start">
                        <IconComponent size={40} className="text-gray-700" />
                      </div>
                      
                      <div className="flex-1 flex items-center">
                        <p className="text-gray-600 text-sm leading-relaxed font-light">{service.description}</p>
                      </div>
                      
                      <div className="flex justify-between items-end w-full">
                        <h3 className="text-lg font-serif text-gray-800 max-w-xs">{service.title}</h3>
                        <div className="text-gray-600 text-3xl font-light">+</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => handleScroll('left')}
                disabled={scrollPosition === 0}
                className="w-12 h-12 rounded-full border-2 border-gray-700 text-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={scrollPosition >= (portfolioItems.length - 3) * 300}
                className="w-12 h-12 rounded-full border-2 border-gray-700 text-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Competence Pillars Section */}
      <section className="w-full bg-gradient-to-b from-teal-900 to-teal-800 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-20 font-light text-center">
            <span className="font-bold">Competence</span> <span className="italic">Pillars</span>
          </h2>

          {/* Connection Line with Circles and Numbers */}
          <div className="relative mb-16 h-12 flex items-center">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 transform -translate-y-1/2"></div>
            <div className="relative w-full flex justify-between px-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-teal-900 font-medium text-sm">01</div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-teal-900 font-medium text-sm">02</div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-teal-900 font-medium text-sm">03</div>
            </div>
          </div>

          {/* Pillars Grid with Content Below */}
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {/* Pillar 1 */}
            <div className="text-center">
              <h3 className="text-lg font-serif text-white mb-4 font-light italic">Cloud Infrastructure</h3>
              <p className="text-white/70 leading-relaxed font-light text-sm">
                We design and deploy scalable, secure cloud architectures that support your business growth. Our infrastructure solutions ensure optimal performance, reliability, and cost-efficiency with enterprise-grade security protocols.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center">
              <h3 className="text-lg font-serif text-white mb-4 font-light italic">Security & Reliability</h3>
              <p className="text-white/70 leading-relaxed font-light text-sm">
                Data security and system reliability are at the core of everything we do. We implement advanced cybersecurity measures, compliance frameworks, and continuous monitoring to protect your digital assets and ensure uninterrupted service delivery.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center">
              <h3 className="text-lg font-serif text-white mb-4 font-light italic">Collaborative Partnership</h3>
              <p className="text-white/70 leading-relaxed font-light text-sm">
                We work as an extension of your team, understanding your unique challenges and goals. Our collaborative approach ensures solutions are perfectly aligned with your business objectives and delivered with transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-full bg-gray-50 py-32 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5 rounded-full border-2 border-teal-600 flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-teal-600" />
            </div>
            <span className="text-teal-600 text-sm font-light">Any inquiry or clarification?</span>
          </div>

          {/* Heading */}
          <h2 className="text-6xl md:text-7xl font-serif text-teal-900 mb-6 font-light">
            Contact <span className="italic">Us</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Get in touch for any inquiry of our services, partnerships, careers or general inquiry to our team.
          </p>

          {/* Quick Talk Button */}
          <button className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-teal-600 font-light hover:bg-teal-100 transition">
            <span className="text-base">Quick Talk</span>
            <div className="w-5 h-5 rounded-full border-2 border-teal-600 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={12} className="text-teal-600" />
            </div>
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gradient-to-b from-teal-900 to-teal-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
            {/* Left - Logo & Description */}
            <div className="flex items-start gap-4">
              <Image src="/ast.png" alt="AsolaSMART-Tech" width={140} height={40} className="h-10 w-auto brightness-0 invert flex-shrink-0" />
              <p className="text-white/60 text-xs leading-relaxed font-light hidden md:block">
                Smart solutions for digital growth.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-light text-xs mb-3 uppercase tracking-wide">Contact</h4>
              <div className="space-y-1 text-xs font-light">
                <p className="text-white/70"><a href="tel:+254200000001" className="hover:text-white transition">+254 20 0000 001</a></p>
                <p className="text-white/70"><a href="mailto:info@asolasmarttech.com" className="hover:text-white transition">info@asolasmarttech.com</a></p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-light text-xs mb-3 uppercase tracking-wide">Location</h4>
              <p className="text-white/70 text-xs font-light">
                Tech Hub, Innovation Park<br />
                Nairobi, Kenya.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-xs font-light text-center">
            © 2026 AsolaSMART-Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
