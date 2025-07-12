const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

// Define POST route to handle contact form submission
router.post('/', submitContact);

module.exports = router;
