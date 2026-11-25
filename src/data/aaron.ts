/**
 * Every word on the site lives here. Edit this file, not the components.
 *
 * Sources: the brief Aaron wrote for this build, his feedback, and AaronAdamsResume2026.pdf
 * (the current download, updated Nov 2026).
 * Rule: never invent a metric, title, date or quote. Anything missing or in
 * conflict between the two sources is written as a visible `TODO(aaron): ...`
 * so it cannot ship by accident. Search the repo for "TODO(aaron)" to find them.
 * Copy rule: no em dashes anywhere. `npm run lint:copy` checks for them.
 */

export type Result = {
  id: string;
  /** The big number written on the board, e.g. "+110%" */
  figure: string;
  /** Plain-language version of the result */
  plain: string;
  /** Where it happened: "Org · Title" */
  where: string;
};

export type Job = {
  id: string;
  org: string;
  title: string;
  dates: string;
  ran: string[];
};

export type Venture = {
  id: string;
  name: string;
  when: string;
  pitch: string;
  status: 'still running' | 'retired' | 'in progress';
  happened: string;
  /** Optional link to the venture */
  url?: string;
  /** Optional one-line lesson. Leave out rather than guess. */
  taught?: string;
};

export type Principle = {
  id: string;
  line: string;
  proof: string;
};

export const person = {
  name: 'Aaron Adams',
  role: 'Operations and general management',
  location: 'Atlanta metro, GA',
  email: 'aaronmichadams@gmail.com',
  phone: '678-800-3905',
  phoneHref: 'tel:+16788003905',
  site: 'hireaaronadams.com',
  url: 'https://hireaaronadams.com',
  linkedin: 'https://www.linkedin.com/in/aaron-adams96/',
  resumePdf: '/AaronAdamsResume2026.pdf',
  positioning:
    'I build and run the operations that keep a business moving: process design, inventory and supply chain, hiring and staffing, fulfillment, and the systems that connect them.',
};

/** The words written on the board. */
export const board = {
  hello: "Hi, I'm Aaron Adams.",
  line: 'I run operations, programs and teams.',
  open: 'Open to operations, program management, growth and general management roles.',
  scrollHint: "Keep scrolling. I'll keep writing.",
  bringHeading: 'What I bring to your team',
  numbersHeading: 'The numbers',
  jobsHeading: "Where I've done it",
  startedHeading: "Things I've started",
  startedIntro:
    "I've been starting things since middle school. Some worked, some taught me more by not working.",
  howHeading: 'How I work',
  contactHeading: "Let's talk.",
  contactIntro: 'Hiring for operations, programs or growth? I would love to hear what your team is working on.',
  signoff: "Leave me a note. I'll follow up before the marker dries.",
};

export const results: Result[] = [
  {
    id: 'profitable',
    figure: 'Year one',
    plain: 'Took NXT from an idea to profitable in its first year.',
    where: 'NXT · Founder & Operator',
  },
  {
    id: 'enrollment',
    figure: '+110%',
    plain: '110% enrollment lift in one week from a targeted marketing push.',
    where: 'NXT · Founder & Operator',
  },
  {
    id: 'participants',
    figure: '1,100+',
    plain: '1,100+ participants planned and run through camp programming.',
    where: 'WinShape Camps · Operations & Logistics Assistant',
  },
  {
    id: 'inventory',
    figure: '125,000+',
    plain: '125,000+ inventory items tracked across concurrent programs.',
    where: 'WinShape Camps · Operations & Logistics Assistant',
  },
];

/** Most recent first. The board shows them oldest first. */
export const jobs: Job[] = [
  {
    id: 'nxt',
    org: 'NXT',
    title: 'Founder & Operator',
    dates: 'Aug 2023 to present',
    ran: [
      'Started a youth sports services company with only an idea and made it profitable in year one.',
      'Built the whole NXT operation: partnerships, staffing, training, logistics (housing, food and equipment), supply chain and marketing.',
      'Own the entire customer journey: outreach, sales calls, contracts, onboarding, program design, staffing and fulfillment.',
      'Staff with independent contractor coaches.',
      'Built automated, trigger-based marketing: pre-session instructions, post-session feedback requests, post-signup referral prompts.',
      'Run co-marketing with partner clubs, formalized through MOUs.',
      'Built a digital platform to deliver the service remotely, which opened up customers nationwide.',
      'Ran events for 115+ participants with a staff of 6 across 30+ hours of programming.',
      'Built a base of repeat customers and grew revenue in both the one-on-one and group services.',
    ],
  },
  {
    id: 'winshape',
    org: 'WinShape Camps',
    title: 'Operations & Logistics Assistant',
    dates: 'Summer 2023',
    ran: [
      'Planned and ran programming and daily logistics for 1,100+ participants.',
      'Kept track of 125,000+ items of inventory across programs running at the same time.',
      'Ran setup and teardown so every day started and finished on time.',
    ],
  },
  {
    id: 'atlutd',
    org: 'Atlanta United FC',
    title: 'Program & Operations Specialist',
    dates: 'Jan 2023 to Jun 2025',
    ran: [
      'Ran daily school and logistics for 20+ program members with a partner private international school.',
      'Kept scheduling, attendance and compliance records accurate for in-person and remote programming at once.',
      'Handled food service and delivery for 40+ members across two program groups.',
      'Kept the program running while the group traveled for days at a time, in the US and abroad.',
    ],
  },
  {
    id: 'copper',
    org: 'Copper Coin Coffee',
    title: 'Kitchen Supervisor',
    dates: 'Sep 2021 to Sep 2022',
    ran: [
      'Led a team of 10+ in a high-volume coffee shop and handled vendor purchasing for the kitchen and front of house.',
      'Rebuilt the kitchen layout and the ordering and inventory systems to make daily service go faster.',
    ],
  },
  {
    id: 'chickfila',
    org: 'Chick-fil-A',
    title: 'Kitchen Manager',
    dates: 'Aug 2020 to Jun 2022',
    ran: [
      'Ran daily operations and a team of 10+ in a high-volume kitchen with a customer-first standard.',
      'Changed the process to get more orders out.',
      'Built shift structures for clean handoffs.',
      'Promoted to the youngest member of the kitchen leadership team.',
    ],
  },
  {
    id: 'myaudiopet',
    org: 'My Audio Pet',
    // Aaron: not a venture of his, and he did not rebuild the packing system.
    title: 'Warehouse & Fulfillment Supervisor',
    dates: 'Aug 2018 to Mar 2023',
    ran: [
      'Ran fulfillment for hundreds of orders a day.',
      'Handled scheduling and payroll for the warehouse staff.',
    ],
  },
];

export const ventures: Venture[] = [
  {
    id: 'woof',
    name: 'Woof Water',
    when: 'Middle school',
    pitch: 'A low-calorie powdered dog treat you sprinkle into water. Crystal Light for dogs.',
    status: 'retired',
    happened: "Pitched it on a kids' version of Shark Tank.",
  },
  {
    id: 'nxt',
    name: 'NXT Soccer',
    when: '2023 to now',
    pitch: 'Youth sports services: one-on-one and group programs, events, and a remote platform.',
    status: 'still running',
    happened:
      'Built the whole operation myself: partnerships, staffing, training, logistics, supply chain and marketing. Profitable in year one.',
  },
  {
    id: 'rentmobili',
    name: 'Mobili',
    when: 'Now',
    // From rentmobili.com's own copy.
    pitch: 'A peer-to-peer furniture rental marketplace. Rent furniture from local owners for 3 to 12 months, delivered and set up.',
    status: 'in progress',
    happened: "What I'm building right now. The demo is live, and the Atlanta pilot is planned for 2027.",
    url: 'https://www.rentmobili.com',
  },
];

/** In Aaron's own words, from his resume: "I move fast, I track everything, and I follow up until the next step is on the calendar." */
export const principles: Principle[] = [
  {
    id: 'fast',
    line: 'I move fast.',
    proof: 'A targeted marketing push at NXT lifted enrollment 110% in one week.',
  },
  {
    id: 'track',
    line: 'I track everything.',
    proof: '125,000+ inventory items across programs running at the same time at WinShape Camps.',
  },
  {
    id: 'follow-up',
    line: 'I follow up until the next step is on the calendar.',
    proof: 'NXT runs on automated follow-up: pre-session confirmations, post-session feedback requests and referral prompts.',
  },
  {
    id: 'customer',
    line: 'Customer first.',
    proof: 'I ran a high-volume Chick-fil-A kitchen to a customer-first standard, with shift structures built for clean handoffs.',
  },
  {
    id: 'whole-thing',
    line: 'I build the whole operation, not just my piece.',
    proof: 'At NXT that meant partnerships, staffing, training, housing, food, equipment, supply chain and marketing.',
  },
];

export const skills = [
  {
    name: 'Operations',
    items: 'Process design, scheduling, inventory & supply chain, cost control, vendors & logistics',
    proof: 'Built the NXT operation end to end: staffing, training, housing, food, equipment and supply chain.',
  },
  {
    name: 'Starting things',
    items: 'New service lines, programs and revenue channels, built from scratch and made profitable',
    proof: 'Started NXT with only an idea and made it profitable in year one.',
  },
  {
    name: 'Growth',
    items: 'Partnerships & referrals, customer acquisition, digital marketing & analytics, retention',
    proof: '110% enrollment lift in one week from a targeted marketing push.',
  },
  {
    name: 'People',
    items: 'Hiring & training, staffing structures, leading teams through busy periods',
    proof: 'Led teams of 10+ at Chick-fil-A and Copper Coin Coffee.',
  },
];

export const tools = 'Excel, Word, PowerPoint. Canva. Adobe Photoshop, Premiere, Lightroom. CRM and scheduling platforms.';

export const education = {
  degree: 'B.S., Digital Entrepreneurship & Innovation',
  school: 'GBSB Global Business School',
  year: 'Jun 2025',
  extra: 'Lived in Spain for 4 months in 2022. Studied Spanish through level 3.',
  leadership: 'Small Group Leader, Woodstock City Church',
};

export const seo = {
  title: 'Aaron Adams · Operations, programs and teams · Atlanta',
  description:
    'Aaron Adams runs operations, programs and teams: process design, inventory and supply chain, hiring and staffing, fulfillment and growth. Based in the Atlanta metro.',
};
