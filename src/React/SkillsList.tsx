import { useState, useEffect } from "react";
import { translations } from "../data/translations";

const CategoryIcons: Record<string, React.ReactNode> = {
  backend: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)] flex-shrink-0"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  ),
  database: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)] flex-shrink-0"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  infrastructure: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--sec)] flex-shrink-0"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  ),
};

const SkillsList = () => {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [openItem, setOpenItem] = useState<string | null>("backend");

  useEffect(() => {
    // Read initial preference
    const saved = localStorage.getItem("preferred_lang") as "es" | "en" | null;
    if (saved && (saved === "es" || saved === "en")) {
      setLang(saved);
    }

    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: "es" | "en" }>;
      if (customEvent.detail?.lang) {
        setLang(customEvent.detail.lang);
      }
    };

    window.addEventListener("langChange", handleLangChange);
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const currentContent = translations[lang].whatIDo;

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="text-left pt-3 md:pt-9 w-full lg:max-w-[450px]">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        {currentContent.title}
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {currentContent.items.map((item) => (
          <li key={item.id} className="w-full">
            <div
              onClick={() => toggleItem(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleItem(item.id);
                }
              }}
              className="w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden group hover:border-[#ffffff25]"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[item.id]}
                <div className="flex items-center gap-2 flex-grow justify-between min-w-0">
                  <span className="truncate text-[var(--white)] text-base md:text-lg font-medium">
                    {item.title}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === item.id ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === item.id
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-[var(--white-icon)] text-sm leading-relaxed border-t border-[var(--white-icon-tr)] pt-3">
                  {item.detail}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

