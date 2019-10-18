const mongoose = require('mongoose');
const keys = require('../config/keys');
let DestinationModel = require('../models/Destination');
let TripModel = require('../models/Trip')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    getPointsWithinRadius: function(latitude, longitude, radius, low_price, high_price) {
        return new Promise((resolve, reject) => {
            DestinationModel.find({
                location: {
                    $geoWithin: {
                        $centerSphere: [[latitude, longitude], radius]
                    }
                },
                price: {
                    $gte: low_price,
                    $lte: high_price
                }

            }).then(docs => {
                resolve(docs)
            }).catch(exc => {
                console.log('ERROR', exc)
                reject('System Error')
            });
        });
    },
    bookTrip: function(user_id, destinations, total_price) {
        return new Promise((resolve, reject)  => {
            let trip = new TripModel({
                user_id: user_id,
                destinations: destinations,
                total_price: total_price
            });

            trip.save().then(doc => {
                resolve({status: 'success'})
            }).catch(e  => {
                reject('System Error')
            });
        })
    }
};