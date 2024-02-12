const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policyNumber: {
      type: String,
   
      unique: true
    },
    policyType: {
      type: String,
    
    },
    description: {
      type: String,
    
    },
    coverageLimit: {
      type: Number,
   
    },
    deductible: {
      type: Number,
   
    },
    premium: {
      type: Number,
   
    },
    additionalCoverages: {
      type: [String],
      default: []
    },
    exclusions: {
      type: [String],
      default: []
    },
    createdDate: {
      type: Date,
      default: Date.now
    }
  
  });

 export const Policy = mongoose.model('Policy', policySchema);

