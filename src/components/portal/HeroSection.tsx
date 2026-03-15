import type { HeroContent } from '../../data/portalContent';

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <header className="hero-section" id="hero" data-section-id="hero" data-reveal>
      <div className="hero-grid">
        <div className="hero-main">
          <div className="hero-kicker">
            <span className="eyebrow">{hero.eyebrow}</span>
          </div>

          <p className="hero-section__context">{hero.introLine}</p>
          <h1>{hero.title}</h1>
          <p className="hero-section__lede">{hero.description}</p>
        </div>

        <aside className="hero-aside">
          <span className="hero-aside__meta">Prepared by Ithaca for private review</span>
          <h2>{hero.frameTitle}</h2>
          <p>{hero.frameSummary}</p>
          <div className="hero-frame__lines">
            {hero.frameLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </aside>
      </div>

      <div className="hero-signals">
        {hero.notes.map((note) => (
          <article className="hero-note" key={note.title}>
            {note.meta && <span className="hero-note__meta">{note.meta}</span>}
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </header>
  );
}
