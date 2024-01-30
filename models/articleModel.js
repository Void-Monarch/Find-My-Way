const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    author: {
      required: [true, 'Author is required.'],
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: { type: String, required: [true, 'Title is required.'] },
    description: { type: String, required: [true, 'Description is required.'] },
    content: { type: String, required: [true, 'Content is required.'] },
    image_url: { type: String },
    tags: {
      default: [],
    },
    number_of_likes: { type: Number, default: 0 },
    number_of_comments: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

// POPULATING THE FEILDS WITH DATA FROM OTHER MODELS
articleSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'author',
    select: '-__v -passwordChangedAt',
  });

  next();
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
