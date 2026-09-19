'use client';

import React, { useState, useEffect } from 'react';

interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinCommunityModal({ isOpen, onClose }: JoinCommunityModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    // Convert to URL-encoded form data which bypasses strict CORS preflight checks nicely with Google Apps Script
    const urlEncoded = new URLSearchParams(formData as any).toString();

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxOPBoeZvpjrGMsnxhW5JyQVIt41A5RHeoyCYAoc9KjzpCwQCY9xwy16mUDdgJ21Bxz/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncoded,
      });
      
      setStatus('success');
      // Automatically close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        // Reset status after it finishes animating out
        setTimeout(() => setStatus('idle'), 300);
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div suppressHydrationWarning className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div suppressHydrationWarning 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div suppressHydrationWarning className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-[#172F22] shadow-[8px_8px_0px_0px_rgba(23,47,34,1)] animate-in fade-in zoom-in-95 duration-200">
        <div suppressHydrationWarning className="p-5 sm:p-8 md:p-10">
          <button suppressHydrationWarning 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-[#172F22]/50 hover:text-[#172F22] transition-colors"
            aria-label="Close modal"
          >
            <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path suppressHydrationWarning strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 suppressHydrationWarning className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#172F22] mb-2 md:mb-3">
            Join Our Community
          </h2>
          <p suppressHydrationWarning className="text-xs sm:text-sm text-[#172F22]/70 font-sans mb-5 md:mb-8 leading-relaxed max-w-lg">
            Submit your details to gain access to our editorial index, participate in discourse, and receive exclusive publications.
          </p>

          {status === 'success' ? (
            <div suppressHydrationWarning className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
              <div suppressHydrationWarning className="w-16 h-16 mx-auto mb-4 border-2 border-[#172F22] text-[#172F22] flex items-center justify-center rounded-full">
                <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path suppressHydrationWarning strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 suppressHydrationWarning className="text-2xl font-serif text-[#172F22] mb-2">Application Received</h3>
              <p suppressHydrationWarning className="text-[#172F22]/70">We will be in touch shortly.</p>
            </div>
          ) : (
            <form suppressHydrationWarning className="space-y-5 md:space-y-8" onSubmit={handleSubmit}>
              <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <div suppressHydrationWarning className="space-y-2">
                  <label suppressHydrationWarning className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="name">Name</label>
                  <input suppressHydrationWarning 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                    required
                  />
                </div>
                <div suppressHydrationWarning className="space-y-2">
                  <label suppressHydrationWarning className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="email">Email</label>
                  <input suppressHydrationWarning 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                    required
                  />
                </div>
              </div>

              <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <div suppressHydrationWarning className="space-y-2">
                  <label suppressHydrationWarning className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="phone">Ph No.</label>
                  <input suppressHydrationWarning 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                    required
                  />
                </div>
                <div suppressHydrationWarning className="space-y-2">
                  <label suppressHydrationWarning className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="whatsapp">Wp No.</label>
                  <input suppressHydrationWarning 
                    type="tel" 
                    id="whatsapp" 
                    name="whatsapp"
                    className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                  />
                </div>
              </div>

              <div suppressHydrationWarning className="space-y-2">
                <label suppressHydrationWarning className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="profession">Profession</label>
                <input suppressHydrationWarning 
                  type="text" 
                  id="profession" 
                  name="profession"
                  className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans"
                  required
                />
              </div>

              <div suppressHydrationWarning className="space-y-2">
                <label suppressHydrationWarning className="block text-[10px] uppercase tracking-widest text-[#172F22] font-bold" htmlFor="reason">Why do you want to join us?</label>
                <textarea suppressHydrationWarning 
                  id="reason" 
                  name="reason"
                  rows={2}
                  className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-2 text-[#172F22] text-sm focus:outline-none focus:border-[#172F22] transition-colors font-sans resize-none md:min-h-[80px]"
                  required
                />
              </div>

              {status === 'error' && (
                <div suppressHydrationWarning className="text-red-500 font-sans text-xs font-semibold">
                  An error occurred. Please try again.
                </div>
              )}

              <div suppressHydrationWarning className="pt-2 md:pt-4">
                <button suppressHydrationWarning 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#172F22] hover:bg-[#214232] text-white font-semibold uppercase tracking-widest text-xs py-3 md:py-4 border border-[#172F22] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
