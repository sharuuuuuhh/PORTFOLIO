import * as cheerio from "cheerio";
import articleFile from "../articles.json";
import type { Article } from "../../components/ArticleCard";
import { getDescription } from "./getDescription";
import { getImageURL } from "./getImageURL";
import { getPlatform } from "./getPlatform";
import { getPublishedDate } from "./getPublishedDate";
import { getTitle } from "./getTitle";

interface ArticleInput {
  id: number;
  url: string;
  tags?: string[];
  title?: string;
  description?: string;
  image?: string;
}

type Metadata = Record<string, unknown>;

export async function fetchArticles(): Promise<Article[]> {
  const results = await Promise.all(
    (articleFile.articles as ArticleInput[]).map(async (item) => {
      if (!item.url?.trim()) return null;

      try {
        const response = await fetch(item.url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36",
            Accept: "text/html,application/xhtml+xml"
          },
          next: { revalidate: 3600 }
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        const $ = cheerio.load(html);
        const scripts = $("script[type='application/ld+json']").toArray();
        let metadata: Metadata | undefined;

        for (const script of scripts) {
          try {
            const parsed = JSON.parse($(script).html() || "{}");
            const candidates = Array.isArray(parsed) ? parsed : [parsed];
            const candidate = candidates.find((value) => value && typeof value === "object" && (value.headline || value.name || value.datePublished || value.image));
            if (candidate) {
              metadata = candidate as Metadata;
              break;
            }
          } catch {
            // Ignore malformed JSON-LD blocks and continue with Open Graph metadata.
          }
        }

        const data = { html, metadata };

        return {
          ...item,
          id: item.id,
          title: getTitle(data) || item.title || "Untitled article",
          description: item.description || getDescription(data) || "No description available.",
          publishedDate: getPublishedDate(data) || "Date unavailable",
          imgUrl: getImageURL(data) || item.image || "/article-placeholder.svg",
          siteName: getPlatform(data) || "ARTICLE",
          tags: item.tags || [],
          url: item.url
        } satisfies Article;
      } catch (error) {
        console.warn(`Could not fetch ${item.url}:`, error);

        if (item.title || item.description) {
          return {
            ...item,
            title: item.title || "Untitled article",
            description: item.description || "No description available.",
            publishedDate: "Date unavailable",
            imgUrl: item.image || "/article-placeholder.svg",
            siteName: "ARTICLE",
            tags: item.tags || [],
            url: item.url
          } satisfies Article;
        }

        return null;
      }
    })
  );

  return results
    .filter((article): article is Article => article !== null)
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate || "").getTime();
      const dateB = new Date(b.publishedDate || "").getTime();
      return dateB - dateA;
    });
}
