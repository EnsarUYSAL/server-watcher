const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./auth');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

   
const app = express();
const PORT = process.env.PORT || 3455;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/server-monitoring', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
}); 