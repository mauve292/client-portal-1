import type { PropsWithChildren } from 'react';

export function PortalShell({ children }: PropsWithChildren) {
  return (
    <div className="portal-app" lang="el">
      <div className="portal-frame portal-frame--left" aria-hidden="true" />
      <div className="portal-frame portal-frame--right" aria-hidden="true" />
      <div className="portal-app__surface">{children}</div>
    </div>
  );
}
