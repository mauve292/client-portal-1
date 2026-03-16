import type { HeroContent } from '../../data/portalContent';

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <header className="hero-section" id="hero" data-section-id="hero" data-reveal>
      <div className="hero-panel">
        <p className="hero-section__portal-title">Ithaca&apos;s Client Portal</p>
        <div className="hero-main">
          <div className="hero-main__copy">
            <h1>{hero.title}</h1>
            <p className="hero-section__description">{hero.description}</p>
          </div>

          <div className="hero-main__support">
            <p className="hero-section__lede">{hero.lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
