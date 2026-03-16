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
      <div className="chapter-panel chapter-panel--closing">
        <div className="chapter-grid chapter-grid--closing">
          <div className="portal-section__copy">
            <div className="portal-section__header">
              <p className="portal-section__eyebrow">{section.progressLabel}</p>
              <h2>{section.title}</h2>
            </div>
            <p className="portal-section__description">{section.description}</p>

            <div className="deliverables-support">
              {section.steps && (
                <div className="support-cluster support-cluster--process">
                  <div className="deliverables-strip">
                    {section.steps.map((step, index) => (
                      <article className="deliverables-step" key={step.title}>
                        <span className="deliverables-step__index">0{index + 1}</span>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="support-cluster support-cluster--deliverables">
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
          </div>

          <div className="chapter-media">
            <div className="chapter-media__panel">
              <VideoEmbed
                url={section.videoUrl}
                title={section.videoTitle}
                description={section.videoDescription}
                orientation={section.orientation}
                ui={videoUi}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
