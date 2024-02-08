const express = require('express');
const userController = require('../../controllers/userController');
const authController = require('../../controllers/authController');

const router = express.Router();

// THESE ROUTES ARE MOUNTED TO ::- '/api/v1/user'

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.route('/me').get(authController.isLoggedIn,authController.protect,userController.getUserMe)
// Exporting The
module.exports = router;
