import { NextResponse } from "next/server"
import { conn } from "../../../../libs/mongoDB"
import { Client } from "../../../../models/clients"
import { Quote } from "../../../../models/qoutes"

// create quote ================

export async function POST(req){

    await conn()
    const res = await req.json()
    const quote = await Quote.create(res)
    return NextResponse.json(quote)
}


// list quotes==============

export async function GET(){
    await conn()
   const  quotes = await Quote.find()
   return NextResponse.json(quotes)
}






