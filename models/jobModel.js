const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    author: {
      required: [true, 'Author is required.'],
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: { type: String, required: [true, 'Title is required.'] },
    job_position: {
      type: String,
      required: [true, 'job position is required.'],
    },
    description: { type: String, required: [true, 'Description is required.'] },
    location: { type: String, required: [true, 'location is required.'] },
    company: { type: String, required: true },
    job_type: {
      type: String,
      required: true,
      enum: ['Full Time', 'Part Time'],
    },
    min_salary: { type: String, required: true },
    max_salary: { type: String, required: true },
    image_url: { type: String },
    tags: {
      default: [],
    },
    number_of_applicants: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

// POPULATING THE FEILDS WITH DATA FROM OTHER MODELS
jobSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'author',
    select: '-__v',
  });

  next();
});

const Article = mongoose.model('Job', jobSchema);

module.exports = Article;
