const express = require('express');
const router = express.Router();
const bookingService = require('../service/booktruck_service');

// Create booking
router.post('/', async (req, res) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update booking hhh
router.put('/:id', async (req, res) => {
  try {
    const updated = await bookingService.updateBooking(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Booking not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete booking
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await bookingService.deleteBooking(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
