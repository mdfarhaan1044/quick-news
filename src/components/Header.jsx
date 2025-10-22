import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { languages } from "../data/langList";

export default function Header({ language, setLanguage, reloadNews }) {
  const [selected, setSelected] = useState(language);

  const handleSave = () => {
    setLanguage(selected);
    reloadNews();
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Title */}
        <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold">
          <Globe className="h-6 w-6" />
          Quick News
        </h1>

        {/* Controls */}
        <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {/* Language selector */}
          <div className="relative">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="appearance-none bg-white/10 backdrop-blur-sm text-white placeholder-white/70 px-4 py-2 pr-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-56 transition"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code} className="text-gray-900">
                  {l.flag} {l.name}
                </option>
              ))}
            </select>
            <Globe className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none text-white/70" />
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-1.5 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition shadow-sm"
          >
            <Check className="h-4 w-4" />
            Save
          </button>
        </div>
      </div>
    </header>
  );
}
