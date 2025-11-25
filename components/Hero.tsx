'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Greeting text */}
                <motion.div
                    initial={{ opacity: 0, y: 20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, delay: 0.2}}
                >
                
                <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                    Hi, I'm Haralds!
                </p>
            </motion.div>

            {/* Main heading */}
            <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Haralds
                </span>
            </motion.h1>

            {/* Subtitle with typing effect placeholder */}
            <motion.p
                className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                Self Proclaimed Full Stack Developer | Tech Enthusiast | Lifelong Learner | Designer
            </motion.p>

            {/* Description */}
            <motion.p
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                Vibe coding my way through the digital universe, one line at a time whilst making two mistakes every line.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
            >
                <Link
                    href="/projects"
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                    Contact Me
                </Link>
            </motion.div>
            </div>
        </section>
    )
}