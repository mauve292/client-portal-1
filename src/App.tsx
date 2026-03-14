import { useMemo } from 'react';
import { ClientPortal } from './pages/ClientPortal';

const CLIENT_PORTAL_SEGMENT = 'client-portal';

function getPortalSlug(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const portalIndex = segments.indexOf(CLIENT_PORTAL_SEGMENT);

  if (portalIndex === -1) {
    return 'private-preview';
  }

  return segments[portalIndex + 1] ?? 'private-preview';
}

function App() {
  const slug = useMemo(() => getPortalSlug(window.location.pathname), []);

  return <ClientPortal slug={slug} />;
}

export default App;
