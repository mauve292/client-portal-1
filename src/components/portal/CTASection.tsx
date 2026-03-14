import type { CtaContent, PortalSection } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type CTASectionProps = {
  section: PortalSection;
  cta: CtaContent;
};

export function CTASection({ section, cta }: CTASectionProps) {
  const alignClass =
    section.mediaAlign === 'left' ? 'portal-section--media-left' : 'portal-section--media-right';

  return (
    <section
      id={section.id}
      className={`portal-section portal-section--cta ${alignClass}`}
      data-section-id={section.id}
      data-reveal
    >
      <div className="cta-panel">
        <div className="portal-section__meta">
          <span className="eyebrow">{section.eyebrow}</span>
          <span className="section-chapter">{section.chapter}</span>
        </div>

        <div className="portal-section__copy">
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>

        <div className="cta-actions">
          <a className="button button--primary" href={cta.primaryAction.href}>
            {cta.primaryAction.label}
          </a>
          <a className="button button--secondary" href={cta.secondaryAction.href}>
            {cta.secondaryAction.label}
          </a>
        </div>
      </div>

      <VideoEmbed
        url={section.videoUrl}
        title={section.videoTitle}
        description={section.videoDescription}
        overlayLines={section.overlayLines}
      />
    </section>
  );
}
