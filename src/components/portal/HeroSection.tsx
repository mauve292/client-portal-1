import type { HeroContent } from '../../data/portalContent';

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero-section" id="hero" data-section-id="hero">
      <div className="hero-panel">
        <div className="hero-main">
          <div className="hero-main__copy" data-reveal>
            <h2>{hero.title}</h2>
            <p className="hero-section__description">{hero.description}</p>
          </div>

          <div className="hero-main__support" data-reveal>
            <p className="hero-section__lede">{hero.lead}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
