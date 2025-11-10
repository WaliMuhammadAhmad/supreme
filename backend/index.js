// Vercel serverless entry point
const app = require("./app");
const connectDB = require("./config/database");

// Initialize database connection
let isConnected = false;

const initDB = async () => {
  if (isConnected) {
    return;
  }
  await connectDB();
  isConnected = true;
};

// Export for Vercel serverless
module.exports = async (req, res) => {
  await initDB();
  return app(req, res);
};
