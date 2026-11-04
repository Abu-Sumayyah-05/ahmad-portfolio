// Featured case studies, in display order.
// `kind` drives the label: 'company' | 'client' | 'team' | 'personal'.
// Only real links go in `link`; leave it out for private work.
export const featured = [
  {
    id: 'edugear',
    title: 'EduGear',
    kind: 'company',
    org: 'A4 Technologies',
    status: 'Live',
    summary:
      'A multi-tenant school management SaaS for Nigerian secondary schools, covering finance, results and a parent portal.',
    details: [
      ['Role', 'Frontend implementation and UI integration lead'],
      ['Stack', 'Next.js · TypeScript · Tailwind CSS · TanStack Query'],
      ['Built', 'Role-based dashboards for Admin, Principal, Bursar, Teacher and Parent; fee tracking; results; parent portal'],
      ['Challenge', 'Turning Google Stitch designs into five dashboards that stay usable on low-bandwidth school connections'],
    ],
    note: 'Backend (NestJS, Prisma, PostgreSQL) built by the lead developer.',
    image: '/projects/edugear.webp',
    imageSize: [1280, 588], // real dashboard screenshot, wider than the default 16:10
    link: { label: 'Visit edugear.ng', href: 'https://edugear.ng' },
  },
  {
    id: 'getquant',
    title: 'Quant',
    kind: 'company',
    org: 'getquant.app',
    status: 'Live',
    summary:
      'An AI-powered WhatsApp assistant that helps Nigerian university students get lecture summaries, generate PDFs and prepare for exams.',
    details: [
      ['Role', 'React frontend developer, since May 2025'],
      ['Stack', 'React · REST APIs · Netlify'],
      ['Built', 'The Campus Scholar portal (scholars.getquant.app), where students upload course materials and earn redeemable points; the admin portal; API endpoints wired into the UI page by page; and Welcome and OTP email templates built in React'],
      ['Also', 'Led the hosting migration from Render to Netlify'],
    ],
    image: '/projects/quant-scholars.webp', // the Campus Scholar portal I built (the landing page is someone else's work)
    imageSize: [1280, 532],
    host: 'scholars.getquant.app',
    link: { label: 'Visit getquant.app', href: 'https://getquant.app' },
  },
  {
    id: 'al-qanitaat',
    title: 'Al Qanitaat',
    kind: 'own',
    status: 'Live',
    summary:
      'A home for beneficial knowledge for Muslim women: articles and lessons rooted in the Qur\'an and authentic Sunnah, managed through its own admin editor.',
    details: [
      ['Role', 'Built every part myself: frontend, backend, database and deployment'],
      ['Stack', 'React · Tailwind CSS · Node.js · Express · PostgreSQL · Render'],
      ['Built', 'Articles organised by topic, featured articles, a resources section, and an admin content editor for publishing'],
      ['Design', 'A warm cream and gold palette, built to feel calm and readable for long-form reading'],
    ],
    image: '/projects/al-qanitaat.webp',
    link: { label: 'Visit Al Qanitaat', href: 'https://al-qanitaat.onrender.com/' },
  },
  {
    id: 'dtbb',
    title: "D'TBB Logistics & Consult",
    kind: 'client',
    status: 'Live',
    summary:
      'A complete company website for a Nigerian logistics firm, delivered end to end: from design to domain, email and handover.',
    details: [
      ['Role', 'Solo: design, build, deployment and handover'],
      ['Stack', 'React · TypeScript · Tailwind CSS · Vite · Netlify'],
      ['Built', 'Fleet gallery with lightbox, EmailJS quote form, Google Maps contact page'],
      ['Beyond code', 'SEO (sitemap, robots.txt, Search Console), domain and an 8-mailbox Zoho email setup with a handover guide'],
    ],
    image: '/projects/dtbb.webp',
    link: { label: 'Visit dtbblogistics.com', href: 'https://dtbblogistics.com' },
  },
  {
    id: 'solariq',
    title: 'SolarIQ',
    kind: 'team',
    status: 'Winner · Nexus Hackathon',
    summary:
      'A solar panel efficiency monitor, and the project where my engineering degree and my code meet.',
    details: [
      ['Role', 'Software: the React dashboard and Firebase data layer'],
      ['Stack', 'React · Vite · Tailwind CSS · Firebase Realtime Database'],
      ['Built', 'Expected vs. actual power, efficiency and soiling ratio, panel condition and cleaning status, efficiency reports'],
      ['Result', 'Our team won the Nexus Hackathon'],
    ],
    note: 'ESP32 hardware built by teammates.',
    image: '/projects/solariq.webp',
    link: { label: 'Live demo', href: 'https://solarefficiencymonitoringsystem.netlify.app' },
  },
];

// Smaller projects, shown as a compact list under the case studies
export const more = [
  { title: 'TransactFlow', tag: 'Backend · Fintech', text: 'My solo TechCrush backend capstone: a payment-processing system built with Node.js and Express.' },
  { title: 'TeachSense', tag: 'Team · Real-time', text: 'Classroom intelligence system. I built the React/TypeScript frontend and the real-time lecturer dashboard over WebSockets, on a Django Channels backend.', href: 'https://teachsense.onrender.com/docs/' },
  { title: 'Golden Emporium', tag: 'UI design', text: 'Luxury e-commerce interface styled as an auction catalogue: parchment, forest green and antique brass, with lot numbers and ink-stamp details.' },
  { title: 'Madrasah result-sheet generator', tag: 'Python · Pillow', text: 'Renders Arabic report sheets for Ahlul Kitaab Was-Sunnah Academy, built as a reusable library.' },
  { title: 'eCommerce store', tag: 'React · Paystack', text: 'Product listing, cart and checkout with Paystack test payments, from my AltSchool frontend training.', href: 'https://ecommercewebsitealtschool.netlify.app/' },
];

// Kept for later. Not rendered while the project stays private.
export const hidden = [
  {
    id: 'hifz-companion',
    title: 'Hifz Companion',
    summary: 'Offline-first app for reviewing Quran and Hadith memorisation, word by word.',
  },
];
