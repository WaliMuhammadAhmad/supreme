const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectName: String,
    type: String,
    color: String,
    endDate: Date,
    budget: Number,
    email: String,
    keywords: String,
    file: String,
    progress: Number,
    status: String,
    isCompleted: Boolean,
    completedFile: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);

