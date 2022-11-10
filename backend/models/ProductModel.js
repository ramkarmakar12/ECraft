import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String },
    category: { type: String },
    image: { type: String },
    price: { type: Number },
    countInStock: { type: Number },
    brand: { type: String },
    rating: { type: Number },
    numReviews: { type: Number },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
