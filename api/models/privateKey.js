const mongoose = require('mongoose');

const privateKeySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('PrivateKey', privateKeySchema); 