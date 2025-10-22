export default function NewsCard({ articles, reloadNews }) {
  if (!articles || articles.length === 0)
    return <p className="text-center mt-10 text-gray-500">No news found.</p>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-200 overflow-hidden border border-gray-100"
          >
            <img
              src={news.image_url || news.source_icon}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {news.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {news.description || "No description available."}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{news.source_name}</span>
                <span>
                  {new Date(news.pubDate).toLocaleDateString("en-IN")}
                </span>
              </div>
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={reloadNews}
          className="mt-6 inline-block p-5 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition duration-200"
        >
          Reload
        </button>
      </div>
    </div>
  );
}
