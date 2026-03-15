type SectionProgressItem = {
  id: string;
  targetId: string;
  label: string;
  title: string;
};

type SectionProgressProps = {
  items: SectionProgressItem[];
  activeSection: string;
  slugPreview: string;
};

export function SectionProgress({
  items,
  activeSection,
  slugPreview,
}: SectionProgressProps) {
  return (
    <div className="portal-progress-shell">
      <div className="portal-mini-header">
        <span>Ithaca Agency</span>
        <span>Private strategy review</span>
        <span>Ref. {slugPreview}</span>
      </div>

      <nav className="portal-progress" aria-label="Section progress">
        {items.map((item, index) => {
          const isActive = item.id === activeSection;

          return (
            <a
              key={item.id}
              href={`#${item.targetId}`}
              className={isActive ? 'portal-progress__item is-active' : 'portal-progress__item'}
              aria-current={isActive ? 'step' : undefined}
              aria-label={`Jump to ${item.label}: ${item.title}`}
            >
              <span className="portal-progress__index">0{index + 1}</span>
              <strong>{item.label}</strong>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
