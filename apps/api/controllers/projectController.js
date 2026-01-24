const Project = require("../models/Project");

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get projects by user ID
exports.getProjectsByUserId = async (req, res) => {
  try {
    const _id = req.params.Id;
    console.log(_id);
    const projects = await Project.find({ userId: _id });
    console.log(projects);
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new project
exports.createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: newProject,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedProject = await Project.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!updatedProject) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.body.id;
    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (!deletedProject) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
    res.json({
      success: true,
      message: "Project deleted successfully",
      data: deletedProject,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

