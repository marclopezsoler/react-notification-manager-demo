import { useEffect, useRef, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import languages, { type Lang } from "../../localization/languages";
import { LanguageSelectorWrapper } from "./LanguageSelector.style";

const LanguageSelector = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { currentLang, handleLangChange } = useLanguage();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => setIsOpen(false));
    };
  }, [isOpen]);

  return (
    <LanguageSelectorWrapper ref={dropdownRef}>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="language-selector"
      >
        {currentLang.label}
      </button>
      {isOpen && (
        <div role="listbox" className="dropdown">
          {languages.map((lang: Lang) => (
            <button
              role="option"
              key={lang.code}
              onClick={() => {
                if (lang !== currentLang) {
                  handleLangChange(lang.code);
                  setIsOpen(false);
                } else {
                  setIsOpen(false);
                }
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
