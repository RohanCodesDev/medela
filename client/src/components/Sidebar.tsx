'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [archiveExpanded, setArchiveExpanded] = useState(true);

  // Keep expanded if on any archive/domain sub-route
  useEffect(() => {
    if (
      pathname.startsWith('/archive') ||
      pathname.startsWith('/nutrition') ||
      pathname.startsWith('/psychology') ||
      pathname.startsWith('/gut-brain') ||
      pathname.startsWith('/read')
    ) {
      setArchiveExpanded(true);
    }
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-1/5 h-full border-r border-[#214232] bg-sidepanel flex flex-col p-8 text-[#E2ECE6] select-none">
      <div className="mb-12">
        <h1 className="text-2xl font-serif text-[#F5F8F6]">Medela Concertedly</h1>
        <p className="text-xs text-[#9BB6A7] uppercase tracking-widest mt-2">Editorial Index</p>
      </div>

      <nav className="flex flex-col gap-8 text-base font-sans">
        {/* 1. About Us */}
        <Link
          href="/about-us"
          className={`transition-all duration-300 pl-4 py-1 border-l-2 ${
            isActive('/about-us')
              ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
              : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
          }`}
        >
          About Us
        </Link>

        {/* 2. Manifesto */}
        <Link
          href="/"
          className={`transition-all duration-300 pl-4 py-1 border-l-2 ${
            isActive('/')
              ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
              : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
          }`}
        >
          Manifesto
        </Link>

        {/* 3. Publication Archive */}
        <div>
          <div className={`flex items-center justify-between transition-all duration-300 pl-4 py-1 border-l-2 ${
            pathname.startsWith('/archive')
              ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
              : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
          }`}>
            <Link
              href="/archive"
              className="flex-grow"
            >
              Publication Archive
            </Link>
            <button
              onClick={() => setArchiveExpanded(!archiveExpanded)}
              className="text-[#9BB6A7] hover:text-white p-1 focus:outline-none"
              aria-label="Toggle sub-topics"
            >
              <span className="text-xs">{archiveExpanded ? '▼' : '▶'}</span>
            </button>
          </div>

          {/* Sub-topics: Publications */}
          {archiveExpanded && (
            <div className="ml-4 mt-3 flex flex-col gap-3 text-sm border-l border-[#28503D] pl-4 pr-2">
              <Link
                href="/archive/infancy-growth-development"
                className={`transition-colors leading-snug ${
                  isActive('/archive/infancy-growth-development') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                }`}
              >
                Infancy: Growth and Development
              </Link>
              <Link
                href="/archive/infant-physical-development"
                className={`transition-colors leading-snug ${
                  isActive('/archive/infant-physical-development') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                }`}
              >
                Physical Growth and Developmental Changes from Infancy to Adolescence
              </Link>
              <Link
                href="/archive/metabolic-flexibility"
                className={`transition-colors leading-snug ${
                  isActive('/archive/metabolic-flexibility') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                }`}
              >
                Metabolic Flexibility in Fasting States
              </Link>
              <Link
                href="/archive/neuroplasticity-habit"
                className={`transition-colors leading-snug ${
                  isActive('/archive/neuroplasticity-habit') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                }`}
              >
                Neuroplasticity and Habit Formation
              </Link>
              <Link
                href="/archive/microbiome-depression"
                className={`transition-colors leading-snug ${
                  isActive('/archive/microbiome-depression') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                }`}
              >
                The Microbiome-Gut-Brain Axis in Depression
              </Link>
            </div>
          )}
        </div>

        {/* 4. Faculty and methodology */}
        <Link
          href="/about"
          className={`transition-all duration-300 pl-4 py-1 border-l-2 ${
            isActive('/about')
              ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
              : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
          }`}
        >
          Faculty & Methodology
        </Link>
      </nav>

      <div className="mt-auto">
        <Link
          href="/dispatch"
          className={`text-sm font-semibold border-b pb-1 transition-colors ${
            isActive('/dispatch')
              ? 'text-[#F2E28B] border-[#A2C2B0]/40'
              : 'text-[#E89248] border-[#28503D]/40 hover:text-[#F2E28B] hover:border-[#A2C2B0]/40'
          }`}
        >
          Subscribe to Dispatch
        </Link>
      </div>
    </aside>
  );
}
