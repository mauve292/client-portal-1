// Replace these three constants to update the chapter videos.
// Standard YouTube links, youtu.be links, embed links, and Shorts links all work here.
export const VIDEO_1_URL = 'https://youtube.com/shorts/4CqpEA_Vb9w?si=PiCrAIEN97Y-T6fq';
export const VIDEO_2_URL = 'https://youtube.com/shorts/5jj5bsJgzf4?si=LVIf4HDsf5ghv_KL';
export const VIDEO_3_URL = 'https://youtube.com/shorts/o5YY6NuGHDY?si=H1qZTf3thh0C-9Fo';

export type Language = 'el' | 'en';

type PortalCard = {
  title: string;
  body: string;
};

type PortalStep = {
  title: string;
  body: string;
};

export type PortalSection = {
  id: string;
  variant: 'narrative' | 'closing';
  progressLabel: string;
  mediaAlign?: 'left' | 'right';
  orientation: 'portrait' | 'landscape';
  title: string;
  description: string;
  videoUrl: string;
  videoTitle: string;
  videoDescription: string;
  cards?: PortalCard[];
  steps?: PortalStep[];
};

export type HeroContent = {
  title: string;
  description: string;
  introLine: string;
  frameTitle: string;
  frameSummary: string;
  notes: PortalCard[];
};

export type CtaContent = {
  id: string;
  progressLabel: string;
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

export type PortalUiContent = {
  navigationAriaLabel: string;
  navigationJumpLabel: string;
  openingLabel: string;
  languageToggleLabel: string;
  videoUnavailable: string;
  openOnYoutube: string;
  videoTitlePrefix: string;
};

export type PortalContent = {
  meta: {
    title: string;
    description: string;
  };
  ui: PortalUiContent;
  hero: HeroContent;
  sections: PortalSection[];
  cta: CtaContent;
};

function createEnglishSections(): PortalSection[] {
  return [
    {
      id: 'framing',
      variant: 'narrative',
      mediaAlign: 'right',
      orientation: 'portrait',
      progressLabel: 'Framing',
      title: 'The work is stronger when strategy settles the message before production begins.',
      description:
        'Ithaca starts by clarifying the market context, the audience perspective, and the decision the communication needs to support. Production sharpens when the message already knows its role.',
      videoUrl: VIDEO_1_URL,
      videoTitle: 'Strategic framing and the Ithaca point of view',
      videoDescription:
        'An opening chapter on how Ithaca thinks before scripts, shoots, and rollout decisions are made.',
    },
    {
      id: 'approach',
      variant: 'narrative',
      mediaAlign: 'left',
      orientation: 'portrait',
      progressLabel: 'Approach',
      title: 'Strategic video should sharpen positioning, hold attention, and move a decision.',
      description:
        'The aim is not simply to publish more. It is to shape market-facing communication with control: stronger hooks, clearer narrative movement, and edits built around the next commercial step.',
      videoUrl: VIDEO_2_URL,
      videoTitle: 'Strategic communication and video approach',
      videoDescription:
        'The core chapter on positioning, narrative clarity, hooks, direction, and market-facing communication.',
      cards: [
        {
          title: 'Positioning',
          body: 'Clarify what the market should understand about you before creative execution takes over.',
        },
        {
          title: 'Narrative clarity',
          body: 'Structure the message so the viewer never has to work to decode what matters.',
        },
        {
          title: 'Hooks',
          body: 'Open with immediate relevance so attention is earned at the right moment.',
        },
        {
          title: 'Direction in the edit',
          body: 'Shape pace, emphasis, and sequence around the commercial decision the work is meant to support.',
        },
      ],
    },
    {
      id: 'working-together',
      variant: 'closing',
      mediaAlign: 'right',
      orientation: 'portrait',
      progressLabel: 'Working Together',
      title: 'A structured engagement produces clarity, assets, and a cleaner path into execution.',
      description:
        'The final chapter closes the loop: what you receive, how the collaboration moves, and why the process is designed to keep production calm and decisions easier to make.',
      videoUrl: VIDEO_3_URL,
      videoTitle: 'Working together and next-step orientation',
      videoDescription:
        'A closing chapter on deliverables, collaboration structure, and how the work moves naturally toward planning.',
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
        },
        {
          title: 'Scripting and structure',
          body: 'Message architecture, speaking flow, and narrative control before production starts.',
        },
        {
          title: 'Production planning',
          body: 'A practical approach to capture, priorities, and decision-making during production.',
        },
        {
          title: 'Edits and versions',
          body: 'Refined cuts and usable adaptations for different placements or stages of the decision journey.',
        },
      ],
    },
  ];
}

function createGreekSections(): PortalSection[] {
  return [
    {
      id: 'framing',
      variant: 'narrative',
      mediaAlign: 'right',
      orientation: 'portrait',
      progressLabel: 'Πλαίσιο',
      title: 'Το αποτέλεσμα γίνεται ισχυρότερο όταν η στρατηγική ξεκαθαρίζει το μήνυμα πριν ξεκινήσει η παραγωγή.',
      description:
        'Η Ithaca ξεκινά από το πλαίσιο της αγοράς, την οπτική του κοινού και την απόφαση που πρέπει να υποστηρίξει η επικοινωνία. Όταν ο ρόλος του μηνύματος έχει οριστεί σωστά, η παραγωγή γίνεται πιο ακριβής.',
      videoUrl: VIDEO_1_URL,
      videoTitle: 'Στρατηγικό πλαίσιο και οπτική της Ithaca',
      videoDescription:
        'Η πρώτη ενότητα δείχνει πώς σκέφτεται η Ithaca πριν από το script, το γύρισμα και τις αποφάσεις διάθεσης.',
    },
    {
      id: 'approach',
      variant: 'narrative',
      mediaAlign: 'left',
      orientation: 'portrait',
      progressLabel: 'Προσέγγιση',
      title: 'Το στρατηγικό video πρέπει να ενισχύει το positioning, να κρατά την προσοχή και να οδηγεί σε απόφαση.',
      description:
        'Ο στόχος δεν είναι απλώς να παραχθεί περισσότερο περιεχόμενο. Είναι να οργανωθεί η επικοινωνία προς την αγορά με έλεγχο: ισχυρότερα hooks, καθαρότερη αφηγηματική ροή και edits που υπηρετούν το επόμενο εμπορικό βήμα.',
      videoUrl: VIDEO_2_URL,
      videoTitle: 'Στρατηγική επικοινωνία και προσέγγιση video',
      videoDescription:
        'Η βασική ενότητα για positioning, αφηγηματική σαφήνεια, hooks, κατεύθυνση και επικοινωνία προς την αγορά.',
      cards: [
        {
          title: 'Positioning',
          body: 'Ξεκαθαρίζουμε τι πρέπει να καταλάβει η αγορά για εσάς πριν κυριαρχήσει η δημιουργική εκτέλεση.',
        },
        {
          title: 'Αφηγηματική σαφήνεια',
          body: 'Δομούμε το μήνυμα έτσι ώστε ο θεατής να μη χρειάζεται να αποκωδικοποιήσει τι έχει σημασία.',
        },
        {
          title: 'Hooks',
          body: 'Ανοίγουμε με άμεση συνάφεια, ώστε η προσοχή να κερδίζεται στο σωστό σημείο.',
        },
        {
          title: 'Κατεύθυνση στο edit',
          body: 'Ρυθμίζουμε pace, έμφαση και ακολουθία γύρω από την εμπορική απόφαση που πρέπει να υποστηρίξει το έργο.',
        },
      ],
    },
    {
      id: 'working-together',
      variant: 'closing',
      mediaAlign: 'right',
      orientation: 'portrait',
      progressLabel: 'Συνεργασία',
      title: 'Μια δομημένη συνεργασία παράγει σαφήνεια, παραδοτέα και καθαρότερη μετάβαση στην εκτέλεση.',
      description:
        'Η τελική ενότητα κλείνει τον κύκλο: τι λαμβάνετε, πώς κινείται η συνεργασία και γιατί η διαδικασία είναι οργανωμένη ώστε η παραγωγή να παραμένει ήρεμη και οι αποφάσεις πιο καθαρές.',
      videoUrl: VIDEO_3_URL,
      videoTitle: 'Συνεργασία και επόμενος προσανατολισμός',
      videoDescription:
        'Η τελευταία ενότητα για τα παραδοτέα, τη δομή της συνεργασίας και τη φυσική μετάβαση στον σχεδιασμό.',
      steps: [
        {
          title: 'Ανίχνευση',
          body: 'Ξεκαθαρίζουμε προτεραιότητες, πλαίσιο κοινού και πού η τρέχουσα επικοινωνία υπολείπεται.',
        },
        {
          title: 'Κατεύθυνση',
          body: 'Μεταφράζουμε αυτή τη σαφήνεια σε συγκεκριμένη δημιουργική και μηνυματική κατεύθυνση.',
        },
        {
          title: 'Παραγωγή',
          body: 'Καταγράφουμε και διαμορφώνουμε το υλικό γύρω από το μήνυμα, όχι γύρω από περιττή παραγωγή.',
        },
        {
          title: 'Βελτίωση',
          body: 'Οριστικοποιούμε outputs, versions και rollout thinking με βάση το τελικό use case.',
        },
      ],
      cards: [
        {
          title: 'Δημιουργική κατεύθυνση',
          body: 'Καθαρή οπτική για το τι πρέπει να επικοινωνεί το έργο και πώς πρέπει να προσγειώνεται.',
        },
        {
          title: 'Script και δομή',
          body: 'Αρχιτεκτονική μηνύματος, ροή λόγου και αφηγηματικός έλεγχος πριν ξεκινήσει η παραγωγή.',
        },
        {
          title: 'Σχεδιασμός παραγωγής',
          body: 'Πρακτική προσέγγιση για capture, προτεραιότητες και λήψη αποφάσεων κατά την παραγωγή.',
        },
        {
          title: 'Edits και versions',
          body: 'Επεξεργασμένα cuts και χρήσιμες προσαρμογές για διαφορετικές τοποθετήσεις ή στάδια της απόφασης.',
        },
      ],
    },
  ];
}

export const portalContentByLanguage: Record<Language, PortalContent> = {
  el: {
    meta: {
      title: 'Ithaca | Ιδιωτικό Client Portal',
      description: 'Ιδιωτικό portal της Ithaca για στρατηγική marketing, positioning και video direction.',
    },
    ui: {
      navigationAriaLabel: 'Πλοήγηση ενοτήτων',
      navigationJumpLabel: 'Μετάβαση στην ενότητα',
      openingLabel: 'Εισαγωγή',
      languageToggleLabel: 'Επιλογή γλώσσας',
      videoUnavailable: 'Το video δεν είναι διαθέσιμο σε ενσωματωμένη προβολή.',
      openOnYoutube: 'Άνοιγμα στο YouTube',
      videoTitlePrefix: 'Video portal της Ithaca',
    },
    hero: {
      title: 'Μια ιδιωτική παρουσίαση της Ithaca για στρατηγική marketing και κατεύθυνση video.',
      description:
        'Αυτό το portal είναι μια καθοδηγούμενη παρουσίαση για πραγματική πελατειακή συζήτηση. Δείχνει πώς η Ithaca μετατρέπει τη στρατηγική σαφήνεια, τη δομή του μηνύματος και τη στοχευμένη παραγωγή σε video με ουσιαστική εμπορική αξία.',
      introLine: 'Διαμορφωμένο ιδιωτικά, με positioning, επικοινωνία και εκτέλεση ενταγμένα στην ίδια στρατηγική λογική.',
      frameTitle: 'Τι δείχνει αυτή η παρουσίαση',
      frameSummary:
        'Οι τρεις ενότητες παρουσιάζουν πώς η Ithaca ορίζει το πλαίσιο, διαμορφώνει την επικοινωνία και οργανώνει τη συνεργασία.',
      notes: [
        {
          title: 'Γιατί υπάρχει αυτή η παρουσίαση',
          body: 'Για να γίνει ορατή η στρατηγική λογική πριν αφιερωθεί χρόνος σε επιλογές παραγωγής, κύκλους edits και αποφάσεις rollout.',
        },
        {
          title: 'Τι στοχεύει να ξεκαθαρίσει',
          body: 'Να δημιουργήσει βεβαιότητα γύρω από την κατεύθυνση, τις επικοινωνιακές προτεραιότητες και το τι παράγει στην πράξη μια καλά δομημένη συνεργασία.',
        },
      ],
    },
    sections: createGreekSections(),
    cta: {
      id: 'cta',
      progressLabel: 'Επόμενο βήμα',
      title: 'Αν η κατεύθυνση είναι σωστή, το επόμενο βήμα είναι να περάσουμε στον σχεδιασμό με καθαρό πλαίσιο.',
      description:
        'Επιλέξτε την επόμενη κίνηση που ταιριάζει στη συζήτηση. Στόχος δεν είναι η πίεση, αλλά η καθαρή μετάβαση από την αξιολόγηση στο scope, το timing και την προετοιμασία.',
      primaryAction: {
        label: 'Περνάμε στον σχεδιασμό',
        href: 'mailto:team@ithaca.agency?subject=%CE%A3%CF%85%CE%BD%CE%AD%CF%87%CE%B5%CE%B9%CE%B1%20%CF%83%CF%84%CE%BF%CE%BD%20%CF%83%CF%87%CE%B5%CE%B4%CE%B9%CE%B1%CF%83%CE%BC%CF%8C',
      },
      secondaryAction: {
        label: 'Επιστροφή στην προσέγγιση',
        href: '#approach',
      },
    },
  },
  en: {
    meta: {
      title: 'Ithaca Agency | Private Client Portal',
      description: 'A private Ithaca portal for strategic marketing direction, positioning, and video planning.',
    },
    ui: {
      navigationAriaLabel: 'Section progress',
      navigationJumpLabel: 'Jump to',
      openingLabel: 'Opening',
      languageToggleLabel: 'Select language',
      videoUnavailable: 'Video unavailable in embed view.',
      openOnYoutube: 'Open on YouTube',
      videoTitlePrefix: 'Ithaca portal video',
    },
    hero: {
      title: 'A private Ithaca walkthrough for strategic marketing and video direction.',
      description:
        'This portal is a guided review prepared for a real client conversation. It shows how Ithaca uses strategic clarity, message structure, and thoughtful production to make video more commercially useful.',
      introLine: 'Prepared privately, with positioning, communication, and execution considered as one system.',
      frameTitle: 'What this walkthrough is for',
      frameSummary:
        'The three chapters show how Ithaca frames the work, shapes the communication, and structures the collaboration.',
      notes: [
        {
          title: 'Why this review exists',
          body: 'To make the strategic logic visible before time is committed to production choices, edit rounds, and rollout decisions.',
        },
        {
          title: 'What it is meant to clarify',
          body: 'Create confidence around direction, communication priorities, and what a well-structured engagement would actually produce.',
        },
      ],
    },
    sections: createEnglishSections(),
    cta: {
      id: 'cta',
      progressLabel: 'Next Step',
      title: 'If the direction feels aligned, the next step is to move into planning with clarity.',
      description:
        'Choose the next action that fits the conversation. The aim is not pressure. It is a clear move from review into scope, timing, and preparation.',
      primaryAction: {
        label: 'Move into planning',
        href: 'mailto:team@ithaca.agency?subject=Continue%20to%20planning',
      },
      secondaryAction: {
        label: 'Return to the approach',
        href: '#approach',
      },
    },
  },
};
