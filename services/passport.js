const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});
passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',  //this uses a relative path
        //agree to trust the proxy
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                //we already havve the record
                //null = everthing went fine with no errors 
                done(null, existingUser);  
            } else {
             //we don't have a user record with this id, make a new record 
             let newUser = new User({googleId: profile.id}).save()
                .then(user => done(null, user));
        
             newUser.save((err, user) => {
                 if (err) throw err;
     
                 console.log('Successfully added ', user);
             });
            }

        })
        
    })
);