import useFetchWithIDWhere from "../../hooks/useFetchWithIDWhere"
import useFetchWithID from "../../hooks/useFetchWithId"
import { Skeleton } from "@/components/ui/skeleton"

export const FindLabel = ({tag,id}) =>{ 
   
const {data,error,loading} = useFetchWithID(tag,id)


return(<>
   {!loading && (<span>{data?.label}</span>)}
   {loading && <Skeleton className="h-4 w-12 rounded-lg" />}
      </>

)
}
export const FindPremium = ({tag,id}) =>{ 
const {data,error,loading} = useFetchWithID(tag,id)
return(<>
   {!loading && (<span>{data?.premium}</span>)}
   {loading && <Skeleton className="h-4 w-12 rounded-lg" />}
      </>

)
}
export const FindExpiry = ({tag,id}) =>{ 
const {data,error,loading} = useFetchWithID(tag,id)
return(<>
   {!loading && (<span>{data?.end_date}</span>)}
   {loading && <Skeleton className="h-4 w-12 rounded-lg" />}
      </>

)
}

