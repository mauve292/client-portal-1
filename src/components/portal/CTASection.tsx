import type { CtaContent } from '../../data/portalContent';

type CTASectionProps = {
  cta: CtaContent;
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
        <div className="cta-panel__body">
          <div className="portal-section__copy portal-section__copy--cta">
            <div className="portal-section__header">
              <p className="portal-section__eyebrow">{cta.progressLabel}</p>
              <h2>{cta.title}</h2>
            </div>
            <p className="portal-section__description">{cta.description}</p>
          </div>

          <div className="cta-actions">
            <a className="button button--primary" href={cta.primaryAction.href}>
              {cta.primaryAction.label}
            </a>
            <a className="button button--secondary" href={cta.secondaryAction.href}>
              {cta.secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
