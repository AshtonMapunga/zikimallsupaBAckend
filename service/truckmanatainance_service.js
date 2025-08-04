const TruckMaintenance = require('../model/truck_manatainance_model');

exports.createMaintenance = async (data) => {
  return await TruckMaintenance.create(data);
};

exports.getAllMaintenances = async () => {
  return await TruckMaintenance.find();
};

exports.getMaintenanceById = async (id) => {
  return await TruckMaintenance.findById(id);
};

exports.updateMaintenance = async (id, data) => {
  return await TruckMaintenance.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteMaintenance = async (id) => {
  return await TruckMaintenance.findByIdAndDelete(id);
};
