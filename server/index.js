const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve form.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/form.html'));
});

// ✅ Import API routes
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

// ✅ Use them
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// ✅ Serve React App under /app
app.use('/app', express.static(path.join(__dirname, '../client/build')));
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// ✅ Connect MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
}).catch(err => console.error('❌ MongoDB connection error:', err));
