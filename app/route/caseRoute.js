var express = require('express');
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");

//router registers to /case

router.get('/', function(req, res) {
	var caseID = req.query.case;
});

router.get('/list', function(req, res) {

});

router.get('/create', util.CheckLogin, function(req, res) {
	var meta = {};
	meta.title = "照服秘笈 - 新增案例";
	meta.hostname = Config.hostname;
	meta.desc = "";
	res.render("create-case.ejs",{meta: meta, version: Config.version, user: req.user});
});

router.post('/create', util.CheckLogin, function(req, res) {
	
});

router.get('/edit', util.CheckLogin, function(req, res) {
	
});

router.post('/edit', util.CheckLogin, function(req, res) {
	
});

router.get('/delete', util.CheckLogin, function(req, res) {

});


module.exports = router;