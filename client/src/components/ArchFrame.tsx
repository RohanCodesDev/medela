import React from 'react';

interface ArchFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArchFrame({ children, className = "" }: ArchFrameProps) {
  return (
    <div suppressHydrationWarning className={`relative ${className}`} style={{ maskImage: "url('data:image/svg+xml;utf8,<svg suppressHydrationWarning viewBox=\"0 0 1 1.5\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path suppressHydrationWarning d=\"M0,1.5 L0,0.5 C0,0.22 0.22,0 0.5,0 C0.78,0 1,0.22 1,0.5 L1,1.5 Z\" fill=\"black\"/></svg>')", maskSize: "100% 100%", WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg suppressHydrationWarning viewBox=\"0 0 1 1.5\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path suppressHydrationWarning d=\"M0,1.5 L0,0.5 C0,0.22 0.22,0 0.5,0 C0.78,0 1,0.22 1,0.5 L1,1.5 Z\" fill=\"black\"/></svg>')", WebkitMaskSize: "100% 100%" }}>
      {children}
    </div>
  );
}
