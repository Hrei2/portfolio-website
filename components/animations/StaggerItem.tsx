'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export default function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hiddeen: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1 ]
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}