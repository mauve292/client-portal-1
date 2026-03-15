import type { PortalSection } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type DeliverablesGridProps = {
  section: PortalSection;
};

export function DeliverablesGrid({ section }: DeliverablesGridProps) {
  const alignClass =
    section.mediaAlign === 'left' ? 'portal-section--media-left' : 'portal-section--media-right';
  const orientationClass =
    section.orientation === 'portrait'
      ? 'portal-section--portrait'
      : 'portal-section--landscape';

  return (
    <section
      id={section.id}
      className={`portal-section portal-section--deliverables ${alignClass} ${orientationClass}`}
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
      </div>

      <div className="deliverables-layout">
        <div className="deliverables-support">
          {section.steps && (
            <div className="deliverables-strip">
              {section.steps.map((step, index) => (
                <article className="deliverables-step" key={step.title}>
                  <span className="deliverables-step__index">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          )}

          <div className="deliverables-grid">
            {section.cards?.map((card) => (
              <article className="deliverable-card" key={card.title}>
                {card.meta && <span className="deliverable-card__meta">{card.meta}</span>}
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        <VideoEmbed
          url={section.videoUrl}
          title={section.videoTitle}
          description={section.videoDescription}
          overlayLines={section.overlayLines}
          orientation={section.orientation}
        />
      </div>
    </section>
  );
}
