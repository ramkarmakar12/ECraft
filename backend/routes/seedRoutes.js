import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import sampleuser from '../user.js';
//import sampleseller from '../seller.js';
import User from '../models/UserModel.js';
//import Seller from '../models/SellerModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(sampleuser.users);
  //res.send({ createdProducts, createdUsers });
  //await Seller.deleteMany({});
  //const createdSellers = await Seller.insertMany(sampleseller.sellers);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
