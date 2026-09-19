import * as cheerio from "cheerio";

export function getPublishedDate(data: { html?: string; metadata?: Record<string, unknown> } | null): string | undefined {
  const raw = typeof data?.metadata?.datePublished === "string" ? data.metadata.datePublished : undefined;
  if (raw) return formatDate(raw);

  if (data?.html) {
    const $ = cheerio.load(data.html);
    const metaDate = $("meta[property='article:published_time']").attr("content") || $("meta[property='og:published_time']").attr("content") || $("meta[name='pubdate']").attr("content");
    if (metaDate) return formatDate(metaDate);
  }

  return undefined;
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
