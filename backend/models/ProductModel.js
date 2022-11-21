import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String },
    category: { type: String },
    image: { type: String },
    images: [String],
    price: { type: Number },
    countInStock: { type: Number },
    brand: { type: String },
    rating: { type: Number },
    numReviews: { type: Number },
    description: { type: String },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
