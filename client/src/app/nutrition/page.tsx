import ArchFrame from '@/components/ArchFrame';

export default function Nutrition() {
  return (
    <div className="p-12">
      <div className="max-w-3xl border-b border-divider pb-12 mb-12">
        <h2 className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">Domain 01</h2>
        <h1 className="text-5xl font-serif text-foreground mb-6">Nutritional Biochemistry</h1>
        <p className="text-lg font-sans text-foreground/80 leading-relaxed">
          Exploring metabolic pathways, micronutrient sufficiency, and systemic inflammation as they relate to cognitive function.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ArchFrame className="w-full aspect-square bg-nutrition/10 flex items-center justify-center">
            <img src="/images/nutrition_illustration.jpg" alt="Metabolism Asset" className="w-full h-full object-cover opacity-90" />
        </ArchFrame>
        <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl mb-4">Metabolic Flexibility</h3>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6">
                The capacity to seamlessly transition between glucose and lipid oxidation states is increasingly recognized as a foundational metric of cellular resilience.
            </p>
            <a href="/archive?domain=nutrition" className="text-xs uppercase tracking-widest text-action border-b border-nutrition/40 self-start pb-1">View Domain Archive</a>
        </div>
      </div>
    </div>
  );
}
