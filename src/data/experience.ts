import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'MoveCars.com',
    role: 'Software Engineering Intern',
    period: {
      start: '2025-01',
      end: null,
    },
    description: [
      'Streamlined image optimization pipelines and redesigned layouts, achieving a 32% faster website load time according to Lighthouse benchmarks',
      'Accomplished a 20% reduction in developer iteration time as measured by prototyping benchmarks by implementing Tailwind CSS and building reusable components, partials, and shortcodes in Hugo',
      'Designed and implemented a modular web scraping architecture with Playwright and Selenium, enabling scalable extraction of instant auto-shipping quotes across multiple transporter portals',
      'Developed service-based content pages, integrating DOT and FMCSA datasets into the Rails backend to improve consumer trust and compliance visibility',
    ],
    tech: ['React', 'Ruby on Rails', 'AWS', 'Terraform', 'Hugo', 'MUI', 'Tailwind CSS', 'Playwright', 'Selenium'],
  },
  {
    id: '2',
    company: 'Arizona State University',
    role: 'Undergraduate Teaching Assistant',
    period: {
      start: '2024-01',
      end: '2024-12',
    },
    description: [
      'Facilitated weekly labs and office hours for over 150 students in Data Structures and Algorithms (CSE205), supporting assignments and reinforcing core concepts, which improved student understanding and performance',
      'Held weekly office hours to help students strengthen their understanding of course material, provided guidance on assignments, and created educational videos on data structures and algorithms to reinforce key concepts',
    ],
    tech: ['Java', 'JavaScript', 'Data Structures', 'Algorithms'],
  },
  {
    id: '3',
    company: 'Arizona State University',
    role: 'Arduino Team Lead - Engineering Projects in Community Service',
    period: {
      start: '2024-01',
      end: '2024-05',
    },
    description: [
      'Designed schematics for an aquaculture monitoring system, improving calibration accuracy by 50% through integration of high-quality probes, enhancing operational decision-making',
      'Strengthened system usability as measured by stakeholder feedback by collaborating with local farmers in Vietnam to refine design schematics',
    ],
    tech: ['C++', 'Arduino', 'KiCad', 'Electronics'],
  },
];

