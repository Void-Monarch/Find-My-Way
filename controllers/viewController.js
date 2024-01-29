const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1)
  // 2) Build template
  // 3) Render that template using tour data from

  res.status(200).render('index', {
    title: 'Find My Way | Home',
    User: res.locals.user,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Find My Way | Log into your account',
    User: res.locals.user,
    URL: req.url,
  });
};
