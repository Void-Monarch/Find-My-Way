const Job = require('../models/jobModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const fs = require('fs');

exports.findAll = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Job.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const jobs = await features.query;

  res.status(200).json({
    status: 'success',
    data: {
      data: jobs,
    },
  });
});

exports.insertData = catchAsync(async (req, res) => {
  const jobNew = await Job.create({
    title: req.body.title,
    author: req.body.author,
    job_position: req.body.job_position,
    description: req.body.description,
    location: req.body.location,
    company: req.body.company,
    min_salary: req.body.min_salary,
    max_salary: req.body.max_salary,
    number_of_applicants: req.body.number_of_applicants,
    job_type: req.body.job_type,
  });

  //   Send response
  res.status(201).json({
    status: 'success',
    data: {
      data: 'jobNew',
    },
  });
});

// fs.readFile('./csvjson.json', 'UTF-8', (err, data) => {
//   data = JSON.parse(data);
//   data.forEach(async (el) => {
//     const jobNew = await Job.create({

//     });
//   });
// });
