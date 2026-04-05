import type { Skill, Project, Certificate } from '../types';
import quranic from '../assets/projects/quranic.png';
import atten from '../assets/projects/attendances.png';

export const techStack: Skill[] = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: { en: 'Semantic Web Architecture', id: 'Arsitektur Web Semantik' } },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: { en: 'Responsive & Modern UI Implementation', id: 'Implementasi UI Modern & Responsif' } },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: { en: 'Client-side Logic & DOM Manipulation', id: 'Logika Sisi Klien & Manipulasi DOM' } },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', desc: { en: 'Server-side Scripting & Logic', id: 'Logika & Scripting Sisi Server' } },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', desc: { en: 'Scalable Backend Development (PHP)', id: 'Pengembangan Backend Skalabel (PHP)' } },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', desc: { en: 'Fullstack React Framework', id: 'Framework React Fullstack' } },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: { en: 'Component-Based UI Engineering', id: 'Rekayasa UI Berbasis Komponen' } },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', desc: { en: 'Efficient Utility-First Styling', id: 'Styling Efisien Berbasis Utility' } },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', desc: { en: 'Rapid UI Development Framework', id: 'Framework Pengembangan UI Cepat' } },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', desc: { en: 'Modern Type-safe ORM', id: 'ORM Modern Berbasis Type-safe' } },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: { en: 'Relational Database Management', id: 'Manajemen Database Relasional' } },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', desc: { en: 'Advanced Relational Database', id: 'Database Relasional Tingkat Lanjut' } },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: { en: 'NoSQL Document Database', id: 'Database NoSQL Berbasis Dokumen' } },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', desc: { en: 'API Development & Testing', id: 'Pengembangan & Pengujian API' } },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: { en: 'Version Control & Team Collaboration', id: 'Kontrol Versi & Kolaborasi Tim' } },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', desc: { en: 'Interface Design & User Experience', id: 'Desain Antarmuka & Pengalaman Pengguna' } }
];

export const projectsData: Project[] = [
  { 
    id: 1, 
    title: 'Quranic', 
    description: {
      en: 'A modern Quran learning platform with interactive features.',
      id: 'Platform pembelajaran Al-Quran modern dengan fitur interaktif.'
    },
    type: 'web', 
    tech: ['React','Flowbite','Tailwind'], 
    img: quranic, 
    gallery: [
      
    ],
    github: 'https://github.com/fajarlm/quranic', 
    demo: 'https://quranic-seven.vercel.app/' 
  },
  { 
    id: 2, 
    title: 'Digital Attendance System', 
    description: {
      en: 'attendances system for employees with real-time .',
      id: 'Sistem absensi untuk karyawan dengan  real-time.'
    },
    type: 'web', 
    tech: ['tailwind', 'MySQL', 'Laravel'], 
    img: atten,
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
  whatsapp: "https://wa.me/6285779039757"
};

export const translations = {
  en: {
    nav: { about: 'About', projects: 'Projects', certificates: 'Certificates', contact: 'Contact' },
    hero: { role: 'Fullstack Developer', tagline: 'Hi! I am fajar, a Fullstack Developer passionate about building modern web applications technologies. Feel free to reach out via email or connect with me on LinkedIn and GitHub!.' },
    about: { title: 'Crafting digital experiences with purpose.', desc: 'I am a passionate software engineering student focused on building high-performance web and mobile applications that put users first.' },
    tech: { title: 'Tools of', subtitle: 'The Trade.' },
    projects: { title: 'Featured', subtitle: 'Projects.', filterAll: 'All' },
    certificates: { title: 'Proof of', subtitle: 'Competence.' },
    contact: { title: 'SAY', subtitle: 'HELLO.', available: 'Open for new opportunities', social: 'Social Links', send: 'Send Message' },
    footer: { copyright: '© 2024 Fajar Kusuma. All rights reserved.' }
  },
  id: {
    nav: { about: 'Tentang', projects: 'Proyek', certificates: 'Sertifikat', contact: 'Kontak' },
    hero: {  role: 'Pengembang Fullstack', tagline: 'Hai! Saya Fajar, seorang Fullstack Developer yang bersemangat membangun teknologi aplikasi web modern. Jangan ragu untuk menghubungi saya melalui email atau terhubung dengan saya di LinkedIn dan GitHub!.' },
    about: { title: 'Membangun pengalaman digital yang bermakna.', desc: 'Saya adalah siswa pengembangan perangkat lunak yang bersemangat, berfokus pada pembuatan aplikasi web dan mobile berperforma tinggi dengan mengutamakan kebutuhan pengguna.' },
    tech: { title: 'Alat &', subtitle: 'Teknologi.' },
    projects: { title: 'Proyek', subtitle: 'Pilihan.', filterAll: 'Semua' },
    certificates: { title: 'Sertifikat', subtitle: '.' },
    contact: { title: 'Kontak', subtitle: 'SAYA.', available: 'Terbuka untuk peluang baru', social: 'Media Sosial', send: 'Kirim Pesan' },
    footer: { copyright: '© 2024 Fajar Kusuma. Hak cipta dilindungi.' }
  }
};