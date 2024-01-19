const express = require('express');
const viewController = require('../../controllers/viewController');
const authController = require('../../controllers/authController');

const router = express.Router();

router.route('/').get(viewController.getOverview);

// Exporting The
module.exports = router;
