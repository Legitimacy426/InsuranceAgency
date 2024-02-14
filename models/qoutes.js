const { default: mongoose } = require("mongoose");


const quoteSchema = new mongoose.Schema(
    {
       
        client_id: {
          type: String,
      
        },
        qoute_number: {
          type: String,
      
        },
        vehicle_id: {
          type: String,
      
        },
        policy_id: {
          type: String,
      
        },
        status: {
          type: String,
      
        },
        label: {
          type: String,
      
        },
    
        comments: String,
        createdDate: {
          type: Date,
          default: Date.now
        },
        start_date:{
          type:Date
        },
        end_date:{
          type:Date
        }
      }
)


export const Quote = mongoose.model("quote",quoteSchema)