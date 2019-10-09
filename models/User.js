const mongoose = require('mongoose');
//pull one property off of the mongoose library -
// also added ES destructing
const { Schema } = mongoose;

//this object describes all the different properties
const userSchema  = new Schema({
 googleId: String,
 credits: { type: Number, default: 0} //credits property with a type of number and defaulting at 0.     
});
//this is for the collection of users

module.exports = mongoose.model('users', userSchema);