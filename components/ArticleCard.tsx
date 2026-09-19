export interface Article {
  id: number;
  title?: string;
  description?: string;
  publishedDate?: string;
  url: string;
  imgUrl?: string;
  siteName?: string;
  tags?: string[];
}

interface ArticleProps {
  articles: Article[];
}

export default function ArticleCard({ articles }: ArticleProps) {
  if (!articles.length) {
    return (
      <div className="col-span-full rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center">
        <h2 className="text-xl font-semibold">No articles found</h2>
        <p className="mt-2 text-gray-500">Try another search or add an article to app/articles.json.</p>
      </div>
    );
  }

  return articles.map((article) => (
    <a
      key={article.id}
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="group mx-auto mb-5 block w-full max-w-[380px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={article.imgUrl || "/article-placeholder.svg"}
          alt={article.title || "Article image"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500">
          <span>{article.siteName || "Article"}</span>
          <span>•</span>
          <span>{article.publishedDate || "Date unavailable"}</span>
        </div>
        <h2 className="mt-3 line-clamp-2 text-xl font-bold tracking-tight text-gray-900">{article.title || "Untitled article"}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{article.description || "No description available."}</p>
        {article.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{tag}</span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  ));
}
