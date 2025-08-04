const express = require('express');
const router = express.Router();
const service = require('../service/securitytruck_service');

// CREATE
router.post('/', async (req, res) => {
  try {
    const result = await service.createSecurity(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const result = await service.getAllSecurities();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const result = await service.getSecurityById(req.params.id);
    if (!result) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const result = await service.updateSecurity(req.params.id, req.body);
    if (!result) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const result = await service.deleteSecurity(req.params.id);
    if (!result) return res.status(404).json({ message: 'Not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
