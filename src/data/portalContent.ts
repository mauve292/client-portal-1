// Replace these three constants to update the chapter videos.
export const VIDEO_1_URL = 'https://youtube.com/shorts/4CqpEA_Vb9w?si=PiCrAIEN97Y-T6fq';
export const VIDEO_2_URL = 'https://youtube.com/shorts/5jj5bsJgzf4?si=LVIf4HDsf5ghv_KL';
export const VIDEO_3_URL = 'https://youtube.com/shorts/o5YY6NuGHDY?si=H1qZTf3thh0C-9Fo';

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
  variant: 'narrative' | 'closing';
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
  id: string;
  progressLabel: string;
  eyebrow: string;
  chapter: string;
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
  title: 'A private Ithaca walkthrough for strategic marketing and video direction.',
  description:
    'This portal is a guided review prepared for a real client conversation. It shows how Ithaca uses strategic clarity, message structure, and thoughtful production to make video more commercially useful.',
  introLine: 'Prepared privately, with positioning, communication, and execution considered as one system.',
  frameTitle: 'What this walkthrough is for',
  frameSummary:
    'Move through the three chapters in sequence. Together they show how Ithaca frames the work, shapes the communication, and structures the collaboration.',
  frameLines: ['Position before production', 'Narrative with intent', 'Structure behind the message'],
  notes: [
    {
      title: 'Why this review exists',
      body: 'To make the strategic logic visible before time is committed to production choices, edit rounds, and rollout decisions.',
      meta: 'Private context',
    },
    {
      title: 'What it is meant to do',
      body: 'Create confidence around direction, communication priorities, and what a well-structured engagement would actually produce.',
      meta: 'Prepared by Ithaca',
    },
  ],
};

// Edit chapter copy here. Each chapter is driven from this file and keeps its own YouTube link.
export const portalSections: PortalSection[] = [
  {
    id: 'framing',
    variant: 'narrative',
    chapter: 'Chapter 01',
    mediaAlign: 'right',
    progressLabel: 'Framing',
    eyebrow: 'Strategic framing',
    title: 'The work is stronger when strategy settles the message before production begins.',
    description:
      'Ithaca starts by clarifying the market context, the audience perspective, and the decision the communication needs to support. Production becomes more precise when the message already knows its role.',
    videoUrl: VIDEO_1_URL,
    videoTitle: 'Strategic framing and Ithaca point of view',
    videoDescription:
      'An opening chapter on how Ithaca thinks about strategy before scripts, shoots, and rollout choices are made.',
    overlayLines: ['Strategy before exposure', 'Direction before production', 'Clarity creates trust'],
  },
  {
    id: 'approach',
    variant: 'narrative',
    chapter: 'Chapter 02',
    mediaAlign: 'left',
    progressLabel: 'Approach',
    eyebrow: 'Communication and video',
    title: 'Strategic video should sharpen positioning, hold attention, and move a decision.',
    description:
      'The aim is not simply to publish more. It is to shape market-facing communication with control: stronger hooks, cleaner narrative movement, and edits that support the next commercial step.',
    videoUrl: VIDEO_2_URL,
    videoTitle: 'Strategic communication and video approach',
    videoDescription:
      'The core chapter on how Ithaca approaches positioning, narrative clarity, hooks, direction, and market-facing communication.',
    overlayLines: ['Narrative with intent', 'Hooks with purpose', 'Content that moves decisions'],
    cards: [
      {
        title: 'Positioning',
        body: 'Clarify what the market should understand about you before creative execution takes over.',
        meta: 'Market signal',
      },
      {
        title: 'Narrative clarity',
        body: 'Structure the message so the viewer never has to work to decode what matters.',
        meta: 'Message control',
      },
      {
        title: 'Hooks',
        body: 'Open with immediate relevance so attention is earned at the right moment.',
        meta: 'First seconds',
      },
      {
        title: 'Direction in the edit',
        body: 'Shape pace, emphasis, and sequence around the commercial decision the work is meant to support.',
        meta: 'Decision support',
      },
    ],
  },
  {
    id: 'working-together',
    variant: 'closing',
    chapter: 'Chapter 03',
    mediaAlign: 'right',
    progressLabel: 'Working Together',
    eyebrow: 'What the engagement produces',
    title: 'A structured engagement produces clarity, assets, and a cleaner path into execution.',
    description:
      'The final chapter closes the loop: what you receive, how the collaboration moves, and why the process is structured to keep production calm and decisions easy to make.',
    videoUrl: VIDEO_3_URL,
    videoTitle: 'Working together and next-step orientation',
    videoDescription:
      'A closing chapter on deliverables, collaboration structure, and how the work moves naturally toward planning.',
    overlayLines: ['Structure behind the message', 'Built for rollout', 'Calm forward motion'],
    steps: [
      {
        title: 'Discovery',
        body: 'Clarify priorities, audience context, and where current communication is underperforming.',
      },
      {
        title: 'Direction',
        body: 'Translate that clarity into a focused creative and messaging direction.',
      },
      {
        title: 'Production',
        body: 'Capture and shape the work around the message instead of producing excess.',
      },
      {
        title: 'Refinement',
        body: 'Tighten outputs, versions, and rollout thinking around the final use case.',
      },
    ],
    cards: [
      {
        title: 'Creative direction',
        body: 'A clear point of view on what the work should communicate and how it should land.',
        meta: 'Strategic foundation',
      },
      {
        title: 'Scripting and structure',
        body: 'Message architecture, speaking flow, and narrative control before production starts.',
        meta: 'Communication structure',
      },
      {
        title: 'Production planning',
        body: 'A practical approach to capture, priorities, and decision-making during production.',
        meta: 'Execution logic',
      },
      {
        title: 'Edits and versions',
        body: 'Refined cuts and usable adaptations for different placements or stages of the decision journey.',
        meta: 'Deployment readiness',
      },
    ],
  },
];

// Update this block to change the final close-of-page message and actions.
export const portalCta: CtaContent = {
  id: 'cta',
  progressLabel: 'Close',
  eyebrow: 'Next step',
  chapter: 'Closing',
  title: 'If the direction feels aligned, the next step is to move into planning with clarity.',
  description:
    'Choose the next action that fits the conversation. The aim is not pressure. It is a clear, well-paced move from review into scope, timing, and preparation.',
  primaryAction: {
    label: 'Move into planning',
    href: 'mailto:team@ithaca.agency?subject=Continue%20to%20planning',
  },
  secondaryAction: {
    label: 'Return to the strategy',
    href: '#approach',
  },
};
