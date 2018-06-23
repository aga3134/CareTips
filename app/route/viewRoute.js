var express = require("express");
var ejs = require("ejs");
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");

var meta = {};
meta.version = Config.version;
meta.hostname = Config.hostname;

router.get('/', function(req, res) {
	meta.title = "照服秘笈";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	ejs.renderFile("view/content/index.ejs").then(function(content){
		res.render("template.ejs",{meta: meta, content: content});
	});
});

router.get('/about', function(req, res) {
	meta.title = "關於 照服秘笈";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	var content = "";
	res.render("template.ejs",{meta: meta, content: content});
});

router.get('/calculator', function(req, res) {
	meta.title = "照服計算機";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	ejs.renderFile("view/content/calculator.ejs").then(function(content){
		res.render("template.ejs",{meta: meta, content: content});
	});
});

router.get('/account', util.CheckLogin, function(req, res) {
	meta.title = "照服秘笈 - 我的帳號";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	ejs.renderFile("view/content/account.ejs").then(function(content){
		res.render("template.ejs",{meta: meta, content: content});
	});
});

router.get('/profession', util.CheckLogin, function(req, res) {
	meta.title = "照服秘笈 - 專業連結";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	var content = "";
	res.render("template.ejs",{meta: meta, content: content});
});

module.exports = router;