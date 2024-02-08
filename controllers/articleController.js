const Article = require('../models/articleModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const _ = require('lodash');
const APIFeatures = require('../utils/apiFeatures');

exports.findAll = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Article.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .search();

  const articles = await features.query;

  res.status(200).json({
    status: 'success',
    length: articles.length,
    data: {
      data: articles,
    },
  });
});

exports.insertData = catchAsync(async (req, res) => {
  const articleNew = await Article.create({
    author: req.user._id,
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    number_of_likes: req.body.likes || 0,
    number_of_comments: req.body.comments || 0,
  });
  //   Send response
  res.status(201).json({
    status: 'success',
    data: {
      data: articleNew,
    },
  });
});

exports.getArticle = catchAsync(async (req, res, next) => {
  // check ID for number or Name
  const articleOne = await Article.findById(req.params.id);
  // Tour.findOne({ _id: req.params.id })

  if (!articleOne) {
    return next(new AppError('No Article found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: articleOne,
    },
  });
});
