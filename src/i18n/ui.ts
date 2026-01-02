/**
 * i18n Utilities
 * Translation system for bilingual website (English/Spanish)
 */

import en from "./languages/en.json";
import es from "./languages/es.json";

export const languages = {
	en: "English",
	es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

export const ui = {
	en,
	es,
} as const;

/**
 * Training slug mappings between English and Spanish
 * Maps English slug -> Spanish slug (and vice versa)
 */
export const trainingSlugMappings: Record<string, string> = {
	// English -> Spanish
	"n8n-ai-agents": "n8n-agentes-ia",
	"google-workspace-automations": "google-workspace-automatizaciones",
	"microsoft-power-automate": "microsoft-power-automate",
	"ai-prototype-accelerator": "acelerador-prototipos-ia",
	"digital-transformation-lab": "laboratorio-transformacion-digital",
	"innovation-bootcamp-ai": "bootcamp-innovacion-ia",
	// Spanish -> English
	"n8n-agentes-ia": "n8n-ai-agents",
	"google-workspace-automatizaciones": "google-workspace-automations",
	"acelerador-prototipos-ia": "ai-prototype-accelerator",
	"laboratorio-transformacion-digital": "digital-transformation-lab",
	"bootcamp-innovacion-ia": "innovation-bootcamp-ai",
};

/**
 * Get translation string by key and language
 */
export function useTranslations(lang: Language = defaultLang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

/**
 * Get the current language from a URL path
 */
export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split("/");
	if (lang && lang in ui) return lang as Language;
	return defaultLang;
}

/**
 * Use this function to determine the locale for date formatting
 */
export function getLocale(lang: Language): string {
	return lang === "es" ? "es-ES" : "en-US";
}

/**
 * Get the alternate language URL for the current page
 */
export function getAlternateLanguageUrl(currentUrl: URL, targetLang: Language): string {
	const currentLang = getLangFromUrl(currentUrl);
	
	// If already on target language, return current URL
	if (currentLang === targetLang) {
		return currentUrl.pathname;
	}
	
	let path = currentUrl.pathname;
	
	// Remove current language prefix if exists
	if (currentLang !== defaultLang) {
		path = path.replace(`/${currentLang}`, "");
	}
	
	// Handle training slug mappings
	const trainingMatch = path.match(/^\/training\/([^/]+)\/?$/);
	if (trainingMatch) {
		const currentSlug = trainingMatch[1];
		const mappedSlug = trainingSlugMappings[currentSlug];
		if (mappedSlug) {
			path = `/training/${mappedSlug}/`;
		}
	}
	
	// Add target language prefix if not default
	if (targetLang !== defaultLang) {
		path = `/${targetLang}${path}`;
	}
	
	// Ensure path starts with /
	if (!path.startsWith("/")) {
		path = `/${path}`;
	}
	
	return path;
}

/**
 * Get all language-specific URLs for hreflang tags
 */
export function getHreflangUrls(currentUrl: URL, siteUrl: string): Array<{ lang: Language; url: string }> {
	return Object.keys(languages).map((lang) => ({
		lang: lang as Language,
		url: `${siteUrl}${getAlternateLanguageUrl(currentUrl, lang as Language)}`,
	}));
}

