const mongoose = require('mongoose');

const SparePartsProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  instock: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('SparePartsProducts', SparePartsProductsSchema);
