
"use client"
import React,{useState} from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



import Header from '../../components/Header'
import { Label } from '@/components/ui/label'

export default function Page({params}) {
    console.log(params.Id)
  const [fullName, setFullName] = useState("");
  const [IDNumber, setIDNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  return (
<>

<Header />
<div key="1" className="mx-auto max-w-4xl px-4 m-4">
      <div className="grid md:grid-cols-2 md:gap-8 items-start">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Vehicle Inventory</h1>
            <p className="text-gray-500 dark:text-gray-400">Add new vehicles to the inventory.</p>
          </div>
          <div className="grid gap-4">
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
        </div>
        <div className="grid gap-1">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold">Inventory</h2>
          </div>
          <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Vehicle</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[120px] text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Sedan</TableCell>
          <TableCell>Model S</TableCell>
          <TableCell>2023</TableCell>
          <TableCell>Available</TableCell>
          <TableCell className="text-right">
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <FileEditIcon className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <TrashIcon className="w-4 h-4" />
              <span className="sr-only">Delete</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <ArrowRightIcon className="w-4 h-4" />
              <span className="sr-only">Details</span>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">SUV</TableCell>
          <TableCell>Model X</TableCell>
          <TableCell>2022</TableCell>
          <TableCell>Unavailable</TableCell>
          <TableCell className="text-right">
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <FileEditIcon className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <TrashIcon className="w-4 h-4" />
              <span className="sr-only">Delete</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <ArrowRightIcon className="w-4 h-4" />
              <span className="sr-only">Details</span>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Truck</TableCell>
          <TableCell>Cybertruck</TableCell>
          <TableCell>2023</TableCell>
          <TableCell>Available</TableCell>
          <TableCell className="text-right">
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <FileEditIcon className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <TrashIcon className="w-4 h-4" />
              <span className="sr-only">Delete</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <ArrowRightIcon className="w-4 h-4" />
              <span className="sr-only">Details</span>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Car</TableCell>
          <TableCell>Model 3</TableCell>
          <TableCell>2022</TableCell>
          <TableCell>Available</TableCell>
          <TableCell className="text-right">
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <FileEditIcon className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <TrashIcon className="w-4 h-4" />
              <span className="sr-only">Delete</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <ArrowRightIcon className="w-4 h-4" />
              <span className="sr-only">Details</span>
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Coupe</TableCell>
          <TableCell>Model Y</TableCell>
          <TableCell>2023</TableCell>
          <TableCell>Unavailable</TableCell>
          <TableCell className="text-right">
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <FileEditIcon className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <TrashIcon className="w-4 h-4" />
              <span className="sr-only">Delete</span>
            </Button>
            <Button className="w-6 h-6 rounded-full" size="icon" variant="ghost">
              <ArrowRightIcon className="w-4 h-4" />
              <span className="sr-only">Details</span>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
        </div>
      </div>
    </div>
</>
  )
}

function PencilIcon(props) {
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
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
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

function ActivityIcon(props) {
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
  
  
  function CreditCardIcon(props) {
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
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    )
  }
  
  
  function DollarSignIcon(props) {
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
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
  
  
  
  
  function PackageIcon(props) {
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
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }
  
  
  
  
  
  function UsersIcon(props) {
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  


function ArrowRightIcon(props) {
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
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
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
  
 