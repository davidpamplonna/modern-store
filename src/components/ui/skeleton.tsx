'use client'

import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

function Skeletion ({className, ...props}: SkeletonProps) {
    return (
       <div className={cn(`animate-pulse rounded-md bg-gray-200`, className)} 
        {...props}
       />
    );
}

export {Skeletion};