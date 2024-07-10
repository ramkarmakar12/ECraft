import bcrypt from 'bcryptjs';

const sampleseller = {
  sellers: [
    {
      name: 'eTrade Online',
      email: 'etradeonline@gmail.com',
      password: bcrypt.hashSync('202122'),
      //isSeller: true,
    },
    {
      name: 'Wishlist Craft online',
      email: 'wishlistcraft@example.com',
      password: bcrypt.hashSync('123456'),
      //isSeller: true,
    },
  ],
};

export default sampleseller;
