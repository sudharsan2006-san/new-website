import { Project, Skill, Experience, Certification } from '../types';

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Programming' },
  { name: 'C', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'MySQL', category: 'Backend' },
  { name: 'Manual Testing', category: 'Testing' },
  { name: 'Functional Testing', category: 'Testing' },
  { name: 'Problem Solving', category: 'Soft Skills' },
  { name: 'Analytical Thinking', category: 'Soft Skills' },
  { name: 'Teamwork', category: 'Soft Skills' },
  { name: 'Cricket', category: 'Interests' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Student Course Management',
    description: 'Department-level course management system with constraint-based logic and reporting.',
    tags: ['Constraint-based', 'Admin Login', 'Staff Allocation'],
    githubUrl: 'https://github.com/sudharsan2006-san/Student-coures-management',
    demoUrl: '#',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Hostel Management System',
    description: 'Efficient room allocation system demonstrating Object-Oriented Programming concepts.',
    tags: ['Room Allocation', 'OOP', 'Occupancy'],
    githubUrl: 'https://github.com/sudharsan2006-san/hostel-management',
    demoUrl: '#',
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Inventory Management',
    description: 'Menu-driven bike inventory system with structured data handling.',
    tags: ['CRUD', 'Menu Driven', 'Data Management'],
    githubUrl: 'https://github.com/sudharsan2006-san/Inventory-management-system',
    demoUrl: '#',
    image: '/project3.jpg',
  },
  {
    id: 4,
    title: 'AquaGuard',
    description: 'Smart water quality monitoring project built for QthinkX Ideathon — secured 2nd place.',
    tags: ['IoT', 'Web Interface', 'Ideathon'],
    githubUrl: '#',
    demoUrl: 'https://aquagurad23.netlify.app',
    image: '/project4.jpg',
  },
];

export const ACHIEVEMENTS = [
  { title: 'HackerRank', description: '5 Star in Python & Problem Solving' },
  { title: 'Cisco', description: 'Python Essentials 1 & 2' },
  { title: 'MongoDB', description: '4 Badges (Basics, CRUD, etc.)' },
];

export const BASIC_CERTIFICATIONS: Certification[] = [
  { provider: 'Cisco', title: 'Networking Basics, Security, AI, Python Essentials' },
  { provider: 'Infyspringboard', title: 'Java Programming' },
  { provider: 'MongoDB', title: 'Basics, Relational to Doc, RAG' },
];

export const PROFESSIONAL_CERTIFICATIONS: Certification[] = [
  {
    provider: 'NPTEL (IIT)',
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    session: 'Jan–Apr 2026',
    duration: '12 Weeks',
    result: 'Elite Certified',
    score: '78/100',
    credits: 4,
    learningOutcomes: [
      'Industry 4.0 Fundamentals',
      'Industrial Internet of Things (IIoT)',
      'Smart Manufacturing',
      'Cyber-Physical Systems',
      'Industrial Automation',
      'IoT Architecture & Applications',
      'Connected Industrial Systems'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1xymCa2FHS1JkiCHaGMLJKIu2LplBfb8C/view?usp=sharing'
  },
];
export const LINKEDIN_URL = 'https://www.linkedin.com/in/sudharsanu/';

export const EXPERIENCE: Experience[] = [
  {
    role: 'Green Internship Trainee',
    company: '1M1B Green Skills Academy (Supported by Salesforce & AICTE)',
    period: 'Feb 2026 – Mar 2026 (8 Weeks)',
    description: 'Successfully completed the AICTE-supported Green Internship. Completed 30 hours of sustainability learning and 30 hours of live project work. Applied sustainable development concepts to real-world projects. Enhanced problem-solving, teamwork, communication, and project execution skills.',
    certificateUrl: 'https://drive.google.com/file/d/1xCsT158z3dgkH9zx0xJkRjtK77_3TQLl/view?usp=sharing',
  },
  {
    role: 'Software Testing Intern',
    company: 'Chennai Metro Rail Limited',
    period: '1 June 2026 – 30 June 2026',
    description: 'Manual and functional testing, test case design, bug tracking & reporting, with hands-on experience in travel system operations.',
    certificateUrl: 'https://drive.google.com/file/d/1JAOOAyu5DJ9W_CL7eCn-Q7UTAQ2-5Og8/view?usp=sharing'
  }
];
