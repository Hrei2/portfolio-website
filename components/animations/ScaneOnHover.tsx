'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleOnHoverProps {
    children: ReactNode;
    scale?: number;
    className?: string;
}

export default function ScaleOnHover({
    children,
    scale = 1.05,
    className = ''
}: ScaleOnHoverProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
}