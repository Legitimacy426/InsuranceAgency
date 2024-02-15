import { NextResponse } from "next/server"
import { conn } from "../../../../../libs/mongoDB"
import { Client } from "../../../../../models/clients"



// get single client with id param


export async function GET(req,{params}){
    const {id} = params
    await conn()
    const client = await Client.findOne({_id:id})
    return NextResponse.json(client)

}

export async function PUT(req,{params}){
    const {id} = params
    const res = await req.json()
    await conn()
    const client = await Client.findByIdAndUpdate(id,res)
    return NextResponse.json(client)

}