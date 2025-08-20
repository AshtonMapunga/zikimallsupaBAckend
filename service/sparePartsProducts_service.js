const SparePartsProduct = require('../model/sparepartsproduct');

exports.createSparePartsProd = async (data) => {
  return await SparePartsProduct.create(data);
};

exports.getAllSparePartsProd = async () => {
  return await SparePartsProduct.find();
};

exports.getSparePartsProdById = async (id) => {
  return await SparePartsProduct.findById(id);
};

exports.updateSparePartsProd = async (id, data) => {
  return await SparePartsProduct.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteSparePartsProd = async (id) => {
  return await SparePartsProduct.findByIdAndDelete(id);
};
