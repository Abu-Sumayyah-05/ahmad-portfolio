// Grouped skills. `level` is optional:
//   undefined → part of my regular toolkit
//   'worked'  → used on real projects, not my everyday stack
//   'learning'→ actively studying
export const skillGroups = [
  {
    title: 'Frontend',
    blurb: 'Where I am strongest.',
    items: [
      { name: 'React' },
      { name: 'Next.js (App Router)' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS v4' },
      { name: 'Vite' },
      { name: 'TanStack Query' },
      { name: 'Zustand' },
      { name: 'React Native' },
      { name: 'Vue', level: 'worked' },
    ],
  },
  {
    title: 'Backend',
    blurb: 'APIs, auth and data.',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'PostgreSQL' },
      { name: 'REST API design' },
      { name: 'JWT auth (access + refresh)' },
      { name: 'WebSockets' },
      { name: 'NestJS + Prisma', level: 'worked' },
      { name: 'Django / Channels', level: 'worked' },
      { name: 'Firebase', level: 'worked' },
    ],
  },
  {
    title: 'Ship & tooling',
    blurb: 'Getting it live and keeping it there.',
    items: [
      { name: 'Netlify · Render · Railway' },
      { name: 'Git & GitHub' },
      { name: 'DNS & email (Zoho, MX/SPF/DKIM)' },
      { name: 'SEO & Search Console' },
      { name: 'EmailJS' },
      { name: 'Postman' },
    ],
  },
  {
    title: 'Design',
    blurb: 'From design file to production.',
    items: [
      { name: 'Figma → code' },
      { name: 'Google Stitch → code' },
      { name: 'Design systems' },
      { name: 'Typography' },
    ],
  },
  {
    title: 'Exploring',
    blurb: 'What I am learning now.',
    items: [
      { name: 'Payment systems (NIP, RTGS, PAPSS)', level: 'learning' },
      { name: 'Double-entry & reconciliation', level: 'learning' },
      { name: 'AI / LLM applications', level: 'learning' },
      { name: 'Python', level: 'learning' },
      { name: 'Embedded systems & IoT', level: 'learning' },
    ],
  },
];

export const journey = [
  { when: 'Mar 2026 — Now', title: 'Frontend Developer', org: 'A4 Technologies, Lagos', text: 'Frontend implementation and UI integration lead on EduGear, a multi-tenant school management platform.' },
  { when: 'May 2025 — Now', title: 'React Frontend Developer', org: 'Quant (getquant.app)', text: 'Built the Campus Scholar and admin portals and the email templates, and moved hosting from Render to Netlify.' },
  { when: 'Training', title: 'Becoming a Backend Engineer', org: 'TechCrush × Payaza', text: 'Backend program on the fintech mentorship track. Solo capstone: TransactFlow, a payment-processing system.' },
  { when: 'Diploma', title: 'Frontend Engineering', org: 'AltSchool Africa', text: 'HTML, CSS, JavaScript, React, Vue and frontend application architecture.' },
  { when: 'Training', title: 'Web Development', org: 'Almattech Academy', text: 'Where I first learned to build for the web.' },
  { when: 'Expected 2028', title: 'B.Eng. Electronic & Computer Engineering', org: 'Lagos State University (LASU)', text: '300 level. The "circuits by day" half of the story.' },
];
