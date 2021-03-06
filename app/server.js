var express = require("express");
var ejs = require("ejs");
var passport = require("passport");
var session = require("express-session");
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require("body-parser");
var fs = require('fs-extra');
var path = require('path');
var morgan = require('morgan');
var rfs = require('rotating-file-stream');


var viewRoute = require("./route/viewRoute");
var authRoute = require("./route/authRoute");
var userRoute = require("./route/userRoute");
var caseRoute = require("./route/caseRoute");
var solutionRoute = require("./route/solutionRoute");
var Config = require("../config.json");
var DB = require("./db/db");

DB.Init();

//setup view & static file
var rootDir = __dirname+"/../";
var app = express();
app.port = Config.serverPort || 8001;
app.host = "0.0.0.0";
app.set('view engine', 'ejs');
app.set("views", rootDir + "/view");
app.use('/static',express.static(rootDir + '/static'));
app.use('/dist',express.static(rootDir + '/dist'));

//create one log file per day
var logDirectory = path.join(rootDir, 'log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = rfs('access.log', {
    interval: '1d',
    path: logDirectory
});
app.use(morgan('short',{stream: accessLogStream}));

//setup auth
var options = {
    host: 'localhost',
    port: 3306,
    user: Config.mysqlAuth.username,
    password: Config.mysqlAuth.password,
    database: Config.mysqlAuth.dbName
};
var sessionStore = new MySQLStore(options);

app.use(session({
    secret: Config.session.secret,
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: { path: '/', httpOnly: true,maxAge: 1000*60*60*24*100}	//session保留100天
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


//setup route
app.use("/", viewRoute);
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/case", caseRoute);
app.use("/solution", solutionRoute);

app.listen(app.port, app.host);
console.log("Server started");

