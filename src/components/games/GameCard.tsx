import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GameCardProps {
  title: string;
  description: string;
  children: ReactNode;
  onClick: () => void;
}

export const GameCard = ({ title, description, children, onClick }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex-shrink-0 w-80 cursor-pointer relative"
    >
      <div className="terminal-card h-full flex flex-col">
        <div className="text-terminal-prompt text-sm font-mono mb-2">
          <span className="terminal-success">$</span> ./{title.toLowerCase().replace(/\s+/g, '-')}
        </div>
        <h3 className="text-xl font-bold terminal-command mb-2">
          <span className="terminal-prompt">&gt;</span> {title}
        </h3>
        {description && (
        <p className="text-terminal-text text-sm mb-4 flex-grow">
          <span className="terminal-prompt">&gt;</span>{' '}
          
            <span className="terminal-output">{description}</span>
        </p>
        )}
        <div className="bg-terminal-bg rounded border border-terminal-border p-4">
          {children}
        </div>
        <div className="mt-4 text-terminal-accent text-xs font-mono text-center">
          <span className="terminal-prompt">&gt;</span> Click to play
        </div>
      </div>
    </motion.div>
  );
};

