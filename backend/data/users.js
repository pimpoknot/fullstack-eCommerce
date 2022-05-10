import bcrypt from "bcryptjs";

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Smilga',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'Marcos',
    email: 'marcos@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  }
]

export default users;