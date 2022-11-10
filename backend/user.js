import bcrypt from 'bcryptjs';

const sampleuser = {
  users: [
    {
      name: 'Remo',
      email: 'remoramu12@gmail.com',
      password: bcrypt.hashSync('202122'),
      isAdmin: true,
    },
    {
      name: 'Ram',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
};

export default sampleuser;
