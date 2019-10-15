const mongoose = require('mongoose');
const keys = require('../config/keys');
let DestinationModel = require('../models/Destination');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    getPointsWithinRadius: function(latitude, longitude, radius) {
        return new Promise((resolve, reject) => {
            DestinationModel.find({
                location: {
                    $geoWithin: {
                        $centerSphere: [[latitude, longitude], radius]
                    }
                }
            }).then(docs => {
                resolve(docs)
            }).catch(exc => {
                console.log('ERROR', exc)
                reject('System Error')
            });
        });
    }
};