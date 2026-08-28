export default function About() {
  return (
    <div className="p-12">
      <div className="max-w-3xl border-b border-divider pb-12 mb-12">
        <h1 className="text-5xl font-serif text-foreground mb-6">Faculty & Methodology</h1>
        <p className="text-lg font-sans text-foreground/80 leading-relaxed">
          Our editorial rigor and structural approach to academic synthesis.
        </p>
      </div>
      <div className="max-w-3xl font-serif text-lg leading-loose text-foreground/90">
        <h2 className="text-2xl font-serif mb-6 text-foreground">Peer-Review Process</h2>
        <p className="mb-8">
            Medela Concertedly employs a strict double-blind review process for all long-form clinical essays. Submissions are vetted by practicing clinicians and published researchers in both the metabolic and psychiatric fields.
        </p>
        
        <h2 className="text-2xl font-serif mb-6 text-foreground">Editorial Board</h2>
        <ul className="list-none p-0 m-0 space-y-6 border-t border-divider pt-6">
            <li className="flex justify-between items-center border-b border-divider pb-6">
                <div>
                    <h4 className="font-serif text-xl">Dr. Elias Vance, MD, PhD</h4>
                    <p className="font-sans text-sm text-foreground/60 uppercase tracking-wider mt-1">Metabolic Psychiatry</p>
                </div>
            </li>
            <li className="flex justify-between items-center border-b border-divider pb-6">
                <div>
                    <h4 className="font-serif text-xl">Dr. Sarah Lin, PhD</h4>
                    <p className="font-sans text-sm text-foreground/60 uppercase tracking-wider mt-1">Neuroimmunology</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
}
