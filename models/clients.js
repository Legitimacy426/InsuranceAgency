const { Schema } = require("mongoose");
import mongoose from "mongoose";

 

 const clientSchema = new Schema({
    full_name:String,
    password:String,
    email:String,
    location:String,
    createdDate: {
      type: Date,
      default: Date.now
    }
   
 })

 export const Client = mongoose.model("client",clientSchema)