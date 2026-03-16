import type { ActivationPanelContent } from '../../data/portalContent';

type ActivationPanelProps = {
  activation: ActivationPanelContent;
};

export function ActivationPanel({ activation }: ActivationPanelProps) {
  return (
    <aside className="activation-panel" data-reveal>
      <div className="activation-panel__header">
        <h2>{activation.title}</h2>
        <p>{activation.description}</p>
      </div>

      <div className="activation-panel__steps">
        {activation.steps.map((step, index) => (
          <article className="activation-step" key={step.title}>
            <span className="activation-step__index">0{index + 1}</span>
            <div className="activation-step__copy">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="activation-panel__note">{activation.note}</p>
    </aside>
  );
}
