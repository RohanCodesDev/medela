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
          className={`transition-colors ${
            isActive('/about-us') ? 'text-[#F2E28B] font-semibold' : 'text-[#E2ECE6] hover:text-[#E89248]'
          }`}
        >
          About Us
        </Link>

        {/* 2. Manifesto */}
        <Link
          href="/"
          className={`transition-colors ${
            isActive('/') ? 'text-[#F2E28B] font-semibold' : 'text-[#E2ECE6] hover:text-[#E89248]'
          }`}
        >
          Manifesto
        </Link>

        {/* 3. Publication Archive */}
        <div>
          <div className="flex items-center justify-between">
            <Link
              href="/archive"
              className={`transition-colors ${
                isActive('/archive') ? 'text-[#F2E28B] font-semibold' : 'text-[#E2ECE6] hover:text-[#E89248]'
              }`}
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
                href="/archive/metabolic-flexibility"
                className={`transition-colors leading-snug ${
                  isActive('/archive/metabolic-flexibility') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#E89248]'
                }`}
              >
                Metabolic Flexibility in Fasting States
              </Link>
              <Link
                href="/archive/neuroplasticity-habit"
                className={`transition-colors leading-snug ${
                  isActive('/archive/neuroplasticity-habit') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#E89248]'
                }`}
              >
                Neuroplasticity and Habit Formation
              </Link>
              <Link
                href="/archive/microbiome-depression"
                className={`transition-colors leading-snug ${
                  isActive('/archive/microbiome-depression') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#E89248]'
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
          className={`transition-colors ${
            isActive('/about') ? 'text-[#F2E28B] font-semibold' : 'text-[#E2ECE6] hover:text-[#E89248]'
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
              ? 'text-[#F2E28B] border-[#F2E28B]'
              : 'text-[#E89248] border-[#E89248] hover:text-[#F5A760] hover:border-[#F5A760]'
          }`}
        >
          Subscribe to Dispatch
        </Link>
      </div>
    </aside>
  );
}
