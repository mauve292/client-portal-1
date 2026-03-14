import { useEffect, useMemo, useState } from 'react';
import { CTASection } from '../components/portal/CTASection';
import { DeliverablesGrid } from '../components/portal/DeliverablesGrid';
import { HeroSection } from '../components/portal/HeroSection';
import { PortalShell } from '../components/portal/PortalShell';
import { ProcessStrip } from '../components/portal/ProcessStrip';
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

const DISPLAY_SECTIONS = [
  {
    id: 'hero',
    label: 'Opening',
    title: portalHero.title,
  },
  ...portalSections.map((section) => ({
    id: section.id,
    label: section.progressLabel,
    title: section.title,
  })),
];

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
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSection(visibleEntry.target.dataset.sectionId ?? DISPLAY_SECTIONS[0].id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-18% 0px -36% 0px',
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
    if (section.variant === 'process') {
      return <ProcessStrip key={section.id} section={section} />;
    }

    if (section.variant === 'deliverables') {
      return <DeliverablesGrid key={section.id} section={section} />;
    }

    if (section.variant === 'cta') {
      return <CTASection key={section.id} section={section} cta={portalCta} />;
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
      </main>
    </PortalShell>
  );
}
