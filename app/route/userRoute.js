var express = require("express");
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");
var upload = require("../controller/upload");
var DB = require("../db/db");

//router registers to /user

router.get('/', util.CheckLogin, function(req, res) {
	var userID = req.query.user;
	if(req.user.id == userID) res.redirect("/account");

});

//=================ajax api====================

//自己的帳號資料
router.get('/me', function(req, res) {
	if(req.user){	//不直接傳req.user，因為有敏感資訊
		var user = {};
		user.id = req.user.id;
		user.name = req.user.name;
		user.profession = req.user.profession;
		user.county = req.user.county;
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

//其他人的帳號資料
router.get('/info', function(req, res) {
	if(!req.user) return res.status(200).json({"message": "please login"});

	var userID = req.query.user;
});


router.post('/edit', util.CheckLogin, function(req, res) {
	var modify = {};
	modify.name = req.body.data.name;
	modify.profession = req.body.data.profession;
	modify.county = req.body.data.county;
	modify.company = req.body.data.company;
	modify.contactEmail = req.body.data.contactEmail;
	modify.tel = req.body.data.tel;
	modify.desc = req.body.data.desc;

	DB.User.update(modify, {where: {"id": req.user.id}}).then(function() {
	    res.status(200).json({"status": "ok"});
	});
});


router.post('/upload-image', util.CheckLogin, upload.UploadImageToMem, function(req, res){
	var param = {};
	var ext = upload.GetImageType(req.file);
	param.buffer = req.file.buffer;
	param.newPath = "/static/upload/user/"+req.user.id+"/";
	param.newName = "photo."+ext;
	param.thumb = {name:"icon."+ext,w:64,h:64};
	param.succFunc = function(result){
		var randomStr = "?rand="+Math.floor(Math.random()*100); 
		var modify = {};
		modify.photo = result.newName+randomStr;
		modify.icon = result.thumbName+randomStr;
		DB.User.update(modify, {where: {"id": req.user.id}}).then(function() {
			res.status(200).json({status: "ok", photo: modify.photo, icon:modify.icon});
		});
	};
	param.failFunc = function(result){
		console.log(result);
		res.status(200).json({status: "fail", message: result.err});
	}
	upload.SaveImage(param);
});

router.get('/list', util.CheckLogin, function(req, res) {

});

module.exports = router;