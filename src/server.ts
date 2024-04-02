import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./DBconfig/database";
import routes from "./route/route";
import authRoutes from "./route/auth.route";

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB database
connectDB();

app.use(express.static("public"));
app.use(express.json());
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/api/v1", routes);
app.use("/api/v1", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
