import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;
