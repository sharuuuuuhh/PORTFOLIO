import { getURL } from "./getURL";

export function getPlatform(data: { html?: string; metadata?: Record<string, unknown> } | null): string | undefined {
  const url = getURL(data);
  if (!url) return undefined;
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "");
    const parts = hostname.split(".");
    return (parts.length > 2 ? parts[parts.length - 3] : parts[0]).toUpperCase();
  } catch {
    return undefined;
  }
}
