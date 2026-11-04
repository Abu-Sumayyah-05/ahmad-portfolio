// Content for the Al Qanitaat case study page (/work/al-qanitaat).
// Everything here is either from Ahmad or observable on the live site (screenshots and API
// taken from https://al-qanitaat.onrender.com in November 2026).

const shots = '/work/al-qanitaat';

export const alQanitaat = {
  path: '/work/al-qanitaat',
  title: 'Al Qanitaat',
  subtitle: 'A calm home for beneficial knowledge for Muslim women.',
  lede:
    'An Islamic knowledge platform I built end to end: the React frontend, the Node.js and Express API, the PostgreSQL database, the admin editor and the deployment. It is our own project, run together with friends.',
  live: 'https://al-qanitaat.onrender.com/',
  meta: [
    ['Role', 'Built every part: frontend, backend, database, deployment'],
    ['Stack', 'React · Tailwind CSS · Node.js · Express · PostgreSQL · Render'],
    ['Type', 'Own project, with friends'],
    ['Status', 'Live'],
  ],
  hero: { src: `${shots}/home.webp`, size: [1280, 800], alt: 'Al Qanitaat home page' },

  idea: {
    paragraphs: [
      'Al Qanitaat, "The Devoutly Obedient Women", collects articles and lessons for Muslim women in one place, rooted in the Qur\'an, the authentic Sunnah and the understanding of the Salaf.',
      'The content is organised into nine topics, from Aqeedah and Fiqh of Women to Health and Time Management, so a reader can go straight to what she needs.',
    ],
    quote: 'We want knowledge that benefits a sister in her faith, her home and her daily life to be easy to find and easy to return to.',
    quoteSource: "From Al Qanitaat's About page",
    topics: { src: `${shots}/topics.webp`, size: [1668, 681], alt: 'Explore by topic: nine topics, each with an Arabic letter badge' },
  },

  features: [
    {
      title: 'A reading experience built for long-form',
      text: 'Articles carry a byline, publish date and reading time, with Qur\'an quotations set apart and Arabic phrases rendered in IBM Plex Sans Arabic alongside the Latin text.',
      image: { src: `${shots}/article.webp`, size: [1280, 800], alt: 'An Al Qanitaat article page' },
    },
    {
      title: 'Sources, sharing and what to read next',
      text: 'Every article ends with numbered references, one-tap sharing to WhatsApp, Telegram and X (or copy link), and related articles from other topics. A reading-progress bar runs along the top of the page.',
      image: { src: `${shots}/article-references.webp`, size: [1280, 800], alt: 'References, share buttons and related articles at the end of an article' },
    },
    {
      title: 'Contributions, reviewed before publishing',
      text: 'Sisters can submit their own writing with a name or pseudonym. Submissions go to the team for review before anything is published, emails stay private, and a hidden honeypot field quietly filters out spam bots.',
      image: { src: `${shots}/contribute.webp`, size: [1280, 800], alt: 'The Contribute an article form' },
    },
    {
      title: 'An admin editor for the team',
      text: 'Behind a login at /admin, the team writes and publishes content through its own editor. The API checks the session on every admin request and answers 401 when nobody is signed in.',
    },
  ],

  architecture: {
    layers: [
      { name: 'React + Tailwind CSS', detail: 'Single-page app: routing, reading UI, contribute form, admin editor' },
      { name: 'Node.js + Express', detail: 'REST API: content, topics, submissions, admin session' },
      { name: 'PostgreSQL', detail: 'Articles, topics, authors, profiles and resources' },
    ],
    hosting: 'The site and its API are served from the same origin on Render.',
    endpoints: [
      ['GET', '/api/home', 'Featured and latest articles for the home page'],
      ['GET', '/api/articles?page=1&limit=12', 'Paginated article list'],
      ['GET', '/api/articles/:slug', 'One article, with references and related articles'],
      ['GET', '/api/categories', 'The nine topics, each with a slug and an Arabic letter'],
      ['GET', '/api/authors', 'Authors and their article counts'],
      ['GET', '/api/righteous-women', 'Profiles of righteous women'],
      ['GET', '/api/resources', 'Books and reading lists'],
      ['GET', '/api/admin/me', 'Admin session check (401 when signed out)'],
    ],
    articleFields: ['slug', 'title', 'excerpt', 'body', 'tag', 'author', 'publishedAt', 'time', 'references', 'related', 'fromSister', 'image'],
  },

  // The site's editorial promises (from its About page) and where each one lives in the product
  trust: [
    ['The author of every article is shown', 'Bylines on every article, backed by an authors endpoint'],
    ['Sources are credited', 'A numbered references section at the end of each article'],
    ['Contributions are reviewed first', 'Submissions wait for the team before anything goes live'],
    ['Only minimal personal data', 'The contribute form asks for a name or pseudonym and keeps email private'],
    ['Spam stays out', 'A hidden honeypot field catches bots without bothering real people'],
  ],

  design: {
    palette: [
      ['Deep brown', '#6e2e12'],
      ['Rust', '#a64a18'],
      ['Gold', '#d6a84f'],
      ['Sand', '#f8e4b2'],
      ['Cream', '#fff3cf'],
      ['Paper', '#fff9ea'],
    ],
    fonts: [
      { name: 'DM Sans', role: 'Headings and body', sample: 'Beneficial knowledge, kept in one place.' },
      { name: 'IBM Plex Sans Arabic', role: 'Arabic text', sample: 'القانتات', rtl: true },
    ],
    note: 'A warm cream and gold palette, built to feel calm and readable for long-form reading, with every page given its own title, description, social preview tags and canonical URL.',
    mobile: [
      { src: `${shots}/mobile-home.webp`, size: [780, 1688], alt: 'Al Qanitaat home page on a phone' },
      { src: `${shots}/mobile-article.webp`, size: [780, 1688], alt: 'An article on a phone' },
    ],
  },
};
