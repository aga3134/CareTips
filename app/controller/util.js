var Config = require('../../config');
var URL = require('url');
var DB = require("../db/db");

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
	var isAjax = req.xhr;
	if(isAjax) res.send({"status":"fail","message":"please login"});
	else res.redirect("/auth/login?intentUrl="+req.originalUrl);
};

util.CheckMyCase = function (req, res, next) {
	var isAjax = req.xhr;
	if(!req.user){
		if(isAjax) return res.send({"status":"fail","message":"unauthorized"});
		else return res.redirect("/?message="+encodeURIComponent('權限不足'));
	}
	DB.CareCase.findOne({where: {id: req.query.case}}).then(function(result){
		if(!result){
			if(isAjax) return res.send({"status":"fail","message":"case not found"});
			else return res.redirect("/?message="+encodeURIComponent('無此案例'));
		}
		if(result.ownerID == req.user.id){
			return next();
		}
		else{
			if(isAjax) return res.send({"status":"fail","message":"unauthorized"});
			else return res.redirect("/?message="+encodeURIComponent('權限不足'));
		}
	});
};

module.exports = util;