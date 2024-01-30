const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    author: {
      required: [true, 'Author is required.'],
      type: {
        _id: {
          type: Schema.Types.ObjectId,
          ref: 'Users',
          required: [true, 'Author _id is required'],
        },
        name: { type: String, required: [true, 'Author name is required.'] },
        image_url: { type: String },
        author_url: {
          type: String,
          required: [true, 'Author URL is required.'],
        },
      },
    },
    title: { type: String, required: [true, 'Title is required.'] },
    description: { type: String, required: [true, 'Description is required.'] },
    content: { type: String, required: [true, 'Content is required.'] },
    display_url: {
      type: String,
      required: [true, 'Display URL is required.'],
      unique: [true, 'Display URL has to be unique.'],
      index: true,
    },
    image_url: { type: String },
    tags: {
      default: [],
      type: [
        {
          _id: { type: Schema.Types.ObjectId, ref: 'Tags' },
          name: { type: String },
          description: { type: String },
          display_url: { type: String },
        },
      ],
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

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
