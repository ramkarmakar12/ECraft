import Express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/ProductRoutes.js';
import userRouter from './routes/UserRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db : ECraft');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get('/api/keys/google', (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || '' });
});
app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files
//app.use(Express.static(path.join(__dirname, 'public')));

// API endpoints
let sellers = [];

app.get('/api/sellers', (req, res) => {
  res.json(sellers);
});

app.post('/api/sellers', (req, res) => {
  const { name, product } = req.body;
  const newSeller = { id: sellers.length + 1, name, product };
  sellers.push(newSeller);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is ready on port ${port}`);
});
