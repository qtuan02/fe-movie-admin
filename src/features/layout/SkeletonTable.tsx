import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonTable() {
    return (
      <div className="flex flex-col space-y-3 w-full">
        <Skeleton className="h-6 w-full rounded-xl" />
        <Skeleton className="h-6 w-full rounded-xl" />
        <Skeleton className="h-6 w-full rounded-xl" />
        <Skeleton className="h-6 w-full rounded-xl" />
        <Skeleton className="h-6 w-full rounded-xl" />
        <Skeleton className="h-6 w-full rounded-xl" />
        <Skeleton className="h-6 w-[90%] rounded-xl" />
      </div>
    )
  }