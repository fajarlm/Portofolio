import type { Skill, Project, Certificate, Language } from '../types';

export const techStack: Skill[] = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: { en: 'Semantic Web Architecture', id: 'Arsitektur Web Semantik' } },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: { en: 'Responsive & Modern UI Implementation', id: 'Implementasi UI Modern & Responsif' } },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: { en: 'Client-side Logic & DOM Manipulation', id: 'Logika Sisi Klien & Manipulasi DOM' } },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', desc: { en: 'Scalable Backend Development (PHP)', id: 'Pengembangan Backend Skalabel (PHP)' } },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', desc: { en: 'Efficient Utility-First Styling', id: 'Styling Efisien Berbasis Utility' } },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: { en: 'Component-Based UI Engineering', id: 'Rekayasa UI Berbasis Komponen' } },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: { en: 'Version Control & Team Collaboration', id: 'Kontrol Versi & Kolaborasi Tim' } },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', desc: { en: 'Interface Design & User Experience', id: 'Desain Antarmuka & Pengalaman Pengguna' } }
];

export const projectsData: Project[] = [
  { 
    id: 1, 
    title: 'SyntaxSpace Collaboration', 
    description: {
      en: 'Real-time collaborative code editor with chat and file sharing features.',
      id: 'Editor kode kolaboratif real-time dengan fitur chat dan berbagi file.'
    },
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
    description: {
      en: 'GPS-based attendance system for employees with real-time tracking.',
      id: 'Sistem absensi berbasis GPS untuk karyawan dengan pelacakan real-time.'
    },
    type: 'mobile', 
    tech: ['Flutter', 'Firebase', 'Google Maps'], 
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    gallery: [],
    github: 'https://github.com/fajarlm' 
  },
  { 
    id: 3, 
    title: 'Restaurant Inventory', 
    description: {
      en: 'Comprehensive stock management system with automated reordering.',
      id: 'Sistem manajemen stok lengkap dengan pemesanan ulang otomatis.'
    },
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
    description: {
      en: 'Offline-first point of sale system with local database and reporting.',
      id: 'Sistem kasir offline-first dengan database lokal dan pelaporan.'
    },
    type: 'desktop', 
    tech: ['C#', '.NET', 'SQLite', 'Entity Framework'], 
    img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800', 
    github: 'https://github.com/fajarlm' 
  },
  { 
    id: 5, 
    title: 'Task Master Mobile', 
    description: {
      en: 'Productivity app with subtasks, reminders, and cross-device sync.',
      id: 'Aplikasi produktivitas dengan subtask, pengingat, dan sinkronisasi perangkat.'
    },
    type: 'mobile', 
    tech: ['React Native', 'Redux', 'Node.js', 'Express'], 
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800', 
    github: 'https://github.com/fajarlm' 
  },
  { 
    id: 6, 
    title: 'Warehouse Management', 
    description: {
      en: 'Enterprise-level warehouse tracking with barcode scanning support.',
      id: 'Pelacakan gudang tingkat perusahaan dengan dukungan pemindaian barcode.'
    },
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

export const translations = {
  en: {
    nav: { about: 'About', projects: 'Projects', certificates: 'Certificates', contact: 'Contact' },
    hero: { greeting: 'Hi, I am', role: 'Fullstack Developer', tagline: 'Turning complex problems into elegant digital solutions.' },
    about: { title: 'Crafting digital experiences with purpose.', desc: 'I am a passionate developer focusing on building modern, high-performance web and mobile applications.' },
    tech: { title: 'Tools of', subtitle: 'The Trade.' },
    projects: { title: 'Selected', subtitle: 'Works.', filterAll: 'All' },
    certificates: { title: 'Proof of', subtitle: 'Excellence.' },
    contact: { title: 'SAY', subtitle: 'HELLO.', available: 'Available for projects', social: 'Social Presence', send: 'Send Message' },
    footer: { copyright: '© 2024 Fajar Kusuma. Built with React & Tailwind.' }
  },
  id: {
    nav: { about: 'Tentang', projects: 'Proyek', certificates: 'Sertifikat', contact: 'Kontak' },
    hero: { greeting: 'Halo, Saya', role: 'Fullstack Developer', tagline: 'Mengubah masalah kompleks menjadi solusi digital yang elegan.' },
    about: { title: 'Membangun pengalaman digital dengan tujuan.', desc: 'Saya adalah pengembang yang bersemangat fokus pada pembuatan aplikasi web dan mobile modern berkinerja tinggi.' },
    tech: { title: 'Alat &', subtitle: 'Teknologi.' },
    projects: { title: 'Karya', subtitle: 'Pilihan.', filterAll: 'Semua' },
    certificates: { title: 'Bukti', subtitle: 'Keahlian.' },
    contact: { title: 'SAPA', subtitle: 'SAYA.', available: 'Tersedia untuk proyek', social: 'Kehadiran Sosial', send: 'Kirim Pesan' },
    footer: { copyright: '© 2024 Fajar Kusuma. Dibuat dengan React & Tailwind.' }
  }
};