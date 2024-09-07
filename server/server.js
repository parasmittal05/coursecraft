require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const connectDb = require('./utils/db');
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const adminRoute = require('./router/admin-router');
const serviceRoute = require('./router/service-router');
const errorMiddleware = require('./middleware/error-middleware');

const app = express();
const port = process.env.PORT || 4000;

const corsOption = {
  origin: "http://localhost:5173", // Update this to your frontend's URL if deploying
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOption)); // Enable CORS
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
