# SHARON Portfolio Blog

A Next.js portfolio/blog inspired by the freeCodeCamp tutorial "How To Build A Simple Portfolio Blog With Next.js".

## Features

- Next.js App Router
- Tailwind CSS
- Search articles by title, description, platform, date, or tags
- Filter articles by tags
- Add article URLs through `app/articles.json`
- Server-side metadata extraction with Cheerio
- About page
- Responsive layout
- Lucide search icon

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your own articles

Edit `app/articles.json`:

```json
{
  "articles": [
    {
      "id": 1,
      "url": "https://example.com/my-article",
      "tags": ["Web Dev"],
      "title": "",
      "description": "",
      "image": ""
    }
  ]
}
```

The server attempts to extract title, description, publication date, image, and platform from the article's Open Graph and JSON-LD metadata. You can also fill in `title`, `description`, and `image` manually as fallbacks.

## Before publishing

Replace the placeholder GitHub and LinkedIn URLs in `app/about/page.tsx` with your own profiles.
"# PORTFOLIO" 
