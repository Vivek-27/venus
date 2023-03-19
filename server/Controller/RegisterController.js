const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { name, email, password, username } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  console.log(req.body);
  const user = User({
    name,
    email,
    password: hashedPass,
    username
  });

  try {
    await user.save();
    res.send(user.data);
    res.status(200);
  } catch (error) {
    res.send(error);
  }
};

module.exports = registerUser;
