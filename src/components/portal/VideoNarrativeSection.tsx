import type { PortalSection } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type VideoNarrativeSectionProps = {
  section: PortalSection;
};

export function VideoNarrativeSection({ section }: VideoNarrativeSectionProps) {
  const alignClass =
    section.mediaAlign === 'left' ? 'portal-section--media-left' : 'portal-section--media-right';

  return (
    <section
      id={section.id}
      className={`portal-section portal-section--split ${alignClass}`}
      data-section-id={section.id}
      data-reveal
    >
      <div className="portal-section__copy">
        <div className="portal-section__meta">
          <span className="eyebrow">{section.eyebrow}</span>
          <span className="section-chapter">{section.chapter}</span>
        </div>
        <h2>{section.title}</h2>
        <p>{section.description}</p>

        {section.cards && (
          <div className="portal-card-row">
            {section.cards.map((card) => (
              <article className="portal-mini-card" key={card.title}>
                {card.meta && <span className="portal-mini-card__meta">{card.meta}</span>}
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        )}
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
