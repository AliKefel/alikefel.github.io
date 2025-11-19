import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="terminal-prompt">&gt;</span>{' '}
              <span className="terminal-command">{title}</span>
            </h2>
            <div className="h-1 w-24 bg-terminal-accent"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

