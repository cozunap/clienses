import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

export const Container = ({
    children,
    className,
    as: Component = "div",
    ...props
}: ContainerProps) => {
    return (
        <Component
            className={cn("mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20", className)}
            {...props}
        >
            {children}
        </Component>
    );
};
