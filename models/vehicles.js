import mongoose from "mongoose";


const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
     
      },
    label: {
        type: String,
     
      },
      model: {
        type: String,
     
      },
      year: {
        type: Number,
     
      },
      VIN: {
        type: String,
        unique: true
      },
      usage: {
        type: String,
      
      },
      mileage: {
        type: Number,
        default: 0
      },
      antiTheftDevice: {
        type: Boolean,
        default: false
      },
      client_id: {
        type: String,
      },
      policy_id : {
        type:String
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})


export const Vehicle = mongoose.model('vehicle', vehicleSchema);