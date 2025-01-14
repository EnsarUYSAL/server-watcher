const express = require('express');
const router = express.Router();
const PublicKey = require('./models/privateKey');

// Add a new public key
router.post('/keys', async (req, res) => {
  try {
    const { name, key } = req.body;
    const newKey = new PublicKey({ name, key });
    await newKey.save();
    res.status(200).json({ message: 'Public key added successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Get all public keys
router.get('/keys', async (req, res) => {
  try {
    const keys = await PublicKey.find();
    res.status(200).json(keys);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve keys' });
  }
});

// Update a public key
router.put('/keys/:id', async (req, res) => {
  try {
    const keyId = req.params.id;
    const updates = req.body;
    await PublicKey.findByIdAndUpdate(keyId, updates);
    res.status(200).json({ message: 'Public key updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Delete a public key
router.delete('/keys/:id', async (req, res) => {
  try {
    const keyId = req.params.id;
    await PublicKey.findByIdAndDelete(keyId);
    res.status(200).json({ message: 'Public key deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete key' });
  }
});

module.exports = router; 