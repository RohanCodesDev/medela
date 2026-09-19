import ArchiveTable from '@/components/ArchiveTable';

export default function Archive() {
  return (
    <div suppressHydrationWarning className="p-6 md:p-12">
      <div suppressHydrationWarning className="max-w-3xl border-b border-divider pb-12 mb-12">
        <h1 suppressHydrationWarning className="text-4xl md:text-5xl font-serif text-foreground mb-6">Publication Archive</h1>
        <p suppressHydrationWarning className="text-lg font-sans text-foreground/80 leading-relaxed">
          A complete, chronological index of all research, essays, and clinical reviews published by Medela Concertedly.
        </p>
      </div>
      <ArchiveTable />
    </div>
  );
}
