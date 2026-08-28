import React from 'react';
import Link from 'next/link';

// Mocked data for now since backend is skipped
const mockPublications = [
  { id: '1', issue_number: 14, title: 'Metabolic Flexibility in Fasting States', domain: 'Nutritional Biochemistry', format: 'Clinical Review', read_time_min: 12, published_at: '2026-08-15', slug: 'metabolic-flexibility' },
  { id: '2', issue_number: 15, title: 'Neuroplasticity and Habit Formation', domain: 'Behavioral Psychology', format: 'Long-form Essay', read_time_min: 18, published_at: '2026-08-20', slug: 'neuroplasticity-habit' },
  { id: '3', issue_number: 16, title: 'The Microbiome-Gut-Brain Axis in Depression', domain: 'The Gut-Brain Axis', format: 'Meta-Analysis', read_time_min: 25, published_at: '2026-08-25', slug: 'microbiome-depression' },
];

export default function ArchiveTable() {
  return (
    <div className="w-full border-t border-l border-divider">
      <table className="w-full text-left font-sans text-sm border-collapse">
        <thead>
          <tr className="bg-background text-foreground/70 uppercase tracking-widest text-xs">
            <th className="p-4 border-b border-r border-divider font-normal">Issue</th>
            <th className="p-4 border-b border-r border-divider font-normal">Title</th>
            <th className="p-4 border-b border-r border-divider font-normal">Domain</th>
            <th className="p-4 border-b border-r border-divider font-normal">Format</th>
            <th className="p-4 border-b border-r border-divider font-normal">Date</th>
          </tr>
        </thead>
        <tbody>
          {mockPublications.map((pub) => (
            <tr key={pub.id} className="hover:bg-background/50 transition-colors">
              <td className="p-4 border-b border-r border-divider text-foreground/50">{String(pub.issue_number).padStart(3, '0')}</td>
              <td className="p-4 border-b border-r border-divider font-medium text-foreground">
                <Link href={`/archive/${pub.slug}`} className="hover:text-action transition-colors">{pub.title}</Link>
              </td>
              <td className="p-4 border-b border-r border-divider">{pub.domain}</td>
              <td className="p-4 border-b border-r border-divider">{pub.format}</td>
              <td className="p-4 border-b border-r border-divider text-foreground/60">{new Date(pub.published_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
