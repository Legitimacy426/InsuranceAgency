const { Schema } = require("mongoose");
import mongoose from "mongoose";

 

 const clientSchema = new Schema({
    fullName:String,
    label:String,
    IDNumber:String,
    email:String,
    address:String,
    phone:String,
    city:String,
    
createdAt: {
      type: Date,
      default: Date.now
    }
   
 })

 export const Client = mongoose.models.client || mongoose.model("client",clientSchema)



