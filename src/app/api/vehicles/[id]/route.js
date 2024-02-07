import { NextResponse } from "next/server"
import { conn } from "../../../../../libs/mongoDB"
import { Vehicle } from "../../../../../models/vehicles"


export async function GET(req,{params}){
    const {id}= params
    await conn()
    const vehicle = await Vehicle.findOne({_id:id})
    return NextResponse.json(vehicle)
}


// updating vehicle 
export async function PUT(req,{params}){
    const res = await req.json()
    const {id}= params
    await conn()
    const vehicle = await Vehicle.findByIdAndUpdate(id,res)
    return NextResponse.json(vehicle)
}


