const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 3030;

const hidePoweredBy = require("hide-powered-by");


// // For testing purposes only
// app.use(express.urlencoded({action: true}));
// app.post('/test', (req, res) => {
//   res.json('input received: ' + req.body.input);
// });









































module.exports = app;
app.use(hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter());
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
