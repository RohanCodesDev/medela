import ArchiveTable from '@/components/ArchiveTable';

export default function Archive() {
  return (
    <div className="p-12">
      <div className="max-w-3xl border-b border-divider pb-12 mb-12">
        <h1 className="text-5xl font-serif text-foreground mb-6">Publication Archive</h1>
        <p className="text-lg font-sans text-foreground/80 leading-relaxed">
          A complete, chronological index of all research, essays, and clinical reviews published by Medela Concertedly.
        </p>
      </div>
      <ArchiveTable />
    </div>
  );
}
