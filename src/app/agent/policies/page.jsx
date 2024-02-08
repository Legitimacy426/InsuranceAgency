import React from 'react'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"





import Header from '../components/Header'
import { fetchAll } from '../../../../libs/functions/fetchAll'

export default async function page() {

  const data =  await fetchAll('policies')
  console.log(data)
  return (
    <>  
      <Header />
     <div className="justify-between flex p-4 ">
      <p>Policies</p>
      <Button size="lg" variant="outline">
          New Policy
          </Button>
     </div>
     <div className="p-4">
     <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Policy Number</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Premium(KES)</TableHead>
          <TableHead>Coverage Limit(KSH)</TableHead>
          <TableHead>Created At</TableHead>
          {/* <TableHead className="hidden md:table-cell">Last Contact</TableHead> */}
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
    {data?.map(info=>(
          <TableRow key={info.id}>
          <TableCell className="font-medium">{info.policyNumber}</TableCell>
          <TableCell className="font-medium">{info.policyType}</TableCell>
          <TableCell>{info.premium}</TableCell>
          <TableCell>{info.coverageLimit}</TableCell>
          <TableCell>{info.createdDate}</TableCell>
    
          <TableCell className="text-right">
            <Button className="rounded-full" size="icon" variant="outline">
              <FileEditIcon className="w-4 h-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">More</span>
            </Button>
          </TableCell>
        </TableRow>
    ))}
      </TableBody>
    </Table>
     </div>
    
    </>

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


function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}