'use client';

import About from '@/components/About';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/ast.png" alt="AsolaSMART-Tech" width={60} height={60} className="h-12 sm:h-16 w-auto cursor-pointer" />
            </Link>
          </div>
          <div className="hidden md:flex gap-8 lg:gap-12 items-center absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">Home</Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">About Us</Link>
            <Link href="/services" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">What We Do</Link>
            <Link href="/consulting" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">Consulting Services</Link>
            <Link href="/framework" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">Success Framework</Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">Contact Us</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </nav>

      {/* About Content */}
      <div className="pt-16 sm:pt-20">
        <About />
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-teal-900 to-teal-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 pb-8 border-b border-white/10">
            {/* Left - Logo & Description */}
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <Image src="/ast.png" alt="AsolaSMART-Tech" width={140} height={40} className="h-8 sm:h-10 w-auto brightness-0 invert flex-shrink-0" />
              <p className="text-white/60 text-xs leading-relaxed font-light">
                Smart solutions for digital growth.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-light text-xs mb-3 uppercase tracking-wide">Contact</h4>
              <div className="space-y-1 text-xs font-light">
                <p className="text-white/70"><a href="tel:+254707907000" className="hover:text-white transition">+254707907000</a></p>
                <p className="text-white/70 break-all"><a href="mailto:info@asolasmarttech.co.ke" className="hover:text-white transition">info@asolasmarttech.co.ke</a></p>
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs font-light">
              © 2026 AsolaSMART-Tech. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs font-light">
              <Link href="/privacy" className="text-white/60 hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-gray-900" />
        ) : (
          <Menu size={24} className="text-gray-900" />
        )}
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-100 z-40">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">About Us</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">What We Do</Link>
            <Link href="/consulting" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Consulting Services</Link>
            <Link href="/framework" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Success Framework</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Contact Us</Link>
          </div>
        </div>
      )}
    </>
  );
}
