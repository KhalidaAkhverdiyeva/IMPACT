import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface Language {
  flag: string;
  country: string;
  currency: string;
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    flag: "/images/flags/united-states.png",
    country: "United States",
    currency: "USD $",
  });

  const languages: Language[] = [
    {
      flag: "/images/flags/united-states.png",
      country: "United States",
      currency: "USD $",
    },
    {
      flag: "/images/flags/france.png",
      country: "France",
      currency: "EUR €",
    },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="hidden lg:flex lg:items-center lg:gap-[10px] text-[17px] font-[700] mx-[10px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image
          src={selectedLanguage.flag}
          alt={selectedLanguage.country}
          width={20}
          height={20}
        />
        {selectedLanguage.currency}
        <svg
          role="presentation"
          focusable="false"
          width="10"
          height="7"
          viewBox="0 0 10 7"
        >
          <path
            d="m1 1 4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-[-50%] mt-2 py-[10px] w-[220px] bg-white cursor-pointer">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center text-[#999999] gap-2 px-[20px] py-[5px] cursor-pointer transition-all duration-300 hover:text-black"
              onClick={() => selectLanguage(language)}
            >
              <Image
                src={language.flag}
                alt={language.country}
                width={20}
                height={20}
              />
              <span>{language.country}</span>
              <span>{language.currency}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;