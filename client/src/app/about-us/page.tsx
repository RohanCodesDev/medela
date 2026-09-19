import React from 'react';

export default function AboutUsPage() {
  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen">
      {/* Header section with anti-vibe divider */}
      <header suppressHydrationWarning className="px-16 py-12 border-b border-[#E2ECE6]">
        <h1 suppressHydrationWarning className="text-4xl font-serif text-[#172F22] mb-4">About Us</h1>
        <p suppressHydrationWarning className="text-lg text-[#163224]/70 max-w-2xl leading-relaxed">
          The history and mission of Medela Concertedly.
        </p>
      </header>

      {/* Main content - strict typography, zero roundness */}
      <main suppressHydrationWarning className="flex-grow px-16 py-12">
        <article className="max-w-3xl">
          <section suppressHydrationWarning className="mb-12">
            <h2 suppressHydrationWarning className="text-2xl text-[#172F22] mb-6 inline-block border-b border-[#163224] pb-1">
              Our Mission
            </h2>
            <p suppressHydrationWarning className="text-base text-[#163224]/80 leading-loose mb-6">
              Medela Concertedly is dedicated to establishing rigorous frameworks that unite 
              biochemical, psychological, and physiological research.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
