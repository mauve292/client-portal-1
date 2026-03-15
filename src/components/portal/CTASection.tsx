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
        <div className="portal-section__meta">
          <span className="eyebrow">{cta.eyebrow}</span>
          <span className="section-chapter">{cta.chapter}</span>
        </div>

        <div className="cta-panel__body">
          <div className="portal-section__copy">
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
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
