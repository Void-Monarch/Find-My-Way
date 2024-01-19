const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1)

  // 2) Build template
  // 3) Render that template using tour data from 1)
  res.status(200).render('index', {
    title: 'Find My Way',
  });
});
