import type { TransitionContent } from '../../data/portalContent';

type CTASectionProps = {
  cta: TransitionContent;
};

export function CTASection({ cta }: CTASectionProps) {
  return (
    <section
      id={cta.id}
      className="portal-section portal-section--cta"
      data-section-id={cta.id}
      data-reveal
    >
      <div className="cta-panel">
        <div className="cta-panel__body cta-panel__body--transition">
          <div className="portal-section__copy portal-section__copy--cta">
            <h2>{cta.title}</h2>
            <p className="portal-section__description">{cta.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
