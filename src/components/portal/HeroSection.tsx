import type { HeroContent } from '../../data/portalContent';

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <header className="hero-section" id="hero" data-section-id="hero" data-reveal>
      <div className="hero-panel">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-section__context">{hero.introLine}</p>
            <div className="hero-main__copy">
              <h1>{hero.title}</h1>
              <p className="hero-section__lede">{hero.description}</p>
            </div>
          </div>

          <aside className="hero-brief">
            <div className="hero-brief__intro">
              <p className="hero-brief__eyebrow">{hero.frameTitle}</p>
              <p className="hero-brief__summary">{hero.frameSummary}</p>
            </div>

            <div className="hero-brief__notes">
              {hero.notes.map((note) => (
                <article className="hero-note" key={note.title}>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
