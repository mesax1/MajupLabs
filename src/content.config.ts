import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
	title: z.string().max(60),
});

const post = defineCollection({
	loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			// Series
			seriesId: z.string().optional(), // Field for linking to a series
      		orderInSeries: z.number().optional(), // Optional: for sorting within a series
			// End
		}),
});

const note = defineCollection({
	loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({
		description: z.string().optional(),
		publishDate: z
			.string()
			.datetime({ offset: true }) // Ensures ISO 8601 format with offsets allowed (e.g. "2024-01-01T00:00:00Z" and "2024-01-01T00:00:00+02:00")
			.transform((val) => new Date(val)),
	}),
});

// Series
const series = defineCollection({
	loader: glob({ base: "./src/content/series", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		featured: z.boolean().default(false), // Mark for popular series
	}),
});

// Projects
const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		clientOrCompany: z.string().optional(),
		displayYear: z.string(),
		shortDescription: z.string(), // For the card on the main projects page
		technologies: z.array(z.string()).optional(),
		roles: z.array(z.string()).optional(),
		contraLink: z.string().url().optional(),
		projectUrl: z.string().url().optional(),
		imageUrls: z.array(z.string().url().or(z.string().startsWith('/'))).optional(), // URLs or local paths starting with /
		order: z.number().optional(), // For manually ordering projects on the listing page
		draft: z.boolean().optional().default(false), // To hide projects if needed
	}),
});
// End

// Series
export const collections = { post, note, series, projects };
