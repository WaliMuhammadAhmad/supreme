const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET all users
router.get("/", userController.getAllUsers);

// GET specific user by ID
router.get("/:userId", userController.getUserById);

// POST create new user
router.post("/create", userController.createUser);

// PUT update user
router.put("/:id", userController.updateUser);

// PUT post user review
router.put("/review/:id", userController.postUserReview);

// POST delete user
router.post("/delete", userController.deleteUser);

module.exports = router;

