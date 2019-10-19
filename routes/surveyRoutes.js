const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredit = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTamplate');
const Survey = mongoose.model('surveys');



module.exports = app => {
    app.get('/api/surverys/thanks', (req, res) => {
        res.send('Thanks for your response! ~Dtour');
    });

    app.post('/api/survey/webhooks', (req, res) => {
            const events = _.map(req.body, (event) => {
              const pathname =  new UR(event.url).pathname;

              const  p = new Path('/api/surveys/:surveyId/:choice');
              console.log(p.test(pathname));

            });
    });
    app.post('/api/surveys', requireLogin, requireCredit, async(req, res) => {
        const { title, subject, body, recipients } = req.body;

        console.log(req.body);
        console.log(req.user);


        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()

        });

        //send email 
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try{
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
       const user = await req.user.save();

       res.send(user);
        } catch(error) {
            res.status(422).send(error); //Unprocessable entity 
        }
    });
};