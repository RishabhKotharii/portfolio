const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const msg = new Message({
      name,
      email,
      subject: subject || '',
      message,
    });

    await msg.save();

    res.status(201).json({
      success: true,
      message: 'Your message has been received! I will get back to you soon.',
      data: msg,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
