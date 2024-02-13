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

export default function Component() {
  return (
   <>
   <Header />
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
              src="/placeholder.svg"
              width="200"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-gray-500" />
              <div className="text-2xl font-bold">2022 Tesla Model S</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">VIN</div>
              <div className="text-xl font-semibold">1HGCM82633A004352</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">License Plate</div>
              <div className="text-xl font-semibold">XYZ-123</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Insurance Coverage</CardTitle>
          <CardDescription>Policy number and coverage amount.</CardDescription>
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
              <div className="text-xl font-semibold">$50,000</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Edit Details</CardTitle>
          <CardDescription>Update insured owner, policy number, and coverage amount.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="insured-owner">Insured Owner</Label>
              <Input defaultValue="John Doe" id="insured-owner" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="policy-number">Policy Number</Label>
              <Input defaultValue="#123456789" id="policy-number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="coverage-amount">Coverage Amount</Label>
              <Input defaultValue="$50,000" id="coverage-amount" />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button>Cancel</Button>
            <Button variant="outline">Reset</Button>
            <Button type="submit">Save Changes</Button>
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
