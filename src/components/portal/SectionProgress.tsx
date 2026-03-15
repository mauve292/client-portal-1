type SectionProgressItem = {
  id: string;
  targetId: string;
  label: string;
  title: string;
};

type SectionProgressProps = {
  items: SectionProgressItem[];
  activeSection: string;
};

export function SectionProgress({
  items,
  activeSection,
}: SectionProgressProps) {
  return (
    <div className="portal-progress-shell">
      <div className="portal-progress-bar">
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
    </div>
  );
}
