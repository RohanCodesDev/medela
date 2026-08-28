import ArchFrame from '@/components/ArchFrame';
import ArchiveTable from '@/components/ArchiveTable';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-end p-12 overflow-hidden bg-background">
        {/* Placeholder for fluid marble texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%)' }} />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl font-serif leading-tight text-foreground pb-4 mb-3 border-b border-divider">
            Synthesizing Nutritional Biochemistry and Behavioral Psychology.
          </h2>
          <p className="text-lg font-sans text-foreground/80 max-w-xl leading-relaxed">
            Medela Concertedly publishes peer-reviewed discourse at the intersection of human metabolism and cognitive science.
          </p>
        </div>
      </section>

      {/* Methodology Manifesto */}
      <section className="p-12 border-b border-divider">
        <h3 className="text-3xl font-bold uppercase tracking-wider text-foreground pb-3 mb-8 border-b border-[#172F22]">
          Methodology Manifesto
        </h3>
        <div className="columns-1 md:columns-2 gap-12 font-serif text-lg leading-loose text-foreground/90">
          <p className="mb-6">
            The prevailing models of psychiatric and metabolic care remain categorically siloed. We contend that cognitive pathology cannot be fully unspooled without examining the underlying micronutrient and metabolic environment of the brain.
          </p>
          <p>
            Our publication exists to aggregate, review, and synthesize research exploring the gut-brain axis, neuroplasticity, and metabolic psychiatry, providing clinicians and researchers with an integrated framework for human health.
          </p>
        </div>
      </section>

      {/* 3 Domain Previews */}
      <section className="p-12 border-b border-divider bg-background">
        <h3 className="text-3xl font-bold uppercase tracking-wider text-foreground pb-3 mb-12 border-b border-[#172F22]">
          Core Domains
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-l border-divider">
          
          <a href="/nutrition" className="group block border-r border-b border-divider p-8 hover:bg-section transition-colors">
            <ArchFrame className="w-full aspect-[2/3] bg-nutrition/10 mb-6 flex items-center justify-center">
              <span className="text-nutrition text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Visual Asset</span>
            </ArchFrame>
            <h4 className="font-serif text-2xl text-foreground mb-3">Nutritional Biochemistry</h4>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed">Metabolic pathways, micronutrient sufficiency, and systemic inflammation.</p>
          </a>

          <a href="/psychology" className="group block border-r border-b border-divider p-8 hover:bg-section transition-colors">
            <ArchFrame className="w-full aspect-[2/3] bg-psychology/10 mb-6 flex items-center justify-center">
              <span className="text-psychology text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Visual Asset</span>
            </ArchFrame>
            <h4 className="font-serif text-2xl text-foreground mb-3">Behavioral Psychology</h4>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed">Neurobiology of trauma, habit formation, and cognitive behavioral models.</p>
          </a>

          <a href="/gut-brain" className="group block border-r border-b border-divider p-8 hover:bg-section transition-colors">
            <ArchFrame className="w-full aspect-[2/3] bg-action/10 mb-6 flex items-center justify-center">
              <span className="text-action text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Visual Asset</span>
            </ArchFrame>
            <h4 className="font-serif text-2xl text-foreground mb-3">The Gut-Brain Axis</h4>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed">Microbiome signaling, vagal nerve tone, and integrated psychiatric approaches.</p>
          </a>

        </div>
      </section>

      {/* Archive Preview Table */}
      <section className="p-12 border-b border-divider">
        <div className="flex justify-between items-end mb-8 border-b border-[#172F22] pb-3">
          <h3 className="text-3xl font-bold uppercase tracking-wider text-foreground">
            Recent Publications
          </h3>
          <a href="/archive" className="text-xs uppercase tracking-widest text-action hover:text-foreground transition-colors border-b border-action hover:border-foreground pb-1">View Full Archive</a>
        </div>
        <ArchiveTable />
      </section>

      {/* Newsletter Capture */}
      <section className="p-12 bg-background flex justify-center py-24">
        <div className="max-w-xl w-full border border-divider p-12 text-center">
          <h3 className="font-serif text-3xl mb-4 text-foreground">Subscribe to Dispatch</h3>
          <p className="font-sans text-sm text-foreground/70 mb-8 leading-relaxed">
            Receive monthly syntheses of our latest publications and curations directly to your inbox.
          </p>
          <form className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full border-b border-divider bg-transparent p-3 text-center font-sans text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-action transition-colors"
              required
            />
            <button 
              type="submit" 
              className="w-full border border-divider p-3 text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
