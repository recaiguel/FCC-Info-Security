const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 3030;

const hidePoweredBy = require("hide-powered-by");










































module.exports = app;
app.use(hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
const ninetyDaysInSeconds = 90*24*60*60;
app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}));
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🔥🌟FCC Info Security started on port ${port}`);
});
