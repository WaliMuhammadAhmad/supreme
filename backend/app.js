const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const projectRoutes = require("./routes/projectRoutes");
const slidesRoutes = require("./routes/slidesRoutes");
const authRoutes = require("./routes/authRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ success: true, message: "Supreme API is running" });
});

// API Routes
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/projects", projectRoutes);
app.use("/project", projectRoutes);
app.use("/slides", slidesRoutes);
app.use("/slide", slidesRoutes);
app.use("/", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;

