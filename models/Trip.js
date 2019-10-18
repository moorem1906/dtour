const mongoose = require('mongoose');
const { Schema } = mongoose;

const pointSchema = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const destinationSchema = new Schema({
    name: String,
    price: Number,
    location: {
        type: pointSchema,
        required: true
    }
});

const tripSchema = new Schema({
    user_id: String,
    total_price: Number,
    destinations: [ {
        type: destinationSchema
    } ]

});

module.exports = mongoose.model('Trip', tripSchema)
