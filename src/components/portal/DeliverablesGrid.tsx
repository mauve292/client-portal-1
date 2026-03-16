import type { PortalSection, PortalUiContent } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type DeliverablesGridProps = {
  section: PortalSection;
  videoUi: Pick<PortalUiContent, 'openOnYoutube' | 'videoTitlePrefix' | 'videoUnavailable'>;
};

export function DeliverablesGrid({ section, videoUi }: DeliverablesGridProps) {
  const alignClass =
    section.mediaAlign === 'left' ? 'portal-section--media-left' : 'portal-section--media-right';

  return (
    <section
      id={section.id}
      className={`portal-section chapter-section chapter-section--closing ${alignClass}`}
      data-section-id={section.id}
      data-reveal
    >
      <div className="chapter-grid chapter-grid--closing">
        <div className="portal-section__copy">
          <h2>{section.title}</h2>
          <p>{section.description}</p>

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
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="chapter-media">
          <VideoEmbed
            url={section.videoUrl}
            title={section.videoTitle}
            description={section.videoDescription}
            orientation={section.orientation}
            ui={videoUi}
          />
        </div>
      </div>
    </section>
  );
}
