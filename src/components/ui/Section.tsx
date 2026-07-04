import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    padded?: boolean;
}

export const Section = ({
    children,
    className,
    as: Component = "section",
    padded = true,
    ...props
}: SectionProps) => {
    return (
        <Component
            className={cn(padded && "py-20 md:py-32", className)}
            {...props}
        >
            {children}
        </Component>
    );
};
