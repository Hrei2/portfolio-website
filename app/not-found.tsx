'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration:6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.6 ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 text-center">
                {/* The best number aka 404 */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        type: 'spring',
                        stiffness: 100
                    }}
                >
                    <h1 className="text-9xl sm:text-[12rem] font-bold bg-gradient-to-t from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        404
                    </h1>
                </motion.div>

                {/* Explanation for the non-coders */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Go to Homepage
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                        >
                            Go Back
                        </button>
                    </div>
                </motion.div>

                {/* Floating animation */}
                <motion.div
                    className="mt-12"
                    animate={{ y: [ 0, -20, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <span className="text-6xl">🔍</span>
                </motion.div>
            </div>
        </div>
    );
}