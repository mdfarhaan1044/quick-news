import { useState } from "react";
import { languages } from "../data/langList";

export default function Header({ language, setLanguage, reloadNews }) {
  const [selectedLang, setSelectedLang] = useState(language);

  const handleLangChange = (e) => {
    setSelectedLang(e.target.value);
  };

  const handleSave = () => {
    setLanguage(selectedLang);
    reloadNews();
  };

  return (
    <header className="p-4 bg-blue-600 text-white flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-2xl font-bold">🌍 Quick News</h1>

      <div className="flex flex-wrap gap-3 items-center">
        {/* Language Selector */}
        <select
          value={selectedLang}
          onChange={handleLangChange}
          className="p-2 rounded text-black"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="bg-white text-blue-700 px-3 py-1 rounded font-semibold hover:bg-gray-200 transition"
          >
            Save
          </button>
        </div>
      </div>
    </header>
  );
}
