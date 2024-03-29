const axios = require('axios');
const Article = require('../models/articleModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const _ = require('lodash');
const APIFeatures = require('../utils/apiFeatures');
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

exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Find My Way | Join us',
    User: res.locals.user,
    URL: req.url,
  });
};

// Article  and Comment routes below this line

exports.getAllJobs = catchAsync(async (req, res, next) => {
  try {
    const AXIOSres = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/jobs/',
      data: {},
    });

    if (AXIOSres.data.status === 'success') {
      const Data = AXIOSres.data.data.data;

      res.status(200).render('allJobs', {
        title: 'Find My Way | All Jobs',
        User: res.locals.user,
        Data,
      });
    }
  } catch (err) {
    return next(
      new AppError(`${err.response.statusText}`, err.response.status),
    );
  }
});

// Articles
exports.getAllArticle = catchAsync(async (req, res, next) => {
  try {
    const AXIOSres = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/article/',
      data: {},
      params: req.query,
    });

    if (AXIOSres.data.status === 'success') {
      const Data = AXIOSres.data.data.data;

      res.status(200).render('allArticle', {
        title: 'Find My Way | All Articles',
        User: res.locals.user,
        Data,
      });
    }
  } catch (err) {
    return next(
      new AppError(`${err.response.statusText}`, err.response.status),
    );
  }
});

exports.getArticle = catchAsync(async (req, res, next) => {
  // check ID for number or Name
  const articleOne = await Article.findById(req.params.id);

  if (!articleOne) {
    return next(new AppError('No Article found with that ID', 404));
  }

  try {
    res.status(200).render('singleArticle', {
      title: `Find My Way | ${articleOne.title} `,
      User: res.locals.user,
      data: articleOne,
    });
  } catch (err) {
    return next(
      new AppError(`${err.response.statusText}`, err.response.status),
    );
  }
});

exports.getUserMe = catchAsync(async (req, res, next) => {
  // Axios request
  
  res.status(200).render('userMeProfile', {
    title: `Find My Way | Profile`,
    User: res.locals.user,
    });
});
