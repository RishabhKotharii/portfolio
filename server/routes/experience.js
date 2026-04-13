const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET all experience
router.get('/', async (req, res) => {
  try {
    const experience = await Experience.find().sort({ order: 1 });
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create experience entry
router.post('/', async (req, res) => {
  try {
    const exp = new Experience(req.body);
    await exp.save();
    res.status(201).json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
