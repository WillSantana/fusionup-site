import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
function Skeleton({ className, ...props }) {
    return (_jsx("div", { className: cn("animate-pulse rounded-md bg-zinc-900/10 dark:bg-zinc-50/10", className), ...props }));
}
export { Skeleton };
