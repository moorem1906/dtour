module.exports = (req, res, next) => {
    if (!req.body.user) {
        return res.status(401).send({ error: "Please login to use Dtour"});
    }
     next();
};