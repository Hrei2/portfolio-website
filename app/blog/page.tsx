'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        {
            slug: 'getting-started-nextjs',
            title: 'Getting Started with Next.js 15',
            excerpt: 'Learn how to build modern web applications with Next.js 15',
            date: '2025-11-20',
            readTime: '5 min read',
            tags: ['Next.js', 'React', 'Web Development'],
        },
        {
            slug: 'test-blog-post',
            title: 'Test Blog Post',
            excerpt: 'Making a test blog post to see how this will look like.',
            date: '2025-11-30',
            readTime: '1 min read',
            tags: ['Test', 'Development'],
        },
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6}}
                    className="mb-16"
                >
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Here are some of my thoughts and project updates.
                    </p>
                </motion.div>

                {/* Blog posts */}
                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                <time>{new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</time>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>

                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                            >
                                Read more →
                            </Link> 
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    );
}