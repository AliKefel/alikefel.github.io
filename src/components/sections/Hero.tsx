import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { ArrowDown, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = ['Software Engineer', 'Student', 'Engineer', 'Problem Solver'];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,166,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-terminal-prompt text-lg md:text-xl font-mono mb-2">
            <span className="terminal-success">$</span> cat about.txt
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="terminal-prompt">&gt;</span> Hello, I'm{' '}
            <GradientText>Ali Kefel</GradientText>
          </h2>
          <div className="text-2xl md:text-4xl lg:text-5xl font-mono min-h-[60px]">
            <span className="terminal-prompt">&gt;</span>{' '}
            <span className="terminal-command">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-1 h-8 bg-terminal-accent ml-2"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-terminal-prompt text-lg md:text-xl font-mono mb-4">
            <span className="terminal-success">$</span> ls -la skills/
          </div>
          <p className="text-lg md:text-xl text-terminal-text max-w-2xl mx-auto font-mono">
            <span className="terminal-prompt">&gt;</span>{' '}
            <span className="terminal-output">
              Building modern web applications with React, TypeScript, and Node.js.
              Passionate about clean code, user experience, and continuous learning.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button onClick={scrollToProjects} size="lg" showArrow>
            View Projects
          </Button>
          <Button onClick={scrollToContact} variant="outline" size="lg">
            <Download className="w-5 h-5" />
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-terminal-text cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-mono">Scroll</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

