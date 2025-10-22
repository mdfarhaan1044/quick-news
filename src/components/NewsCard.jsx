import { RefreshCw } from "lucide-react";

export default function NewsCard({ articles, reloadNews }) {
  if (!articles || articles.length === 0) {
    return (
      <p className="text-center py-16 text-gray-500 dark:text-gray-400">
        No news found.
      </p>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Responsive grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((news) => (
          <article
            key={news.link}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
          >
            {/* Image */}
            {news.image_url || news.source_icon ? (
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={news.image_url || news.source_icon}
                  alt={news.title}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ) : (
              <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500 dark:from-gray-700 dark:to-gray-800 dark:text-gray-400 rounded-t-2xl">
                <span className="text-sm font-medium">No image</span>
              </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <h2 className="line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors dark:text-gray-100 dark:group-hover:text-blue-400">
                {news.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                {news.description ?? "No description available."}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="truncate font-medium">{news.source_name}</span>
                <time>
                  {new Date(news.pubDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>

              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Read More
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Reload button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={reloadNews}
          aria-label="Reload news"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <RefreshCw className="h-4 w-4" />
          Reload
        </button>
      </div>
    </section>
  );
}
