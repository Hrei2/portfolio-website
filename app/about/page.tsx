'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
    const skills = [
        { name: 'sleeping', level: '100' },
        { name: 'easting', level: '95' },
        { name: 'coding', level: '90' },
        { name: 'error_creation', level: '101' },
        { name: 'learning', level: '75' },
    ];

    const timeline = [
        { 
            year: '2009',
            title: 'Newborn',
            company: 'Family',
            description: 'Eat, sleep, poop, repeat.',
        },
        {
            year: '2016',
            title: 'Started school',
            company: 'School',
            description: 'Books, teachers and friends.',
        },
        {
            year: '2025',
            title: 'Developer',
            company: 'Futuuri',
            description: 'Reimagining the future of healthcare', 
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="max-w-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            I'm me. A guy with an alergy to free time.
                        </p>
                    </motion.div>

                    {/* Bio Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        {/* Possibly an image here */}
                        <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative w-full aspect-circle max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex-items-center justify-center text-white text-8xl font-bold">
                                    src="app\about\profile.png"
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio Text */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity:1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Hi, I'm Haralds!
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                I'm a human!
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                I make my websites by hands not by AI!
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">9+</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Years of Learning Expirience</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">15+</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Personal Projects Created</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">1</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Websites Published</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Skills
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {skill.name}
                                    </span>
                                </div>
                                <div className="h-full w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        My Journey
                    </motion.h2>
                    
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />
                        
                        {/* Items */}
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-20 pb-12 last:pb-0"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once:true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="absolute left-6 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"/>

                                <div className="bg-white dar:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                                        {item.year}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-blue-600 dark:text-blue-400 ">
                                        {item.company}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}