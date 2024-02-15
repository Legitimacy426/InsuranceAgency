"use client"
import React,{useState} from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"




import Header from '../components/Header'
import { fetchAll } from '../../../../libs/functions/fetchAll'
import Search from '@/app/components/Search'
import { insertData } from '../../../../libs/functions/insertData'
import useFetchAll from '../../../../hooks/useFetchAll'
import Errors from '../components/Errors'



export default  function Page() {
  const {data,error,loading} = useFetchAll("policies")
  // const data = await fetchAll('policies')
  const [policyNumber, setPolicyNumber] = useState("");
  const [policyType, setPolicyType] = useState("");
  const [coverageLimit, setCoverageLimit] = useState("");
  const [deductible, setDeductible] = useState("");
  const [premium, setPremium] = useState("");
  const [additionalCoverages, setAdditionalCoverages] = useState("");
  const [exclusions, setExclusions] = useState("");
  const [description, setDescription] = useState("");
  const [label, setLabel] = useState(policyNumber);
  const [limit, setlimit] = useState(10);
const handleSubmit = (e)=>{
e.preventDefault()
setLabel(policyNumber)
const doc = {
  policyNumber,
  policyType,
  coverageLimit,
  deductible,
  premium,
  additionalCoverages,
  exclusions,
  description,
  label:policyNumber
}

insertData('policies',doc)

console.log(doc)


}
  return (
    <>  
      <Header tag={"policies"}/>
      <div key="1" className="flex flex-col w-full ">
      <div className="flex items-center py-4  px-4 border-b">
        <h2 className="text-sm font-semibold">List of policies</h2>
        <div className="ml-auto flex gap-1.5">
        <label htmlFor="my_modal_6" className="btn btn-sm text-sm border btn-outline rounded-sm">New Policy</label>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
      
      <div className="relative">
      <select className="select select-bordered rounded-sm w-full max-w-xs p-"  onChange={(e)=>{setlimit(e.target.value)}}>
<option value={"all"}>All</option>
<option value={10}>10</option>
<option value={25}>25</option>
<option value={50}>50</option>
</select>
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            Sort by
            <ArrowUpDownIcon className="w-4 h-4 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuRadioGroup value="default">
            <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
<div className="px-3">
<Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Policy Number</TableHead>
            <TableHead className="text-sm">Policy Type</TableHead>
            <TableHead className="text-sm">Premium</TableHead>
            <TableHead className="text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>


 {data?.map(item =>(
      
     <TableRow key={item.id} >
     <TableCell className="font-medium">{item.policyNumber}</TableCell>
     <TableCell>{item.policyType}</TableCell>
     <TableCell>{item.premium}</TableCell>
     <TableCell className="space-y-3">
       <Button className="w-6 h-6" size="icon" variant="outline">
         <FileEditIcon className="h-4 w-4" />
         <span className="sr-only">Edit</span>
       </Button>
       <Button className="w-6 h-6" size="icon" variant="outline">
         <TrashIcon className="h-4 w-4" />
         <span className="sr-only">Delete</span>
       </Button>
     </TableCell>
   </TableRow>
 ))}
 </TableBody>
      </Table>
      <Errors  data={data} error={error} loading={loading}/>
</div>
    </div>

    
    {/* modals======================================
     */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal rounded-none" role="dialog">
  <div className="modal-box rounded-none">
  <div className="">
      <h2 className="text-xl font-semibold mb-4">
      Add policy
      </h2>
      <form onSubmit={(e)=>{handleSubmit(e)}} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="name">
          Policy Number 
          </label>
          <Input id="name" value={policyNumber} onChange={(e)=>{setPolicyNumber(e.target.value)}} placeholder="Policy Number" />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="idnumber">
        Policy Type
          </label>
          <Input id="idnumber" placeholder="Policy Type" type="text" onChange={(e)=>{setPolicyType(e.target.value)}}  value={policyType} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="email">
        Coverage Limit
          </label>
          <Input id="email" placeholder="limit"  type="number" value={coverageLimit} onChange={(e)=>{setCoverageLimit(e.target.value)}}  />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="phone">
        Deductible
          </label>
          <Input id="phone" placeholder="Deductible" value={deductible} onChange={(e)=>{setDeductible(e.target.value)}}  type="text" />
        </div>
        
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="city">
           Description 
          </label>
          <Input id="city" placeholder="Description"  value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="address">
           Premium
          </label>
          <Input id="address" placeholder="Premium(KES)" value={premium} onChange={(e)=>{setPremium(e.target.value)}}  />
        </div>
        
        {/* <div className="flex items-center col-span-2">
          <Checkbox id="terms" />
          <label className="text-sm ml-2" htmlFor="terms">
            By clicking Submit, you agree to our updated Privacy Policy terms and conditions.
          </label>
        </div> */}
        <div className="col-span-2">
          <Button className="w-full">Submit</Button>
        </div>
      </form>
    </div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
    </div>
  </div>
</div>

    </>

  )
}


// =====================================




function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}


function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}


function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
