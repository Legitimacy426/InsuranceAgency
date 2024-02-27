import { NextResponse } from "next/server"
import { Policy } from "../../../../models/policies"
import { conn } from "../../../../libs/mongoDB"
// create policy=========================
export async function POST(req){
  await conn()
    const res = await req.json()
    const policy = await Policy.create(res)
    return NextResponse.json(policy)
}



// get policies===================================

export async function GET(){
    await conn()
    const policies = await Policy.find().sort({createdAt:-1 })
    return NextResponse.json(policies)
}



