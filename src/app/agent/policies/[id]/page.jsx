/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0BvCPdPf1WT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "../../components/Header"

export default function Page() {
  return (
  <>
  <Header />
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Policy #A1B2C3</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last updated on February 13, 2023</p>
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
                +25746121315
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
              <h2 className="text-lg font-semibold">Coverage</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This policy provides coverage for a variety of scenarios, including but not limited to:
              </p>
            </div>
            <div className="grid gap-4">
              <ul className="grid gap-2">
                <li>Accidental damage</li>
                <li>Theft</li>
                <li>Natural disasters</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-1">
              <h2 className="text-lg font-semibold">Terms & Conditions</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                By accepting this policy, you agree to the following terms and conditions:
              </p>
            </div>
            <div className="grid gap-4">
              <ul className="grid gap-2">
                <li>Policy is valid for one year from the start date</li>
                <li>Claims must be filed within 30 days of the incident</li>
                <li>Additional coverage options are available for an extra fee{"\n                              "}</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
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
          </div>
        </div>
        <div className="grid max-w-sm gap-2 min-[400px]:max-w-none">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="coverage">
                Coverage Amount (KES)
              </Label>
              <Input id="coverage" placeholder="Enter coverage amount" />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="renewal">
              Premium(KES)
              </Label>
              <Input id="renewal" type="number" />
            </div>
            <div className="grid gap-2">
              <Label className="text-sm" htmlFor="notes">
                Additional Notes
              </Label>
              <Textarea className="min-h-[100px] resize-y" id="notes" placeholder="Enter additional notes" />
            </div>
            <Button type="submit">Save Changes</Button>
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

