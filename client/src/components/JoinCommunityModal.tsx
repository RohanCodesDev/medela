'use client';

import React, { useState, useEffect } from 'react';

interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinCommunityModal({ isOpen, onClose }: JoinCommunityModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white border-2 border-[#172F22] shadow-[8px_8px_0px_0px_rgba(23,47,34,1)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-8 md:p-10">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[#172F22]/50 hover:text-[#172F22] transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-3xl md:text-4xl font-serif text-[#172F22] mb-3">
            Join Our Community
          </h2>
          <p className="text-sm text-[#172F22]/70 font-sans mb-8 leading-relaxed max-w-lg">
            Submit your details to gain access to our editorial index, participate in discourse, and receive exclusive publications.
          </p>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="phone">Ph No.</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="whatsapp">Wp No.</label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="profession">Profession</label>
              <input 
                type="text" 
                id="profession" 
                className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="reason">Why do you want to join us?</label>
              <textarea 
                id="reason" 
                rows={3}
                className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans resize-none"
                required
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#172F22] hover:bg-[#214232] text-white font-semibold uppercase tracking-widest text-xs py-4 border border-[#172F22] transition-colors duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
