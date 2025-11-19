import { Section } from '../ui/Section';
import { education, organizations } from '../../data/education';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, Users } from 'lucide-react';

export const Education = () => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, 1); // month is 0-indexed
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <Section id="education" title="Education">
      <div className="text-terminal-prompt text-lg font-mono mb-8">
        <span className="terminal-success">$</span> cat education.json
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="terminal-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-terminal-accent" />
                <div>
                  <h3 className="text-2xl font-bold terminal-command">
                    <span className="terminal-prompt">&gt;</span> {edu.institution}
                  </h3>
                  <p className="text-terminal-accent font-mono">
                    {edu.degree} in {edu.field}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-terminal-text font-mono text-sm mb-4">
                <Calendar className="w-4 h-4" />
                {formatDate(edu.period.start)} - {edu.period.end ? formatDate(edu.period.end) : 'Present'}
              </div>

              {edu.gpa && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-terminal-success font-mono mb-2">
                    <Award className="w-4 h-4" />
                    <span className="terminal-prompt">&gt;</span> GPA: {edu.gpa}
                  </div>
                </div>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-terminal-command font-mono mb-2">
                    <Award className="w-4 h-4" />
                    <span className="terminal-prompt">&gt;</span> Achievements
                  </div>
                  <ul className="space-y-1 ml-6">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-terminal-text text-sm">
                        <span className="terminal-prompt">&gt;</span> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-terminal-command font-mono mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="terminal-prompt">&gt;</span> Relevant Coursework
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-terminal-bg border border-terminal-border rounded text-xs text-terminal-text font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {organizations && organizations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <div className="text-terminal-prompt text-lg font-mono mb-6">
            <span className="terminal-success">$</span> cat organizations.txt
          </div>
          <div className="terminal-card">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-terminal-accent" />
              <h3 className="text-2xl font-bold terminal-command">
                <span className="terminal-prompt">&gt;</span> Organizations
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {organizations.map((org, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-terminal-bg border border-terminal-border rounded text-terminal-text font-mono hover:border-terminal-accent transition-colors"
                >
                  <span className="terminal-prompt">&gt;</span> {org}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </Section>
  );
};

