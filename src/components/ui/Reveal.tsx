"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    className?: string;
    stagger?: boolean;
    delay?: number;
}

export const Reveal = ({ children, className, stagger = false, delay = 0 }: RevealProps) => {
    // If stagger is true, we want to animate children sequentially
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const, // Custom spring-like ease
                delay: delay / 1000,
                staggerChildren: stagger ? 0.1 : 0,
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const RevealItem = ({ children, className }: { children: ReactNode; className?: string }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
    };
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};
