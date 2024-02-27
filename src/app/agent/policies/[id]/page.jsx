"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0BvCdataPf1WT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */



import TimeAgo from 'react-timeago'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "../../components/Header"
import useFetchWithID from "../../../../../hooks/useFetchWithId"
import { useState } from "react"
import { updateData } from "../../../../../libs/functions/updateData"

export default function Page({params}) {
  console.log(params.Id)
  const [policyNumber, setPolicyNumber] = useState("");
  const [policyType, setPolicyType] = useState("");
  const [coverageLimit, setCoverageLimit] = useState('');
  const [deductible, setDeductible] = useState("");
  const [premium, setPremium] = useState("");
  const [additionalCoverages, setAdditionalCoverages] = useState("");
  const [exclusions, setExclusions] = useState("");
  const [description, setDescription] = useState("");
  const [label, setLabel] = useState(policyNumber);
  const [limit, setlimit] = useState(10);


   
  const {data,error,loading} = useFetchWithID("policies",params.Id)


  // updating================

  const handleSubmit = async (e) =>{
    e.preventDefault()
  
    const doc = {
      premium,
      description,
      coverageLimit
    }
    console.log(doc)
    
    // insertData("clients",doc)
    const res = await updateData("policies",doc,params.Id)
    if(res.message){
      alert("Failed to update")
     }else{
      alert("Item updated succesifully")
     }
    
    }
  return (
  <>
  <Header tag={"policies"}/>
  <div className="grid min-h-screen items-start space-y-0 text-sm lg:space-y-12 m-4">
      <div className="container py-6">
        <div className="flex flex-col min-h-0 space-y-2">
          <div className="flex items-center space-x-3">
            <Link
              className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              {/* <ChevronLeftIcon className="w-4 h-4" />
              <span>Back to Policies</span> */}
            </Link>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Policy #{data?.policyNumber}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Updated <TimeAgo date={data?.createdAt} /> </p>
        </div>
      </div>
      <div className="bg-gray-100 border-t border-b border-gray-200 dark:bg-gray-800 dark:border-gray-800">
        <div className="container py-4">
          <div className="grid items-center gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-10 h-10 rounded-full" />
                <div className="space-y-1">
                  <h2 className="text-lg font-bold">iNSURANCE</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Your trusted partner in protection</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-4">
              <Button size="sm" variant="outline">
              KES    {data?.premium}
              </Button>
              <Button size="sm" variant="outline">
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-6">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-4">
            <div className="grid gap-1">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
             
              </p>
            </div>
            <div className="grid gap-4">
              <ul className="grid gap-2">
                {/* <li>Accidental damage</li>
                <li>Theft</li>
                <li>Natural disasters</li> */}
                 {data?.description}
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-1">
              <h2 className="text-lg font-semibold">Terms & Conditions</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              
              </p>
            </div>
            <div className="grid gap-4">
              <ul className="grid gap-2">
                {/* <li>Policy is valid for one year from the start date</li>
                <li>Claims must be filed within 30 days of the incident</li>
                <li>Additional coverage options are available for an extra fee{"\n                              "}</li> */}
                <li>{data?.coverageLimit}</li>
              </ul>
            </div>
          </div>
          {/* <div className="space-y-4">
            <div className="grid gap-1">
              <h2 className="text-lg font-semibold">Additional Notes</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi earum eaque tempora iste! Repellat, ducimus quis laboriosam perferendis fuga ipsa quasi suscipit sed nesciunt debitis? Tempore, animi vel. Animi.
              </p>
            </div>
            <div className="grid gap-4">
              <ul className="grid gap-2">
                <li>Customer must provide proof of loss when filing a claim</li>
                <li>Policy can be renewed annually</li>
                <li>Contact customer support for assistance</li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="grid max-w-sm gap-2 min-[400px]:max-w-none">
        <form onSubmit={(e)=>{handleSubmit(e)}} className="grid grid-cols-2 gap-4">
       
        {/* <div className="flex flex-col">
          <label className="font-medium" htmlFor="email">
        Coverage Limit
          </label>
          <Input id="email" placeholder="limit"  type="number" value={coverageLimit} onChange={(e)=>{setCoverageLimit(e.target.value)}}  />
        </div> */}
        {/* <div className="flex flex-col">
          <label className="font-medium" htmlFor="phone">
        Deductible
          </label>
          <Input id="phone" placeholder="Deductible" value={deductible} onChange={(e)=>{setDeductible(e.target.value)}}  type="text" />
        </div> */}
        
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="city">
          Terms & Conditions 
          </label>
          <Textarea  required  id="city" placeholder={'new terms and condtions'}  value={coverageLimit} onChange={(e)=>{setCoverageLimit(e.target.value)}}   />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="city">
        Additional Notes
          </label>
          <Textarea  required  id="city" placeholder="Some notes..."  value={description} onChange={(e)=>{setDescription(e.target.value)}} />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="font-medium" htmlFor="address">
           Premium
          </label>
          <Input   required id="address" placeholder="Premium(KES)" value={premium} onChange={(e)=>{setPremium(e.target.value)}}  />
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
      </div>
    </div>
  </>
  )
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function UserCircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}

