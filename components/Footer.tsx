'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/Hrei2', icon: '🐙' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/haralds-reinvalds-02a244332/', icon: '💼' },
        { name: 'Email', href: 'mailto:haralds.re@gmail.com', icon: '📧' },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects'},
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Branding if you can call it that */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Haralds
                            </span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Project made for Midnight YSWS presented by the amazing team at HackClub!
                        </p>
                    </div>

                    {/* Nav links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links for socials */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Connect
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <span className="text-2xl">
                                        {social.icon}
                                    </span>
                                </motion.a>

                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        &copy; {currentYear} HReinvalds. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}