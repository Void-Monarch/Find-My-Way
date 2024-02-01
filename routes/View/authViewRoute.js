const express = require('express');
const viewController = require('../../controllers/viewController');
const authController = require('../../controllers/authController');

const router = express.Router();

router.route('/').get(authController.isLoggedIn, viewController.getOverview);

// authetication
router
  .route('/login')
  .get(authController.isLoggedIn, viewController.getLoginForm);

router
  .route('/signup')
  .get(authController.isLoggedIn, viewController.getSignupForm);

router.route('/logout').get();
// Exporting The
module.exports = router;
