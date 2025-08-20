const SpareParts = require('../model/spare_parts_model');

exports.createSpareParts = async (data) => {
  return await SpareParts.create(data);
};

exports.getAllSpareParts = async () => {
  return await SpareParts.find();
};

exports.getSparePartsById = async (id) => {
  return await SpareParts.findById(id);
};

exports.updateSpareParts = async (id, data) => {
  return await SpareParts.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteSpareParts = async (id) => {
  return await SpareParts.findByIdAndDelete(id);
};
