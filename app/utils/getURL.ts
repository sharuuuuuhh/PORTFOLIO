import * as cheerio from "cheerio";

export function getURL(data: { html?: string; metadata?: Record<string, unknown> } | null): string | undefined {
  if (!data) return undefined;
  const metadataUrl = typeof data.metadata?.url === "string" ? data.metadata.url : undefined;
  if (metadataUrl) return metadataUrl;
  if (!data.html) return undefined;
  const $ = cheerio.load(data.html);
  return $("meta[property='og:url']").attr("content") || undefined;
}
