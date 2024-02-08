const Article = require('../models/articleModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.getUserMe = catchAsync(async (req, res, next) => {
  //1) Check if user is authenticated and token is valid
  // This is done my authController.protect and authController.isLoggedIn middlewares
  //2)  Get the user info from the req.user object
  const userInfo = await User.findById(req.user._id);

  //   Send response
  res.status(200).json({
    status: 'success',
    data: {
      data: userInfo,
    },
  });
  
});

