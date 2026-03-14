// Replace this one constant to swap the same placeholder video across all five chapters.
export const PLACEHOLDER_YOUTUBE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

type PortalCard = {
  title: string;
  body: string;
  meta?: string;
};

type PortalStep = {
  title: string;
  body: string;
};

export type PortalSection = {
  id: string;
  variant: 'narrative' | 'process' | 'deliverables' | 'cta';
  progressLabel: string;
  chapter: string;
  mediaAlign?: 'left' | 'right';
  eyebrow: string;
  title: string;
  description: string;
  videoUrl: string;
  videoTitle: string;
  videoDescription: string;
  overlayLines: string[];
  cards?: PortalCard[];
  steps?: PortalStep[];
};

export type HeroContent = {
  eyebrow: string;
  privateLabel: string;
  title: string;
  description: string;
  introLine: string;
  frameTitle: string;
  frameSummary: string;
  frameLines: string[];
  notes: PortalCard[];
};

export type CtaContent = {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
};

export const portalMeta = {
  title: 'Ithaca Agency | Private Client Portal',
  description: 'A private Ithaca portal for strategic marketing direction, positioning, and video planning.',
};

// Update this object to refine the opening frame copy.
export const portalHero: HeroContent = {
  eyebrow: 'Private Ithaca review',
  privateLabel: 'Shared privately for review',
  title: 'A private Ithaca presentation for strategic marketing and video creation.',
  description:
    'This is a working review, not a public pitch. It shows how Ithaca thinks through positioning, narrative control, and production so video can support real market movement rather than add more noise.',
  introLine: 'Prepared for a specific client conversation, with strategy, message control, and execution considered together.',
  frameTitle: 'How to read this portal',
  frameSummary:
    'Move through it in sequence. Each chapter resolves one layer of strategic thinking before scripts, shoots, and rollout decisions are fixed.',
  frameLines: ['Position before production', 'Narrative with intent', 'Signal before scale'],
  notes: [
    {
      title: 'Why this exists',
      body: 'To make the strategic logic explicit before time is spent on scripts, shoots, edit rounds, and distribution decisions.',
      meta: 'Private review',
    },
    {
      title: 'What this phase covers',
      body: 'Positioning, communication structure, production logic, and the assets needed to move into planning with confidence.',
      meta: 'Phase 1 presentation',
    },
  ],
};

// Edit chapter copy here. Each chapter keeps its own copy while sharing the same placeholder video above.
export const portalSections: PortalSection[] = [
  {
    id: 'vision',
    variant: 'narrative',
    chapter: 'Chapter 01',
    mediaAlign: 'right',
    progressLabel: 'Vision',
    eyebrow: 'Strategic framing',
    title: 'Video becomes more valuable once the strategic intent is settled first.',
    description:
      'Before anything is produced, we define the market context, the audience perspective, and the decision the communication needs to support. Production becomes sharper when the message already knows its role.',
    videoUrl: PLACEHOLDER_YOUTUBE_URL,
    videoTitle: 'Vision and strategic framing',
    videoDescription:
      'A concise framing video on why strategic clarity should come before script, shoot, edit, and rollout decisions.',
    overlayLines: ['Position before production', 'Clarity creates trust', 'Intent before exposure'],
  },
  {
    id: 'approach',
    variant: 'narrative',
    chapter: 'Chapter 02',
    mediaAlign: 'left',
    progressLabel: 'Approach',
    eyebrow: 'Strategic video',
    title: 'The objective is not more content. It is more precise business communication.',
    description:
      'Each piece should sharpen positioning, earn attention quickly, and hold narrative control long enough to move a decision. That is a different discipline from simply publishing more often or distributing without a clear strategic point of view.',
    videoUrl: PLACEHOLDER_YOUTUBE_URL,
    videoTitle: 'How we approach strategic video',
    videoDescription:
      'A chapter on treating video as persuasive communication rather than filler for a content calendar.',
    overlayLines: ['Narrative with intent', 'Edits built for attention', 'Communication that moves decisions'],
    cards: [
      {
        title: 'Positioning',
        body: 'Decide what the market should understand about you before creative execution begins.',
        meta: 'Market signal',
      },
      {
        title: 'Hooks',
        body: 'Open with immediate relevance so attention is earned rather than assumed.',
        meta: 'First seconds',
      },
      {
        title: 'Narrative clarity',
        body: 'Structure the message so the viewer never has to work to decode it.',
        meta: 'Message control',
      },
      {
        title: 'Conversion-oriented editing',
        body: 'Shape pace, emphasis, and sequence around the next commercial decision.',
        meta: 'Decision support',
      },
    ],
  },
  {
    id: 'process',
    variant: 'process',
    chapter: 'Chapter 03',
    mediaAlign: 'right',
    progressLabel: 'Process',
    eyebrow: 'Working sequence',
    title: 'The working sequence is built to keep production calm, visible, and easy to approve.',
    description:
      'Each stage clears a different kind of uncertainty. The sequence protects the work from drift and keeps creative decisions tied to commercial intent, not taste alone.',
    videoUrl: PLACEHOLDER_YOUTUBE_URL,
    videoTitle: 'Collaboration process',
    videoDescription:
      'A walkthrough of the Ithaca working path from discovery through refinement and final approval.',
    overlayLines: ['Shared visibility', 'Structured progression', 'Clear approvals'],
    steps: [
      {
        title: 'Discovery',
        body: 'Clarify commercial priorities, audience context, and where current communication is underperforming.',
      },
      {
        title: 'Concept',
        body: 'Translate the strategic insight into a clear creative direction with a defined role.',
      },
      {
        title: 'Scripting',
        body: 'Build message sequence, speaking rhythm, and narrative control before production begins.',
      },
      {
        title: 'Production',
        body: 'Capture with purpose so footage serves the message instead of creating noise later.',
      },
      {
        title: 'Refinement',
        body: 'Refine cuts and versions around clarity, persuasion, and deployment needs.',
      },
    ],
  },
  {
    id: 'deliverables',
    variant: 'deliverables',
    chapter: 'Chapter 04',
    mediaAlign: 'left',
    progressLabel: 'Deliverables',
    eyebrow: 'Strategic deliverables',
    title: 'The output is not just footage. It is a set of usable strategic assets.',
    description:
      'You receive the thinking behind the work, the tools required to execute it well, and the production outputs needed to carry the message into market with consistency across placements.',
    videoUrl: PLACEHOLDER_YOUTUBE_URL,
    videoTitle: 'What you receive',
    videoDescription:
      'An overview of the strategic deliverables, production assets, and rollout-minded outputs included.',
    overlayLines: ['Tangible direction', 'Assets for execution', 'Built for rollout'],
    cards: [
      {
        title: 'Creative direction',
        body: 'A defined point of view on what the work should communicate and how it should land in market.',
        meta: 'Strategic foundation',
      },
      {
        title: 'Scripting',
        body: 'Message architecture, speaking flow, and narrative control for clear delivery.',
        meta: 'Communication structure',
      },
      {
        title: 'Shoot planning',
        body: 'A practical production plan built around message priorities and capture efficiency.',
        meta: 'Production planning',
      },
      {
        title: 'Edits',
        body: 'Refined cuts shaped for retention, pacing, and professional finish.',
        meta: 'Primary asset',
      },
      {
        title: 'Versions',
        body: 'Adaptations for different placements, audiences, or stages of the decision journey.',
        meta: 'Distribution readiness',
      },
      {
        title: 'Deployment thinking',
        body: 'Recommendations for where the work should live and how it should support the next move.',
        meta: 'Practical rollout',
      },
    ],
  },
  {
    id: 'next-step',
    variant: 'cta',
    chapter: 'Chapter 05',
    mediaAlign: 'right',
    progressLabel: 'Next step',
    eyebrow: 'Move into planning',
    title: 'When the direction feels right, the next step should feel straightforward.',
    description:
      'This is where the portal stops being a presentation and becomes a working plan. Once the strategic direction is aligned, we can move directly into scope, timing, production preparation, and rollout priorities.',
    videoUrl: PLACEHOLDER_YOUTUBE_URL,
    videoTitle: 'Next step and CTA',
    videoDescription:
      'A final chapter supporting the move from review into planning, scope, and practical next decisions.',
    overlayLines: ['Ready when aligned', 'Planning with clarity', 'Direct next step'],
  },
];

// Update this block to change the close-of-page message and actions.
export const portalCta: CtaContent = {
  title: 'If the direction feels aligned, the next step is simple: move into planning with clarity.',
  description:
    'Choose the next action that fits the conversation. Both keep the process direct, considered, and easy to advance without pressure or unnecessary ceremony.',
  primaryAction: {
    label: 'Move into planning',
    href: 'mailto:team@ithaca.agency?subject=Continue%20to%20planning',
  },
  secondaryAction: {
    label: 'Return to the strategy',
    href: '#approach',
  },
};
