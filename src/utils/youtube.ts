const YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'youtu.be',
  'www.youtu.be',
]);

function parseStartTime(value: string | null): string | null {
  if (!value) {
    return null;
  }

  if (/^\d+$/.test(value)) {
    return value;
  }

  const parts = value.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/i);

  if (!parts) {
    return null;
  }

  const hours = Number(parts[1] ?? 0);
  const minutes = Number(parts[2] ?? 0);
  const seconds = Number(parts[3] ?? 0);
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalSeconds > 0 ? String(totalSeconds) : null;
}

function cleanVideoId(value: string | null | undefined): string | null {
  if (!value) {
    return null;
  }

  const id = value.split('/')[0]?.trim();

  return id ? id : null;
}

function extractYoutubeId(parsedUrl: URL): string | null {
  const hostname = parsedUrl.hostname.toLowerCase();

  if (!YOUTUBE_HOSTS.has(hostname)) {
    return null;
  }

  if (hostname.includes('youtu.be')) {
    return cleanVideoId(parsedUrl.pathname.replace(/^\/+/, ''));
  }

  const pathSegments = parsedUrl.pathname.split('/').filter(Boolean);

  if (pathSegments[0] === 'watch') {
    return cleanVideoId(parsedUrl.searchParams.get('v'));
  }

  if (pathSegments[0] === 'embed' || pathSegments[0] === 'shorts') {
    return cleanVideoId(pathSegments[1]);
  }

  return cleanVideoId(parsedUrl.searchParams.get('v'));
}

export function toYoutubeEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const videoId = extractYoutubeId(parsedUrl);

    if (!videoId) {
      return null;
    }

    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
    const startTime =
      parseStartTime(parsedUrl.searchParams.get('start')) ??
      parseStartTime(parsedUrl.searchParams.get('t'));

    if (startTime) {
      embedUrl.searchParams.set('start', startTime);
    }

    return embedUrl.toString();
  } catch {
    return null;
  }
}
