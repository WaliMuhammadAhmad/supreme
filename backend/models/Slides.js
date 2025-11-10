const mongoose = require("mongoose");

const slidesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: String,
    image: String,
    video: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Slides", slidesSchema);

