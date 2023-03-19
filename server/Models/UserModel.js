const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  username: {
    type: String
  }
});

module.exports = User = mongoose.model('User', userSchema);
