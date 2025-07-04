import { useEffect, useRef, useState } from "react";

import useVersion, { versions } from "../../hooks/useVersion";

import { VersionSelectorWrapper } from "./VersionSelector.style";

const VersionSelector = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { version, toggleVersion } = useVersion();

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
    <VersionSelectorWrapper ref={dropdownRef}>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="version-selector"
      >
        v{version}
      </button>
      {isOpen && (
        <div role="listbox" className="dropdown">
          {versions.map((v: number, index: number) => (
            <button
              role="option"
              key={index}
              onClick={() => {
                if (version !== v) {
                  toggleVersion(v);
                  setIsOpen(false);
                } else {
                  setIsOpen(false);
                }
              }}
            >
              v{v}
            </button>
          ))}
        </div>
      )}
    </VersionSelectorWrapper>
  );
};

export default VersionSelector;
