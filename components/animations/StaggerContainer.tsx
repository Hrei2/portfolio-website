'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerContainerProps {
    children: ReactNode;
    delayChildren?: number;
    staggerChildren?: number;
    className?: string;
}

export default function StaggerContainer({
    children,
    delayChildren = 0,
    staggerChildren = 0.1,
    className = ''
}: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        delayChildren,
                        staggerChildren
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}