'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
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
  );
}
