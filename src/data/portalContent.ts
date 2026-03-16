// Replace these three constants to update the onboarding videos.
// Standard YouTube links, youtu.be links, embed links, and Shorts links all work here.
export const VIDEO_1_URL = 'https://youtube.com/shorts/4CqpEA_Vb9w?si=PiCrAIEN97Y-T6fq';
export const VIDEO_2_URL = 'https://youtube.com/shorts/5jj5bsJgzf4?si=LVIf4HDsf5ghv_KL';
export const VIDEO_3_URL = 'https://youtube.com/shorts/o5YY6NuGHDY?si=H1qZTf3thh0C-9Fo';

type ActivationStep = {
  title: string;
  body: string;
};

type FormField = {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'textarea';
};

export type PortalVideoSection = {
  id: string;
  navLabel: string;
  title: string;
  description: string;
  videoUrl: string;
  videoTitle: string;
  videoDescription: string;
  mediaAlign?: 'left' | 'right';
  orientation: 'portrait' | 'landscape';
};

export type HeroContent = {
  title: string;
  description: string;
  lead: string;
  summaryTitle: string;
  summaryBody: string;
  summaryHighlights: string[];
};

export type ActivationPanelContent = {
  title: string;
  description: string;
  steps: ActivationStep[];
  note: string;
};

export type TransitionContent = {
  id: string;
  title: string;
  description: string;
};

export type FormContent = {
  id: string;
  navLabel: string;
  title: string;
  description: string;
  note: string;
  fields: FormField[];
  submitLabel: string;
};

export type PortalUiContent = {
  navigationAriaLabel: string;
  navigationJumpLabel: string;
  introLabel: string;
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
  activationPanel: ActivationPanelContent;
  sections: PortalVideoSection[];
  transition: TransitionContent;
  form: FormContent;
};

export const portalContent: PortalContent = {
  meta: {
    title: 'Ithaca | Client Onboarding Portal',
    description: 'Onboarding portal της Ithaca Agency με 3 βίντεο, panel ενεργοποίησης και φόρμα trial.',
  },
  ui: {
    navigationAriaLabel: 'Πλοήγηση portal',
    navigationJumpLabel: 'Μετάβαση στην ενότητα',
    introLabel: 'Εισαγωγή',
    videoUnavailable: 'Το βίντεο δεν είναι διαθέσιμο σε ενσωματωμένη προβολή.',
    openOnYoutube: 'Άνοιγμα στο YouTube',
    videoTitlePrefix: 'Βίντεο onboarding της Ithaca',
  },
  hero: {
    title: 'Καλώς ήρθες στην Ιθάκη σου!',
    description:
      'Εδώ ξεκινάει το ταξίδι για την ψηφιακή αναβάθμιση της επιχείρησής σου.',
    lead:
      'Πριν βουτήξουμε στα βαθιά, ο συνεργάτης μας έχει ετοιμάσει 3 σύντομα βίντεο με πολύτιμα tips για την επιχείρησή σου. Δες τα για να καταλάβεις τη φιλοσοφία μας και, παράλληλα, ακολούθησε τα βήματα στο panel για να ενεργοποιήσεις 15 ημέρες δωρεάν δοκιμής μαζί μας.',
    summaryTitle: 'Τι περιλαμβάνει το portal',
    summaryBody:
      'Μια σύντομη διαδρομή γνωριμίας με 3 βίντεο, ξεκάθαρα βήματα ενεργοποίησης και μία τελική φόρμα για το free trial.',
    summaryHighlights: [
      '3 σύντομα βίντεο με πρακτικά tips',
      'Ορατό panel ενεργοποίησης 15 ημερών free trial',
      'Τελική φόρμα για να προχωρήσει η επικοινωνία',
    ],
  },
  activationPanel: {
    title: 'Panel ενεργοποίησης',
    description: 'Ακολούθησε τα παρακάτω βήματα για να προχωρήσει η δωρεάν δοκιμή σου με απλό και καθαρό τρόπο.',
    steps: [
      {
        title: 'Βήμα 1: Δες τα 3 βίντεο',
        body: 'Ξεκίνα με το περιεχόμενο για να πάρεις μια πρώτη εικόνα για τον τρόπο που δουλεύουμε.',
      },
      {
        title: 'Βήμα 2: Κατανόησε τη φιλοσοφία μας',
        body: 'Κράτα τα βασικά σημεία που θέλεις να δεις να εφαρμόζονται και στην επιχείρησή σου.',
      },
      {
        title: 'Βήμα 3: Συμπλήρωσε τη φόρμα',
        body: 'Άφησε τα στοιχεία σου και μια σύντομη εικόνα για την επιχείρηση ή τις ανάγκες σου.',
      },
      {
        title: 'Βήμα 4: Ενεργοποίηση 15 ημερών free trial',
        body: 'Ένας εκπρόσωπός μας θα επικοινωνήσει μαζί σου για να ξεκινήσει το trial χωρίς δέσμευση.',
      },
    ],
    note: 'Μετά τις 15 ημέρες μπορείς να διακόψεις την υπηρεσία χωρίς κάποια χρέωση.',
  },
  sections: [
    {
      id: 'video-1',
      navLabel: 'Βίντεο 1',
      title: 'Μαθαίνοντας τη σημαντικότητα του “short-form video”',
      description:
        'Στο πρώτο βίντεο, ο creator μοιράζεται μαζί σου tips για το πώς η σωστή προσέγγιση αλλάζει τα δεδομένα και τι σημαίνει «ψυχολογία σύγχρονου καταναλωτή». Στην Ithaca Agency, εφαρμόζουμε ακριβώς αυτή τη λογική σε κάθε project.',
      videoUrl: VIDEO_1_URL,
      videoTitle: 'Βίντεο 1',
      videoDescription: 'Tips για τη σωστή προσέγγιση και την ψυχολογία του σύγχρονου καταναλωτή.',
      mediaAlign: 'right',
      orientation: 'portrait',
    },
    {
      id: 'video-2',
      navLabel: 'Βίντεο 2',
      title: 'Ο μαραθώνιος του marketing.',
      description:
        'Ένα σύντομο βίντεο που βάζει το marketing στη σωστή του διάσταση: ως μια διαδρομή συνέπειας, υπομονής και σωστού ρυθμού.',
      videoUrl: VIDEO_2_URL,
      videoTitle: 'Βίντεο 2',
      videoDescription: 'Μια καθαρή ματιά στη διάρκεια, τη συνέπεια και το σωστό momentum.',
      mediaAlign: 'left',
      orientation: 'portrait',
    },
    {
      id: 'video-3',
      navLabel: 'Βίντεο 3',
      title: 'Από τη θεωρία στην πράξη.',
      description:
        'Το τρίτο βίντεο κλείνει τον κύκλο και δείχνει πώς η θεωρία αποκτά αξία μόνο όταν εφαρμόζεται με σαφή βήματα και σωστή καθοδήγηση.',
      videoUrl: VIDEO_3_URL,
      videoTitle: 'Βίντεο 3',
      videoDescription: 'Η μετάβαση από τα tips σε πραγματική εφαρμογή για την επιχείρησή σου.',
      mediaAlign: 'right',
      orientation: 'portrait',
    },
  ],
  transition: {
    id: 'trial',
    title: 'Τώρα είναι η σειρά μας να δουλέψουμε για εσένα.',
    description:
      'Ελπίζουμε τα tips από τα βίντεο να σου έδωσαν μια πρώτη εικόνα για το πώς σκεφτόμαστε στην Ithaca Agency. Η θεωρία, όμως, έχει αξία μόνο όταν γίνεται πράξη.',
  },
  form: {
    id: 'trial-form',
    navLabel: 'Trial / Φόρμα',
    title:
      'Είμαστε έτοιμοι να αναλάβουμε τη στρατηγική σου, να εφαρμόσουμε τα σωστά hooks και να βελτιστοποιήσουμε την ψηφιακή σου παρουσία. Το μόνο που χωρίζει την επιχείρησή σου από το επόμενο επίπεδο είναι η συμπλήρωση της παρακάτω φόρμας.',
    description:
      'Μόλις συμπληρώσεις τη φόρμα, ένας εκπρόσωπός μας θα έρθει σε επικοινωνία μαζί σου για να ενεργοποιηθεί το δωρεάν trial 15 ημερών.',
    note:
      'Μετά τις 15 ημέρες, μπορείς να διακόψεις την υπηρεσία χωρίς κάποια χρέωση.',
    fields: [
      {
        id: 'full-name',
        label: 'Ονοματεπώνυμο',
        placeholder: 'Γράψε το ονοματεπώνυμό σου',
        type: 'text',
      },
      {
        id: 'business',
        label: 'Επιχείρηση',
        placeholder: 'Όνομα επιχείρησης',
        type: 'text',
      },
      {
        id: 'email',
        label: 'Email',
        placeholder: 'name@company.gr',
        type: 'email',
      },
      {
        id: 'phone',
        label: 'Τηλέφωνο',
        placeholder: '69XXXXXXXX',
        type: 'tel',
      },
      {
        id: 'website',
        label: 'Ιστοσελίδα / Social link',
        placeholder: 'https://',
        type: 'url',
      },
      {
        id: 'message',
        label: 'Σύντομο μήνυμα',
        placeholder: 'Πες μας λίγα λόγια για την επιχείρησή σου και τι θέλεις να πετύχεις.',
        type: 'textarea',
      },
    ],
    submitLabel: 'Ζητώ ενεργοποίηση 15 ημερών',
  },
};
