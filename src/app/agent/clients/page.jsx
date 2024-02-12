"use client"

import React, { useState } from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"



import Header from '../components/Header'

import { insertData } from '../../../../libs/functions/insertData'
import useFetchAll from '../../../../hooks/useFetchAll'



export default  function Page() {
const {data,error,loading} = useFetchAll("clients")

  const [fullName, setFullName] = useState("");
  const [IDNumber, setIDNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

const handleSubmit = async (e) =>{
e.preventDefault()
const doc = {
  fullName,
  IDNumber,
  email,
  address,
  phone,
  city
  
}


insertData("clients",doc)

}



console.log(data)
 

  return (
    <>  
      <Header />
      <div key="1" className="flex flex-col w-full">
      <div className="flex items-center py-4  px-4 border-b">
        <h2 className="text-sm font-semibold">List of Clients</h2>
        <div className="ml-auto flex gap-1.5">
          <label htmlFor="my_modal_6" className="btn btn-sm text-sm border btn-outline rounded-sm">New Client</label>
      
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2">
      
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input className="pl-8 w-full bg-white rounded-md" placeholder="Search items..." type="search" />
        </div>
        <DropdownMenu>
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
        </DropdownMenu>
      </div>
<div className="px-3">
<Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Full name</TableHead>
            <TableHead className="text-sm">Email</TableHead>
            <TableHead className="text-sm">Phone</TableHead>
            <TableHead className="text-sm">ID Number</TableHead>
            <TableHead className="text-sm">Address</TableHead>
            <TableHead className="text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

       {loading && ( <p className="flex  items-center justify-center text-center">
       <span className="loading loading-bars loading-md "></span>
       
        </p>)}
      
        {data?.map(item =>(
             
            <TableRow key={item.id}>
            <TableCell className="font-medium">{item.fullName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.IDNumber}</TableCell>
            <TableCell>{item.address}</TableCell>
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
</div>
    </div>
    


    {/* modal======================================
     */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal rounded-none" role="dialog">
  <div className="modal-box rounded-none">
  <div className="">
      <h2 className="text-xl font-semibold mb-4">
        Add New Cleint
      </h2>
      <form onSubmit={(e)=>{handleSubmit(e)}}  className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="name">
            Full name
          </label>
          <Input id="name" name="fullName" value={fullName} onChange={(e)=>{setFullName(e.target.value)}} placeholder="John Doe" />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="idnumber">
          ID Number
          </label>
          <Input id="idnumber" name="IDNumber" value={IDNumber}  onChange={(e)=>{setIDNumber(e.target.value)}}   placeholder="clients national ID number" type="number" />
        </div>
        <div className="flex flex-col">  
          <label className="font-medium" htmlFor="email">
         Email Address
          </label>
          <Input id="email" name="email" placeholder="example@gmail.com"  value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="phone">
           Phone Number
          </label>
          <Input id="phone" name="phone" placeholder="phone number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" />
        </div>
        
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="city">
            City
          </label>
          <Input id="city" name="city"  value={city} onChange={(e)=>{setCity(e.target.value)}} placeholder="City" />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="address">
            Street Address
          </label>
          <Input id="address" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="Street Address" />
        </div>
        
        {/* <div className="flex items-center col-span-2">
          <Checkbox id="terms" />
          <label className="text-sm ml-2" htmlFor="terms">
            By clicking Submit, you agree to our updated Privacy Policy terms and conditions.
          </label>
        </div> */}
        <div className="col-span-2">
          <Button id="submit" className="w-full" type="submit" name="submit">Submit</Button>
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
