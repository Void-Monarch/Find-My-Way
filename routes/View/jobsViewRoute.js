const express = require('express');
const viewController = require('../../controllers/viewController');

const router = express.Router();

router.route('/').get(viewController.getAllJobs);

// Exporting The
module.exports = router;
