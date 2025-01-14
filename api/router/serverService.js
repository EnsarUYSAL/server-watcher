const express = require('express');
const router = express.Router();
const Server = require('../models/server');
const jwt = require('jsonwebtoken');

// Middleware for JWT validation
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
};

// Add a new server
router.post('/add', authenticateToken, async (req, res) => {
  try {
    const { name, type, host, port, username, privateKey } = req.body;
    const newServer = new Server({ name, type, host, port, username, privateKey });
    await newServer.save();
    res.status(200).json({ message: 'Server added successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Get all servers
router.get('/all', authenticateToken, async (req, res) => {
  try {
    const servers = await Server.find();
    res.status(200).json(servers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve servers' });
  }
});

// Update a server
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const serverId = req.params.id;
    const updates = req.body;
    await Server.findByIdAndUpdate(serverId, updates);
    res.status(200).json({ message: 'Server updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Delete a server
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const serverId = req.params.id;
    await Server.findByIdAndDelete(serverId);
    res.status(200).json({ message: 'Server deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete server' });
  }
});

module.exports = router; 