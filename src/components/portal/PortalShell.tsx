import type { PropsWithChildren } from 'react';
import type { Language } from '../../data/portalContent';

type PortalShellProps = PropsWithChildren<{
  language: Language;
}>;

export function PortalShell({ children, language }: PortalShellProps) {
  return (
    <div className="portal-app" lang={language} data-language={language}>
      <div className="portal-frame portal-frame--left" aria-hidden="true" />
      <div className="portal-frame portal-frame--right" aria-hidden="true" />
      <div className="portal-app__surface">{children}</div>
    </div>
  );
}
