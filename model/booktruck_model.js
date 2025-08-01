const mongoose = require('mongoose');

const BookingTruckSchema = new mongoose.Schema({

  type: {
    type: String,
    required: true
  },
  tonnage: {
    type: String,
    required: true
  },
  pickup: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    required: true
  },
  amount: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('BookingTruck', BookingTruckSchema);
