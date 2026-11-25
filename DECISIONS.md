# Decisions

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

- **Whiteboard ghosting.** When a whiteboard is wiped, faint traces of old writing stay behind. The board shows ghosts of earlier ventures ("woof water??", "soap + fragrance v2", "clothing drop, fri") behind the real content. It is the "make 50 things, throw away 47" idea, shown without a word of explanation.
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
