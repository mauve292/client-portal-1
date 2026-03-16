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
            <p className="hero-section__context">{hero.description}</p>
            <div className="hero-main__copy">
              <h1>{hero.title}</h1>
              <p className="hero-section__lede">{hero.lead}</p>
            </div>
          </div>

          <aside className="hero-brief">
            <div className="hero-brief__intro">
              <p className="hero-brief__eyebrow">{hero.summaryTitle}</p>
              <p className="hero-brief__summary">{hero.summaryBody}</p>
            </div>

            <ul className="hero-brief__highlights">
              {hero.summaryHighlights.map((item) => (
                <li className="hero-note" key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
}
