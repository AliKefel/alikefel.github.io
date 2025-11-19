import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showArrow?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  showArrow = false,
}: ButtonProps) => {
  const baseStyles = 'font-mono font-semibold rounded transition-all duration-300 flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'bg-terminal-accent text-white hover:bg-terminal-accent/80 hover:glow-effect',
    secondary: 'bg-terminal-surface text-terminal-text border-terminal-border border hover:bg-terminal-border',
    outline: 'border-terminal-border border text-terminal-accent hover:bg-terminal-surface',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      <span className="terminal-prompt">&gt;</span>
      {children}
      {showArrow && <ChevronRight className="w-4 h-4" />}
    </motion.button>
  );
};

