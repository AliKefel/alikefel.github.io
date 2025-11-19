export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: {
    start: string;
    end: string | null;
  };
  description: string[];
  tech: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: {
    start: string;
    end: string | null;
  };
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
