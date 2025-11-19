import { Section } from '../ui/Section';
import { experiences } from '../../data/experience';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, 1); // month is 0-indexed
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <Section id="experience" title="Experience">
      <div className="text-terminal-prompt text-lg font-mono mb-8">
        <span className="terminal-success">$</span> cat experience.json
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-terminal-border hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-0 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-terminal-accent rounded-full border-4 border-terminal-bg hidden md:block"></div>

              <div className="terminal-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold terminal-command mb-1">
                      <span className="terminal-prompt">&gt;</span> {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-terminal-accent font-mono">
                      <MapPin className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-terminal-text font-mono text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    {formatDate(exp.period.start)} -{' '}
                    {exp.period.end ? formatDate(exp.period.end) : 'Present'}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-terminal-text flex items-start gap-2">
                      <span className="terminal-prompt mt-1">&gt;</span>
                      <span className="terminal-output">{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-terminal-bg border border-terminal-border rounded text-sm text-terminal-accent font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
