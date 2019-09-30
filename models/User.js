const mongoose = require('mongoose');
//pull one property off of the mongoose library -
// also added ES destructing
const { Schema } = mongoose;

//this object describes all the different properties
const userSchema  = new Schema({
 googleId: String
});
//this is for the collection of users

module.exports = mongoose.model('users', userSchema);