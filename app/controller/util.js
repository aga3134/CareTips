var Config = require('../../config');
var URL = require('url');

var util = {};

util.StoreIntentUrl = function(req, res, next){
	if(req.query.intentUrl){
		req.session.intentUrl = req.query.intentUrl;
	}
	next();
}

util.RetrieveIntentUrl = function(req){
	if(req.session.intentUrl){
		var url = req.session.intentUrl;
		var urlParse = URL.parse(url);
		delete req.session.intentUrl;
		//avoid explicit specify hostname
		if(!urlParse.hostname) return url;
		else return "/";
	}
	else return "/";
}

util.CheckLogin = function (req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/auth/login?intentUrl="+req.originalUrl);
};


module.exports = util;