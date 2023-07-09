const router = require("express").Router();
const Project = require("../models/projectModel");
const authMiddleware = require("../middlewares/authMiddleware");
// const User = require("../models/userModel");

// create a project
router.post("/create-project", authMiddleware, async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.send({
      success: true,
      data: newProject,
      message: "Project created successfully",
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
});

// get all projects
router.post("/get-all-projects", authMiddleware, async (req, res) => {
  try {
    const filters=req.body.filters;
    // const projects = await Project.find({owner: req.body.userId,}).sort({ createdAt: -1 });
    const projects = await Project.find(filters||{});

    res.send({
      success: true,
      data: projects,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
});

module.exports=router;