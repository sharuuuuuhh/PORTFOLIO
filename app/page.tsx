import HomeClient from "./HomeClient";
import { fetchArticles } from "./utils/fetchArticles";

export const revalidate = 3600;

export default async function HomePage() {
  const articles = await fetchArticles();
  return <HomeClient initialArticles={articles} />;
}
