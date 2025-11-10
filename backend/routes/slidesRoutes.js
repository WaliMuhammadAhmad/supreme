const express = require("express");
const router = express.Router();
const slidesController = require("../controllers/slidesController");

// GET all slides
router.get("/", slidesController.getAllSlides);

// POST create new slide
router.post("/create", slidesController.createSlide);

// PUT update slide
router.put("/:id", slidesController.updateSlide);

// POST delete slide
router.post("/delete", slidesController.deleteSlide);

module.exports = router;

