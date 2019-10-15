const mongoose = require('mongoose');
const keys = require('../config/keys');
let DestinationModel = require('../models/Destination');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    getPointsWithinRadius: function(latitude, longitude, radius) {
        console.log('latitude', latitude);
        console.log('longitude', longitude);
        console.log('radius', radius);
        return new Promise((resolve, reject) => {
            DestinationModel.find({
                location: {
                    $geoWithin: {
                        $centerSphere: [[latitude, longitude], radius]
                    }
                }
            }).then(docs => {
                console.log('docs', docs);
                resolve(JSON.stringify(docs))
            });
        });
    }
};


// As an example, this will yield ONE result because it is within the radius.
// getPointsWithinRadius(-104.9903, 39.7392, .01)