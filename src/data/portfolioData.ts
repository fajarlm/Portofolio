import type { Skill, Project, Certificate } from '../types';

export const techStack: Skill[] = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Struktur Web Modern' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Desain Responsif' },
  { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Interaktivitas Dinamis' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', desc: 'Framework PHP Robust' },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', desc: 'Styling Berbasis Utility' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'UI Berbasis Komponen' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: 'Kontrol Versi' },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', desc: 'Desain UI/UX' }
];

export const projectsData: Project[] = [
  { 
    id: 1, 
    title: 'SyntaxSpace', 
    type: 'web', 
    tech: 'React + Node', 
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  { 
    id: 2, 
    title: 'Absensi Pro', 
    type: 'mobile', 
    tech: 'Flutter', 
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    github: 'https://github.com'
  },
  { 
    id: 3, 
    title: 'Menu Logic', 
    type: 'web', 
    tech: 'Laravel', 
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export const certificatesData: Certificate[] = [
  { id: 1, title: 'Web Developer Professional', issuer: 'Dicoding Indonesia', date: '2023', link: '#' },
  { id: 2, title: 'Responsive Web Design', issuer: 'FreeCodeCamp', date: '2023', link: '#' },
  { id: 3, title: 'Junior Web Programmer', issuer: 'BNSP', date: '2024', link: '#' }
];