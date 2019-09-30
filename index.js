const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect('keys.mongoURI');

const app = express();

//returns a function and then immediately call
//the function w/ app object 
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);    