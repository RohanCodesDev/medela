import React from 'react';
import { notFound } from 'next/navigation';

interface Section {
  title: string;
  id: string;
}

interface Publication {
  title: string;
  domain: string;
  format: string;
  published_at: string;
  content: string;
  sections: Section[];
  citations: string[];
}

const publicationsDb: Record<string, Publication> = {
  'metabolic-flexibility': {
    title: 'Metabolic Flexibility in Fasting States',
    domain: 'Nutritional Biochemistry',
    format: 'Clinical Review',
    published_at: '2026-08-15',
    sections: [
      { title: 'Introduction', id: 'introduction' },
      { title: 'The Role of Mitochondria', id: 'mitochondria' },
      { title: 'Clinical Implications', id: 'clinical-implications' },
      { title: 'Citations', id: 'citations' },
    ],
    content: `
      <p id="introduction">Metabolic flexibility refers to the capacity of the body to switch between utilizing carbohydrates and fats depending on availability and demand. In the context of fasting, this flexibility becomes paramount for maintaining cognitive function and energy levels.</p>
      <h2 id="mitochondria">The Role of Mitochondria</h2>
      <p>Mitochondrial health is the cornerstone of this flexibility. Dysfunctional mitochondria struggle to upregulate beta-oxidation when glucose is scarce, leading to energy deficits.</p>
      <h2 id="clinical-implications">Clinical Implications</h2>
      <p>Interventions aimed at improving metabolic flexibility often include intermittent fasting regimens, ketogenic diets, and specific exercise protocols designed to enhance mitochondrial biogenesis.</p>
    `,
    citations: [
      'Smith, J. et al. (2025). Mitochondrial dynamics in fasting. Journal of Metabolic Research.',
      'Doe, J. (2024). Cognitive implications of beta-oxidation. Neurochemistry International.',
    ]
  },
  'neuroplasticity-habit': {
    title: 'Neuroplasticity and Habit Formation',
    domain: 'Behavioral Psychology',
    format: 'Long-form Essay',
    published_at: '2026-08-20',
    sections: [
      { title: 'Introduction', id: 'introduction' },
      { title: 'Synaptic Plasticity', id: 'synaptic-plasticity' },
      { title: 'Cognitive Interventions', id: 'cognitive-interventions' },
      { title: 'Citations', id: 'citations' },
    ],
    content: `
      <p id="introduction">Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections throughout life. This adaptability plays a central role in habit formation, allowing repetitive behaviors to become automated routines.</p>
      <h2 id="synaptic-plasticity">Synaptic Plasticity and Habit Loops</h2>
      <p>Habits are encoded within the basal ganglia, specifically the striatum. As a behavior is repeated, synaptic strength increases between neurons in this pathway, creating a consolidated 'chunk' of behavior.</p>
      <h2 id="cognitive-interventions">Cognitive Interventions</h2>
      <p>To disrupt established neural loops, cognitive interventions target trigger events and introduce competing behaviors, forcing the brain to form alternative pathways.</p>
    `,
    citations: [
      'Hebb, D.O. (1949). The Organization of Behavior. Wiley.',
      'Graybiel, A.M. (2008). Habits, rituals, and the evaluative brain. Annual Review of Neuroscience.',
    ]
  },
  'microbiome-depression': {
    title: 'The Microbiome-Gut-Brain Axis in Depression',
    domain: 'The Gut-Brain Axis',
    format: 'Meta-Analysis',
    published_at: '2026-08-25',
    sections: [
      { title: 'Introduction', id: 'introduction' },
      { title: 'Vagus Nerve Signaling', id: 'vagus-nerve-signaling' },
      { title: 'Clinical Findings', id: 'clinical-findings' },
      { title: 'Citations', id: 'citations' },
    ],
    content: `
      <p id="introduction">The bidirectional communication network between the central nervous system and the gastrointestinal tract, known the gut-brain axis, has emerged as a key factor in neuropsychiatric conditions, particularly depression.</p>
      <h2 id="vagus-nerve-signaling">Vagus Nerve and Cytokine Signalling</h2>
      <p>Gut microbes produce neurotransmitters and short-chain fatty acids (SCFAs) that stimulate the vagus nerve. Additionally, systemic inflammation driven by dysbiosis can disrupt the blood-brain barrier.</p>
      <h2 id="clinical-findings">Clinical Findings</h2>
      <p>Meta-analyses of clinical trials show that specific probiotic strains (e.g., Lactobacillus and Bifidobacterium) can alleviate depressive symptoms by lowering systemic cortisol.</p>
    `,
    citations: [
      'Cryan, J.F. et al. (2019). The Microbiome-Gut-Brain Axis. Physiological Reviews.',
      'Foster, J.A. (2013). Gut-brain axis: how the microbiome influences anxiety and depression. Trends in Neurosciences.',
    ]
  }
};

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pub = publicationsDb[slug];

  if (!pub) {
    notFound();
  }

  return (
    <div className="flex relative w-full">
      <div className="flex-grow max-w-4xl p-12">
        <header className="border-b border-divider pb-12 mb-12">
          <div className="flex gap-4 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#172F22]/60 border border-[#214232]/30 px-3 py-1 font-sans">{pub.domain}</span>
            <span className="text-xs uppercase tracking-widest text-[#172F22]/60 border border-[#214232]/30 px-3 py-1 font-sans">{pub.format}</span>
          </div>
          <h1 className="text-5xl font-serif text-[#172F22] leading-tight mb-6">{pub.title}</h1>
          <time className="text-sm font-sans text-[#172F22]/50">{new Date(pub.published_at).toLocaleDateString()}</time>
        </header>
        
        <article 
          className="max-w-none font-sans text-[#172F22]/90 text-lg leading-loose [&>p]:mb-8 [&>h2]:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-[#172F22] [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:border-b [&>h2]:border-[#172F22]/10 [&>h2]:pb-1 [&>h3]:text-2xl [&>h3]:font-serif [&>h3]:font-normal [&>h3]:mt-10 [&>h3]:mb-4"
          dangerouslySetInnerHTML={{ __html: pub.content }}
        />
        
        <footer id="citations" className="mt-24 pt-12 border-t border-divider">
            <h4 className="font-serif text-xl mb-4 text-[#172F22]">Citations</h4>
            <ol className="list-decimal pl-5 font-sans text-sm text-[#172F22]/70 space-y-2">
              {pub.citations.map((cite, index) => (
                <li key={index}>{cite}</li>
              ))}
            </ol>
        </footer>
      </div>

      {/* Sticky Table of Contents */}
      <aside className="hidden xl:block w-64 border-l border-[#214232]/10 p-12 sticky top-0 h-screen overflow-y-auto">
        <h4 className="text-xs uppercase tracking-widest text-[#172F22]/60 mb-6 border-b border-[#214232]/10 pb-2">Contents</h4>
        <nav className="flex flex-col gap-4 font-sans text-sm text-[#172F22]/80">
          {pub.sections.map((sec) => (
            <a key={sec.id} href={`#${sec.id}`} className="hover:text-[#E89248] transition-colors">{sec.title}</a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
