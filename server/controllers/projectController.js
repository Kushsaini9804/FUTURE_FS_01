// server/controllers/projectController.js
const Project = require('../models/Project');

// controllers/projectController.js
exports.getProjects = async (req, res) => {
  try {
    // Replace with your actual DB logic
    res.status(200).json({ message: 'Projects fetched successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err });
  }
};


exports.addProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({ success: true, project: newProject });
    res.json({ message: 'Project added' });

  } catch (err) {
    res.status(400).json({ error: 'Invalid Data' });
  }
};
