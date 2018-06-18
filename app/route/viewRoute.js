var express = require('express');
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");

router.get('/', function(req, res) {
	var meta = {};
	meta.title = "照服秘笈";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("index.ejs",{meta: meta, version: Config.version});
});

router.get('/about', function(req, res) {
	var meta = {};
	meta.title = "關於 照服秘笈";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("about.ejs",{meta: meta, version: Config.version});
});

router.get('/calculator', function(req, res) {
	var meta = {};
	meta.title = "照服計算機";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("calculator.ejs",{meta: meta, version: Config.version});
});

router.get('/account', util.CheckLogin, function(req, res) {
	var meta = {};
	meta.title = "照服秘笈 - 我的帳號";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("account.ejs",{meta: meta, version: Config.version});
});

router.get('/profession', util.CheckLogin, function(req, res) {
	var meta = {};
	meta.title = "照服秘笈 - 專業連結";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("profession.ejs",{meta: meta, version: Config.version});
});

module.exports = router;