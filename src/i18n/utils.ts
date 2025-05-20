// Definimos interfaces para nuestros tipos
interface Translations {
  [key: string]: TranslationDict;
}

interface TranslationDict {
  [key: string]: string;
}

// Traducciones básicas con tipos correctos
const translations: Translations = {
  'es': {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre Mí',
    'header.title': 'Analista de Datos - Desarrollador de Software',
    'header.subtitle': 'Más de 13 años en análisis de calidad con experiencia en SQL, Python y desarrollo web.',
    // Añade más traducciones aquí
  },
  'en': {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About Me',
    'header.title': 'Data Analyst - Software Developer',
    'header.subtitle': 'Over 13 years in quality analysis with experience in SQL, Python and web development.',
    // Añade más traducciones aquí
  }
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es'; // idioma por defecto
}

export function useTranslations(lang: string) {
  return function t(key: string): string {
    // Añadimos verificaciones adicionales para manejar posibles casos indefinidos
    if (!translations[lang]) {
      return translations['es'][key] || key;
    }
    return translations[lang][key] || translations['es'][key] || key;
  }
}