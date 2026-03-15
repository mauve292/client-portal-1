import { toYoutubeEmbedUrl } from '../../utils/youtube';

type VideoEmbedProps = {
  url: string;
  title: string;
  description: string;
  overlayLines: string[];
};

export function VideoEmbed({ url, title, description, overlayLines }: VideoEmbedProps) {
  const embedUrl = toYoutubeEmbedUrl(url);

  return (
    <div className="video-stage" data-reveal>
      <div className="video-stage__floating" aria-hidden="true">
        {overlayLines.map((line, index) => (
          <span className={`video-stage__chip video-stage__chip--${index + 1}`} key={line}>
            {line}
          </span>
        ))}
      </div>

      <div className="video-card">
        <div className="video-card__frame">
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
