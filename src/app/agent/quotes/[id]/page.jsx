/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VHKguf7EoTs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Header from "../../components/Header"

export default function Component() {
  return (
   <>
   <Header tag={"quotes"}/>
   <div className="w-full max-w-3xl mx-auto">
      <CardHeader className="pb-0">
        <div className="text-2xl">Insurance Quote Details</div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Review the details of your insurance quote.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="form" htmlFor="vehicle">
              Vehicle Information
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="label" htmlFor="make">
                  Make
                </Label>
                <p className="form">Tesla</p>
              </div>
              <div className="space-y-2">
                <Label className="label" htmlFor="model">
                  Model
                </Label>
                <p className="form">Model 3</p>
              </div>
              <div className="space-y-2">
                <Label className="label" htmlFor="year">
                  Year
                </Label>
                <p className="form">2023</p>
              </div>
              <div className="space-y-2">
                <Label className="label" htmlFor="vin">
                  VIN
                </Label>
                <p className="form">5YJ3E1EA8JF006908</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="form" htmlFor="coverage">
              Coverage Details
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="label" htmlFor="type">
                  Type of Coverage
                </Label>
                <p className="form">Comprehensive</p>
              </div>
              <div className="space-y-2">
                <Label className="label" htmlFor="limits">
                  Coverage Limits
                </Label>
                <p className="form">KES 100,000</p>
              </div>
              <div className="space-y-2">
                <Label className="label" htmlFor="deductible">
                  Deductible
                </Label>
                <p className="form">KES 500</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="form" htmlFor="premium">
            Premium Amount
          </Label>
          <p className="text-2xl font-bold">KES 1200/year</p>
        </div>
        <div className="space-y-2">
          <Label className="form" htmlFor="options">
            Payment Options
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="form">Monthly Installments</p>
            </div>
            <div className="space-y-2">
              <p className="form">Automatic Payments</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="form" htmlFor="terms">
            Terms and Conditions
          </Label>
          <p className="form">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 grid gap-4">
        <Button className="w-full max-w-xs justify-center" variant="outline">
          Edit Quote
        </Button>
        <Button className="w-full max-w-xs justify-center">Purchase</Button>
      </CardFooter>
    </div>
   </>
  )
}

