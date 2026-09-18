'use client';

import React, { useState, useEffect } from 'react';

interface Section {
  title: string;
  id: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // 1. Reading Progress Bar Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Active Section Highlighting Logic (IntersectionObserver)
  useEffect(() => {
    // Find all target headings or elements corresponding to sections
    const targetElements = sections.map((sec) => document.getElementById(sec.id)).filter(Boolean) as HTMLElement[];

    if (targetElements.length === 0) return;

    // Use IntersectionObserver to track which section is at the top of the viewport
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -70% 0px', // trigger when elements are in the top 30% of viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    targetElements.forEach((el) => observer.observe(el));

    // Fallback: If page is at top, highlight first section
    const checkInitialPosition = () => {
      if (window.scrollY === 0 && sections.length > 0) {
        setActiveId(sections[0].id);
      }
    };
    checkInitialPosition();
    window.addEventListener('scroll', checkInitialPosition);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkInitialPosition);
    };
  }, [sections]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 32;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Fixed Reading Progress Bar at the top of the page */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#2D4E3C] z-50 transition-all duration-75 ease-out" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Sticky Table of Contents Sidebar */}
      <aside className="hidden xl:block w-64 border-l border-[#2D4E3C]/10 p-12 sticky top-0 h-screen overflow-y-auto">
        <h4 className="text-xs uppercase tracking-widest text-[#172F22]/60 mb-6 border-b border-[#2D4E3C]/10 pb-2">
          Contents
        </h4>
        <nav className="flex flex-col gap-4 font-sans text-sm">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(e, sec.id)}
                className={`transition-all duration-200 pl-3 border-l-2 py-0.5 leading-snug ${
                  isActive
                    ? 'text-[#2D4E3C] font-semibold border-[#2D4E3C]'
                    : 'text-[#172F22]/50 border-transparent hover:text-[#2D4E3C]'
                }`}
              >
                {sec.title}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
