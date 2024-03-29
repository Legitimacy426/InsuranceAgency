"use client"

import React,{useState} from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

import Header from '../components/Header'

import { insertData } from '../../../../libs/functions/insertData'
import FetchAll from '../../../../hooks/FetchAll'
import SearchableSelect from '../components/SearchableSelect'
import Errors from '../components/Errors'
import Link from 'next/link'
import { deleteData } from '../../../../libs/functions/deleteData'
import { authenticate } from '../../../../libs/functions/auth'
import useFetchWithID from '../../../../hooks/useFetchWithId'
import { FindLabel, FindLabelW, findLabel } from '../../../../libs/functions/findLabel'




export default  function Page() {

  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState(2022);
  const [VIN, setVIN] = useState("");
  const [usage, setUsage] = useState("Personal");
  const [mileage, setMileage] = useState('');
  const [user_id, setUser_id] = useState("65c343ac353ff01d77ec44a2");
  const [antiTheftDevice, setAntiTheftDevice] = useState(true);
  const [policy_id, setPolicy_id] = useState("5");
  const [label, setLabel] = useState(VIN);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [limit, setlimit] = useState(10);
  const {vd,ve,vl} = FetchAll("vehicles",limit)



  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption._id);
 
  };
  const handleChange2 = (selectedOption2) => {
  
    setSelectedOption2(selectedOption2._id)
  };


  const handleDelete = (id,name) =>{
    const resp = confirm(`Do you want to permanently delete ${name}`)
    if(resp != 1){
  return
    }
    // delete
  if(deleteData("vehicles",id)){
  alert("Item deleted")
  }else{
   alert("Failed to delete")
  }
    
  
  }



  const handleSubmit = async (e) =>{

    e.preventDefault()
    setLabel(VIN)
    const doc = {
      model,
      make,
      year,
      VIN,
      usage,
      mileage,
      client_id:selectedOption,
      antiTheftDevice,
      policy_id:selectedOption2,
      label:VIN
    };
  

    const res = await insertData("vehicles",doc)
   if(res.message){
    alert("Failed to add Please try again")
   }else{
    alert("Item added succesifully")
   }
  }

  // const data = await fetchAll('clients')

  return (
    <>  
      <Header tag={"vehicles"} />
      <div key="1" className="flex flex-col w-full border">
      <div className="flex items-center py-4  px-4 border-b">
        <h2 className="text-sm font-semibold">List of Vehicles</h2>
        <div className="ml-auto flex gap-1.5">
        <label htmlFor="my_modal_6" className="btn btn-sm text-sm border btn-outline rounded-sm">New Vehicle</label>
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
          <TableHead className="text-sm">VIN</TableHead>
          <TableHead className="text-sm">Owner</TableHead>
            <TableHead className="text-sm">Make</TableHead>
            <TableHead className="text-sm">Model</TableHead>
            <TableHead className="text-sm">Year</TableHead>
            <TableHead className="text-sm">Policy</TableHead>
        
            <TableHead className="text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>



 {vd?.map(item =>(
 
   
      <TableRow key={item.id}>
        <TableCell><Link href={`./vehicles/${item._id}`}>{item.VIN}</Link></TableCell>
        <TableCell><Link href={`./vehicles/${item._id}`}><FindLabel tag={"clients"} id={item.client_id} /></Link></TableCell>
     <TableCell className="font-medium">{item.make}</TableCell>
     <TableCell>{item.model}</TableCell>
     <TableCell>{item.year}</TableCell>
     <TableCell><FindLabel tag={"policies"} id={item.policy_id} /></TableCell>
   
     <TableCell className="space-y-3">
     <Link href={`./vehicles/${item._id}`}><Button className="w-6 h-6" size="icon" variant="outline">
         <FileEditIcon className="h-4 w-4" />
         <span className="sr-only">Edit</span>
       </Button></Link>
       <Button className="w-6 h-6" size="icon" variant="outline"  onClick={()=>{handleDelete(item._id,item.label)}}>
         <TrashIcon className="h-4 w-4" />
         <span className="sr-only">Delete</span>
       </Button>
     </TableCell>
   </TableRow>
   
    
 ))}
 </TableBody>
      </Table>
      <Errors  data={vd} error={ve} loading={vl}/>
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
       Add Vehicle 
      </h2>
      <form className="grid grid-cols-2 gap-4" onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="name">
           Model
          </label>
          <Input id="name" placeholder="model" value={model} onChange={(e)=>{setModel(e.target.value)}} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="idnumber">
      Make 
          </label>
          <Input id="idnumber" placeholder="make" type="text" value={make} onChange={(e)=>{setMake(e.target.value)}} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="email">
      Year
          </label>
          <Input id="email" placeholder="Year" type="number" value={year}  onChange={(e)=>{setYear(e.target.value)}} />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="phone">
       VIN
          </label>
          <Input id="phone" placeholder="VIN" type="text"  value={VIN} onChange={(e)=>{setVIN(e.target.value)}} />
        </div>
        
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="city">
         Owner
          </label>
         <SearchableSelect   
            tag={"clients"}
            value={selectedOption}
            onChange={handleChange}
            placeholder={selectedOption}
         
         />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="city">
         Policy
          </label>
          <SearchableSelect
       tag={"policies"}
       value={selectedOption2}
       onChange={handleChange2}
       placeholder={selectedOption}
       reqiured
      />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="city">
         Usage
          </label>
          <Input id="city" placeholder="Usage " value={usage} onChange={(e)=>{setUsage(e.target.value)}}  />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="address">
         Milage
          </label>
          <Input id="address" placeholder="Mileage" value={mileage} onChange={(e)=>{setMileage(e.target.value)}} />
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
