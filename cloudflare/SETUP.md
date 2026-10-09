# Cloudflare Pages and private visit log

The site remains in the GitHub repository as source. Cloudflare Pages serves the static export, while its Pages Function records first-party events in a private D1 database.

## Connect the site

1. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git** and select `kluthr1/kluthr1.github.io`.
2. Use the repository root as the project root, `pnpm install --frozen-lockfile && pnpm build` as the build command, and `out` as the build output directory. Set `NEXT_PUBLIC_SITE_URL` to `https://kluthria.org`. Leave `NEXT_PUBLIC_ENABLE_VISIT_LOG` unset for the initial deploy.
3. Create a D1 database named `kluthria-visit-log`. In its SQL console, run `cloudflare/schema.sql`.
4. In the Pages project's **Settings → Functions → D1 database bindings**, add binding `DB` and select that database. Add a production secret named `ADMIN_TOKEN` with a long, randomly generated value. Save and redeploy after adding bindings/secrets.
5. Under **Custom domains**, add `kluthria.org`. If Cloudflare asks you to change nameservers, do that at the registrar where the domain was purchased. Keep any existing email-related DNS records when moving nameservers.

After the `DB` binding and `ADMIN_TOKEN` are in place, add `NEXT_PUBLIC_ENABLE_VISIT_LOG=true` as a production build variable and redeploy. This prevents the tracker from sending requests before its database is configured.

The private log viewer is at `/admin/`. Its data API requires the `ADMIN_TOKEN` secret; enter that key in the page when viewing the log. The key is kept only in memory by the page and is never committed to the repository. The CSV export is downloaded to your computer.

## Fields and retention

The log stores the connecting public IP, Cloudflare country/region/city and ASN organization where available, user-agent, event time, page path, referrer without query strings, tagged traffic source, clicked link destination, and page engagement seconds. IP-derived location and network labels are estimates. No identity, fingerprint, or cross-site tracking cookie is created. The function deletes records older than 90 days when new tracked activity arrives.

To classify links from social profiles or a CV, append a `utm_source` value to the website URL, such as `https://kluthria.org/?utm_source=linkedin` or `https://kluthria.org/?utm_source=cv`. The source is carried to page views and link events in that browser tab. Twitter/X, GitHub, and LinkedIn referrers are also classified automatically when the browser provides a referrer; tagged links are more reliable.

The existing database can be updated once with `cloudflare/migrations/0002_add_source.sql` in the D1 SQL console. New code tolerates the old schema until this migration is applied, but source labels will only appear after the new deployment and migration.

The `/privacy/` page discloses this collection. Review local privacy requirements before enabling the logger for public traffic. Keep `ADMIN_TOKEN` secret; if it is exposed, rotate it in Pages settings.

## Free-tier bounds

Cloudflare currently lists 100,000 Workers requests/day, 100,000 D1 row writes/day, and 5 GB total D1 storage on its free Workers plan. The logger writes a row per page view, click, or page-exit engagement event. If a limit is exceeded, logging may pause until the daily quota resets. Review the current [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/) and [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/) before deployment.
