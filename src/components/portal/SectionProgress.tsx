import type { Language } from '../../data/portalContent';

type SectionProgressItem = {
  id: string;
  targetId: string;
  label: string;
  title: string;
};

type SectionProgressProps = {
  items: SectionProgressItem[];
  activeSection: string;
  language: Language;
  onLanguageChange: (language: Language) => void;
  navigationAriaLabel: string;
  navigationJumpLabel: string;
  languageToggleLabel: string;
};

export function SectionProgress({
  items,
  activeSection,
  language,
  onLanguageChange,
  navigationAriaLabel,
  navigationJumpLabel,
  languageToggleLabel,
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

        <div className="portal-language-toggle" role="group" aria-label={languageToggleLabel}>
          <button
            type="button"
            className={language === 'el' ? 'portal-language-toggle__button is-active' : 'portal-language-toggle__button'}
            onClick={() => onLanguageChange('el')}
            aria-pressed={language === 'el'}
          >
            GR
          </button>
          <button
            type="button"
            className={language === 'en' ? 'portal-language-toggle__button is-active' : 'portal-language-toggle__button'}
            onClick={() => onLanguageChange('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}
