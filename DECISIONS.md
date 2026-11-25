# Decisions

A running log. Every rule broken on purpose gets an entry: the rule, how it was broken, and why it serves the recruiter. Every major step answers one question: **what does this feel like for a tired recruiter on their 40th tab?**

## Step log

### Checkpoint 1: bad but complete
- **What it is:** every section built with real content, unstyled. Boring mode and `/resume` already work. All copy lives in `src/data/aaron.ts`.
- **40th tab:** the facts are all there and the resume button is in a sticky header from the first pixel. Ugly, but a recruiter can already do their job on it. That's the floor the fun gets built on, not the other way around.
- **Source handling:** where the brief and the resume PDF disagree, the site shows a visible `TODO(aaron):` with both versions instead of picking one. Lines I'd written that went past the sources (reasons and causes I had inferred) were removed before the checkpoint.
- **Missing input:** `PRINCIPLES.md` was not in the repo or in Drive. "How I work" uses the principles quoted in the build brief until the file arrives.

### Checkpoint 2: three hero directions (`/lab`)
- **A. The Rail:** cream paper, ketchup-red headline, tickets clipped to a steel rail that runs off the right edge. Swipe on a phone.
- **B. Expo Screen:** a kitchen display system. Problems arrive as timed orders. On phones the bump bar is pinned at the bottom, under the thumb.
- **C. The Receipt Is the Page:** the hero is a single thermal receipt, off center, with a misregistered red rubber stamp for the headline.
- **40th tab:** A reads in one glance and is the friendliest to a thumb. B is the most memorable but dark screens feel less "forward this to a VP." C is the most original, but the name sits below the receipt on a phone, which puts the 10-second test at risk unless the receipt header does that job (it does say AARON ADAMS, but small).

## Conventions broken on purpose

_Filled in as the styled build lands. Candidates so far:_

1. **Centered hero.** Broken by: an asymmetric hero where the tickets run off the edge of the screen. Why: a cut-off ticket tells the eye there is more to pull, the way a carousel never does.
2. **Three-column skills grid.** Broken by: skills printed as an itemized ticket, not cards. Why: TBD at styled build.
3. **Gray vertical timeline.** Broken by: a horizontal "line" of kitchen stations. Why: it reads left to right like a career does, and it collapses to a plain list on phones and for screen readers.

## Inspiration from weird places

- **Misregistered parking-ticket stamp** (direction C): the red "HAND ME A PROBLEM" stamp is deliberately off the box, rotated and slightly broken up, the way a stamp lands on a parking ticket when the attendant is in a hurry.
- **Kitchen display system bump bar** (direction B): the four big buttons along the bottom of a KDS are designed for greasy hands in a hurry. That's the same problem as a thumb on a phone.
