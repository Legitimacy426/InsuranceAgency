import { NextResponse } from "next/server";
import { conn } from "../../../../../libs/mongoDB";
import { Policy } from "../../../../../models/policies";

export async function GET(req,{params}){
    const {id} = params;
    await conn()
    const policy = await Policy.findOne({_id:id})
    return NextResponse.json(policy)
}




// updating policy
export async function PUT(req,{params}){
    const {id} = params;
    const res = await req.json()
    await conn()
    const policy = await Policy.findByIdAndUpdate(id,res)
    return NextResponse.json(policy)
}