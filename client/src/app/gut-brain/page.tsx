import ArchFrame from '@/components/ArchFrame';

export default function GutBrain() {
  return (
    <div suppressHydrationWarning className="p-12">
      <div suppressHydrationWarning className="max-w-3xl border-b border-divider pb-12 mb-12">
        <h2 suppressHydrationWarning className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">Domain 03</h2>
        <h1 suppressHydrationWarning className="text-5xl font-serif text-foreground mb-6">The Gut-Brain Axis</h1>
        <p suppressHydrationWarning className="text-lg font-sans text-foreground/80 leading-relaxed">
          Synthesizing microbiome signaling, vagal nerve tone, and integrated psychiatric approaches.
        </p>
      </div>
      <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ArchFrame className="w-full aspect-square bg-action/10 flex items-center justify-center">
            <img suppressHydrationWarning src="/images/gut_brain_illustration.jpg" alt="Microbiome Asset" className="w-full h-full object-cover opacity-90" />
        </ArchFrame>
        <div suppressHydrationWarning className="flex flex-col justify-center">
            <h3 suppressHydrationWarning className="font-serif text-2xl mb-4">Vagal Tone and Inflammation</h3>
            <p suppressHydrationWarning className="font-sans text-sm text-foreground/70 leading-relaxed mb-6">
                The bi-directional communication network between the enteric nervous system and the brain heavily modulates systemic inflammation.
            </p>
            <a suppressHydrationWarning href="/archive?domain=gut-brain" className="text-xs uppercase tracking-widest text-action border-b border-nutrition/40 self-start pb-1">View Domain Archive</a>
        </div>
      </div>
    </div>
  );
}
