'use client';

import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
}

export default function LoadingSkeleton({
    className = '',
    variant = 'rectangular'
}: LoadingSkeletonProps) {
    const baseClasses = 'bg-gray-200 dark:bg-gray-700 overflow-hidden relative';

    const variantClasses = {
        text: 'h-4 rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-lg'
    };

    return (
        <motion.div
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            animate={{
                opacity: [0.5, 1, 0.5],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <motion.div
                className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ 
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </motion.div>
    );
}