const express = require('express');
const router = express.Router(); // ✅ Express Router

const { getProjects, addProject } = require('../controllers/projectController');

router.get('/:projectId?', getProjects);
router.get('/', getProjects);
router.post('/', addProject);

module.exports = router;
