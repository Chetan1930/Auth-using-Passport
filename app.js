const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); 
const Homepage=require('./routes/index');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const connectiondb=require('./db/connection');
connectiondb();
// Middleware
app.use(express.json());

// Routes
app.use('/',Homepage);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });