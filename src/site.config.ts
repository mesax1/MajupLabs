import type { SiteConfig } from "@/types";
import type { Language } from "@/i18n/ui";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "MajupLabs",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description: "Expert AI Consulting, ML, LLMs, RAG, and Applied AI Solutions for Your Business.",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "en-US",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_US",
	// Used to construct the meta title property found in src/components/BaseHead.astro L:11, and webmanifest name found in astro.config.ts L:42
	title: "MajupLabs - AI Consulting & Development",
};

// i18n configuration
export const i18nConfig = {
	en: {
		locale: "en-US",
		ogLocale: "en_US",
		title: "MajupLabs - AI Consulting & Development",
		description: "Expert AI Consulting, ML, LLMs, RAG, and Applied AI Solutions for Your Business.",
	},
	es: {
		locale: "es-ES",
		ogLocale: "es_ES",
		title: "MajupLabs - Consultoría y Desarrollo de IA",
		description: "Consultoría Experta en IA, ML, LLMs, RAG, y Soluciones de IA Aplicada para tu Empresa.",
	},
} as const;

export function getSiteConfig(lang: Language = "en") {
	return {
		...siteConfig,
		...i18nConfig[lang],
	};
}

// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/services/",
		title: "Services",
	},
	{
		path: "/training/",
		title: "Training",
	},
	{
		path: "/projects/",
		title: "Projects",
	},
	{
		path: "/posts/",
		title: "Blog",
	},
	// {
	// 	path: "/notes/",
	// 	title: "Notes",
	// },
	// {
	// 	path: "/about/",
	// 	title: "About",
	// },
];