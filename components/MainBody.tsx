"use client";

import { useEffect, useState } from "react";
import ArticleCard, { Article } from "./ArticleCard";

interface MainBodyProps {
  searchTerm: string;
  articles: Article[];
}

const tags = ["Web Dev", "Python", "Java", "C", "DSA", "UI/UX"];

export default function MainBody({ searchTerm, articles }: MainBodyProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    const filtered = articles.filter((article) => {
      const searchMatch = !term || [
        article.title,
        article.description,
        article.siteName,
        article.publishedDate,
        ...(article.tags ?? [])
      ].some((value) => value?.toLowerCase().includes(term));

      const tagMatch = activeTags.length === 0 || activeTags.some((tag) => article.tags?.includes(tag));
      return searchMatch && tagMatch;
    });

    setFilteredArticles(filtered);
  }, [articles, searchTerm, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]);
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8">
      <div className="flex flex-wrap justify-center gap-3" aria-label="Filter articles by tag">
        {tags.map((tag) => {
          const active = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${active ? "border-black bg-black text-white" : "border-blue-500 text-blue-700 hover:bg-blue-50"}`}
            >
              {tag}
            </button>
          );
        })}
        {activeTags.length > 0 && (
          <button type="button" onClick={() => setActiveTags([])} className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100">
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ArticleCard articles={filteredArticles} />
      </div>
    </section>
  );
}
