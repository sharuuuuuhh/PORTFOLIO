"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import MainBody from "../components/MainBody";
import type { Article } from "../components/ArticleCard";

export default function HomeClient({ initialArticles }: { initialArticles: Article[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MainBody searchTerm={searchTerm} articles={initialArticles} />
    </main>
  );
}
