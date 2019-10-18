const requireLogin = require('../middlewares/requireLogin');
const db = require('../services/db')

module.exports = app => {
    // This will look up destinations within a radius of a lat/long point.
    app.post('/api/trip/book', async(req, res) => {
        let user_id = req.body.user_id;
        let destinations = req.body.destinations;
        let total_price = req.body.total_price;

        console.log('user_id', user_id);
        console.log('total_price', total_price)

        return db.bookTrip(user_id, destinations, total_price).then(resp => {
            res.status(200).json({status: 'success'});
        }).catch(exc => {
            res.status(500).json({error: 'SystemError'})
        })
    });
};