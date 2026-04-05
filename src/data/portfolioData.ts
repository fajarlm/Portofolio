import type { Skill, Project, Certificate } from '../types';

export const techStack: Skill[] = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Semantic Web Architecture' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Responsive & Modern UI Implementation' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'Client-side Logic & DOM Manipulation' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', desc: 'Scalable Backend Development (PHP)' },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', desc: 'Efficient Utility-First Styling' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Component-Based UI Engineering' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: 'Version Control & Team Collaboration' },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', desc: 'Interface Design & User Experience' }
];

export const projectsData: Project[] = [
  { 
    id: 1, 
    title: 'SyntaxSpace Collaboration', 
    description: 'Real-time collaborative code editor with chat and file sharing features.',
    type: 'web', 
    tech: ['React', 'Node.js', 'Socket.io', 'Tailwind'], 
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', 
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
    ],
    github: 'https://github.com/fajarlm', 
    demo: 'https://demo.com' 
  },
  { 
    id: 2, 
    title: 'Digital Attendance System', 
    description: 'GPS-based attendance system for employees with real-time tracking.',
    type: 'mobile', 
    tech: ['Flutter', 'Firebase', 'Google Maps'], 
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    gallery: [],
    github: 'https://github.com/fajarlm' 
  },
  { 
    id: 3, 
    title: 'Restaurant Inventory', 
    description: 'Comprehensive stock management system with automated reordering.',
    type: 'web', 
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'], 
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    gallery: ['https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800'],
    github: 'https://github.com/fajarlm', 
    demo: 'https://demo.com' 
  },
  { 
    id: 4, 
    title: 'POS Desktop App', 
    description: 'Offline-first point of sale system with local database and reporting.',
    type: 'desktop', 
    tech: ['C#', '.NET', 'SQLite', 'Entity Framework'], 
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800', 
    github: 'https://github.com/fajarlm' 
  },
  { 
    id: 5, 
    title: 'Task Master Mobile', 
    description: 'Productivity app with subtasks, reminders, and cross-device sync.',
    type: 'mobile', 
    tech: ['React Native', 'Redux', 'Node.js', 'Express'], 
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800', 
    github: 'https://github.com/fajarlm' 
  },
  { 
    id: 6, 
    title: 'Warehouse Management', 
    description: 'Enterprise-level warehouse tracking with barcode scanning support.',
    type: 'desktop', 
    tech: ['Java', 'JavaFX', 'PostgreSQL', 'JasperReports'], 
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', 
    github: 'https://github.com/fajarlm' 
  }
];

export const certificatesData: Certificate[] = [
  { id: 1, title: 'Professional Web Developer', issuer: 'Dicoding Academy', date: '2023', file: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=1200' },
  { id: 2, title: 'Responsive Design Mastery', issuer: 'FreeCodeCamp', date: '2023', file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { id: 3, title: 'Junior Web Programmer', issuer: 'BNSP Certification', date: '2024', file: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200' }
];

export const socialLinks = {
  github: "https://github.com/fajarlm",
  linkedin: "https://www.linkedin.com/in/fajar-kusuma-2f88/",
  instagram: "https://www.instagram.com/fajarkusuma_lm/",
  whatsapp: "https://wa.me/6281234567890"
};