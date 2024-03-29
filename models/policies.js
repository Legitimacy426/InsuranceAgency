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
    label: {
      type: String,
    
    },
    coverageLimit: {
      type: String,
   
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
    createdAt: {
      type: Date,
      default: Date.now
    }
  
  });

 export const Policy = mongoose.models.Policy || mongoose.model('Policy', policySchema);

