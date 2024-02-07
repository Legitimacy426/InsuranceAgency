import { NextResponse } from "next/server"
import { conn } from "../../../../libs/mongoDB"
import { Client } from "../../../../models/clients"

// create client ================

export async function POST(req){
   
 
    await conn()
    const res = await req.json()
    const client = await Client.create(res)
    // await client.save()
    return NextResponse.json(client)
}


// list clients==============

export async function GET(){
    await conn()
   const  clients = await Client.find()
   return NextResponse.json(clients)
}






