import type { Education } from '../types/portfolio';

export const education: Education[] = [
  {
    id: '1',
    institution: 'Arizona State University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: {
      start: '2023-01',
      end: '2026-12',
    },
    // gpa: '3.72/4.0',
    achievements: [
      "4x Dean's List",
      'NAmU Scholarship ($58,000)',
      'Blackstone Launchpad Internship Program',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Software Engineering',
      'Operating Systems',
      'Software QA and Testing',
      'Theoretical CS',
      'Information Assurance',
      'Calculus I, II, III',
      'Discrete Math',
      'Applied Linear Algebra',
      'Probability & Statistics',
      'Compilers',
      'Digital Logic Circuits and Design',
    ],
  },
  {
    id: '2',
    institution: 'Arizona State University',
    degree: 'Master of Science',
    field: 'Computer Science',
    period: {
      start: '2026-01',
      end: '2027-12',
    },
    gpa: undefined,
    achievements: [],
    coursework: [],
  },
];

export const organizations: string[] = [
  'Board of LSA',
  'Hacker Devils',
  'SoDa',
  'Google Student Developer Association',
];
