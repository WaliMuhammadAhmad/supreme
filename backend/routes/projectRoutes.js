const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// GET all projects
router.get("/", projectController.getAllProjects);

// GET projects by user ID
router.get("/:Id", projectController.getProjectsByUserId);

// POST create new project
router.post("/create", projectController.createProject);

// PUT update project
router.put("/:id", projectController.updateProject);

// POST delete project
router.post("/delete", projectController.deleteProject);

module.exports = router;

