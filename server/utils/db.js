const mongoose = require('mongoose');
require('dotenv').config(); // Ensure to load environment variables

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/mern"; // Ensure URI starts with mongodb://

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit process with a failure code
  }
};

module.exports = connectDb;
