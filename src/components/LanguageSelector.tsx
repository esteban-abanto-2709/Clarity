import { useTranslation } from "react-i18next";

interface Props {
  isDark: boolean;
}

export default function LanguageSelector({ isDark }: Props) {
  const { i18n } = useTranslation();

  const languages = [
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "en", label: "EN", flag: "🇺🇸" },
    // Ejemplo extra:
    // { code: "fr", label: "FR", flag: "🇫🇷" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className={`glass rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${isDark
          ? "bg-white/5 hover:bg-white/10 text-white"
          : "bg-white/30 hover:bg-white/50 text-slate-800"
        }`}
    >
      {languages.map((lang) => (
        <option
          key={lang.code}
          value={lang.code}
          className={isDark ? "bg-slate-900" : "bg-white"}
        >
          {lang.flag} {lang.label}
        </option>
      ))}
    </select>
  );
}
