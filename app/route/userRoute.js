var express = require('express');
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");

//router registers to /user

router.get('/', util.CheckLogin, function(req, res) {
	var userID = req.query.user;
});

router.post('/edit', util.CheckLogin, function(req, res) {
	
});

router.get('/list', util.CheckLogin, function(req, res) {

});

//=================ajax api====================

router.get('/info', function(req, res) {
	if(req.user){	//不直接傳req.user，因為有敏感資訊
		var user = {};
		user.id = req.user.id;
		user.name = req.user.name;
		user.profession = req.user.profession;
		user.company = req.user.company;
		user.contactEmail = req.user.contactEmail;
		user.tel = req.user.tel;
		user.desc = req.user.desc;
		user.photo = req.user.photo;
		user.icon = req.user.icon;
		res.status(200).json({user: user});
	}
	else res.status(200).json({"message": "please login"});
});

module.exports = router;