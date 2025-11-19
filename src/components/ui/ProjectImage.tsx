import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'card' | 'modal';
}

export const ProjectImage = ({ src, alt, className = '', variant = 'card' }: ProjectImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const baseClasses =
    variant === 'card'
      ? 'w-full h-48 object-cover rounded-t-lg border-b border-terminal-border'
      : 'w-full h-auto max-h-96 object-contain rounded-lg border border-terminal-border mb-4';

  if (hasError) {
    return (
      <div
        className={`${baseClasses} bg-terminal-bg flex items-center justify-center ${className}`}
      >
        <span className="text-terminal-text/50 font-mono text-sm">
          <span className="terminal-prompt">&gt;</span> Image not available
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div
          className={`${baseClasses} bg-terminal-bg flex items-center justify-center absolute inset-0`}
        >
          <span className="text-terminal-text/50 font-mono text-sm animate-pulse">
            <span className="terminal-prompt">&gt;</span> Loading...
          </span>
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        className={baseClasses}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading="lazy"
      />
    </div>
  );
};
