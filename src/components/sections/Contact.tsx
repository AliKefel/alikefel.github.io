import { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import type { ContactFormData } from '../../types/portfolio';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Formspree endpoint - Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Get your form ID from https://formspree.io/forms/YOUR_FORM_ID
      const formspreeEndpoint = 'https://formspree.io/f/xkgyjppb';
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="text-terminal-prompt text-lg font-mono mb-8">
        <span className="terminal-success">$</span> cat contact.txt
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 terminal-command">
                <span className="terminal-prompt">&gt;</span> Get In Touch
              </h3>
              <p className="text-terminal-text mb-6 leading-relaxed">
                <span className="terminal-prompt">&gt;</span>{' '}
                <span className="terminal-output">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your visions. Feel free to reach out!
                </span>
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:alikefel114@gmail.com"
                className="flex items-center gap-3 text-terminal-text hover:text-terminal-accent transition-colors group"
              >
                <div className="p-2 bg-terminal-surface border border-terminal-border rounded group-hover:border-terminal-accent transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-terminal-text/70 font-mono">Email</div>
                  <div className="font-mono">
                    <span className="terminal-prompt">&gt;</span> alikefel114@gmail.com
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-4 bg-terminal-bg border border-terminal-border rounded">
              <div className="text-terminal-prompt text-sm font-mono mb-2">
                <span className="terminal-success">$</span> echo "Let's connect!"
              </div>
              <div className="text-terminal-output text-sm font-mono">
                <span className="terminal-prompt">&gt;</span> I typically respond within 24 hours
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono mb-2 terminal-command">
                  <span className="terminal-prompt">&gt;</span> Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded font-mono text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-terminal-error font-mono flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono mb-2 terminal-command">
                  <span className="terminal-prompt">&gt;</span> Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded font-mono text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-terminal-error font-mono flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono mb-2 terminal-command">
                  <span className="terminal-prompt">&gt;</span> Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={6}
                  className="w-full px-4 py-3 bg-terminal-bg border border-terminal-border rounded font-mono text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors resize-none"
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-terminal-error font-mono flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-terminal-success/20 border border-terminal-success rounded flex items-center gap-2 text-terminal-success font-mono"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="terminal-prompt">&gt;</span> Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-terminal-error/20 border border-terminal-error rounded flex items-center gap-2 text-terminal-error font-mono"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span className="terminal-prompt">&gt;</span> Error sending message. Please try again.
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
                showArrow
              >
                {isSubmitting ? (
                  <>
                    <span className="terminal-prompt">&gt;</span> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

