import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { AnimatedText } from '../ui/AnimatedText';
import { skills } from '../../data/skills';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Wrench } from 'lucide-react';

const skillIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  DevOps: Server,
  Tools: Wrench,
};

export const About = () => {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <AnimatedText variant="slide" delay={0.1}>
          <Card>
            <div className="text-terminal-prompt text-lg font-mono mb-4">
              <span className="terminal-success">$</span> cat bio.txt
            </div>
            <h3 className="text-2xl font-bold mb-4 terminal-command">
              <span className="terminal-prompt">&gt;</span> About Me
            </h3>
            <p className="text-terminal-text mb-4 leading-relaxed">
              <span className="terminal-prompt">&gt;</span>{' '}
              <span className="terminal-output">
                I'm a passionate software engineer with a love for creating elegant solutions
                to complex problems. With expertise in full-stack development, I specialize in
                building scalable web applications that deliver exceptional user experiences.
              </span>
            </p>
            <p className="text-terminal-text leading-relaxed">
              <span className="terminal-prompt">&gt;</span>{' '}
              <span className="terminal-output">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </span>
            </p>
          </Card>
        </AnimatedText>

        <AnimatedText variant="slide" delay={0.2}>
          <Card>
            <div className="text-terminal-prompt text-lg font-mono mb-4">
              <span className="terminal-success">$</span> cat interests.txt
            </div>
            <h3 className="text-2xl font-bold mb-4 terminal-command">
              <span className="terminal-prompt">&gt;</span> Interests
            </h3>
            <ul className="space-y-2 text-terminal-text">
              <li>
                <span className="terminal-prompt">&gt;</span>{' '}
                <span className="terminal-output">Web Development & Modern Frameworks</span>
              </li>
              <li>
                <span className="terminal-prompt">&gt;</span>{' '}
                <span className="terminal-output">Cloud Architecture & DevOps</span>
              </li>
              <li>
                <span className="terminal-prompt">&gt;</span>{' '}
                <span className="terminal-output">Open Source Contributions</span>
              </li>
              <li>
                <span className="terminal-prompt">&gt;</span>{' '}
                <span className="terminal-output">Machine Learning & AI</span>
              </li>
              <li>
                <span className="terminal-prompt">&gt;</span>{' '}
                <span className="terminal-output">Technical Writing & Mentoring</span>
              </li>
            </ul>
          </Card>
        </AnimatedText>
      </div>

      <AnimatedText variant="fade" delay={0.3}>
        <div>
          <div className="text-terminal-prompt text-lg font-mono mb-6">
            <span className="terminal-success">$</span> cat skills.txt
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.category as keyof typeof skillIcons] || Code2;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-terminal-accent" />
                      <h3 className="text-xl font-bold terminal-command">
                        <span className="terminal-prompt">&gt;</span> {skill.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-terminal-surface border border-terminal-border rounded text-sm text-terminal-text font-mono hover:border-terminal-accent transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedText>
    </Section>
  );
};

