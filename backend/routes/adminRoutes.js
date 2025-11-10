const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// GET all admins
router.get("/", adminController.getAllAdmins);

// POST create new admin
router.post("/create", adminController.createAdmin);

// PUT update admin
router.put("/:id", adminController.updateAdmin);

// POST delete admin
router.post("/delete", adminController.deleteAdmin);

module.exports = router;

