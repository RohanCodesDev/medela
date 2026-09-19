'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import JoinCommunityModal from './JoinCommunityModal';

export default function Sidebar() {
  const pathname = usePathname();
  const [archiveExpanded, setArchiveExpanded] = useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

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
    <aside suppressHydrationWarning className="w-1/5 h-full border-r border-[#214232] bg-sidepanel flex flex-col p-8 text-[#E2ECE6] select-none">
      <div suppressHydrationWarning className="mb-12">
        <h1 suppressHydrationWarning className="text-2xl font-serif text-[#F5F8F6]">Medela Concertedly</h1>
        <p suppressHydrationWarning className="text-xs text-[#9BB6A7] uppercase tracking-widest mt-2">Editorial Index</p>
      </div>

      <nav suppressHydrationWarning className="flex flex-col gap-8 text-base font-sans">
        {/* 1. About Us */}
        <Link
          suppressHydrationWarning
          href="/about-us"
          className={`transition-all duration-300 pl-4 py-1 border-l-2 ${isActive('/about-us')
            ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
            : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
            }`}
        >
          About Us
        </Link>

        {/* 2. Manifesto */}
        <Link
          suppressHydrationWarning
          href="/"
          className={`transition-all duration-300 pl-4 py-1 border-l-2 ${isActive('/')
            ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
            : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
            }`}
        >
          Manifesto
        </Link>

        {/* 3. Publication Archive */}
        <div suppressHydrationWarning>
          <div suppressHydrationWarning className={`flex items-center justify-between transition-all duration-300 pl-4 py-1 border-l-2 ${pathname.startsWith('/archive')
            ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
            : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
            }`}>
            <Link
              suppressHydrationWarning
              href="/archive"
              className="flex-grow"
            >
              Publication Archive
            </Link>
            <button
              suppressHydrationWarning
              onClick={() => setArchiveExpanded(!archiveExpanded)}
              className="text-[#9BB6A7] hover:text-white p-1 focus:outline-none"
              aria-label="Toggle sub-topics"
            >
              <span suppressHydrationWarning className="text-xs">{archiveExpanded ? '▼' : '▶'}</span>
            </button>
          </div>

          {/* Sub-topics: Publications */}
          {archiveExpanded && (
            <div suppressHydrationWarning className="ml-4 mt-3 flex flex-col gap-3 text-sm border-l border-[#28503D] pl-4 pr-2">
              <Link
                suppressHydrationWarning
                href="/archive/infancy-growth-development"
                className={`transition-colors leading-snug ${isActive('/archive/infancy-growth-development') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                  }`}
              >
                Infancy: Growth and Development
              </Link>
              <Link
                suppressHydrationWarning
                href="/archive/infant-physical-development"
                className={`transition-colors leading-snug ${isActive('/archive/infant-physical-development') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                  }`}
              >
                Physical Growth and Developmental Changes from Infancy to Adolescence
              </Link>
              <Link
                suppressHydrationWarning
                href="/archive/metabolic-flexibility"
                className={`transition-colors leading-snug ${isActive('/archive/metabolic-flexibility') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                  }`}
              >
                Metabolic Flexibility in Fasting States
              </Link>
              <Link
                suppressHydrationWarning
                href="/archive/neuroplasticity-habit"
                className={`transition-colors leading-snug ${isActive('/archive/neuroplasticity-habit') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                  }`}
              >
                Neuroplasticity and Habit Formation
              </Link>
              <Link
                suppressHydrationWarning
                href="/archive/microbiome-depression"
                className={`transition-colors leading-snug ${isActive('/archive/microbiome-depression') ? 'text-[#F2E28B] font-semibold' : 'text-[#A2C2B0] hover:text-[#F2E28B]'
                  }`}
              >
                The Microbiome-Gut-Brain Axis in Depression
              </Link>
            </div>
          )}
        </div>

        {/* 4. Faculty and methodology */}
        <Link
          suppressHydrationWarning
          href="/about"
          className={`transition-all duration-300 pl-4 py-1 border-l-2 ${isActive('/about')
            ? 'border-[#F2E28B] text-[#F2E28B] font-semibold bg-white/5'
            : 'border-transparent text-[#E2ECE6] hover:text-[#F2E28B] hover:border-[#F2E28B]/50'
            }`}
        >
          Faculty & Methodology
        </Link>
      </nav>

      <div suppressHydrationWarning className="mt-auto">
        <button
          suppressHydrationWarning
          onClick={() => setIsJoinModalOpen(true)}
          className="text-sm font-semibold border-b pb-1 transition-colors text-[#E89248] border-[#28503D]/40 hover:text-[#F2E28B] hover:border-[#A2C2B0]/40 text-left w-full"
        >
          Join Our Community
        </button>
      </div>

      <JoinCommunityModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </aside>
  );
}
