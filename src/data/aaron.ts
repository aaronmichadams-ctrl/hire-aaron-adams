/**
 * Every word on the site lives here. Edit this file, not the components.
 *
 * Sources: the brief Aaron wrote for this build, and AaronAdamsResume2026.pdf.
 * Rule: never invent a metric, title, date or quote. Anything missing or in
 * conflict between the two sources is written as a visible `TODO(aaron): ...`
 * so it cannot ship by accident. Search the repo for "TODO(aaron)" to find them.
 * Copy rule: no em dashes anywhere. `npm run lint:copy` checks for them.
 */

export type Receipt = {
  id: string;
  /** The itemized line, e.g. "1x enrollment push" */
  item: string;
  /** The total, printed big, e.g. "+110%" */
  total: string;
  /** Plain-language version of the metric */
  plain: string;
  /** Where it happened */
  where: string;
  /** The "how" side of the receipt */
  how: string[];
};

export type Ticket = {
  id: string;
  /** The problem a recruiter might hand me */
  problem: string;
  /** Short label for the ticket stub */
  table: string;
  /** What I actually did, in two or three short sentences */
  answer: string;
  /** Receipt number that backs it up, if any */
  receiptId?: string;
  /** The job it came from */
  from: string;
};

export type Station = {
  id: string;
  org: string;
  title: string;
  dates: string;
  /** One-word station label for the rail, kitchen style */
  station: string;
  ran: string[];
  taught: string;
};

export type Venture = {
  id: string;
  name: string;
  when: string;
  pitch: string;
  status: 'shipped' | 'still cooking' | 'retired';
  happened: string;
  taught: string;
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
  linkedin: 'TODO(aaron): LinkedIn URL',
  resumePdf: '/AaronAdamsResume2026.pdf',
  headline: 'Hand me a problem.',
  positioning:
    "I'm the person you hand a problem to. I build and run operations for growing businesses: process design, inventory and supply chain, hiring and staffing, fulfillment, and the systems that connect them.",
  roles: 'Operations · Program management · Growth · General management',
};

export const receipts: Receipt[] = [
  {
    id: '0001',
    item: '1x company, from idea',
    total: 'PROFITABLE',
    // CONFLICT: the brief says "in its first year". The PDF only says
    // "Started the business from nothing and made it profitable."
    plain: 'Took NXT from idea to profitable in its first year.',
    where: 'NXT · Founder & Operator',
    how: [
      'Owned every step of the customer journey myself: outreach, sales calls, contracts, program design, staffing and delivery.',
      'Staffed programs with independent contractor coaches.',
      'Built a base of repeat customers and partnerships that send steady referrals.',
      'TODO(aaron): confirm "in its first year". Your resume PDF says "made it profitable" without a timeframe.',
    ],
  },
  {
    id: '0002',
    item: '1x enrollment push',
    total: '+110%',
    plain: '110% enrollment lift in one week from a targeted marketing push.',
    where: 'NXT · Founder & Operator',
    how: [
      'Ran a targeted marketing push alongside a new digital platform that delivers the service remotely, nationwide.',
      'Backed it with automated, trigger-based follow-ups: instructions before a session, a feedback request after, a referral prompt after signup.',
      'Ran co-marketing with partner clubs, formalized through MOUs.',
    ],
  },
  {
    id: '0003',
    item: 'participants, planned + run',
    total: '1,100+',
    plain: '1,100+ participants planned and run through camp programming.',
    where: 'WinShape Camps · Operations & Logistics Assistant',
    how: [
      'Planned programming and daily logistics for concurrent programs.',
      'Ran setup and teardown so every day started and finished on time.',
      'Coordinated staff across programs running at the same time.',
    ],
  },
  {
    id: '0004',
    item: 'inventory items, tracked',
    total: '125,000+',
    plain: '125,000+ inventory items tracked across concurrent programs.',
    where: 'WinShape Camps · Operations & Logistics Assistant',
    how: [
      'Tracked items across programs running at the same time.',
      'TODO(aaron): add the tool you used to track it (spreadsheet, platform, etc.) if you want it named.',
    ],
  },
];

export const tickets: Ticket[] = [
  {
    id: 'enrollment',
    table: 'T1',
    problem: 'Our enrollment is flat.',
    answer:
      'At NXT I ran a targeted marketing push that lifted enrollment 110% in one week. Then I kept it from sliding back with automated follow-ups and referral prompts, plus co-marketing with partner clubs.',
    receiptId: '0002',
    from: 'NXT · Founder & Operator',
  },
  {
    id: 'inventory',
    table: 'T2',
    problem: 'Inventory is a mess across three sites.',
    answer:
      'At WinShape Camps I tracked 125,000+ inventory items across programs running at the same time. Before that I rebuilt ordering and inventory systems at Copper Coin Coffee and ran inventory control in a high-volume Chick-fil-A kitchen.',
    receiptId: '0004',
    from: 'WinShape Camps · Operations & Logistics Assistant',
  },
  {
    id: 'launch',
    table: 'T3',
    problem: 'We need this launched and profitable fast.',
    answer:
      'I started NXT from nothing and made it profitable. I own the whole thing: outreach, sales calls, contracts, program design, staffing and delivery.',
    receiptId: '0001',
    from: 'NXT · Founder & Operator',
  },
  {
    id: 'peak',
    table: 'T4',
    problem: 'Our team falls apart in peak season.',
    answer:
      'At Chick-fil-A I built shift structures for clean handoffs in a high-volume kitchen. At WinShape Camps I helped plan and run programming for 1,100+ participants, with setup and teardown that kept every day on time.',
    receiptId: '0003',
    from: 'Chick-fil-A · Kitchen Manager, and WinShape Camps',
  },
  {
    id: 'surprise',
    table: '??',
    problem: 'Surprise me.',
    answer:
      'In middle school I went on a kids\' version of Shark Tank to pitch Woof Water, a low-calorie powdered dog treat you sprinkle into water. Crystal Light for dogs. I have been starting things ever since.',
    from: 'The Test Kitchen · Woof Water',
  },
];

export const stations: Station[] = [
  {
    id: 'chickfila',
    org: 'Chick-fil-A',
    title: 'Kitchen Manager',
    dates: 'Aug 2020 to Jun 2022',
    station: 'Grill',
    ran: [
      'Daily operations and a team of 10+ in a high-volume kitchen.',
      'Changed the process to get more orders out.',
      'Built shift structures for clean handoffs.',
      'Training, inventory control and efficiency.',
      // CONFLICT: brief says "youngest manager there". PDF says "Promoted to
      // the youngest member of the kitchen leadership team."
      'TODO(aaron): pick one. Brief: "the youngest manager there." PDF: "youngest member of the kitchen leadership team."',
    ],
    taught: 'TODO(aaron): one line on what the kitchen line taught you.',
  },
  {
    id: 'copper',
    org: 'Copper Coin Coffee',
    title: 'Kitchen Supervisor',
    dates: 'Sep 2021 to Sep 2022',
    station: 'Bar',
    ran: [
      'Led a team of 10+ and handled inventory and purchasing for the kitchen and front of house.',
      'Changed the layout and the ordering and inventory systems to make daily service go faster.',
    ],
    taught: 'TODO(aaron): one line on what Copper Coin taught you.',
  },
  {
    id: 'myaudiopet',
    org: 'My Audio Pet',
    // CONFLICT: brief lists My Audio Pet as an owner-level role and a separate
    // "Warehouse & Fulfillment Supervisor" job with unknown company and dates.
    // PDF lists "Warehouse & Fulfillment Supervisor | My Audio Pet, Aug 2018 to Mar 2023".
    title: 'TODO(aaron): title. Brief says owner-level role. PDF says Warehouse & Fulfillment Supervisor.',
    dates: 'Aug 2018 to Mar 2023',
    station: 'Pack',
    ran: [
      'Ran fulfillment for hundreds of orders a day.',
      'Rebuilt the packing system to make it faster and more accurate.',
      'Handled scheduling and payroll for the warehouse staff.',
    ],
    taught: 'TODO(aaron): one line on what My Audio Pet taught you.',
  },
  {
    id: 'winshape',
    org: 'WinShape Camps',
    title: 'Operations & Logistics Assistant',
    dates: 'Summer 2023',
    station: 'Expo',
    ran: [
      'Planned and ran programming and daily logistics for 1,100+ participants.',
      'Kept track of 125,000+ items of inventory across programs running at the same time.',
      'Ran setup and teardown so every day started and finished on time.',
    ],
    taught: 'TODO(aaron): one line on what WinShape taught you.',
  },
  {
    id: 'atlutd',
    org: 'Atlanta United FC',
    // TODO from brief: confirm which title(s) to show.
    title: 'Program & Operations Specialist',
    dates: 'Jan 2023 to Jun 2025',
    station: 'Pass',
    ran: [
      'Ran the daily school and logistics side for 15+ program members alongside a private international school.',
      'Handled food service and delivery for 38 members across two program groups.',
      'Kept scheduling, attendance and compliance straight for in-person and remote programming at once.',
      'Kept everything running while the group traveled for days at a time, in the US and abroad.',
      'TODO(aaron): confirm which title(s) to show. Also show "Academy Learning Specialist"?',
    ],
    taught: 'TODO(aaron): one line on what a pro club taught you.',
  },
  {
    id: 'nxt',
    org: 'NXT',
    title: 'Founder & Operator',
    dates: 'Aug 2023 to present',
    station: 'Owner',
    ran: [
      'Started a youth sports services company from nothing and made it profitable.',
      'Own the entire customer journey: outreach, sales calls, contracts, program design, planning, staffing and fulfillment.',
      'Staff with independent contractor coaches.',
      'Built automated, trigger-based marketing: pre-session instructions, post-session feedback requests, post-signup referral prompts.',
      'Run co-marketing with partner clubs, formalized through MOUs.',
      'Built a digital platform to deliver the service remotely, which opened up customers nationwide.',
      'Ran events for 115+ participants with a staff of 6 across 30+ hours of programming.',
    ],
    taught: 'TODO(aaron): one line on what running your own company taught you.',
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
    taught: 'TODO(aaron): what Woof Water taught you, in one line.',
  },
  {
    id: 'clothing',
    name: 'The clothing business',
    when: 'High school',
    pitch: 'TODO(aaron): one line on what you sold and to whom.',
    status: 'retired',
    happened: 'TODO(aaron): what happened to it.',
    taught: 'TODO(aaron): what it taught you, in one line.',
  },
  {
    id: 'soap',
    name: 'The soap and fragrance business',
    when: 'High school',
    pitch: 'TODO(aaron): one line on the product.',
    status: 'retired',
    happened: 'TODO(aaron): what happened to it.',
    taught: 'TODO(aaron): what it taught you, in one line.',
  },
  {
    id: 'myaudiopet',
    name: 'My Audio Pet',
    when: '2018 to 2023',
    pitch: 'TODO(aaron): one-line description of what My Audio Pet is.',
    status: 'retired',
    happened: 'Ran fulfillment for hundreds of orders a day and rebuilt the packing system.',
    taught: 'TODO(aaron): what it taught you, in one line.',
  },
  {
    id: 'nxt',
    name: 'NXT',
    when: '2023 to now',
    pitch: 'Youth sports services: one-on-one and group programs, events, and a remote platform.',
    status: 'shipped',
    happened: 'Profitable. Still running. 110% enrollment lift in one week.',
    taught: 'TODO(aaron): what NXT taught you, in one line.',
  },
];

export const testKitchen = {
  motto: 'Make 50 things. Throw away 47. Talk about the 3.',
  intro:
    "I've started a lot of things. Some worked, some taught me more by not working. That ratio is the point.",
};

/**
 * TODO(aaron): PRINCIPLES.md was not in the repo, so these use the principles
 * quoted in your build brief. Swap in your exact wording once the file is added.
 */
export const principles: Principle[] = [
  {
    id: 'bad-first',
    line: 'Finish the bad version first.',
    proof:
      'This site. The first version was ugly, complete and running before a single color got picked.',
  },
  {
    id: 'make-many',
    line: 'Make a lot of things. Keep the few that work.',
    proof: 'Woof Water, a clothing business, a soap business, My Audio Pet, then NXT. One of those is the one that stuck.',
  },
  {
    id: 'other-end',
    line: 'Advocate for the person on the other end.',
    proof:
      'Every NXT family gets instructions before a session and a feedback request after. Nobody shows up guessing.',
  },
  {
    id: 'floor',
    line: 'Correct is the floor.',
    proof:
      'At My Audio Pet I rebuilt the packing system so hundreds of orders a day went out faster and more accurately.',
  },
  {
    id: 'own-it',
    line: 'Own it, start to finish.',
    proof:
      'At NXT I own the whole customer journey: outreach, sales, contracts, program design, staffing and delivery.',
  },
];

export const skills = [
  {
    name: 'Operations',
    items: 'Process design, scheduling, inventory & supply chain, cost control, vendors & logistics',
  },
  {
    name: 'Starting things',
    items: 'New service lines, programs and revenue channels, profitable from day one',
  },
  {
    name: 'Growth',
    items: 'Partnerships & referrals, customer acquisition, digital marketing & analytics, retention',
  },
  {
    name: 'People',
    items: 'Hiring & training, staffing structures, leading teams through busy periods',
  },
];

export const tools = 'Excel, Word, PowerPoint. Adobe Photoshop, Premiere, Lightroom. CRM and scheduling platforms.';

export const education = {
  // CONFLICT: brief says "B.A. Business Administration & Digital Innovation,
  // Digital Entrepreneurship, 2025". PDF says "B.S., Digital Entrepreneurship &
  // Innovation, Jun 2025".
  degree:
    'TODO(aaron): confirm degree. Brief: "B.A. Business Administration & Digital Innovation, Digital Entrepreneurship". PDF: "B.S., Digital Entrepreneurship & Innovation".',
  school: 'GBSB Global Business School',
  year: '2025',
  extra: 'Lived in Spain for 4 months in 2022. Studied Spanish through level 3.',
  leadership: 'Small Group Leader, Woodstock City Church',
};

export const contact = {
  heading: 'Order up.',
  intro: 'Got a problem that needs an owner? Put it on the rail.',
  signoff: "Send me the problem. I'll send back exactly what you ordered, on time.",
};

export const seo = {
  title: 'Aaron Adams · Operations & General Management · Atlanta',
  description:
    'Aaron Adams builds and runs operations for growing businesses: process design, inventory, staffing, fulfillment and growth. Based in the Atlanta metro. Hand him a problem.',
};

/**
 * Whiteboard direction (lab). General audience: operations, program management,
 * growth and general management. Not founder-focused.
 */
export const whiteboard = {
  hello: "Hi, I'm Aaron Adams.",
  line: 'I run operations, programs and teams.',
  open: 'Open to operations, program management, growth and general management roles.',
  positioning:
    'I build and run the operations that keep a business moving: process design, inventory and supply chain, hiring and staffing, fulfillment, and the systems that connect them.',
  scrollHint: "Keep scrolling. I'll keep writing.",
  bringHeading: 'What I bring to your team',
  numbersHeading: 'The numbers',
  lineHeading: "Where I've done it",
  startedHeading: "Things I've started",
  howHeading: 'How I work',
  contactHeading: "Let's talk.",
  contactIntro: 'Hiring for operations, programs or growth? I would love to hear what your team is working on.',
  signoff: 'This board gets erased every night. My follow-through does not.',
};

/** One real example per skill area, for the whiteboard mind map. */
export const skillProof: Record<string, string> = {
  Operations: '125,000+ inventory items tracked across concurrent programs at WinShape Camps.',
  'Starting things': 'Started NXT from nothing and made it profitable.',
  Growth: '110% enrollment lift in one week from a targeted marketing push.',
  People: 'Led teams of 10+ at Chick-fil-A and Copper Coin Coffee.',
};
