const express = require('express');
const articleController = require('../../controllers/articleController');
const authController = require('../../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(articleController.findAll)
  .post(authController.protect, articleController.insertData);

module.exports = router;
