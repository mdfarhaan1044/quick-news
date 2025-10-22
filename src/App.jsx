import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";

function App() {
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
      if (data.results) setArticles(data.results);
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
  };

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />

      {loading ? (
        <p className="text-center mt-10 text-gray-500">Loading news...</p>
      ) : (
        <NewsCard articles={articles} reloadNews={reloadNews} />
      )}
    </div>
  );
}

export default App;
