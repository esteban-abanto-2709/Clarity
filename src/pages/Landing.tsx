import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Landing() {
  const [isDark, setIsDark] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('clarity-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('clarity-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    // Actualizar el título del documento cuando cambie el idioma
    document.title = `Clarity - ${t('landing.title')} ${t('landing.titleHighlight')}`;
    // Actualizar el idioma del documento HTML
    document.documentElement.lang = i18n.language;
  }, [i18n.language, t]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50'
    }`}>
      {/* Background orbs */}
      <div className="bg-orbs">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8 flex justify-between items-center">
          <div className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-slate-800'
          }`}>
            ✨ Clarity
          </div>

          <div className="flex items-center gap-6">
            <nav className="md:flex gap-8">
              <a
                href="/workspace"
                className={`glass inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 group ${
                  isDark
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-white/30 text-slate-800 hover:bg-white/50'
                }`}
              >
                <span className="transition-transform duration-300 group-hover:scale-110">🚀</span>
                {t('navigation.workspace')}
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`glass rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 text-white'
                    : 'bg-white/30 hover:bg-white/50 text-slate-800'
                }`}
              >
                {i18n.language.toUpperCase()}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`glass rounded-full p-3 transition-all duration-300 hover:scale-110 group ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              >
                <div className="text-xl transition-transform duration-500 group-hover:rotate-180">
                  {isDark ? '🌙' : '☀️'}
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-16 text-center">
          <div className="max-w-5xl animate-fadeInUp">
            {/* Main Title */}
            <div className="mb-8">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {t('landing.title')}
                <span className="block font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  {t('landing.titleHighlight')}
                </span>
              </h1>

              <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-white/60' : 'text-slate-600'
              }`}>
                {t('landing.subtitle')}
              </p>
            </div>

            {/* CTA Section */}
            <div className="mb-20 animate-fadeInScale animate-delay-100">
              <a
                href="/workspace"
                className={`glass-strong inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 group ${
                  isDark
                    ? 'bg-white/10 text-white hover:bg-white/20 shadow-lg shadow-purple-500/10'
                    : 'bg-white/40 text-slate-800 hover:bg-white/60 shadow-lg shadow-blue-500/10'
                }`}
              >
                <span className="transition-transform duration-300 group-hover:scale-110">✨</span>
                {t('landing.hero.createBoard')}
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { 
                  icon: '🎨', 
                  title: t('landing.features.visual.title'), 
                  desc: t('landing.features.visual.description') 
                },
                { 
                  icon: '⚡', 
                  title: t('landing.features.noRegister.title'), 
                  desc: t('landing.features.noRegister.description') 
                },
                { 
                  icon: '🔗', 
                  title: t('landing.features.subBoards.title'), 
                  desc: t('landing.features.subBoards.description') 
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={`glass group p-6 rounded-2xl transition-all duration-500 hover:scale-105 animate-fadeInScale ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className={`font-semibold mb-1 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-white/50' : 'text-slate-600'
                  }`}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <p className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-white/40' : 'text-slate-500'
          }`}>
            {t('landing.footer.madeWith')}{" "}
            <a
              href="mailto:esteban.abanto.2709@gmail.com"
              className={`transition-colors duration-300 hover:underline ${
                isDark 
                  ? 'text-white/60 hover:text-white/80' 
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Esteban Abanto
            </a>
            {" "}{t('landing.footer.openSource')}
          </p>
        </footer>
      </div>
    </div>
  );
}