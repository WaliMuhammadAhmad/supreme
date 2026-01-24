const Slides = require("../models/Slides");

// Get all slides
exports.getAllSlides = async (req, res) => {
  try {
    const slides = await Slides.find({});
    res.json({ success: true, data: slides });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new slide
exports.createSlide = async (req, res) => {
  try {
    const newSlide = new Slides(req.body);
    await newSlide.save();
    res.status(201).json({
      success: true,
      message: "Slide created successfully",
      data: newSlide,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update slide
exports.updateSlide = async (req, res) => {
  try {
    const slideID = req.params.id;
    const updatedSlide = await Slides.findByIdAndUpdate(slideID, req.body, {
      new: true,
    });
    if (!updatedSlide) {
      return res
        .status(404)
        .json({ success: false, message: "Slide not found" });
    }
    res.json({
      success: true,
      message: "Slide updated successfully",
      data: updatedSlide,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete slide
exports.deleteSlide = async (req, res) => {
  try {
    const slideId = req.body.id;
    const deletedSlide = await Slides.findByIdAndDelete(slideId);
    if (!deletedSlide) {
      return res
        .status(404)
        .json({ success: false, message: "Slide not found" });
    }
    res.json({
      success: true,
      message: "Slide deleted successfully",
      data: deletedSlide,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

