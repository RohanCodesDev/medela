import React from 'react';

export default function PublicationPage({ params }: { params: { slug: string } }) {
  // Mock data fetching based on slug
  const pub = {
    title: 'Metabolic Flexibility in Fasting States',
    domain: 'Nutritional Biochemistry',
    format: 'Clinical Review',
    published_at: '2026-08-15',
    content: `
      <p>Metabolic flexibility refers to the capacity of the body to switch between utilizing carbohydrates and fats depending on availability and demand. In the context of fasting, this flexibility becomes paramount for maintaining cognitive function and energy levels.</p>
      <h2>The Role of Mitochondria</h2>
      <p>Mitochondrial health is the cornerstone of this flexibility. Dysfunctional mitochondria struggle to upregulate beta-oxidation when glucose is scarce, leading to energy deficits.</p>
      <h3>Clinical Implications</h3>
      <p>Interventions aimed at improving metabolic flexibility often include intermittent fasting regimens, ketogenic diets, and specific exercise protocols designed to enhance mitochondrial biogenesis.</p>
    `
  };

  return (
    <div className="flex relative">
      <div className="w-full max-w-4xl p-12">
        <header className="border-b border-divider pb-12 mb-12">
          <div className="flex gap-4 mb-6">
            <span className="text-xs uppercase tracking-widest text-foreground/60 border border-divider px-3 py-1">{pub.domain}</span>
            <span className="text-xs uppercase tracking-widest text-foreground/60 border border-divider px-3 py-1">{pub.format}</span>
          </div>
          <h1 className="text-5xl font-serif text-foreground leading-tight mb-6">{pub.title}</h1>
          <time className="text-sm font-sans text-foreground/50">{new Date(pub.published_at).toLocaleDateString()}</time>
        </header>
        
        <article 
          className="max-w-none font-serif text-foreground/90 text-lg leading-loose [&>p]:mb-8 [&>h2]:text-3xl [&>h2]:font-serif [&>h2]:font-normal [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-serif [&>h3]:font-normal [&>h3]:mt-10 [&>h3]:mb-4"
          dangerouslySetInnerHTML={{ __html: pub.content }}
        />
        
        <footer className="mt-24 pt-12 border-t border-divider">
            <h4 className="font-serif text-xl mb-4 text-foreground">Citations</h4>
            <ol className="list-decimal pl-5 font-sans text-sm text-foreground/70 space-y-2">
                <li>Smith, J. et al. (2025). Mitochondrial dynamics in fasting. <i>Journal of Metabolic Research</i>.</li>
                <li>Doe, J. (2024). Cognitive implications of beta-oxidation. <i>Neurochemistry International</i>.</li>
            </ol>
        </footer>
      </div>

      {/* Sticky Table of Contents */}
      <aside className="hidden xl:block w-64 border-l border-divider p-12 sticky top-0 h-screen overflow-y-auto">
        <h4 className="text-xs uppercase tracking-widest text-foreground/60 mb-6 border-b border-divider pb-2">Contents</h4>
        <nav className="flex flex-col gap-4 font-sans text-sm text-foreground/80">
            <a href="#" className="hover:text-action transition-colors">Introduction</a>
            <a href="#" className="hover:text-action transition-colors">The Role of Mitochondria</a>
            <a href="#" className="hover:text-action transition-colors">Clinical Implications</a>
            <a href="#" className="hover:text-action transition-colors">Citations</a>
        </nav>
      </aside>
    </div>
  );
}
