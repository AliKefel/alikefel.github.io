import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientText = ({
  children,
  className = '',
  gradient = 'from-terminal-accent to-terminal-success',
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
