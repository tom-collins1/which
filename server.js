require('dotenv').config();

let express = require('express');
let app = express();
const route = require('./app/routes/route');
let bodyParser = require('body-parser');
let port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req, res) => res.send("<h2>Welcome To Forensics API Specification!</h2><p>The following endpoints are accesible to you:</p><p>GET /api/:email/directions/:direction</p><p><em>Returns evidence found from new location and updated map</em></p><p>GET /api/:email/location/:x/:y</p><p><em>Returns whether kittens have been located correctly</em></p><p><em>Max 5 attempts</em></p><p>****For testing puposes:</p><p>GET /api/:email/gridReset</p><p><em>Resets your map and position to [0,0]</em></p><p>GET /api/:email/cheat</p><p><em>Returns the position of the kittens</em></p><p>GET /api/:email/gps</p><p><em>Returns your gps</em></p>"));
app.get("/health", (req, res) => res.send(200));
app.use(route)

app.listen(port);
console.log("Listening on port " + port);

module.exports = app;