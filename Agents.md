# AGENTS.md — Daniel Ubani Portfolio

## 1. Mission

Build a badass, cinematic, high-performance personal portfolio for **Daniel Ubani**, positioned as a **Full Stack Software Engineer / Systems Builder**, not a generic frontend developer.

Core message:

> **I build digital systems that scale.**

The portfolio must communicate that Daniel designs, architects, builds, integrates, and deploys complete production systems across web, mobile, backend, AI, fintech, hospitality, logistics, and real-time infrastructure.

---

## 2. Codex Operating Rules

Before writing code:

1. Inspect the entire existing repository.
2. Understand the current framework, folder structure, package manager, dependencies, configuration, assets, and Git state.
3. Do not overwrite working code blindly.
4. Create an implementation plan before major architectural changes.
5. Reuse good existing components where appropriate.
6. Keep components modular and production-ready.
7. Use TypeScript strictly.
8. Avoid unnecessary dependencies.
9. Optimize all animation and 3D work for performance.
10. Preserve accessibility and responsive behavior.
11. Respect `prefers-reduced-motion`.
12. Never expose secrets in client-side code.
13. Run lint/type/build checks after meaningful implementation stages.
14. Fix errors before moving to the next stage.
15. Do not add Codex/AI attribution to source code, commits, metadata, README, UI, or Git history.

---

## 3. Brand Direction

Reference aesthetic:

- Premium creative-agency identity
- Dark
- Minimal
- Editorial
- Futuristic
- Industrial
- Cinematic
- Strong typography
- 3D used intentionally rather than decoratively

### Primary Colors

```css
--brand-orange: #FF5B00;
--brand-lime: #C4F135;
--brand-black: #1A1A1A;
--brand-gray: #6E6E6E;
--brand-light-gray: #E9E9E9;
--brand-white: #FFFFFF;
```

### Color hierarchy

Primary:
- `#1A1A1A`
- `#FFFFFF`
- `#FF5B00`

Secondary:
- `#6E6E6E`
- `#E9E9E9`

Special accent:
- `#C4F135`

Orange is the signature accent.

Lime must be used sparingly for:
- availability
- live indicators
- active system nodes
- success states
- selected interactions

Do not turn the site into a multicolor design.

---

## 4. Visual Motif

Develop an original animated line/wave system inspired by flowing technical signals.

Possible applications:

- Hero 3D object
- Project transitions
- Loading state
- Section separators
- Architecture diagrams
- Hover interactions
- Background shaders

The motif should suggest:

- data
- signals
- connectivity
- infrastructure
- systems
- movement

Do not directly copy another brand's artwork or logo.

---

## 5. Technology Stack

Preferred:

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- Motion
- GSAP
- GSAP ScrollTrigger
- Lenis
- Three.js
- React Three Fiber
- Drei

Optional only where justified:

- `@react-three/rapier`
- GLSL shaders
- Blender-generated `.glb` assets

Animation responsibilities:

### Motion
Use for:
- buttons
- menus
- cards
- micro-interactions
- route/UI transitions
- simple reveals

### GSAP
Use for:
- scroll storytelling
- timelines
- pinned sections
- typography choreography
- project transitions
- complex sequences

### Lenis
Use for smooth scrolling.

### React Three Fiber
Use for:
- hero scene
- interactive system visualization
- project-specific 3D storytelling
- technology constellation

Do not use heavy 3D on every section.

---

## 6. Typography

Primary sans candidates:

- Geist
- Inter Tight
- Manrope

Preferred: **Geist**.

Monospace:

- Geist Mono

Typography should be oversized and editorial.

Example:

```text
I BUILD
DIGITAL SYSTEMS
THAT SCALE.
```

Use monospace for:

- numbering
- metadata
- technology labels
- statuses
- coordinates
- technical information

---

## 7. Navigation

Desktop navigation:

```text
DANIEL UBANI

INDEX
WORK
ABOUT
EXPERIENCE
CONTACT

● AVAILABLE
```

Navigation should be minimal.

Consider:
- transparent initial state
- compact sticky state after scrolling
- animated menu on mobile
- section progress indicator

---

## 8. Hero

Hero must immediately communicate Daniel's positioning.

Primary copy:

```text
FULL-STACK SOFTWARE ENGINEER

I BUILD
DIGITAL SYSTEMS
THAT SCALE.
```

Supporting copy:

```text
I design, architect and ship production systems
across web, mobile, AI and real-time infrastructure.
```

CTAs:

- Explore Work
- About Me

Additional status:

```text
● AVAILABLE FOR OPPORTUNITIES
ABUJA, NIGERIA
```

### Hero 3D

Build one signature 3D experience.

Preferred concept:

**SYSTEM CORE**

A dark abstract central object/network representing Daniel's engineering ecosystem.

Nodes can represent:

- WEB
- MOBILE
- BACKEND
- AI
- DATABASE
- CLOUD

Visual language:

- matte black
- graphite
- orange energy/signal lines
- subtle white labels
- rare lime active states

Interaction:

- subtle cursor camera movement
- idle rotation/motion
- scroll-driven transformation
- responsive degradation on low-power/mobile devices

Avoid generic floating spheres unless they are transformed into a meaningful branded visualization.

---

## 9. Intro Statement

Create a typography-driven scroll sequence:

```text
I DON'T JUST
WRITE CODE.

I ARCHITECT
SYSTEMS.

FROM DATABASE

TO API

TO INTERFACE

TO PRODUCTION.
```

Use GSAP ScrollTrigger.

The sequence should feel cinematic but remain readable.

---

## 10. Metrics

Display:

```text
05+
YEARS BUILDING

10+
ENTERPRISE SYSTEMS

WEB
MOBILE
BACKEND
AI
REAL-TIME
```

Use animated counters only if they improve the experience.

Avoid fake metrics.

---

## 11. Selected Systems

Do not use a generic “Projects” presentation.

Section title:

```text
SELECTED
SYSTEMS.
```

Initial featured systems:

1. Retiro Del Rocio
2. Cviqli
3. Pavocard
4. Cardcentrals
5. Nexryl EstateOS

Each project must support:

- index
- title
- industry
- short description
- role
- year
- technologies
- hero media
- challenge
- solution
- architecture
- key features
- result/impact where verified
- gallery
- live URL where available
- source URL only where intentionally public

Do not invent project metrics.

---

## 12. Retiro Del Rocio

Position as:

```text
01 / SELECTED SYSTEM

RETIRO DEL ROCIO

HOTEL OPERATIONS
ECOSYSTEM.
```

Core story:

A hotel operations platform consisting of Laravel/Livewire administration plus Flutter guest/staff tablet experiences and real-time communication.

Show system relationships visually.

Potential visualization:

```text
                    ADMIN
                      |
               LARAVEL API
                      |
        +-------------+-------------+
        |             |             |
     GUEST          STAFF       DATABASE
     TABLET         TABLETS
                      |
      +-------+-------+-------+
      |       |       |       |
   Kitchen   Bar  Reception  Security
```

Highlight areas such as:

- Rooms
- Bookings
- Guests
- Restaurant
- Kitchen
- Bar & Lounge
- Spa
- Cinema
- Gym
- Housekeeping
- Maintenance
- Security
- Billing
- Payments
- Device management
- TTLock integration
- WebSockets
- Agora

Use real project screenshots/assets when provided.

---

## 13. Cviqli

Position as:

```text
02 / SELECTED SYSTEM

CVIQLI

CIVIC INTELLIGENCE
POWERED BY AI.
```

Highlight:

- Ask
- Clarify
- Comprehend
- Counsel
- streaming AI
- voice dictation
- threaded mentions/comments
- moderation
- web + mobile
- multilingual experience

Languages:

- English
- Hausa
- Yoruba
- Igbo
- Pidgin

Create an AI-streaming visual interaction rather than merely displaying screenshots.

---

## 14. Pavocard

Position as a multi-market fintech product.

Highlight:

- Flutter mobile
- Next.js web
- React/Vue administration
- Node.js/Express backend
- PostgreSQL
- Redis
- Paystack
- Reloadly
- Firebase
- Cloudinary
- Nigeria/Ghana architecture

Visual style can borrow from financial dashboards without becoming a generic banking template.

---

## 15. Cardcentrals

Highlight:

- gift card trading
- Flutter application
- Next.js web
- React admin
- Node/Express
- PostgreSQL
- Redis
- Paystack
- Reloadly

Clearly differentiate it visually from Pavocard.

---

## 16. Nexryl EstateOS

Label:

```text
LAB / 001
PERSONAL PROJECT

NEXRYL
ESTATE OS

● IN DEVELOPMENT
```

Highlight:

- Flutter
- Next.js
- NestJS
- PostgreSQL
- Redis
- Firebase
- AI integrations
- payments
- QR visitors
- maintenance
- SOS
- reminders
- predictive analytics

This section can have a more experimental visual treatment.

---

## 17. Experience

Create an interactive vertical timeline.

Include:

```text
2022
NDA Organization

2024
Kedali NEMT
Orion Networks

2025
Zicstack
Cardcentrals

2026
Pavocard
Retiro Del Rocio
Cviqli
```

Each item should reveal:

- role
- company
- dates
- selected contribution
- technologies

Keep the timeline readable and responsive.

---

## 18. Technology Constellation

Avoid a standard grid of 40 logos.

Create an interactive engineering ecosystem.

Categories:

### Frontend
- React
- Next.js
- Vue.js
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express
- Laravel
- NestJS
- REST
- GraphQL

### Mobile
- Flutter
- React Native

### Databases
- PostgreSQL
- MySQL
- MongoDB
- Redis

### Infrastructure
- Docker
- AWS
- Vercel
- CI/CD
- Nginx

### AI
- OpenAI/API integrations
- LLM systems
- RAG concepts
- Chatbase

### Integrations
- Paystack
- Flutterwave
- Reloadly
- Firebase
- Google Maps
- Twilio
- Monnify

Hover/selecting a technology should be capable of revealing the projects associated with it.

---

## 19. Architecture Playground

Create an interactive section titled:

```text
HOW I
THINK.
```

Concept:

```text
CLIENTS

Web          Mobile
 |              |
 +------ API ---+
         |
   +-----+------+
   |            |
Database      Cache
   |            |
PostgreSQL    Redis
         |
   Real-time Layer
         |
 WebSockets / Events
```

Allow users to explore nodes.

Purpose:

Show system-design thinking rather than simply claiming it.

Keep it performant and understandable.

---

## 20. About

Main typography:

```text
ENGINEER.
DESIGNER.
BUILDER.
PROBLEM SOLVER.
```

Position Daniel as someone working across the product lifecycle:

- architecture
- APIs
- database modeling
- frontend
- mobile
- integrations
- deployment

Details:

```text
BASED
Abuja, Nigeria

FOCUS
Full Stack Software Engineering

WORK
Onsite / Remote / Hybrid

INTERESTS
AI
Fintech
SaaS
Mobile
Infrastructure
Real-Time Systems
```

Include portrait only if a high-quality approved image is available.

---

## 21. Contact

Final statement:

```text
HAVE A
DIFFICULT
PROBLEM?

LET'S BUILD
THE SYSTEM.
```

Include:

- Email
- LinkedIn
- GitHub
- Resume

Use a strong interactive CTA.

Do not build an unnecessarily complicated contact form.

---

## 22. Routes

Target architecture:

```text
/
├── work/
│   ├── retiro-del-rocio/
│   ├── cviqli/
│   ├── pavocard/
│   ├── cardcentrals/
│   └── nexryl-estate-os/
├── about/
└── resume/
```

Homepage:

```text
Hero
↓
Engineering Statement
↓
Metrics
↓
Selected Systems
↓
Experience
↓
Technology Ecosystem
↓
Architecture Playground
↓
About
↓
Contact
```

---

## 23. Suggested Code Architecture

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── work/
│   │   └── [slug]/
│   └── about/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── work/
│   ├── ui/
│   ├── motion/
│   └── three/
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── technologies.ts
│
├── hooks/
├── lib/
├── styles/
└── types/
```

Do not follow this blindly if the existing repository already has a good architecture.

Inspect first.

---

## 24. Responsive Strategy

Design desktop and mobile intentionally.

### Desktop

Use:
- cinematic scroll sequences
- full 3D hero
- pinned project sections
- cursor interactions
- large typography

### Tablet

Reduce:
- scene complexity
- particle counts
- extreme typography sizes
- pinned-scroll duration

### Mobile

Prioritize:
- readability
- fast loading
- touch interactions
- simple animation
- lightweight 3D or static fallback

Never make mobile users download an unnecessarily huge 3D scene.

---

## 25. Performance Requirements

Target:

- strong Lighthouse performance
- optimized Core Web Vitals
- minimal layout shift
- lazy-loaded project media
- dynamically loaded WebGL
- optimized `.glb`
- compressed images
- modern image formats
- sensible font loading
- no unnecessary client components

Three.js should not block the initial meaningful content.

Dispose of WebGL resources correctly.

Pause expensive animations when off-screen where practical.

---

## 26. Accessibility

Required:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- alt text
- reduced-motion support
- accessible navigation/menu
- no critical information available only through hover
- touch-friendly targets

Animation must enhance content, not prevent access to it.

---

## 27. SEO

Implement:

- metadata
- canonical URLs
- Open Graph
- Twitter/X cards
- sitemap
- robots
- structured data where appropriate
- project-specific metadata
- strong semantic heading hierarchy

Primary identity:

```text
Daniel Ubani — Full Stack Software Engineer
```

Potential description:

```text
Full Stack Software Engineer building production systems across
web, mobile, AI, fintech and real-time infrastructure.
```

---

## 28. Asset Strategy

Organize:

```text
public/
├── images/
│   ├── projects/
│   ├── about/
│   └── og/
├── models/
├── textures/
├── videos/
└── resume/
```

Do not add random stock imagery.

Prioritize:

1. Real product screenshots
2. Real device mockups
3. Custom 3D
4. Custom diagrams
5. Abstract branded graphics

---

## 29. Motion Principles

Animations should feel:

- deliberate
- weighted
- smooth
- technical
- premium

Avoid:

- animation on every element
- excessive bouncing
- random rotations
- constant cursor chasing
- long loading intros
- scroll hijacking
- animations that delay content access

Use orange as an animation signal.

Examples:

- orange line traces
- orange masks
- orange system pulses
- orange node connections

Use lime only for special active states.

---

## 30. Implementation Phases

### Phase 0 — Repository Audit

Before coding:

- inspect repository
- inspect Git state
- inspect dependencies
- inspect existing routes/components
- inspect assets
- identify technical debt
- produce implementation plan

### Phase 1 — Foundation

Build:

- Next.js structure
- typography
- design tokens
- global styles
- responsive container
- navigation
- footer
- smooth scrolling
- animation utilities

### Phase 2 — Homepage Skeleton

Build all homepage sections with real content and no heavy animation first.

Confirm:

- hierarchy
- responsive layout
- typography
- project order
- content completeness

### Phase 3 — Core Motion

Implement:

- hero entrance
- text reveals
- section transitions
- project transitions
- experience timeline
- micro-interactions

### Phase 4 — 3D System

Implement:

- R3F canvas
- System Core
- camera rig
- lighting
- branded material treatment
- orange signal system
- responsive fallback

### Phase 5 — Project Case Studies

Build detailed pages for:

- Retiro
- Cviqli
- Pavocard
- Cardcentrals
- Nexryl

### Phase 6 — Interactive Engineering Sections

Build:

- technology constellation
- architecture playground

### Phase 7 — Polish

Add:

- transitions
- loading behavior
- hover states
- mobile refinements
- reduced motion
- accessibility fixes

### Phase 8 — Optimization

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Use the repository's actual scripts if different.

Fix all relevant errors.

Then test:

- desktop
- tablet
- mobile
- keyboard
- reduced motion
- slow network
- production build

### Phase 9 — SEO / Production

Finish:

- metadata
- sitemap
- robots
- Open Graph
- analytics if requested
- deployment configuration

---

## 31. Git Workflow

If the project is already connected to Git:

- inspect current branch
- inspect remotes
- do not overwrite unrelated work
- use focused commits

Suggested commit progression:

```text
feat: establish portfolio design system
feat: build homepage content architecture
feat: add portfolio motion system
feat: build interactive 3d hero
feat: add selected systems showcase
feat: build project case studies
feat: add experience and technology sections
feat: build architecture playground
perf: optimize animation and webgl performance
feat: add responsive and accessibility refinements
feat: finalize seo and production metadata
```

Never mention Codex or AI in commit messages.

Do not automatically force-push.

---

## 32. Content Integrity

Never invent:

- company results
- user counts
- revenue
- performance improvements
- download numbers
- client testimonials
- project URLs
- GitHub repositories

If information is missing, use a clear placeholder in development data and flag it for Daniel.

Real work is more important than inflated marketing claims.

---

## 33. Definition of Done

The portfolio is complete when:

- visual identity feels unique and cohesive
- orange/black brand system is consistent
- hero establishes positioning immediately
- 3D has purpose
- animation remains smooth
- projects tell real engineering stories
- case studies work on mobile
- architecture thinking is visible
- accessibility is respected
- production build succeeds
- SEO metadata exists
- performance is production-ready
- no fake metrics/content exist
- there are no obvious template remnants
- the website feels like Daniel Ubani's engineering identity

---

## 34. Final Creative Standard

Do not build:

> “A developer portfolio with cool animations.”

Build:

> **An interactive digital representation of a software engineer who architects complete systems.**

Every design decision should answer at least one of these:

1. Does this communicate engineering ability?
2. Does this make the work easier to understand?
3. Does this strengthen the visual identity?
4. Does this improve the user experience?

If the answer is no, remove it.

The finished portfolio should feel **confident, technical, cinematic, original, fast, and production-grade**.
