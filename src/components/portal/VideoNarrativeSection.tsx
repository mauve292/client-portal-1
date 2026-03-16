import type { PortalUiContent, PortalVideoSection } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type VideoNarrativeSectionProps = {
  section: PortalVideoSection;
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
      <div className="chapter-panel">
        <div className="chapter-grid">
          <div className="portal-section__copy">
            <h2>{section.title}</h2>
            <p className="portal-section__description">{section.description}</p>
          </div>

          <div className="chapter-media">
            <div className="chapter-media__panel">
              <VideoEmbed
                url={section.videoUrl}
                title={section.title}
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
