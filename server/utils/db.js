const mongoose = require('mongoose');
const URI = process.env.MONGO_URI || "mongodb://localhost:27017/mern"; // Ensure URI starts with mongodb://

const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Use a non-zero exit code to indicate an error
  }
};

module.exports = connectDb;
