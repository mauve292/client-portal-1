# Client Portal Notes

- Portal copy and structure live in `src/data/portalContent.ts`.
- The three chapter videos are centralized there as `VIDEO_1_URL`, `VIDEO_2_URL`, and `VIDEO_3_URL`.
- To replace the current videos, update those three constants in one place.
- To switch to different YouTube links later, keep editing the same constants or change each chapter object's `videoUrl` in `portalSections`.
- The app reads `/client-portal/:slug` from the current path and passes the slug into the portal for private-link context only.
- `vercel.json` keeps direct visits to nested `/client-portal/:slug` paths working by rewriting them to `index.html`.
