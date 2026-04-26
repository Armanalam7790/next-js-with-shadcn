import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Skeleton } from "@/components/ui/skeleton"
import Skeleton from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
   <div className="grid grid-cols-4 gap-5">
   { 
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((elem, index)=>{
    return <Card key={index} className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>   })
   }
   </div>
  )
}
