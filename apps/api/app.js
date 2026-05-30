require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const projectRoutes = require("./routes/projectRoutes");
const slidesRoutes = require("./routes/slidesRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

const normalizeBasePath = (rawPath = "") => {
  const trimmed = rawPath.toString().trim();
  if (!trimmed) return "";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
};

const apiBasePath = normalizeBasePath(process.env.API_BASE_PATH);
const buildRoute = (path) => `${apiBasePath}${path}`;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get(buildRoute("/"), (req, res) => {
  res.json({ success: true, message: "Supreme API is running" });
});

app.use(buildRoute("/user"), userRoutes);
app.use(buildRoute("/admin"), adminRoutes);
["/projects", "/project"].forEach((route) => {
  app.use(buildRoute(route), projectRoutes);
});
["/slides", "/slide"].forEach((route) => {
  app.use(buildRoute(route), slidesRoutes);
});
app.use(buildRoute("/"), authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    success: false,
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;
