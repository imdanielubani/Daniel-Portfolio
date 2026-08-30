const LOCAL_SITE_URL = "http://localhost:3000";

function parseSiteUrl(value: string | undefined): URL | null {
  const candidate = value?.trim();
  if (!candidate) return null;

  const normalized = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;

  try {
    const url = new URL(normalized);
    return url.protocol === "http:" || url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}

export const siteUrl =
  parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  parseSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  parseSiteUrl(process.env.VERCEL_URL) ??
  new URL(LOCAL_SITE_URL);

export const siteOrigin = siteUrl.origin;
