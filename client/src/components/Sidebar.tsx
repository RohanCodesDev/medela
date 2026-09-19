'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import JoinCommunityModal from './JoinCommunityModal';

export default function Sidebar() {
  const pathname = usePathname();
  const [archiveExpanded, setArchiveExpanded] = useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <aside suppressHydrationWarning className="w-full md:w-1/5 h-auto md:h-full border-b md:border-b-0 md:border-r border-[#214232] bg-sidepanel flex flex-col md:p-8 text-[#E2ECE6] select-none flex-shrink-0 z-50">
      
      {/* Top Header - Always visible */}
      <div suppressHydrationWarning className="flex items-center justify-between p-6 md:p-0 md:mb-12">
        <div suppressHydrationWarning>
          <h1 suppressHydrationWarning className="text-xl md:text-2xl font-serif text-[#F5F8F6]">Medela Concertedly</h1>
          <p suppressHydrationWarning className="text-[10px] md:text-xs text-[#9BB6A7] uppercase tracking-widest mt-1 md:mt-2">Editorial Index</p>
        </div>
        
        {/* Hamburger Button (Mobile Only) */}
        <button 
          suppressHydrationWarning
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#9BB6A7] hover:text-white p-2"
          aria-label="Toggle mobile menu"
        >
          <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path suppressHydrationWarning strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path suppressHydrationWarning strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Nav Content - Toggled on mobile, always visible on desktop */}
      <div suppressHydrationWarning className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col flex-grow px-6 pb-6 md:px-0 md:pb-0 overflow-y-auto`}>
        <nav suppressHydrationWarning className="flex flex-col gap-6 md:gap-8 text-base font-sans mt-4 md:mt-0">
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
                className="text-[#9BB6A7] hover:text-white p-1 focus:outline-none ml-2"
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

        <div suppressHydrationWarning className="mt-8 md:mt-auto pt-4 md:pt-0">
          <button
            suppressHydrationWarning
            onClick={() => {
              setIsJoinModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="text-sm font-semibold border-b pb-1 transition-colors text-[#E89248] border-[#28503D]/40 hover:text-[#F2E28B] hover:border-[#A2C2B0]/40 text-left w-full"
          >
            Join Our Community
          </button>
        </div>
      </div>

      <JoinCommunityModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </aside>
  );
}
