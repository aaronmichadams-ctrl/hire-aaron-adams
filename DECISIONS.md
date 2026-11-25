# Decisions

> **Current design: the player profile (Nov 2026).** Everything below the profile section describes earlier versions (the canvas, the whiteboard, and the kitchen ideas before them) and is kept as history.

## The player profile

**Aaron's brief:** not Figma. He picked from three options modeled on rentmobili.com, fotmob.com and human-md.ai, and chose the FotMob route: "List my potential jobs as positions. List my job history in the former clubs section."

**What it borrows from a football player page:**
- **Profile band:** a red band with an "AA" badge, his name, and "Operations · Sales · Marketing · Programs". Download resume sits where a player page puts Follow.
- **Attribute grid:** the height-and-shirt-number grid becomes Atlanta, years of experience, roles held, Founder of NXT, his degree, and Spanish.
- **Position:** the roles he's open to are listed like a player's positions. Primary is Operations; the others are Sales, Marketing, Programs, Partnerships and General management. They're also drawn as chips on a pitch, like a formation, and are edited in `positions` in `src/data/aaron.ts`.
- **Career:** a "Current club" (NXT) and "Former clubs" list with a round crest per organization. Each one opens up to show what he ran there. This is the one place the job history lives on the page.
- **Career highlights:** the season-stats row becomes his four real results.
- **Things I've started:** sits where a player page lists trophies.

**What it deliberately leaves out:** player pages are full of ratings, percentages and radar charts. There are no real numbers for any of that, so none of it is invented. Every figure on the page is a real result.

**Conventions broken on purpose:**
1. **The hero headline:** replaced by a profile card. *Why:* a recruiter gets name, target roles, location, years of experience and a resume button in one glance, the way a scout reads a player card.
2. **The timeline:** replaced by current club and former clubs. *Why:* it's instantly familiar to anyone who has looked up a player. It reads newest first and keeps details one tap away instead of a wall of bullets.
3. **The skills list:** replaced by positions on a pitch. *Why:* it tells a recruiter which seats he can play, not just which keywords he knows. Operations is primary, and the rest are clearly secondary.

**40th tab:** on a phone, the first screen shows the name, target roles, Download resume, location and experience. On phones the Career card comes straight after the highlights. Nothing animates.

**Checks:**
- Lighthouse (mobile): 100 performance, 100 accessibility, 100 best practices, 100 SEO on `/` and `/resume`.
- Clubs open with Enter, focus is visible, and no page scrolls sideways at 375px or 390px.
- Printing `/` gives the plain resume, 2 pages.

**Removed:** the canvas design, its fonts, and the three lab options. They are all in git history.

## The canvas redesign

**Aaron's brief:** start over, lose "My boss is walking by," make it look less AI-generated, and take inspiration from Figma.

**What it borrows from Figma:**
- **The canvas:** a dotted gray canvas, with each section as a white frame labeled in small gray text above it (intro, results, experience, and so on).
- **Multiplayer:** "operations" carries a coral selection box with a name tag ("Aaron"), the way a collaborator's selection shows up in a shared file. A blue cursor labeled "You" hovers by the Download resume button. The recruiter is in the file with him.
- **The properties panel:** location, the roles he's open to, what he's doing right now, and contact details, laid out like a design tool's panel. The facts a recruiter scans for are in one predictable box.
- **The file bar:** "Aaron Adams / Portfolio 2026" on the left, and Download resume as the blue button where Figma puts Share.
- **Components:** the four skill areas are dashed purple component boxes, each with a comment pin holding one real result.
- **FigJam stickies** for the ventures, and a **comment thread** for "How I work."
- **A timeline** of every job on a real time axis, the kind of chart a program manager lives in. It shows the overlaps (fulfillment while running a kitchen; NXT alongside Atlanta United) that a list of dates hides. Each row opens for the details.

**How it avoids looking AI-generated:**
- No gradients, no glassy cards, no emoji, and no all-caps label above every heading.
- Sections don't all share one template: tiles, a chart, dashed components, stickies and a thread each look different.
- The color tiles have deliberately uneven shapes.
- The copy is plain and specific.
- The type is Instrument Sans for display and Inter (Figma's own UI font) for interface details.

**Conventions broken on purpose:**
1. **Hero as a centered slogan:** replaced by the name, one sentence, and a properties panel. *Why:* the 10-second facts (name, role, location, contact) sit in one scannable place instead of being sprinkled around.
2. **Gray vertical timeline:** replaced by a horizontal time-scaled chart. *Why:* it shows how long each job lasted and what overlapped, which says more about workload than a list does. Underneath it's still a plain ordered list, so phones get stacked rows and screen readers hear a normal list.
3. **Matching skill cards:** replaced by "components" that each carry proof. *Why:* no skill appears without evidence attached.
4. **"Let's talk." footer:** replaced by "Say hi." and the email set large. *Why:* the next step is one tap, and the line is less generic.

**Removed:** boring mode and the "My boss is walking by" switch. `/resume` stays as a plain page for ATS pasting and is linked from the contact frame. Printing the homepage prints that plain resume.

**40th tab:** name, role, location and a blue Download resume button are all on the first phone screen. Nothing animates except two slow-drifting cursors, which stop with reduced motion.

**Checks:**
- Lighthouse (mobile): 100 performance, 100 accessibility, 100 best practices, 100 SEO on `/` and `/resume`.
- Every link and timeline row is reachable by keyboard, with visible focus, and rows open with Enter.
- Print is 2 pages, and no page scrolls sideways at 375px.
- White text sits on a darker blue (`#0a6bc4`) than Figma's selection blue, so buttons pass WCAG AA.


A running log. Every rule broken on purpose gets an entry: the rule, how it was broken, and why it serves the recruiter. Every major step answers one question: **what does this feel like for a tired recruiter on their 40th tab?**

## Conventions broken on purpose

### 1. The centered hero
- **Rule:** big centered name, centered tagline, centered button.
- **How it's broken:** the hero is a whiteboard that writes itself, left-aligned, the way a person writes. Faint half-erased marks from old ideas sit in the background.
- **Why it serves the recruiter:** it reads like someone walking you through who they are, in order. Name, what I do, where I am, how to reach me, resume. The 10-second facts are the first four lines written, not a centered slogan you have to decode.

### 2. The three-column skills grid
- **Rule:** three or four equal cards of skill keywords.
- **How it's broken:** a mind map with "Your team" circled in the middle and the four skill areas branching out from it. Each branch carries one real result as a green check.
- **Why it serves the recruiter:** the question a hiring manager is asking is "what does this person add to my team," not "what keywords does he know." Putting their team at the center answers that, and attaching a proof to every skill means no claim floats without evidence.

### 3. The gray vertical timeline
- **Rule:** a thin gray line down the page with dots and dates.
- **How it's broken:** each job is a sticky note, oldest first, joined by hand-drawn arrows. On desktop the notes snake across the board in two rows, the way people actually lay out a process on a whiteboard. Details sit behind a "What I ran" tap.
- **Why it serves the recruiter:** the arrows show a direction (kitchen line to warehouse to camps to a pro club to running a company), which tells a story a list of dates doesn't. It is still a plain ordered list underneath, so phones get a single clean column and screen readers get a normal list.

### 4. Hiding the "real" resume
- **Rule:** portfolio sites bury the plain resume, or skip it.
- **How it's broken:** the header has a switch labeled "My boss is walking by" that swaps the whole board for a plain, print-ready resume. `/resume` links straight to it.
- **Why it serves the recruiter:** the fun version is for reading; the boring version is for forwarding, printing and pasting into an ATS. Making it a joke makes it findable.

## Inspiration from weird places

- **Whiteboard ghosting.** When a whiteboard is wiped, faint traces of old writing stay behind. The board shows ghosts of old notes ("woof water??", "idea #31?", "call back thurs") behind the real content, so it reads as a board that has actually been worked on.
- **The marker tray.** The aluminum ledge with three markers and an eraser at the bottom of the first board is what makes it read as a whiteboard rather than a white box.

## Step log

### Checkpoint 1: bad but complete
- Every section built with real content, unstyled. Boring mode and `/resume` worked from day one. All copy lives in `src/data/aaron.ts`.
- **40th tab:** the facts were all there and the resume button was in a sticky header from the first pixel. Ugly, but a recruiter could already do their job on it.
- **Source handling:** where the brief and the resume PDF disagree, the site shows a visible `TODO(aaron):` with both versions instead of picking one. Lines that went past the sources (inferred reasons and causes) were removed.
- **Missing input:** `PRINCIPLES.md` was not in the repo or in Drive. "How I work" uses the principles quoted in the build brief until the file arrives.

### Checkpoint 2: hero directions
- Three kitchen-themed directions (ticket rail, expo screen, one long receipt), then a fourth: the whiteboard.
- **Aaron's call:** go all in on the whiteboard, and move away from founder framing ("Hand me a problem") toward a general operator who can join any team. The kitchen sketches were removed; they are in git history.

### Checkpoint 3: styled build
- The whiteboard is the homepage. The basics write themselves on load; every later section draws itself in as it scrolls into view (underlines, circles, arrows, checkmarks, sticky notes landing).
- **40th tab:** everything in the 10-second test is on the first phone screen before the write-on finishes, and the resume button is in the sticky header the whole time. The marker font is only for headings and short labels; anything you actually read is in Atkinson Hyperlegible, a typeface designed for legibility. Nothing is ever hidden behind an animation for someone with reduced motion or no JavaScript: the board is simply already full.
- **Checks run:** Lighthouse (mobile) 100 performance, 100 accessibility, 100 best practices, 100 SEO on `/`; 100s on `/resume`. Keyboard: skip link, header, every link and disclosure reachable with visible focus; the boring switch works with Space and Enter. Boring mode persists across reloads. Print: 2 pages from `/` and `/resume`. 375px: no horizontal scroll on any page. Copy: `npm run build` fails on any em dash.
- **Performance decision:** CSS is inlined into each page (`inlineStylesheets: 'always'`) so the first paint does not wait on a stylesheet request. Fonts are self-hosted, no third-party requests.

### Revision: Aaron's content pass (Nov 2026)
- **New source:** a newer resume PDF (now the download) settled the open conflicts: B.S. degree, NXT profitable in year one, Chick-fil-A "youngest member of the kitchen leadership team," My Audio Pet as Warehouse & Fulfillment Supervisor, and updated Atlanta United numbers (20+ members, 40+ for food service).
- **Corrections from Aaron:** he did not start My Audio Pet and did not rebuild its packing system; both claims are gone. NXT now describes the whole operation he built: partnerships, staffing, training, logistics (housing, food, equipment), supply chain and marketing.
- **Less borrowed philosophy:** "How I work" no longer quotes the build manifesto. It now uses Aaron's own line from his resume ("I move fast, I track everything, and I follow up until the next step is on the calendar"), each backed by a real result. The "make 50 things" motto is gone.
- **Things I've started:** cut to Woof Water, NXT Soccer and Mobili (rentmobili.com, current work). Lessons are optional and left out rather than guessed.
- **Numbers:** the "How" disclosures were removed; they read awkwardly under a circled number. Each number keeps one plain sentence and where it happened.
- **40th tab:** fewer, truer cards. Nothing on the page needs a footnote anymore.
