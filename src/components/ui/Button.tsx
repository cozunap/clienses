import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "./MagneticWrapper";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    scroll?: boolean;
}

export const Button = ({
    className,
    variant = "primary",
    size = "md",
    href,
    scroll,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-accent text-text-main hover:bg-primary hover:text-text-main transition-all duration-700 shadow-corporate",
        secondary: "bg-bg-light text-accent border-2 border-accent hover:bg-accent hover:text-text-main transition-all duration-700",
        outline: "border-2 border-structure text-structure hover:bg-accent hover:text-text-main hover:border-accent transition-all duration-700",
        ghost: "text-accent hover:bg-accent/10 hover:text-accent transition-all",
    };

    const sizes = {
        sm: "px-6 py-2 text-[10px] tracking-[0.3em]",
        md: "px-10 py-4 text-[11px] tracking-[0.4em] font-black",
        lg: "px-16 py-6 text-xs tracking-[0.5em] font-black",
    };

    const classes = cn(
        "inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed rounded-none uppercase antialiased whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
    );

    if (href) {
        return (
            <MagneticWrapper magneticStrength={0.2}>
                <Link href={href} scroll={scroll} className={classes}>
                    {props.children}
                </Link>
            </MagneticWrapper>
        );
    }

    return (
        <MagneticWrapper magneticStrength={0.2}>
            <button className={classes} {...props}>
                {props.children}
            </button>
        </MagneticWrapper>
    );
};
