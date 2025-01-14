const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Linux', 'Windows'],
    required: true
  },
  host: {
    type: String,
    required: true
  },
  port: {
    type: Number,
    required: true,
    default: 22
  },
  username: {
    type: String,
    required: true
  },
  privateKey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PrivateKey',
    required: true
  },
  status: {
    type: String,
    enum: ['online', 'offline'],
    default: 'offline'
  }
});

module.exports = mongoose.model('Server', serverSchema); 