import type { TransitionContent } from '../../data/portalContent';

type CTASectionProps = {
  cta: TransitionContent;
  formIntro: string;
};

export function CTASection({ cta, formIntro }: CTASectionProps) {
  return (
    <section id={cta.id} className="portal-section portal-section--cta" data-section-id={cta.id}>
      <div className="cta-panel">
        <div className="cta-panel__body cta-panel__body--transition" data-reveal>
          <div className="portal-section__copy portal-section__copy--cta">
            <h2>{cta.title}</h2>
            <p className="portal-section__description">{cta.description}</p>
            <p className="portal-section__description">{formIntro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
