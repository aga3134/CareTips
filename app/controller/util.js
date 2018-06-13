var Config = require('../../config');

var util = {};

util.GetIntentUrl = function(req){
	if(req.query.intentUrl){
		if(req.query.intetUrl[0] == "/") return req.query.intentUrl;
		else return "/";	//avoid other hostname
	}
	else return "/";
}

util.CheckLogin = function (req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/auth/login?intentUrl="+req.originalUrl);
};


module.exports = util;