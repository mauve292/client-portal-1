import type { PortalSection, PortalUiContent } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type VideoNarrativeSectionProps = {
  section: PortalSection;
  videoUi: Pick<PortalUiContent, 'openOnYoutube' | 'videoTitlePrefix' | 'videoUnavailable'>;
};

export function VideoNarrativeSection({ section, videoUi }: VideoNarrativeSectionProps) {
  const alignClass =
    section.mediaAlign === 'left' ? 'portal-section--media-left' : 'portal-section--media-right';

  return (
    <section
      id={section.id}
      className={`portal-section chapter-section ${alignClass}`}
      data-section-id={section.id}
      data-reveal
    >
      <div className="chapter-grid">
        <div className="portal-section__copy">
          <div className="portal-section__header">
            <p className="portal-section__eyebrow">{section.progressLabel}</p>
            <h2>{section.title}</h2>
          </div>
          <p className="portal-section__description">{section.description}</p>

          {section.cards && (
            <div className="portal-card-row">
              {section.cards.map((card) => (
                <article className="portal-mini-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          )}
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
