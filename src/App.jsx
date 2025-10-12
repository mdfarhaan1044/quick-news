import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";

function App() {
  const [articles, setArticles] = useState([]);
  const [countries, setCountries] = useState(["in"]);
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_NEWS_API;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const countryParam = countries.join(","); // multiple countries
      const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=${language}&country=${countryParam}`;
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
  }, [countries, language]);

  return (
    <div>
      <Header
        countries={countries}
        setCountries={setCountries}
        language={language}
        setLanguage={setLanguage}
      />

      {loading ? (
        <p className="text-center mt-10 text-gray-500">Loading news...</p>
      ) : (
        <NewsCard articles={articles} />
      )}
    </div>
  );
}

export default App;
