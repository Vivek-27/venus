const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const User = require('./Models/UserModel');
const loginUser = require('./Controller/LoginController');
const registerUser = require('./Controller/RegisterController');

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

mongoose.set('strictQuery', true);

const connectDB = () => {};
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on PORT ${process.env.PORT}`);
    });
  });

app.use('/get', (req, res) => {
  res.send('work');
});

app.post('/register', registerUser);

app.use('/login', loginUser);
