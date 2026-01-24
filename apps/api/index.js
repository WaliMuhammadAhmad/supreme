const app = require("./app");
const connectDB = require("./config/database");

let isConnected = false;

const initDB = async () => {
  if (isConnected) {
    return;
  }
  await connectDB();
  isConnected = true;
};

module.exports = async (req, res) => {
  await initDB();
  return app(req, res);
};
