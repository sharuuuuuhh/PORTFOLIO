import * as cheerio from "cheerio";

export function getDescription(data: { html?: string; metadata?: Record<string, unknown> } | null): string | undefined {
  if (!data) return undefined;
  const metadataDescription = typeof data.metadata?.description === "string" ? data.metadata.description : undefined;
  if (metadataDescription) return metadataDescription;
  if (!data.html) return undefined;
  const $ = cheerio.load(data.html);
  return $("meta[property='og:description']").attr("content") || $("meta[name='description']").attr("content") || undefined;
}
