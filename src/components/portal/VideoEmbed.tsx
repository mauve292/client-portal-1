import { toYoutubeEmbedUrl } from '../../utils/youtube';

type VideoEmbedProps = {
  url: string;
  title: string;
  description: string;
  orientation: 'portrait' | 'landscape';
};

export function VideoEmbed({
  url,
  title,
  description,
  orientation,
}: VideoEmbedProps) {
  const embedUrl = toYoutubeEmbedUrl(url);
  const stageClass = `video-stage video-stage--${orientation}`;
  const cardClass = `video-card video-card--${orientation}`;
  const frameClass =
    orientation === 'portrait'
      ? 'video-card__frame video-card__frame--portrait'
      : 'video-card__frame video-card__frame--landscape';

  return (
    <div className={stageClass} data-reveal>
      <div className={cardClass}>
        <div className={frameClass}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={`Ithaca private portal video: ${title}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="video-card__fallback">
              <p>Video unavailable in embed view.</p>
              <a href={url} target="_blank" rel="noreferrer">
                Open on YouTube
              </a>
            </div>
          )}
        </div>

        <div className="video-card__caption">
          <div className="video-card__caption-copy">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
