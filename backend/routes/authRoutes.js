const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST sign in
router.post("/signin", authController.signIn);

module.exports = router;

