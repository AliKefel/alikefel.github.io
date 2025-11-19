import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fade' | 'slide' | 'scale';
}

export const AnimatedText = ({
  children,
  className = '',
  delay = 0,
  variant = 'fade',
}: AnimatedTextProps) => {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

