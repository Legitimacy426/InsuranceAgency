const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    policyNumber: {
      type: String,
      required: true,
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
      required: true
    },
    deductible: {
      type: Number,
      required: true
    },
    premium: {
      type: Number,
      required: true
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

