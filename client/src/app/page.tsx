import ArchFrame from '@/components/ArchFrame';
import ArchiveTable from '@/components/ArchiveTable';

export default function Home() {
  return (
    <div suppressHydrationWarning className="flex flex-col">
      {/* Hero Section */}
      <section suppressHydrationWarning className="relative w-full min-h-[60vh] flex flex-col justify-center px-12 py-20 overflow-hidden bg-background">
        {/* Subtle radial gradient background */}
        <div suppressHydrationWarning className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--accent-action) 0%, transparent 70%)' }} />
        <div suppressHydrationWarning className="relative z-10 max-w-4xl">
          <h2 suppressHydrationWarning className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-foreground pb-6 mb-6 border-b border-divider/60">
            Synthesizing Nutritional Biochemistry and Behavioral Psychology.
          </h2>
          <p suppressHydrationWarning className="text-xl md:text-2xl font-sans text-foreground/80 max-w-2xl leading-relaxed font-light">
            Medela Concertedly publishes peer-reviewed discourse at the intersection of human metabolism and cognitive science.
          </p>
        </div>
      </section>

      {/* Methodology Manifesto */}
      <section suppressHydrationWarning className="p-12 border-b border-divider">
        <h3 suppressHydrationWarning className="text-3xl font-bold uppercase tracking-wider text-foreground pb-3 mb-8 border-b border-[#172F22]">
          Methodology Manifesto
        </h3>
        <div suppressHydrationWarning className="columns-1 md:columns-2 gap-12 font-serif text-lg leading-loose text-foreground/90">
          <p suppressHydrationWarning className="mb-6">
            The prevailing models of psychiatric and metabolic care remain categorically siloed. We contend that cognitive pathology cannot be fully unspooled without examining the underlying micronutrient and metabolic environment of the brain.
          </p>
          <p suppressHydrationWarning>
            Our publication exists to aggregate, review, and synthesize research exploring the gut-brain axis, neuroplasticity, and metabolic psychiatry, providing clinicians and researchers with an integrated framework for human health.
          </p>
        </div>
      </section>

      {/* 3 Domain Previews */}
      <section suppressHydrationWarning className="px-12 py-16 border-b border-divider bg-background">
        <h3 suppressHydrationWarning className="text-3xl font-serif text-foreground pb-4 mb-12 border-b border-[#172F22]/50">
          Core Domains
        </h3>
        <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-divider shadow-sm">
          
          <a suppressHydrationWarning href="/nutrition" className="group block border-r border-b md:border-b-0 border-divider p-8 hover:bg-section transition-all duration-500 relative overflow-hidden">
            <div suppressHydrationWarning className="absolute inset-0 bg-nutrition/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArchFrame className="relative w-full aspect-[2/3] bg-nutrition/10 mb-8 flex items-center justify-center overflow-hidden">
              <img suppressHydrationWarning src="/images/nutrition_illustration.jpg" alt="Nutritional Biochemistry" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
            </ArchFrame>
            <h4 suppressHydrationWarning className="relative font-serif text-2xl text-foreground mb-3 group-hover:text-nutrition transition-colors">Nutritional Biochemistry</h4>
            <p suppressHydrationWarning className="relative font-sans text-sm text-foreground/70 leading-relaxed">Metabolic pathways, micronutrient sufficiency, and systemic inflammation.</p>
          </a>

          <a suppressHydrationWarning href="/psychology" className="group block border-r border-b md:border-b-0 border-divider p-8 hover:bg-section transition-all duration-500 relative overflow-hidden">
            <div suppressHydrationWarning className="absolute inset-0 bg-psychology/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArchFrame className="relative w-full aspect-[2/3] bg-psychology/10 mb-8 flex items-center justify-center overflow-hidden">
              <img suppressHydrationWarning src="/images/psychology_illustration.jpg" alt="Behavioral Psychology" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
            </ArchFrame>
            <h4 suppressHydrationWarning className="relative font-serif text-2xl text-foreground mb-3 group-hover:text-psychology transition-colors">Behavioral Psychology</h4>
            <p suppressHydrationWarning className="relative font-sans text-sm text-foreground/70 leading-relaxed">Neurobiology of trauma, habit formation, and cognitive behavioral models.</p>
          </a>

          <a suppressHydrationWarning href="/gut-brain" className="group block p-8 hover:bg-section transition-all duration-500 relative overflow-hidden">
            <div suppressHydrationWarning className="absolute inset-0 bg-action/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArchFrame className="relative w-full aspect-[2/3] bg-action/10 mb-8 flex items-center justify-center overflow-hidden">
              <img suppressHydrationWarning src="/images/gut_brain_illustration.jpg" alt="The Gut-Brain Axis" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
            </ArchFrame>
            <h4 suppressHydrationWarning className="relative font-serif text-2xl text-foreground mb-3 group-hover:text-action transition-colors">The Gut-Brain Axis</h4>
            <p suppressHydrationWarning className="relative font-sans text-sm text-foreground/70 leading-relaxed">Microbiome signaling, vagal nerve tone, and integrated psychiatric approaches.</p>
          </a>

        </div>
      </section>

      {/* Archive Preview Table */}
      <section suppressHydrationWarning className="p-12 border-b border-divider">
        <div suppressHydrationWarning className="flex justify-between items-end mb-8 border-b border-[#172F22] pb-3">
          <h3 suppressHydrationWarning className="text-3xl font-bold uppercase tracking-wider text-foreground">
            Recent Publications
          </h3>
          <a suppressHydrationWarning href="/archive" className="text-xs uppercase tracking-widest text-action hover:text-foreground transition-colors border-b border-nutrition/40 hover:border-nutrition/40 pb-1">View Full Archive</a>
        </div>
        <ArchiveTable />
      </section>

      {/* Newsletter Capture */}
      <section suppressHydrationWarning className="px-12 py-24 bg-background flex justify-center">
        <div suppressHydrationWarning className="max-w-xl w-full bg-white border-2 border-[#172F22] shadow-[8px_8px_0px_0px_rgba(23,47,34,1)] p-12 text-center transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(23,47,34,1)] duration-300">
          <h3 suppressHydrationWarning className="font-serif text-4xl mb-4 text-[#172F22]">Subscribe to Dispatch</h3>
          <p suppressHydrationWarning className="font-sans text-base text-[#172F22]/70 mb-8 leading-relaxed">
            Receive monthly syntheses of our latest publications and curations directly to your inbox.
          </p>
          <form suppressHydrationWarning className="flex flex-col gap-8">
            <input suppressHydrationWarning 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b-2 border-[#172F22]/20 pb-3 text-center text-[#172F22] text-base placeholder:text-[#172F22]/40 focus:outline-none focus:border-[#172F22] transition-colors font-sans"
              required
            />
            <button suppressHydrationWarning 
              type="submit" 
              className="w-full bg-[#172F22] hover:bg-[#214232] text-white font-semibold uppercase tracking-widest text-xs py-5 border border-[#172F22] transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
