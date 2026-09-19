import * as cheerio from "cheerio";

export function getImageURL(data: { html?: string; metadata?: Record<string, unknown> } | null): string | undefined {
  if (!data) return undefined;
  const metadataImage = typeof data.metadata?.image === "string" ? data.metadata.image : undefined;
  if (metadataImage) return metadataImage;
  if (!data.html) return undefined;
  const $ = cheerio.load(data.html);
  return $("meta[property='og:image']").attr("content") || undefined;
}
