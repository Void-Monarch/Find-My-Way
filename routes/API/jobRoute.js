const express = require('express');
const jobController = require('../../controllers/jobController');
const authController = require('../../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(jobController.findAll)
  .post(authController.protect, jobController.insertData);

module.exports = router;
