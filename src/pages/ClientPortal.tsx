import { useEffect, useMemo, useState } from 'react';
import { FormSection } from '../components/portal/FormSection';
import { HeroSection } from '../components/portal/HeroSection';
import { PortalShell } from '../components/portal/PortalShell';
import { SectionProgress } from '../components/portal/SectionProgress';
import { SoftBackground } from '../components/portal/SoftBackground';
import { VideoNarrativeSection } from '../components/portal/VideoNarrativeSection';
import { portalContent } from '../data/portalContent';

type ClientPortalProps = {
  slug: string;
};

type DisplaySection = {
  id: string;
  targetId: string;
  label: string;
  title: string;
};

function usePortalObservers(displaySections: DisplaySection[]) {
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
          setActiveSection(visibleEntry.target.dataset.sectionId ?? displaySections[0]?.id ?? 'hero');
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
  }, [displaySections]);

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
  void slug;
  const displaySections = useMemo<DisplaySection[]>(
    () => [
      {
        id: 'hero',
        targetId: 'hero',
        label: portalContent.ui.introLabel,
        title: portalContent.hero.title,
      },
      {
        id: portalContent.sections[0].id,
        targetId: portalContent.sections[0].id,
        label: portalContent.sections[0].navLabel,
        title: portalContent.sections[0].title,
      },
      {
        id: portalContent.sections[1].id,
        targetId: portalContent.sections[1].id,
        label: portalContent.sections[1].navLabel,
        title: portalContent.sections[1].title,
      },
      {
        id: portalContent.sections[2].id,
        targetId: portalContent.sections[2].id,
        label: portalContent.sections[2].navLabel,
        title: portalContent.sections[2].title,
      },
      {
        id: portalContent.form.id,
        targetId: portalContent.form.id,
        label: portalContent.form.navLabel,
        title: portalContent.form.title,
      },
    ],
    [],
  );

  usePortalMetadata(portalContent.meta.title, portalContent.meta.description);
  const activeSection = usePortalObservers(displaySections);

  const sectionComponents = portalContent.sections.map((section) => (
    <VideoNarrativeSection key={section.id} section={section} videoUi={portalContent.ui} />
  ));

  return (
    <PortalShell>
      <SoftBackground />
      <header className="portal-head">
        <div className="portal-head__inner">
          <h1 className="portal-page-title">Ithaca&apos;s Client Portal</h1>
        </div>
      </header>

      <SectionProgress
        items={displaySections}
        activeSection={activeSection}
        navigationAriaLabel={portalContent.ui.navigationAriaLabel}
        navigationJumpLabel={portalContent.ui.navigationJumpLabel}
      />
      <HeroSection hero={portalContent.hero} />

      <main className="portal-main">
        {sectionComponents}
        <FormSection form={portalContent.form} transition={portalContent.transition} />
      </main>
    </PortalShell>
  );
}
