// Content for the Quant Campus Scholar case study page (/work/quant-scholars).
// Everything here is from Ahmad's role at Quant or observable in the live portal
// (screenshots and API calls taken from https://scholars.getquant.app in November 2026,
// signed in as Ahmad). Other students' names (leaderboard) and personal details
// (matric number, phone) are deliberately not shown.

const shots = '/work/quant-scholars';

export const quantScholars = {
  path: '/work/quant-scholars',
  title: 'Campus Scholar',
  subtitle: 'Turning lecture notes into a shared library, and contributors into a community.',
  lede:
    'Quant is an AI study assistant that Nigerian university students use on WhatsApp. Campus Scholar is the web portal where students upload course materials that feed it, earn points for approved uploads and redeem them for rewards. I built the portal\'s frontend, along with Quant\'s admin portal and email templates.',
  live: 'https://scholars.getquant.app',
  meta: [
    ['Role', 'React frontend developer, since May 2026'],
    ['Stack', 'Next.js · React · Tailwind CSS · REST API · Netlify'],
    ['Company', 'Quant (formerly TALIB-HQ)'],
    ['Status', 'Live'],
  ],
  hero: { src: `${shots}/dashboard.webp`, size: [1280, 800], alt: 'The Campus Scholar dashboard: points earned, reward tiers and recent uploads' },

  idea: {
    paragraphs: [
      'Quant answers students\' questions and sends lecture notes, summaries and past questions straight into WhatsApp. That only works if it has good material for each course, at each university and level.',
      'Campus Scholar turns that problem over to the students themselves. Anyone can sign up with their institution, faculty and department, upload notes for their courses, and get rewarded once the material is approved. Every upload helps the classmates who come after them.',
    ],
    quote: 'Your department\'s entire library.',
    quoteSource: 'The Campus Scholar sign-in page',
    login: { src: `${shots}/login.webp`, size: [1280, 800], alt: 'The Campus Scholar sign-in page' },
  },

  features: [
    {
      title: 'A dashboard that shows progress at a glance',
      text: 'Students land on their points balance, a row of twelve reward tiers from 50 to 1,500 points with a progress ring on the next one, their recent uploads with review status, a top contributors leaderboard and a feed of recent wins: approved uploads, unlocked badges and redeemed rewards.',
      image: { src: `${shots}/dashboard.webp`, size: [1280, 800], alt: 'Dashboard with points, reward tiers and recent uploads' },
    },
    {
      title: 'An upload flow that does the tedious parts',
      text: 'Drag and drop a DOC, PDF or PPTX file of up to 300 MB, then add its details. Typing a course code fills in the course name and semester. Materials are tagged by level and category (lecture notes, past questions or summaries), and the sidebar shows what each one earns. Uploads go into a review queue as Pending, then come back Approved, Rejected or Flagged.',
      image: { src: `${shots}/upload.webp`, size: [1280, 800], alt: 'Upload Document form with points per material type' },
    },
    {
      title: 'Rewards worth contributing for',
      text: 'Points convert into quants, the credit students spend chatting with the assistant, or into mobile airtime or branded merchandise, from a journal to a T-shirt or hoodie with a size picker. Students can see their full redemption history, and earn badges such as First Upload and Top Dept Contributor along the way.',
      image: { src: `${shots}/rewards.webp`, size: [1280, 800], alt: 'Rewards catalogue: Quant tokens, airtime voucher and branded merchandise' },
    },
    {
      title: 'Accounts, from sign-up to reset',
      text: 'Sign-up collects a student\'s institution, faculty and department, then verifies their email with a one-time code before they can log in. Forgot and reset password flows, an account page with contribution stats and badges, and a dark mode that remembers the student\'s choice complete the set.',
    },
    {
      title: 'The admin portal and email templates',
      text: 'I built Quant\'s admin portal for the team running the platform, and wired its REST API into the interface page by page. I also built Quant\'s Welcome and one-time-code emails as React templates.',
    },
  ],

  mobile: {
    src: `${shots}/dashboard-mobile.webp`,
    size: [780, 1500],
    alt: 'The Campus Scholar dashboard on a phone',
    text: 'Quant lives on WhatsApp, so its students are on their phones, and every screen works there. On a small screen the navigation collapses into a menu, the reward tiers scroll sideways, and the uploads table becomes a stack of cards.',
  },

  architecture: {
    layers: [
      { name: 'Next.js (App Router) + Tailwind CSS', detail: 'The portal: auth flows, dashboard, uploads, rewards, account' },
      { name: 'Quant REST API', detail: 'Students, documents, points, badges and leaderboard, called with a bearer token' },
      { name: 'Netlify', detail: 'Hosting, after I led the move from Render' },
    ],
    note: 'The API is built and run by Quant\'s backend team. My work is everything a student or admin sees and touches, and how it talks to that API.',
    endpoints: [
      ['POST', '/auth/register', 'Create a Campus Scholar account'],
      ['POST', '/auth/student-login', 'Sign in and receive a token'],
      ['GET', '/students/me', 'The signed-in student\'s profile'],
      ['GET', '/documents/mine', 'My uploads, by session and semester'],
      ['GET', '/points/mine', 'Points balance and streak'],
      ['GET', '/points/mine/history', 'Every point earned and spent'],
      ['GET', '/badges/mine', 'Unlocked badges'],
      ['GET', '/leaderboard', 'Top contributors'],
    ],
    statuses: ['Pending', 'In Review', 'Approved', 'Rejected', 'Flagged'],
  },

  credits: 'The getquant.app landing page and the backend API were built by other members of the Quant team.',
};
