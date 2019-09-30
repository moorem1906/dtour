const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

//make use of the cookies library
app.use(
    cookieSession({
        //how long the cookie can exist before expiring
        //last for 30 days before expiring
        maxAge: 30 * 24 * 60 * 60 * 1000,

        //this key will encript the cookie 
        keys: []
    })
);

//returns a function and then immediately call the app 
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});