'use client';

import TermsOfService from '@/components/TermsOfService';
import { Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TermsPage() {
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
            <Link href="/services" className="text-gray-500 hover:text-gray-900 transition text-xs sm:text-sm">What We Do</Link>
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
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">What We Do</Link>
              <Link href="/consulting" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Consulting Services</Link>
              <Link href="/framework" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Success Framework</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition text-sm">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-24 sm:pt-32">
        <TermsOfService />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
