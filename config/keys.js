// What set of credentials to us
if (process.env.NODE_ENV === 'production') {
//if we are in production, return the prod keys
module.exports = require('./prod');
} else {
// if we are in development, return the dev keys
module.exports = require('./dev');
}