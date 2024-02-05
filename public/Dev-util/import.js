const Job = require('../../models/jobModel');
const fs = require('fs');

const import_data = async () =>
  fs.readFile('./csvjson.json', 'UTF-8', (err, data) => {
    data = JSON.parse(data);
    console.log(data);
    data.forEach(async (el) => {
      const jobNew = await Job.create({
        title: el.title,
        author: el.author,
        job_position: el.job_position,
        description: el.description,
        location: el.location,
        company: el.company,
        min_salary: el.min_salary,
        max_salary: el.max_salary,
        number_of_applicants: el.number_of_applicants,
        job_type: el.job_type,
      });
    });
  });

import_data();
