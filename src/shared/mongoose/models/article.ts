import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: String,
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.models.Article || mongoose.model('Article', ArticleSchema);

export default Article;
