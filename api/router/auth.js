const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Secret key
const validSecretKey = process.env.AUTH_SECRET_KEY;

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

// Register a new user
router.post('/register', async (req, res) => {
  const secretKey = req.headers['x-secret-key'];
  if (secretKey !== validSecretKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Unauthorized' });
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Get all users
router.get('/users', authenticateToken, async (req, res) => {
  const secretKey = req.headers['x-secret-key'];
  if (secretKey !== validSecretKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const users = await User.find({}, '-password'); // Exclude password from the response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Delete a user
router.delete('/users/:id', authenticateToken, async (req, res) => {
  const secretKey = req.headers['x-secret-key'];
  if (secretKey !== validSecretKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router; 