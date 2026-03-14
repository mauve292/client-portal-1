# Client Portal Notes

- Portal content lives in `src/data/portalContent.ts`.
- The shared placeholder video is `PLACEHOLDER_YOUTUBE_URL` at the top of that file.
- To replace all five videos at once, change `PLACEHOLDER_YOUTUBE_URL`.
- To use different videos later, keep the shared constant or replace each chapter object's `videoUrl` individually in `portalSections`.
- The app reads `/client-portal/:slug` from the URL path and passes the slug into the portal for private-link context only.
- `vercel.json` rewrites nested `/client-portal/:slug` paths to `index.html` so direct visits still load the SPA.
