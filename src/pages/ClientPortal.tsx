import { useEffect, useMemo, useState } from 'react';
import { CTASection } from '../components/portal/CTASection';
import { DeliverablesGrid } from '../components/portal/DeliverablesGrid';
import { HeroSection } from '../components/portal/HeroSection';
import { PortalShell } from '../components/portal/PortalShell';
import { SectionProgress } from '../components/portal/SectionProgress';
import { SoftBackground } from '../components/portal/SoftBackground';
import { VideoNarrativeSection } from '../components/portal/VideoNarrativeSection';
import {
  portalCta,
  portalHero,
  portalMeta,
  portalSections,
} from '../data/portalContent';

type ClientPortalProps = {
  slug: string;
};

const CLOSE_STEP_ID = 'close';

const DISPLAY_SECTIONS = [
  {
    id: 'hero',
    targetId: 'hero',
    label: 'Opening',
    title: portalHero.title,
  },
  {
    id: portalSections[0].id,
    targetId: portalSections[0].id,
    label: portalSections[0].progressLabel,
    title: portalSections[0].title,
  },
  {
    id: portalSections[1].id,
    targetId: portalSections[1].id,
    label: portalSections[1].progressLabel,
    title: portalSections[1].title,
  },
  {
    id: CLOSE_STEP_ID,
    targetId: portalSections[2].id,
    label: portalCta.progressLabel,
    title: portalCta.title,
  },
];

function normalizeProgressSection(sectionId: string): string {
  if (sectionId === portalSections[2].id || sectionId === portalCta.id) {
    return CLOSE_STEP_ID;
  }

  return sectionId;
}

function usePortalObservers() {
  const [activeSection, setActiveSection] = useState(DISPLAY_SECTIONS[0].id);

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
              visibleEntry.target.dataset.sectionId ?? DISPLAY_SECTIONS[0].id,
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

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return activeSection;
}

function usePortalMetadata() {
  useEffect(() => {
    document.title = portalMeta.title;

    const metaNames: Record<string, string> = {
      description: portalMeta.description,
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
  }, []);
}

export function ClientPortal({ slug }: ClientPortalProps) {
  usePortalMetadata();
  const activeSection = usePortalObservers();
  const slugPreview = useMemo(() => slug.slice(0, 8).toUpperCase(), [slug]);

  const sectionComponents = portalSections.map((section) => {
    if (section.variant === 'closing') {
      return <DeliverablesGrid key={section.id} section={section} />;
    }

    return <VideoNarrativeSection key={section.id} section={section} />;
  });

  return (
    <PortalShell>
      <SoftBackground />
      <SectionProgress
        items={DISPLAY_SECTIONS}
        activeSection={activeSection}
        slugPreview={slugPreview}
      />
      <HeroSection hero={portalHero} slugPreview={slugPreview} />

      <main className="portal-main">
        {sectionComponents}
        <CTASection cta={portalCta} />
      </main>
    </PortalShell>
  );
}
