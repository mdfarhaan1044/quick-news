import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_NEWS_API;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${language}`;
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.results || []);
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [language]);

  const reloadNews = () => {
    fetchNews();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header
        language={language}
        setLanguage={setLanguage}
        reloadNews={reloadNews}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <SkeletonGrid />
        ) : (
          <NewsCard articles={articles} reloadNews={reloadNews} />
        )}
      </main>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100"
        >
          <div className="aspect-[16/9] bg-gray-200" />
          <div className="p-5 space-y-3">
            <div className="h-5 bg-gray-200 rounded w-11/12" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-4/5" />
            <div className="flex justify-between mt-4">
              <div className="h-3 bg-gray-200 rounded w-1/3" />
              <div className="h-3 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
