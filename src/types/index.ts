export interface Skill {
  name: string;
  icon: string;
  desc: string;
}

export interface Project {
  id: number;
  title: string;
  type: 'web' | 'mobile' | 'desktop';
  tech: string;
  img: string;
  github?: string;
  demo?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export type Theme = 'light' | 'dark' | 'cyan';