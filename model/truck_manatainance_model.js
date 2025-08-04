const mongoose = require('mongoose');

const TruckMaintenanceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
  },
  truckRegNumber: {
    type: String,
    required: true,
  },
  truckType: {
    type: String,
    required: true,
  },
  urgencyLevel: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    required: true,
  },
  serviceLocation: {
    type: String,
    required: true,
  },
  preferredDate: {
    type: Date,
    required: true,
  },
  preferredTime: {
    type: String,
    required: true,
  },
  issueDescription: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  additionalNotes: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('TruckMaintenance', TruckMaintenanceSchema);
