// src/app.js
const express = require('express');
const app = express();
const port = 3000; // Using `port` as a consistent variable name

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// About endpoint
app.get('/about', (req, res) => {
  res.send('Welcome to about page');
});

// Export the Express app for testing purposes
module.exports = app;
