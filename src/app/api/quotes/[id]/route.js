import { NextResponse } from "next/server"
import { conn } from "../../../../../libs/mongoDB"
import { Quote } from "../../../../../models/qoutes"




// get single qoute with id param


export async function GET(req,{params}){
    const {id} = params
    await conn()
    const quote = await Quote.findOne({_id:id})
    return NextResponse.json(quote)

}


// update quote
export async function PUT(req,{params}){
    const {id} = params
    const res = await req.json()
    await conn()
    const quote = await Quote.findByIdAndUpdate(id,res)
    return NextResponse.json(quote)

}