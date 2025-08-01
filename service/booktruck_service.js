const Booking = require('../model/booktruck_model');

const createBooking = async (data) => {
  const booking = new Booking(data);
  return await booking.save();
};

const getAllBookings = async () => {
  return await Booking.find();
};

const updateBooking = async (id, data) => {
  return await Booking.findOneAndUpdate({ id }, data, { new: true });
};

const deleteBooking = async (id) => {
  return await Booking.findOneAndDelete({ id });
};

module.exports = {
  createBooking,
  getAllBookings,
  updateBooking,
  deleteBooking
};
