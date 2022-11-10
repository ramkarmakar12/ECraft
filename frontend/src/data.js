import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Remo',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ram',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Handmade lamp',
      slug: 'handmade-lamp',
      category: 'lamp',
      image: '/images/indoor-lamp.jpg',
      price: 100,
      countInStock: 10,
      brand: 'local',
      rating: 4.5,
      numReviews: 1,
      description: 'High quality indoor lamp',
    },

    {
      name: 'Homdecor',
      slug: 'handmade-decor',
      category: 'decoration',
      image: '/images/home-decor.jpg',
      price: '200',
      countInStock: '10',
      brand: 'local',
      rating: 4.5,
      numReviews: 1,
      description: 'High quality decoration item',
    },

    {
      name: 'Handmade teacup',
      slug: 'handmade-teacup',
      category: 'kitchen',
      image: '/images/tea-cup-set.jpg',
      price: 120,
      countInStock: 15,
      brand: 'local',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality tea cup set',
    },

    {
      name: 'Handmade bag',
      slug: 'handmade-bag',
      category: 'bag',
      image: '/images/printed-bag.jpg',
      price: 300,
      countInStock: 25,
      brand: 'local',
      rating: 4.5,
      numReviews: 12,
      description: 'High quality handbag',
    },
    {
      //_id: '4',
      name: 'Homdecor item',
      slug: 'decor-set',
      category: 'decoration',
      image: '/images/homedecor.jpg',
      price: '200',
      countInStock: '10',
      brand: 'local',
      rating: 4.5,
      numReviews: 1,
      description: 'High quality decoration item',
    },
  ],
};

export default data;
