import { getAllPosts } from "@/data/post";
import { getSiteConfig } from "@/site.config";
import rss from "@astrojs/rss";

export const GET = async () => {
	const posts = await getAllPosts("es");
	const config = getSiteConfig("es");

	return rss({
		title: config.title,
		description: config.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `es/posts/${post.id}/`,
		})),
	});
};


