'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
    const words = text.split(' ');

    return (
        <div className={className}>
            {words.map((wprd, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.1,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                    className="inline-block mr-2"
                >
                    {words[i]}
                </motion.span>
            ))}
        </div>
    );
}
