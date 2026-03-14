function extractYoutubeId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      return parsedUrl.pathname.replace('/', '') || null;
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return parsedUrl.pathname.split('/embed/')[1] || null;
      }

      return parsedUrl.searchParams.get('v');
    }
  } catch {
    return null;
  }

  return null;
}

export function toYoutubeEmbedUrl(url: string): string {
  const videoId = extractYoutubeId(url);

  if (!videoId) {
    return url;
  }

  return `https://www.youtube.com/embed/${videoId}`;
}
