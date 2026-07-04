export const i18n = {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'ht'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

const dictionaries = {
    es: () => import('../dictionaries/es.json').then((module) => module.default),
    en: () => import('../dictionaries/en.json').then((module) => module.default),
    fr: () => import('../dictionaries/fr.json').then((module) => module.default),
    ht: () => import('../dictionaries/ht.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
