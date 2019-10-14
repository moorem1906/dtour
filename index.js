const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());
//make use of the cookies library
app.use(
    cookieSession({
        //how long the cookie can exist before expiring
        //last for 30 days before expiring
        maxAge: 30 * 24 * 60 * 60 * 1000,

        //this key will encript the cookie 
        keys: [keys.cookieKey]
    })
);

//telling passport to use cookies to authenticate users
app.use(passport.initialize());
app.use(passport.session());

//returns a function and then immediately call the app 
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);



//lets express to function properly in production/heroku

if(process.env.NODE_ENV === 'production') {
  //Express will server up prodution assests 

  app.use(express.static('client/build')); //look into the client/build and if file exist then repond with it.
  //like main.js or main.css files

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });



  //Express will server up index.html file if rotes isn't recognizeda
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});