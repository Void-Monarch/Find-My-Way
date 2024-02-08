const express = require('express');
const viewController = require('../../controllers/viewController');

const authController = require('../../controllers/authController');

const Router = express.Router();

Router.route('/me').get(authController.protect, viewController.getUserMe);

module.exports = Router;
