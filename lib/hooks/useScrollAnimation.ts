import { useEffect, RefObject } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export function useScrollAnimation(ref: RefObject<HTMLElement>, threshold = 0.1) {
    const controls = useAnimation();
    const inView = useInView(ref, {
        once: true,
        amount: threshold
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return controls;
}