---
target: landing
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
timestamp: 2026-08-06T07-12-10Z
slug: src-app-page-tsx
---
Method: dual-agent (A: a1bd50c8efd126e07 · B: a4c3c4c749971ff96)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Header scroll state and hover feedback exist; no loading or form states needed. |
| 2 | Match Between System and Real World | 4 | Chinese B2B industrial language is domain-appropriate; logical section flow. |
| 3 | User Control and Freedom | 3 | Links work and mobile drawer toggles, but there is no persistent contact escape hatch. |
| 4 | Consistency and Standards | 2 | Hero subtitle pill at 25px breaks the label/pill spec; heading classes vary by section. |
| 5 | Error Prevention | 3 | Static links reduce errors; no forms to validate. |
| 6 | Recognition Rather Than Recall | 3 | Nav labels are clear, but generic icons and CTAs do not strongly signal the next step. |
| 7 | Flexibility and Efficiency of Use | 2 | No accelerators; acceptable for a landing page but nothing for repeat visitors. |
| 8 | Aesthetic and Minimalist Design | 2 | Every section is a full-bleed image; `border-accent/60` on every card flattens hierarchy. |
| 9 | Help Users Recognize, Diagnose, Recover from Errors | 3 | No inline errors observed; 404 handling not inspected. |
| 10 | Help and Documentation | 2 | Self-explanatory nav, but no contextual help or contact guidance. |
| **Total** | | **28/40** | **Good** |

## Design Specificity Verdict

**Verdict: Product-grounded but visually category-interchangeable.**

The *content* is clearly authored for 艺林 — local Baotou focus, service-first positioning, industrial supply-chain partnerships, and specific stats (300+ brands, 14+ years, 50M+ revenue). The *container*, however, is a fairly generic B2B SaaS/industrial-services landing page: hero title/subtitle/description + two CTAs, alternating full-bleed image sections, glass cards, three stats, four feature cards. Swap in copy from a steel trading firm, an MRO platform, or an engineering contractor and most of the page still works. The industrial photography and the red accent give it some category flavor, but the layout, iconography, and conversion architecture do not feel uniquely tailored to a "service-first, local-last-mile" supply-chain partner.

**Deterministic scan:** The CLI detector found 0 issues directly in `src/app/page.tsx` and 2 advisory `design-system-font-size` findings in components imported by the landing page:
- `src/components/sections/Hero.tsx:99` — `text-[25px]` is outside the DESIGN.md type ramp.
- `src/components/layout/Header.tsx:60` — `text-[10px]` is outside the DESIGN.md type ramp.

These are not false positives; they directly support Assessment A's hierarchy and consistency findings. Browser overlay injection was not possible because no browser automation tool (Playwright/Puppeteer) is installed and the dev server does not serve `detect.js`.

## Overall Impression

The landing page has a clear value proposition and a consistent visual world, but it prioritizes reading over action. The biggest opportunity is to turn the homepage into a conversion surface: make contact unavoidable, fix the Hero hierarchy, and reduce navigation noise.

## What's Working

1. **Copy positioning is sharp.** "以服务为核心，卖货只是服务的一部分" is a clear, defensible differentiator against MRO platforms, and it appears early in the Hero and again in the positioning card.
2. **Visual system is cohesive.** The industrial photo + dark overlay + glass card + red accent treatment is consistent across `Hero.tsx`, `Section.tsx`, `FeatureCard.tsx`, and `StatCard.tsx`, giving the site a single atmospheric world.
3. **Information chunking works.** Stats are limited to three, capabilities to four, and each card has a scannable title + one-sentence description, which respects the industrial audience's scanning habit.

## Priority Issues

**[P1] Hero subtitle pill dominates the hierarchy**
- **Why it matters:** The `text-[25px]` uppercase red pill for "内蒙古艺林供应链科技" (`Hero.tsx:99`) looks like a primary button or a main headline. It violates the `Label` spec in `DESIGN.md` and draws more attention than the H1 and CTAs.
- **Fix:** Reduce the pill to `text-xs sm:text-sm` per `DESIGN.md`. Move the company name below the H1 or replace the pill with a smaller eyebrow label that does not compete with the main value proposition.
- **Suggested command:** `/impeccable layout landing`

**[P1] Primary CTA is informational, not persuasive**
- **Why it matters:** On a Persuade-mode landing page, the primary action should drive contact or inquiry. "公司简介" sends visitors to read more instead of initiating a conversation, undermining the conversion goal stated in `PRODUCT.md`.
- **Fix:** Make the primary CTA "立即咨询 / 联系我们 / 预约服务" and point it to `/contact` or a scroll-to-contact anchor. Keep "服务业务" as the secondary action.
- **Suggested command:** `/impeccable clarify landing`

**[P1] Header navigation is overloaded and hides contact**
- **Why it matters:** Seven top-level items force visitors to scan a long list before deciding. There is no visible "联系我们" in the Header or Hero, which is critical for an industrial service buyer.
- **Fix:** Consolidate to 4-5 grouped items (e.g., 关于艺林, 服务业务, 合作生态, 发展历程). Add a persistent accent "联系我们" button in the Header, and ensure it appears in the mobile drawer.
- **Suggested command:** `/impeccable layout landing`

**[P2] Uniform heavy image backgrounds create monotony and fatigue**
- **Why it matters:** Every `Section` uses `blur(8px) brightness(0.7)` + dark overlay. The page feels like one long darkened factory floor, flattening the emotional rhythm and making it harder for sections to feel distinct.
- **Fix:** Vary the treatment. Use a deep `primary-950` solid section or subtle gradient between image sections to create breathing room. Reserve the most dramatic industrial imagery for the Hero and one credibility section.
- **Suggested command:** `/impeccable layout landing`

**[P2] Generic icons weaken specificity and trust**
- **Why it matters:** All four capability cards reuse the same abstract flask icon, and the stat cards use a generic checkmark. For a company selling industrial expertise, these icons do not reinforce capability.
- **Fix:** Assign domain-specific icons to each capability (e.g., gear for equipment supply, wrench/engineer for service team, university cap for R&D, handshake/network for ecosystem). For stats, either remove icons or use meaningful ones.
- **Suggested command:** `/impeccable document` (to update DESIGN.md icon rules) then manual icon swap

## Persona Red Flags

**Jordan (Confused First-Timer)**
- The oversized red subtitle pill in the Hero looks clickable but is not, causing hesitation.
- Two CTAs with no visual hierarchy guidance: "公司简介" vs. "服务业务" — Jordan does not know which to pick first.
- No visible phone, email, or contact form above the fold.
- Domain terms like "产学研" appear without inline explanation.

**Riley (Stress Tester)**
- The Header logo links to `/company` instead of `/`, breaking the standard home-link expectation.
- The mobile menu button has `aria-label="切换导航"` but no `aria-expanded` state.
- The "生态协同" capability card contains a long partner list that may wrap poorly on narrow screens.
- No fallback state is visible if industrial background images fail to load.

**Casey (Distracted Mobile User)**
- Primary CTAs sit at the top of the Hero, outside the one-handed thumb zone.
- The mobile drawer lists all 7 nav items vertically, requiring reading and scrolling while interrupted.
- Heavy background images increase data usage and may slow load on a weak connection.
- No sticky bottom conversion bar, so the main action disappears after scrolling.
- Contact information is buried in the footer.

## Minor Observations

- `globals.css:26-30` applies `letter-spacing: -0.02em` to all headings, but `DESIGN.md` explicitly says not to force negative letter-spacing on Chinese text.
- Hero `tabIndex={-1}` on the `<section>` is unusual but harmless.
- Footer copyright uses "内蒙古艺林工业供应链科技有限公司" while `PRODUCT.md` records "内蒙古艺林供应链科技有限责任公司"; the naming should be reconciled.
- `StatCard` batch count-up logic depends on `StaggerReveal` adding reveal classes; the coupling is not obvious and could be brittle during refactors.
- The section title "公司沿革与规模实力" combines two concepts; splitting it would improve scannability.

## Questions to Consider

1. If a plant manager lands on this page at 2 a.m. during an equipment breakdown, can they find a 24-hour contact path within three seconds?
2. Does "公司简介" as the Hero's primary action reflect what you want most visitors to do, or just what you want them to read?
3. If every section looks like a darkened factory floor, what visual signal tells the visitor they are moving closer to a decision?
