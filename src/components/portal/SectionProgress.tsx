type SectionProgressItem = {
  id: string;
  targetId: string;
  label: string;
  title: string;
};

type SectionProgressProps = {
  items: SectionProgressItem[];
  activeSection: string;
  navigationAriaLabel: string;
  navigationJumpLabel: string;
};

export function SectionProgress({
  items,
  activeSection,
  navigationAriaLabel,
  navigationJumpLabel,
}: SectionProgressProps) {
  return (
    <div className="portal-progress-shell">
      <div className="portal-progress-bar">
        <nav className="portal-progress" aria-label={navigationAriaLabel}>
          {items.map((item, index) => {
            const isActive = item.id === activeSection;

            return (
              <a
                key={item.id}
                href={`#${item.targetId}`}
                className={isActive ? 'portal-progress__item is-active' : 'portal-progress__item'}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`${navigationJumpLabel} ${item.label}: ${item.title}`}
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
