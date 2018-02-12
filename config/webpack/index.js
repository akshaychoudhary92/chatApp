const client = require('./config.client');
const server = require('./config.server');

module.exports = process.env.WEBPACK_ENV === 'server' ? server : client;
