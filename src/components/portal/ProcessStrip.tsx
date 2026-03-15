import type { PortalSection } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type ProcessStripProps = {
  section: PortalSection;
};

export function ProcessStrip({ section }: ProcessStripProps) {
  const alignClass =
    section.mediaAlign === 'left' ? 'portal-section--media-left' : 'portal-section--media-right';

  return (
    <section
      id={section.id}
      className={`portal-section portal-section--process ${alignClass}`}
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

      <div className="process-layout">
        <div className="process-strip">
          {section.steps?.map((step, index) => (
            <article className="process-step" key={step.title}>
              <div className="process-step__top">
                <span className="process-step__index">0{index + 1}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.body}</p>
            </article>
          ))}
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
