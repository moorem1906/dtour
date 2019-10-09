const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 5,
            currency: 'usd',
            description: "Dtour Credit of $500",
            source: req.body.id
        });
        //passport to access current user
        //add credits to their property
        //send user back to the request
        req.user.credits += 5;
        const user = await req.user.save();


        res.send(user);
        console.log(charge);

    });

};