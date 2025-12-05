import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    tags: string[];
    image?: string;
    content: string;
    readingTime: string;
}

function calculateReadingTime(text: string): string {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export function getAllPostSlugs(): string[] {
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((fileName) => fileName.endsWith('.mdx'))
            .map((fileName) => fileName.replace(/\.mdx$/, ''));
    } catch (error) {
           return [];
    }
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            author: data.author,
            tags: data.tags || [],
            image: data.image,
            content,
            readingTime: calculateReadingTime(content),
        };
    } catch (error) {
        return null;
    }
}

export function getAllPosts(): BlogPost[] {
    const slugs = getAllPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is BlogPost => post !== null)
        .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));

    return posts;
}

export function getPostsByTag(tag: string): BlogPost[] {
    const posts = getAllPosts();
    return posts.filter((post) => post.tags.includes(tag));
}