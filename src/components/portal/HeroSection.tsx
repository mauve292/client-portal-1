import type { HeroContent } from '../../data/portalContent';

type HeroSectionProps = {
  hero: HeroContent;
  slugPreview: string;
};

export function HeroSection({ hero, slugPreview }: HeroSectionProps) {
  return (
    <header className="hero-section" id="hero" data-section-id="hero" data-reveal>
      <div className="hero-section__intro">
        <span className="eyebrow">{hero.eyebrow}</span>
        <div className="hero-section__pill-row">
          <span className="hero-pill">{hero.privateLabel}</span>
          <span className="hero-pill hero-pill--ghost">Ref. {slugPreview}</span>
        </div>
      </div>

      <div className="hero-section__content">
        <div className="hero-section__copy">
          <p className="hero-section__context">{hero.introLine}</p>
          <h1>{hero.title}</h1>
          <p className="hero-section__lede">{hero.description}</p>

          <div className="hero-section__notes">
            {hero.notes.map((note) => (
              <article className="hero-note" key={note.title}>
                {note.meta && <span className="hero-note__meta">{note.meta}</span>}
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-frame">
          <span className="hero-frame__meta">Prepared by Ithaca for private review</span>
          <h2>{hero.frameTitle}</h2>
          <p>{hero.frameSummary}</p>
          <div className="hero-frame__lines">
            {hero.frameLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}
