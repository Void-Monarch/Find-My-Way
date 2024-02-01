const express = require('express');
const viewController = require('../../controllers/viewController');
const authController = require('../../controllers/authController');
const articleController = require('../../controllers/articleController');

const router = express.Router();


router.route('/').get(viewController.getAllArticle);

// Exporting The
module.exports = router;
