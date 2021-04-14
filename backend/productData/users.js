import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@pizzahut.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ami Doe',
    email: 'ami@pizzahut.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tumi Doe',
    email: 'tumi@pizzahut.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
