import mongoose from "mongoose";


const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
      },
      model: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
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
      createdDate: {
        type: Date,
        default: Date.now
      }
})


export const Vehicle = mongoose.model('vehicle', vehicleSchema);