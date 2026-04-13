const mongoose = require('mongoose');
const Project = require('./models/Project');
const Experience = require('./models/Experience');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

const projects = [
  {
    title: 'Fluxora',
    subtitle: 'Workflow-Based Task Management System',
    description:
      'A Jira-inspired workflow management system with stage-based task transitions, priority scheduling, and an analytics dashboard built with React, TypeScript, and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'localStorage'],
    highlights: [
      'Developed a Jira-inspired workflow management system with stage-based task transitions (Backlog → Ready → In Progress → Done)',
      'Implemented priority-based task scheduling, filtering, and productivity analytics dashboard',
      'Built a responsive UI using React, TypeScript, and Tailwind CSS with localStorage-based persistence',
      'Designed modular and reusable components with a focus on clean UI/UX and performance',
    ],
    githubUrl: 'https://github.com/RishabhKothari',
    featured: true,
    order: 1,
  },
  {
    title: 'Rowing Federation of India',
    subtitle: 'Tournament Management System',
    description:
      'A comprehensive full-stack tournament management application to digitize and replace Excel-based workflows used in rowing competitions, handling multi-stage race progression.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    highlights: [
      'Built a comprehensive tournament management application to digitize and replace existing Excel-based workflows used in rowing competitions',
      'Designed the complete end-to-end workflow, enabling organizers to create tournaments, configure events, and manage participating associations and teams',
      'Implemented structured race progression including seeding, start list generation, and multi-stage transitions (Heats → Repechage → Semi-finals → Finals)',
      'Developed logic to handle team entries, lane assignments, and result processing across different competition stages',
      'Contributed to frontend UI and performed extensive testing to ensure accurate scheduling, smooth transitions, and reliable tournament execution',
    ],
    githubUrl: 'https://github.com/RishabhKothari',
    featured: true,
    order: 2,
  },
  {
    title: 'Tiffin Service Management System',
    subtitle: 'Web-Based Order & Delivery Management',
    description:
      'A web-based application to manage online tiffin service orders, customer details, and delivery tracking with a Java backend and MySQL database.',
    tech: ['Java', 'MySQL', 'HTML', 'CSS', 'JDBC'],
    highlights: [
      'Developed a web-based application to manage online tiffin service orders, customer details, and delivery tracking',
      'Designed and implemented a relational database using MySQL for managing users, menu items, and transactions',
      'Built the backend logic in Java, ensuring efficient CRUD operations and real-time updates',
      'Styled the frontend with HTML/CSS for a clean and responsive user interface',
      'Improved service efficiency by automating manual order management processes',
    ],
    githubUrl: 'https://github.com/RishabhKothari',
    featured: false,
    order: 3,
  },
];

const experience = [
  {
    role: 'Project Contributor',
    company: 'Rowing Federation of India — Tournament Management System',
    period: 'Oct. 2025 – Present',
    location: 'India',
    type: 'Open Source / Contract',
    bullets: [
      'Developed a full-stack tournament management application to replace legacy Excel-based workflows',
      'Designed and implemented backend logic for race progression (Heats → Repechage → Quarter-finals → Semi-finals → Finals)',
      'Contributed to end-to-end system flow, from tournament creation to final result processing',
      'Performed testing and debugging to ensure accuracy in race scheduling and result handling',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    order: 1,
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Experience.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert new data
    await Project.insertMany(projects);
    console.log(`✅ Seeded ${projects.length} projects`);

    await Experience.insertMany(experience);
    console.log(`✅ Seeded ${experience.length} experience entries`);

    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err);
    process.exit(1);
  }
}

seed();
