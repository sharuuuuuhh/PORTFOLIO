import * as cheerio from "cheerio";

export function getTitle(data: { html?: string; metadata?: Record<string, unknown> } | null): string | undefined {
  if (!data?.html) return undefined;
  const $ = cheerio.load(data.html);
  return $("meta[property='og:title']").attr("content") || $("title").first().text().trim() || undefined;
}
