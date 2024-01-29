const express = require('express');
const viewController = require('../../controllers/viewController');
const authController = require('../../controllers/authController');

const router = express.Router();

router.route('/').get(authController.isLoggedIn, viewController.getOverview);

router
  .route('/login')
  .get(authController.isLoggedIn, viewController.getLoginForm);

// Exporting The
module.exports = router;
