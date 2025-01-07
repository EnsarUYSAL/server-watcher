const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');

// Register a new user
router.post('/register', async (req, res) => {
  const secretKey = req.headers['x-secret-key']; // Secret key'i header'dan al
  const validSecretKey = 'benensar';
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
router.get('/users', async (req, res) => {
  const secretKey = req.headers['x-secret-key'];
  const validSecretKey = 'benensar';
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
router.delete('/users/:id', async (req, res) => {
  const secretKey = req.headers['x-secret-key'];
  const validSecretKey = 'benensar';
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