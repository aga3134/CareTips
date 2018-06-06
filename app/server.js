var express = require("express");
var ejs = require("ejs");
var Config = require("../config.json");

var viewRoute = require('./route/viewRoute');

var rootDir = __dirname+"/../";

var app = express();
app.port = Config.serverPort || 8001;
app.host = "0.0.0.0";
app.set('view engine', 'ejs');
app.set("views", rootDir + "/view");
app.use('/static',express.static(rootDir + '/static'));
app.use('/dist',express.static(rootDir + '/dist'));

app.use('/', viewRoute);

app.listen(app.port, app.host);
console.log("Server started");

