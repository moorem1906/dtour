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
    location: {
        type: pointSchema,
        required: true
    }
});

module.exports = mongoose.model('Destination', destinationSchema)
