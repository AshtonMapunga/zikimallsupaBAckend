const TruckSecurity = require('../model/security_truck_model');

exports.createSecurity = async (data) => {
  return await TruckSecurity.create(data);
};

exports.getAllSecurities = async () => {
  return await TruckSecurity.find();
};

exports.getSecurityById = async (id) => {
  return await TruckSecurity.findById(id);
};

exports.updateSecurity = async (id, data) => {
  return await TruckSecurity.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteSecurity = async (id) => {
  return await TruckSecurity.findByIdAndDelete(id);
};
