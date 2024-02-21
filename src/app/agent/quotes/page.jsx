"use client"
import TimeAgo from 'react-timeago'
import React,{useState} from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

import { CardTitle, CardContent, CardHeader, Card } from "@/components/ui/card"


import Header from '../components/Header'
import { fetchAll } from '../../../../libs/functions/fetchAll'
import Search from '@/app/components/Search'
import { insertData } from '../../../../libs/functions/insertData'
import FetchAll from '../../../../hooks/FetchAll'
import { Label } from '@/components/ui/label'
import SearchableSelect from '../components/SearchableSelect'
import Errors from '../components/Errors'
import Link from 'next/link'
import { FindLabel } from '../../../../libs/functions/findLabel'


export default  function Page() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [limit, setlimit] = useState(10);
  

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption._id);
 
  };
  const handleChange2 = (selectedOption2) => {
  
    setSelectedOption2(selectedOption2._id)
  };
  const {qd,qe,ql} = FetchAll("quotes",limit)




  // const data = await fetchAll('policies')
  const [comments, setComment] = useState("");
  const [start_date, setStartDate] = useState("");
  const expiry = start_date.getFull
  const aYearFromNow = new Date(start_date);
  aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
  

const handleSubmit = (e)=>{
  e.preventDefault()
  // console.log(selectedOption,selectedOption2)

const doc = {
qoute_number: new Date().getTime(),  
policy_id:selectedOption,
vehicle_id:selectedOption2,
status:"pending Approval",
comments,
label: new Date().getTime(),
start_date,
end_date:aYearFromNow
}

const res =  insertData('quotes',doc)

if(res.message){
  alert("Failed to add Please try again")
 }else{
  alert("Item added succesifully")
 }

}
  return (
    <>  
      <Header tag={"quotes"} />
      <div key="1" className="flex flex-col w-full ">
      <div className="flex items-center py-4  px-4 border-b">
        <h2 className="text-sm font-semibold">List of Quotes</h2>
        <div className="ml-auto flex gap-1.5">
        <label htmlFor="my_modal_6" className="btn btn-sm text-sm border btn-outline rounded-sm">New Quote</label>
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
            <TableHead className="text-sm">Quote Number</TableHead>
          
            <TableHead className="text-sm">Vehicle</TableHead>
            <TableHead className="text-sm">Policy</TableHead>
            <TableHead className="text-sm">Start Date</TableHead>
            <TableHead className="text-sm">Expiry Date</TableHead>
            <TableHead className="text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>


 

 {qd?.map(item =>(
      
     <TableRow key={item._id}>
     <TableCell className="font-medium"><Link href={`./quotes/${item._id}`}>{item.qoute_number}</Link></TableCell>
     <TableCell><FindLabel tag={"vehicles"} id={item.policy_id} /></TableCell>
     <TableCell><FindLabel tag={"policies"} id={item.vehicle_id} /></TableCell>
     <TableCell><TimeAgo date={item.start_date} /></TableCell>
     <TableCell><TimeAgo date={item.end_date} /></TableCell>
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
      
      <Errors  data={qd} error={qe} loading={ql}/>
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
    Create quote
      </h2>
      <form onSubmit={(e)=>{handleSubmit(e)}} className="grid grid-cols-2 gap-4">
      <div>
      <label>Vehicle:</label>
      <SearchableSelect
       tag={"vehicles"}
       value={selectedOption}
       onChange={handleChange}
       placeholder={selectedOption}
       reqiured
      />
       
      </div>
      <div>
      <label>Policy:</label>
      <SearchableSelect
       tag={"policies"}
       value={selectedOption2}
       onChange={handleChange2}
       placeholder={selectedOption}
       reqiured
      />
       
      </div>
      <div>
        <Label className="font-semibold">Start Date :</Label>
        <Input reqiured  placeholder="starting date" type="date"  onChange={(e)=>{setStartDate(e.target.value)}}/>
      </div>
      <div>
        <Label className="font-semibold">Comments:</Label>
        <textarea placeholder="Some comments" value={comments} className="textarea textarea-bordered textarea-sm w-full max-w-xs ronded-none"  onChange={(e)=>{setComment(e.target.value)}}></textarea>
      </div>
      <Button type="submit">Submit</Button>
    
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
