const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DATABASE_URL;

// Define the database connection function
const dbConnect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true, // Avoid deprecation warnings
      useUnifiedTopology: true, // Use new server discovery and monitoring engine
    });
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('Connection Error', e);
    process.exit(1); // Exit process with failure
  }
};

module.exports = dbConnect;
