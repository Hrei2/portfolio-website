'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');


        await new Promise(resolve => setTimeout(resolve, 2000));

        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData( prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Have questions or want to work together? Reach out using the form below!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Contact information
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                Feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                        Email
                                    </h3>
                                    <a href="mailto:haralds.re@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        haralds.re@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                        LinkedIn
                                    </h3>
                                    <a href="https://www.linkedin.com/in/haralds-reinvalds-02a244332/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        https://www.linkedin.com/in/haralds-reinvalds-02a244332/
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🐙</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                        GitHub
                                    </h3>
                                    <a href="https://www.github.com/Hrei2" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        github.com/Hrei2
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration:0.6, delay:0.4 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>                            
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors duration-300"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors duration-300"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors duration-300"
                                placeholder="What is this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 dark:text-green-400 text-center font-semibold">
                                Your message has been sent successfully!
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
        </main>
    );
}