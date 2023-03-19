const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');

const { body, validationResult } = require('express-validator');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json('Wrong Password');
    } else {
      res.status(404).json('User does not exists');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = loginUser;
