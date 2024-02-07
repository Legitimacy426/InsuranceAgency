import { NextResponse } from "next/server";
import { conn } from "../../../../libs/mongoDB";
import { Vehicle } from "../../../../models/vehicles";

export async function POST(req){
await conn()
const res = await req.json()
const vehicle = await Vehicle.create(res)
return NextResponse.json(vehicle)
}


//list vehicles

// export async function get 

export async function GET(){
    await conn()
    const vehicles = await Vehicle.find()
    return NextResponse.json(vehicles)
}



