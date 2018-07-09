var Config = require('../../config');
var URL = require('url');
var DB = require("../db/db");

var util = {};

util.StoreIntentUrl = function(req, res, next){
	if(req.query.intentUrl){
		req.session.intentUrl = decodeURIComponent(req.query.intentUrl);
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
};

util.RandomInt = function(max) {
	return Math.floor(Math.random() * Math.floor(max));
};

util.CheckLogin = function (req, res, next) {
	if (req.isAuthenticated()) return next();
	var isAjax = req.xhr;
	if(isAjax) res.send({"status":"fail","message":"please login"});
	else res.redirect("/auth/login?intentUrl="+encodeURIComponent(req.originalUrl));
};

util.FailRedirect = function(req, res, redirect, message){
	var isAjax = req.xhr;
	if(isAjax) return res.send({"status":"fail","message":message});
	else return res.redirect(redirect+"?message="+encodeURIComponent(message));
};

util.CheckMyCase = function (req, res, next) {
	if(!req.user) return util.FailRedirect(req,res,"/","權限不足");
	var caseID = req.query.case || req.body.case;

	DB.CareCase.findOne({where: {id: caseID}}).then(function(result){
		if(!result) return util.FailRedirect(req,res,"/","無此案例");

		if(result.ownerID == req.user.id){
			return next();
		}
		else return util.FailRedirect(req,res,"/","權限不足");
	});
};

util.CheckMyCaseMessage = function (req, res, next) {
	if(!req.user) return util.FailRedirect(req,res,"/","權限不足");

	var messageID = req.query.message || req.body.message;

	DB.CaseMessage.findOne({where: {id: messageID}}).then(function(result){
		if(!result) return util.FailRedirect(req,res,"/","無此留言");

		if(result.ownerID == req.user.id){
			return next();
		}
		else return util.FailRedirect(req,res,"/","權限不足");
	});
};

util.CheckMySolution = function (req, res, next) {
	if(!req.user) return util.FailRedirect(req,res,"/","權限不足");
	var solutionID = req.query.solution || req.body.solution;

	DB.CaseSolution.findOne({where: {id: solutionID}}).then(function(result){
		if(!result) return util.FailRedirect(req,res,"/","無此解方");

		if(result.ownerID == req.user.id){
			return next();
		}
		else return util.FailRedirect(req,res,"/","權限不足");
	});
};

util.CheckMySolutionMessage = function (req, res, next) {
	if(!req.user) return util.FailRedirect(req,res,"/","權限不足");

	var messageID = req.query.message || req.body.message;

	DB.SolutionMessage.findOne({where: {id: messageID}}).then(function(result){
		if(!result) return util.FailRedirect(req,res,"/","無此留言");

		if(result.ownerID == req.user.id){
			return next();
		}
		else return util.FailRedirect(req,res,"/","權限不足");
	});
};

module.exports = util;