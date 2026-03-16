import type { HeroContent } from '../../data/portalContent';

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <header className="hero-section" id="hero" data-section-id="hero" data-reveal>
      <div className="hero-panel">
        <div className="hero-main">
          <p className="hero-section__context">{hero.description}</p>
          <div className="hero-main__copy">
            <h1>{hero.title}</h1>
            <p className="hero-section__lede">{hero.lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
