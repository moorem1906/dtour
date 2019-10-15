const requireLogin = require('../middlewares/requireLogin');
const destinations = require('../services/db')

module.exports = app => {
    // This will look up destinations within a radius of a lat/long point.
    app.post('/api/destinations', requireLogin, async(req, res) => {
        const {latitude, longitude, radius} = req.body;

        return destinations.getPointsWithinRadius(latitude, longitude, radius).then(dests => {
            res.status(200).send(dests);
        })
    });
};