import { type ReactNode } from 'react';

interface ScreeningLayoutProps {
  children: ReactNode;
}

export function ScreeningLayout({ children }: ScreeningLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </div>
  );
}
