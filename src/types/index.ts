export interface Skill {
  name: string;
  icon: string;
  desc: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'web' | 'mobile' | 'desktop';
  tech: string[];
  img: string;
  gallery?: string[];
  github?: string;
  demo?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  file: string;
}

export type Theme = 'light' | 'dark' | 'cyan';