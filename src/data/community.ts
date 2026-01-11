/**
 * Community Class Data
 * Classes and recordings for the MajupLabs community
 */

export interface CommunityClass {
	id: string;
	title: {
		en: string;
		es: string;
	};
	level: "Beginner" | "Intermediate" | "Advanced";
	summary: {
		en: string;
		es: string;
	};
	techStack: string[];
	videoUrl?: string;
	guideUrl?: string;
	date: Date;
}

export const communityClasses: CommunityClass[] = [
	{
		id: "n8n-local-setup",
		title: {
			en: "Intro to AI & Automations: n8n Local Installation",
			es: "Intro a IA y Automatizaciones: Instalación Local de n8n",
		},
		level: "Beginner",
		summary: {
			en: "Learn how to install and set up n8n locally on your computer. Perfect first step to start building AI-powered automations.",
			es: "Aprende cómo instalar y configurar n8n localmente en tu computadora. Primer paso perfecto para comenzar a construir automatizaciones con IA.",
		},
		techStack: ["n8n", "Docker", "Node.js"],
		videoUrl: "https://example.com/n8n-local",
		guideUrl: "https://example.com/guide-local",
		date: new Date("2026-01-05"),
	},
	{
		id: "n8n-vps-setup",
		title: {
			en: "Intro to AI & Automations: n8n Setup on VPS",
			es: "Intro a IA y Automatizaciones: Configuración de n8n en VPS",
		},
		level: "Beginner",
		summary: {
			en: "Deploy n8n on a Virtual Private Server (VPS) for 24/7 automation workflows. Learn server setup, security, and cloud deployment.",
			es: "Despliega n8n en un Servidor Privado Virtual (VPS) para flujos de trabajo 24/7. Aprende configuración de servidor, seguridad y despliegue en la nube.",
		},
		techStack: ["n8n", "VPS", "Linux", "Docker"],
		videoUrl: "https://example.com/n8n-vps",
		guideUrl: "https://example.com/guide-vps",
		date: new Date("2026-01-10"),
	},
	{
		id: "n8n-basics-ai",
		title: {
			en: "Intro to AI & Automations: n8n Basics & AI Integration",
			es: "Intro a IA y Automatizaciones: Fundamentos de n8n e Integración con IA",
		},
		level: "Beginner",
		summary: {
			en: "Master n8n fundamentals and learn to integrate AI tools. Build your first automated workflows with OpenAI, webhooks, and APIs.",
			es: "Domina los fundamentos de n8n y aprende a integrar herramientas de IA. Construye tus primeros flujos automatizados con OpenAI, webhooks y APIs.",
		},
		techStack: ["n8n", "OpenAI", "APIs", "Webhooks"],
		videoUrl: "https://example.com/n8n-basics",
		guideUrl: "https://example.com/guide-basics",
		date: new Date("2026-01-15"),
	},
];

/**
 * Get classes by language
 */
export function getClassesByLanguage(lang: "en" | "es") {
	return communityClasses.map((cls) => ({
		id: cls.id,
		title: cls.title[lang],
		level: cls.level,
		summary: cls.summary[lang],
		techStack: cls.techStack,
		videoUrl: cls.videoUrl,
		guideUrl: cls.guideUrl,
		date: cls.date,
	}));
}
