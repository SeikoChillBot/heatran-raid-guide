# Community suggestions — shared French / English inbox

The English site mirrors the approved French RAID ATLAS V14 design and includes its own public Suggestions form and private `/adminDev/` dashboard.

## One namespace for both websites

Both Cloudflare Pages projects must bind **the exact same existing Cloudflare KV namespace**, not two newly created namespaces with the same display name.

| Project | Domain | Pages Functions binding |
| --- | --- | --- |
| French | https://pokemmo-raids-fr.pages.dev | `SUGGESTIONS_KV` → `pokemmo-raid-suggestions-fr` |
| English | https://pokemmo-raids.pages.dev | `SUGGESTIONS_KV` → **the same namespace as French** |

In Cloudflare **Workers & Pages → pokemmo-raids (English) → Settings → Bindings**, add a KV namespace binding named exactly `SUGGESTIONS_KV` and select the existing namespace used by the French site. Ensure the binding is set for **Production**.

Also in **Settings → Variables and Secrets** for the **English** project, add an encrypted secret named exactly `ADMIN_SUGGESTIONS_KEY`, containing at least 24 random characters. The secret can be different from the French site's secret: both APIs still share the same KV, and each dashboard requires its own project's secret. Keep both values out of GitHub, chat and screenshots.

With Git-integrated Cloudflare Pages, a production deployment from `SeikoChillBot/pokemmo-raid-guide` (`main`) includes the `functions/` directory. Redeploy after setting the binding/secret.

## Where to test

- Public English homepage: https://pokemmo-raids.pages.dev/
- English admin: https://pokemmo-raids.pages.dev/adminDev/
- API: https://pokemmo-raids.pages.dev/api/suggestions
- French admin: https://pokemmo-raids-fr.pages.dev/adminDev/

Unauthenticated GET `/api/suggestions` should return JSON **401** when correctly configured. HTTP **503** means the KV binding or the admin secret is missing, or the secret is too short. An HTML response or 404 indicates an API deployment issue. A successful POST returns **201** and a suggestion ID.

The public English form displays English category labels while retaining stable internal category IDs compatible with the French API and shared KV. Every new item is tagged `locale: "fr"` or `locale: "en"`, and both admin dashboards show the origin. Older suggestions without a locale are treated as French.

Admin actions:
- Mark an open suggestion as resolved; reopen it if needed.
- Permanently delete a suggestion only after it has been resolved and after browser confirmation.
- Authenticated `DELETE /api/suggestions/:id` rejects pending records with **409**, unknown IDs with **404**, and unauthenticated callers with **401**.

Both sites access the same suggestions. Cloudflare KV is eventually consistent: allow a short synchronization delay across locations. No test suggestions should be created or deleted in live storage without authorization.

## Existing RAID ATLAS material

The English pages preserve Heatran's three strategies, Cresselia's three options (Latin Combo remains a video reference where full builds are unverified), and Halloween 2025's archived guides. The look and interactions mirror the approved French V14 release; English species, moves and held-item terminology is sourced from the official French → English PokeAPI mappings, with additional reviewed English notes. Do not rewrite HP thresholds, IV/EV data or rotations during language fixes.

This feature requires a real Cloudflare deployment and human browser checks for mobile, cross-site submissions, reopening and deleting. Repository-level static checks and API simulations do not prove production behavior.
