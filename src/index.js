const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
// src/index.js
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const PORT = process.env.PORT || 3000; 
// Using environment variable for PORT or fallback to 3000

// MongoDB connection (Replace `your_mongodb_connection_string` with your actual MongoDB URI)
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () =>{
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
