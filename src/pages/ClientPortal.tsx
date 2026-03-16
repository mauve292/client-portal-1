import { useEffect, useMemo, useState } from 'react';
import { CTASection } from '../components/portal/CTASection';
import { DeliverablesGrid } from '../components/portal/DeliverablesGrid';
import { HeroSection } from '../components/portal/HeroSection';
import { PortalShell } from '../components/portal/PortalShell';
import { SectionProgress } from '../components/portal/SectionProgress';
import { SoftBackground } from '../components/portal/SoftBackground';
import { VideoNarrativeSection } from '../components/portal/VideoNarrativeSection';
import {
  type Language,
  portalContentByLanguage,
} from '../data/portalContent';

type ClientPortalProps = {
  slug: string;
};

const CLOSE_STEP_ID = 'close';
type DisplaySection = {
  id: string;
  targetId: string;
  label: string;
  title: string;
};

function normalizeProgressSection(sectionId: string, closingSectionId: string, ctaId: string): string {
  if (sectionId === closingSectionId || sectionId === ctaId) {
    return CLOSE_STEP_ID;
  }

  return sectionId;
}

function usePortalObservers(displaySections: DisplaySection[], closingSectionId: string, ctaId: string) {
  const [activeSection, setActiveSection] = useState(displaySections[0]?.id ?? 'hero');

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -6% 0px',
      },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(
            normalizeProgressSection(
              visibleEntry.target.dataset.sectionId ?? displaySections[0]?.id ?? 'hero',
              closingSectionId,
              ctaId,
            ),
          );
        }
      },
      {
        threshold: [0.22, 0.4, 0.62],
        rootMargin: '-10% 0px -44% 0px',
      },
    );

    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const sectionElements = document.querySelectorAll<HTMLElement>('[data-section-id]');

    revealElements.forEach((element) => revealObserver.observe(element));
    sectionElements.forEach((element) => sectionObserver.observe(element));

    setActiveSection((current) => {
      if (displaySections.some((section) => section.id === current)) {
        return current;
      }

      return displaySections[0]?.id ?? 'hero';
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [closingSectionId, ctaId, displaySections]);

  return activeSection;
}

function usePortalMetadata(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const metaNames: Record<string, string> = {
      description,
      robots: 'noindex,nofollow',
    };

    Object.entries(metaNames).forEach(([name, content]) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }

      tag.content = content;
    });
  }, [description, title]);
}

export function ClientPortal({ slug }: ClientPortalProps) {
  const [language, setLanguage] = useState<Language>('el');
  void slug;

  const content = portalContentByLanguage[language];
  const displaySections = useMemo<DisplaySection[]>(
    () => [
      {
        id: 'hero',
        targetId: 'hero',
        label: content.ui.openingLabel,
        title: content.hero.title,
      },
      {
        id: content.sections[0].id,
        targetId: content.sections[0].id,
        label: content.sections[0].progressLabel,
        title: content.sections[0].title,
      },
      {
        id: content.sections[1].id,
        targetId: content.sections[1].id,
        label: content.sections[1].progressLabel,
        title: content.sections[1].title,
      },
      {
        id: CLOSE_STEP_ID,
        targetId: content.sections[2].id,
        label: content.cta.progressLabel,
        title: content.cta.title,
      },
    ],
    [content],
  );

  usePortalMetadata(content.meta.title, content.meta.description);
  const activeSection = usePortalObservers(displaySections, content.sections[2].id, content.cta.id);

  const sectionComponents = content.sections.map((section) => {
    if (section.variant === 'closing') {
      return <DeliverablesGrid key={section.id} section={section} videoUi={content.ui} />;
    }

    return <VideoNarrativeSection key={section.id} section={section} videoUi={content.ui} />;
  });

  return (
    <PortalShell language={language}>
      <SoftBackground />
      <SectionProgress
        items={displaySections}
        activeSection={activeSection}
        language={language}
        onLanguageChange={setLanguage}
        navigationAriaLabel={content.ui.navigationAriaLabel}
        navigationJumpLabel={content.ui.navigationJumpLabel}
        languageToggleLabel={content.ui.languageToggleLabel}
      />
      <HeroSection hero={content.hero} />

      <main className="portal-main">
        {sectionComponents}
        <CTASection cta={content.cta} />
      </main>
    </PortalShell>
  );
}
