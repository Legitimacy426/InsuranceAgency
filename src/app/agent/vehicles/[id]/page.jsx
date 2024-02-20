"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/szLr8hUWEw4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Header from "../../components/Header"
import Image from "next/image"
import useFetchWithID from "../../../../../hooks/useFetchWithId"
import { useState } from "react"
import SearchableSelect from "../../components/SearchableSelect"
import { updateData } from "../../../../../libs/functions/updateData"

export default function Component({params}) {
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
  const [limit, setlimit] = useState(10);
  
  console.log(params.id)
  const {data,error,loading} = useFetchWithID("vehicles",params.id)

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption._id);
    console.log(selectedOption._id)
    // navigate here
   

  };


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
      policy_id,
      label:VIN
    };
    console.log(doc)
    
    // insertData("clients",doc)
    const res = await updateData("vehicles",doc,params.id)
    if(res.message){
      alert("Failed to update")
     }else{
      alert("Item updated succesifully")
     }
    
    }
  return (
   <>
   <Header tag={"vehicles"} />
   <div className="grid gap-6 md:grid-cols-2 m-4">
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Vehicle Details</CardTitle>
          <CardDescription>Make, model, and year of the insured vehicle.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <Image
              alt="Vehicle image"
              className="aspect-square rounded-lg object-cover"
              height="200"
              src="/car.jpg"
              width="200"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-gray-500" />
              <div className="text-2xl font-bold">{data?.year} {data?.model} {data?.make}</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">VIN</div>
              <div className="text-xl font-semibold">{data?.VIN}</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">License Plate</div>
              <div className="text-xl font-semibold">{data?.VIN}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Insurance Coverage</CardTitle>
          <CardDescription>Policy number and owner details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-gray-500" />
              <div className="text-2xl font-bold">Policy #123456789</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Insured Owner</div>
              <div className="text-xl font-semibold">John Doe</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Coverage Amount</div>
              <div className="text-xl font-semibold">KES 3000</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Edit Vehicle Details</CardTitle>
          <CardDescription>Update vehicle details.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
          <Button className="w-full">Save changes</Button>
        </div>
      </form>
    </div>
        </CardContent>
      </Card>
    </div>
   </>
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
