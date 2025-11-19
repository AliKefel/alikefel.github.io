import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-surface border-t border-terminal-border py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-terminal-text text-sm font-mono">
            <span className="terminal-prompt">&gt;</span>{' '}
            <span className="terminal-command">copyright</span> © {currentYear}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-text hover:text-terminal-accent transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Built with */}
          <div className="text-terminal-text text-sm font-mono">
            <span className="terminal-prompt">&gt;</span>{' '}
            <span className="terminal-command">built_with</span> = [
            <span className="text-terminal-accent">React</span>,
            <span className="text-terminal-accent"> TypeScript</span>,
            <span className="text-terminal-accent"> Tailwind</span>]
          </div>
        </div>
      </div>
    </footer>
  );
};

