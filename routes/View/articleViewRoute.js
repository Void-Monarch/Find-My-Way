const express = require('express');
const viewController = require('../../controllers/viewController');
const authController = require('../../controllers/authController');


const router = express.Router();

router.route('/').get(viewController.getAllArticle);

router.route('/:id').get(viewController.getArticle);

// Exporting The
module.exports = router;
