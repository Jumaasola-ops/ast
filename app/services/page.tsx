'use client';

import WhatWeDo from '@/components/WhatWeDo';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link href="/services" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm font-semibold text-teal-600">What We Do</Link>
            <Link href="/consulting" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">Consulting Services</Link>
            <Link href="/framework" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">Success Framework</Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center h-10 w-10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">About Us</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-teal-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm font-semibold">What We Do</Link>
              <Link href="/consulting" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Consulting Services</Link>
              <Link href="/framework" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Success Framework</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-24 sm:pt-32">
        <WhatWeDo />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-teal-800 to-cyan-900 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-light">Contact Us</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light">+254707907000</p>
              <p className="text-white/70 text-xs sm:text-sm font-light">info@asolasmarttech.co.ke</p>
              <p className="text-white/70 text-xs sm:text-sm font-light">Tech Hub, Innovation Park, Nairobi, Kenya</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-light">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="text-white/70 hover:text-white transition text-xs sm:text-sm block font-light">Home</Link>
                <Link href="/about" className="text-white/70 hover:text-white transition text-xs sm:text-sm block font-light">About Us</Link>
                <Link href="/services" className="text-white/70 hover:text-white transition text-xs sm:text-sm block font-light">Services</Link>
                <Link href="/contact" className="text-white/70 hover:text-white transition text-xs sm:text-sm block font-light">Contact</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-light">Company</h3>
              <div className="space-y-2">
                <a href="#" className="text-white/70 hover:text-white transition text-xs sm:text-sm block font-light">Blog</a>
                <a href="#" className="text-white/70 hover:text-white transition text-xs sm:text-sm block font-light">Careers</a>
                <a href="#" className="text-white/70 hover:text-white transition text-xs sm:text-sm block font-light">Partners</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 sm:pt-12">
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
        </div>
      </footer>
    </div>
  );
}
