const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const session = require('express-session');
const Homepage=require('./routes/index');
const cookieParser = require('cookie-parser');
const path=require('path');

require('dotenv').config();

const app = express();
app.use(cookieParser());
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 5000;

const connectiondb=require('./db/connection');
connectiondb();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
  secret: process.env.SECRET_KEY, 
  resave: false,
  saveUninitialized: false,
}));

// Routes
app.use('/',Homepage);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });