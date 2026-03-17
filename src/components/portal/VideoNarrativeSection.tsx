import type { PortalUiContent, PortalVideoSection } from '../../data/portalContent';
import { VideoEmbed } from './VideoEmbed';

type VideoNarrativeSectionProps = {
  section: PortalVideoSection;
  videoUi: Pick<PortalUiContent, 'openOnYoutube' | 'videoTitlePrefix' | 'videoUnavailable'>;
};

export function VideoNarrativeSection({ section, videoUi }: VideoNarrativeSectionProps) {
  const isMediaLeft = section.mediaAlign === 'left';
  const alignClass = isMediaLeft ? 'portal-section--media-left' : 'portal-section--media-right';
  const copyRevealClass = isMediaLeft
    ? 'chapter-copy-shell chapter-copy-shell--from-left'
    : 'chapter-copy-shell chapter-copy-shell--from-right';

  return (
    <section
      id={section.id}
      className={`portal-section chapter-section ${alignClass}`}
      data-section-id={section.id}
    >
      <div className="chapter-panel chapter-row">
        <div className="chapter-grid chapter-row__grid">
          <div className="chapter-media" data-reveal>
            <div className="chapter-media__panel">
              <VideoEmbed
                url={section.videoUrl}
                title={section.title}
                orientation={section.orientation}
                ui={videoUi}
              />
            </div>
          </div>

          <div className={copyRevealClass} data-reveal>
            <div className="portal-section__copy chapter-row__copy">
              <h2>{section.title}</h2>
              <p className="portal-section__description">{section.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
