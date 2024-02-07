const { default: mongoose } = require("mongoose");


const quoteSchema = new mongoose.Schema(
    {
       
        client_id: {
          type: String,
          required: true
        },
        vehicle_id: {
          type: String,
          required: true
        },
        policy_id: {
          type: String,
          required: true
        },
        status: {
          type: String,
          required: true
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