import { Client } from "../../models/clients";
import { Vehicle } from "../../models/vehicles";
import { conn } from "../mongoDB";


// export async function getFrom() {
// await conn()

// const client = await Client.find({fullname:/^jcac/})
//   return{client:client}

//   }
export async function getFrom() {
await conn()

const client = await Vehicle.find({client_id:"65d5c153a6d7ec59158d1807"})
  return{client:client}

  }