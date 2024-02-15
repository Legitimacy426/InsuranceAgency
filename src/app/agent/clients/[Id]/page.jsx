
"use client"
import React,{useState} from 'react'
import { CardTitle, CardHeader, CardContent, Card, CardDescription,CardFooter} from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Skeleton } from "@/components/ui/skeleton"

import Header from '../../components/Header'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import useFetchWithID from '../../../../../hooks/useFetchWithId'
import LoadingScreen from '../../components/LoadingScreen'
import { updateData } from '../../../../../libs/functions/updateData'

export default function Page({params}) {
    console.log(params.Id)
   
  const {data,error,loading} = useFetchWithID("clients",params.Id)
    



  const [fullName, setFullName] = useState(data?.fullName);
  const [IDNumber, setIDNumber] = useState(data?.IDNumber);
  const [email, setEmail] = useState(data?.email);
  const [address, setAddress] = useState(data?.address);
  const [phone, setPhone] = useState(data?.phone);
  const [city, setCity] = useState(data?.city);
  const handleSubmit = async (e) =>{
    e.preventDefault()
  
    const doc = {
      fullName,
      IDNumber,
      email,
      address,
      phone,
      city,
      label:fullName
      
    }
    console.log(doc)
    
    // insertData("clients",doc)
    updateData("clients",doc,params.Id)

    
    }
  
  console.log(data)
  return (
<>

<Header tag={"clients"} />
<div className="grid gap-6 md:grid-cols-2 m-4">
  {loading && (
   <LoadingScreen />
  )}
   {!loading && (
       <Card className="max-w-3xl">
          
       <CardHeader className="p-6">
         <div className="grid gap-1">
           <div className="flex items-center space-x-2">
             <UserIcon className="w-6 h-6" />
             <h1 className="text-2xl font-bold">{data.fullName}</h1>
           </div>
           <p className="text-sm text-gray-500 dark:text-gray-400">#{data.IDNumber}</p>
           <p className="text-sm text-gray-500 dark:text-gray-400">
           Joined {(data.createdAt)}
        
           </p>
         </div>
       </CardHeader>
       <CardContent className="p-6">
         <div className="grid gap-1">
           <dl className="grid gap-2">
             <div className="flex items-center space-x-2">
               <MailOpenIcon className="w-4 h-4 opacity-70" />
               <dt className="text-sm font-medium">Email Address </dt>
             </div>
             <dd className="text-sm text-gray-500 dark:text-gray-400">{data.email}</dd>
           </dl>
           <dl className="grid gap-2">
             <div className="flex items-center space-x-2">
               <PhoneIcon className="w-4 h-4 opacity-70" />
               <dt className="text-sm font-medium">Phone Number</dt>
             </div>
             <dd className="text-sm text-gray-500 dark:text-gray-400">{data.phone}</dd>
           </dl>
           <dl className="grid gap-2">
             <div className="flex items-center space-x-2">
               <LocateIcon className="w-4 h-4 opacity-70" />
               <dt className="text-sm font-medium">Physical Address</dt>
             </div>
             <dd className="text-sm text-gray-500 dark:text-gray-400">{data.address}</dd>
           </dl>
         </div>
       </CardContent>
 
       </Card>
   )}
    {loading && (
   <LoadingScreen />
  )}
   {!loading && (
       <Card className="max-w-3xl">
       <CardHeader>
         <CardTitle>Edit Client details</CardTitle>
         <CardDescription>Edit the client details</CardDescription>
       </CardHeader>
       <CardContent>
       <form onSubmit={(e)=>{handleSubmit(e)}}  className="grid grid-cols-2 gap-4">
       <div className="flex flex-col">
         <label className="font-medium" htmlFor="name">
           Full name
         </label>
         <Input id="name" name="fullName" value={fullName} onChange={(e)=>{setFullName(e.target.value)}}  />
       </div>
       {/* <input type="text" value={fullName} /> */}
       <div className="flex flex-col">
         <label className="font-medium" htmlFor="idnumber">
         ID Number
         </label>
         <Input id="idnumber" name="IDNumber" value={IDNumber}  onChange={(e)=>{setIDNumber(e.target.value)}}  type="number" />
       </div>
       <div className="flex flex-col">  
         <label className="font-medium" htmlFor="email">
        Email Address
         </label>
         <Input id="email" name="email"   value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
       </div>
       <div className="flex flex-col">
         <label className="font-medium" htmlFor="phone">
          Phone Number
         </label>
         <Input id="phone" name="phone"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" />
       </div>
       
       <div className="flex flex-col col-span-2">
         <label className="font-medium" htmlFor="city">
           City
         </label>
         <Input id="city" name="city"  value={city} onChange={(e)=>{setCity(e.target.value)}}  />
       </div>
       <div className="flex flex-col col-span-2">
         <label className="font-medium" htmlFor="address">
           Street Address
         </label>
         <Input id="address" name="address" value={address} onChange={(e)=>{setAddress(e.target.value)}}  />
       </div>
       
       {/* <div className="flex items-center col-span-2">
         <Checkbox id="terms" />
         <label className="text-sm ml-2" htmlFor="terms">
           By clicking Submit, you agree to our updated Privacy Policy terms and conditions.
         </label>
       </div> */}
       <div className="col-span-2 flex justify-end ">
         <Button id="submit" className="" type="submit" name="submit">Save Changes</Button>
       </div>
     </form>
       </CardContent>
     </Card>
   )}
      <Card>
        <CardHeader>
          <CardTitle>Vehicles owned</CardTitle>
          <CardDescription>Table showing vehicles owned</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Make</TableHead>
            <TableHead className="text-sm">Model</TableHead>
            <TableHead className="text-sm">Year</TableHead>
            <TableHead className="text-sm">VIN</TableHead>
            <TableHead className="text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
{/* 
{loading && ( <p className="flex  items-center justify-center text-center">
<span className="loading loading-bars loading-md "></span>

 </p>)}

 {data?.map(item =>(
      
     <TableRow key={item.id}>
     <TableCell className="font-medium">{item.make}</TableCell>
     <TableCell>{item.model}</TableCell>
     <TableCell>{item.year}</TableCell>
     <TableCell>{item.VIN}</TableCell>
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
 ))} */}
 </TableBody>
      </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Quotes</CardTitle>
          <CardDescription>Quotes the client has made .</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm">Quote Number</TableHead>
            <TableHead className="text-sm">Client</TableHead>
            <TableHead className="text-sm">Vehicle</TableHead>
            <TableHead className="text-sm">Start Date</TableHead>
            <TableHead className="text-sm">Expiry date</TableHead>
            <TableHead className="text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
{/* 
{loading && ( <p className="flex  items-center justify-center text-center">
<span className="loading loading-bars loading-md "></span>

 </p>)}

 {data?.map(item =>(
      
     <TableRow key={item._id}>
     <TableCell className="font-medium">{item.qoute_number}</TableCell>
     <TableCell>{item.client_id}</TableCell>
     <TableCell>{item.vehicle_id}</TableCell>
     <TableCell>{item.start_date}</TableCell>
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
 ))} */}
 </TableBody>
      </Table>
        </CardContent>
      </Card>
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
  
  function CheckCircleIcon(props) {
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }


 
function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailOpenIcon(props) {
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}