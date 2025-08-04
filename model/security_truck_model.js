const mongoose = require('mongoose');

const TruckSecuritySchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
  },
  truckRegNumber: {
    type: String,
    required: true,
  },
  cargoType: {
    type: String,
    required: true,
  },
  riskAssessmentLevel: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    required: true,
  },
  coveragePeriod: {
    type: String,
    required: true,
  },
  serviceLocation: {
    type: String,
    required: true,
  },
  estimateCargoValue: {
    type: Number,
    required: true,
  },
  serviceStartDate: {
    type: Date,
    required: true,
  },
  serviceStartTime: {
    type: String,
    required: true,
  },
  specificRequirements: {
    type: String,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  additionalInformation: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('TruckSecurity', TruckSecuritySchema);
