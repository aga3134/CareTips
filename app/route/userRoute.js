var express = require("express");
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");
var upload = require("../controller/upload");
var User = require("../controller/user");
var ejs = require("ejs");

//router registers to /user
var meta = {};
meta.version = Config.version;
meta.hostname = Config.hostname;

router.get('/', util.CheckLogin, function(req, res) {
	var userID = req.query.user;

	meta.title = "照服秘笈";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	ejs.renderFile("view/content/user.ejs").then(function(content){
		res.render("template.ejs",{meta: meta, content: content});
	});
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
		user.companyUrl = req.user.companyUrl;
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
router.get('/info', util.CheckLogin, function(req, res) {
	var param = {};
	param.userID = req.query.user;
	param.succFunc = function(result){
		res.status(200).json({"status": "ok", "data": result});
	};
	param.failFunc = function(result){
		console.log(result);
		res.status(200).json({status: "fail", message: result.err});
	};
	User.GetUserInfo(param);
});


router.post('/edit', util.CheckLogin, function(req, res) {
	var param = {};
	param.userID = req.user.id;
	param.body = req.body.data;
	param.succFunc = function(result){
		res.status(200).json({"status": "ok", "data": result});
	};
	param.failFunc = function(result){
		console.log(result);
		res.status(200).json({status: "fail", message: result.err});
	};
	User.EditUserInfo(param);
});


router.post('/upload-image', util.CheckLogin, upload.UploadImageToMem, function(req, res){
	var param = {};
	var ext = upload.GetImageType(req.file);
	param.buffer = req.file.buffer;
	param.newPath = "/static/upload/user/"+req.user.id+"/";
	param.newName = "photo."+ext;
	param.thumb = {name:"icon."+ext,w:64,h:64};
	param.succFunc = function(result){
		var photoInfo = {};
		photoInfo.userID = req.user.id;
		photoInfo.photo = result.newName;
		photoInfo.icon = result.thumbName;
		photoInfo.succFunc = function(result){
			res.status(200).json({status: "ok", "data": result});
		};
		photoInfo.failFunc = function(result){
			console.log(result);
			res.status(200).json({status: "fail", message: result.err});
		};
		User.ChangeUserPhoto(photoInfo);
	};
	param.failFunc = function(result){
		console.log(result);
		res.status(200).json({status: "fail", message: result.err});
	}
	upload.SaveImage(param);
});

router.get('/list', util.CheckLogin, function(req, res) {
	var param = {};
	param.keyword = req.query.keyword;
	param.profession = req.query.profession;
	param.county = req.query.county;
	param.sort = req.query.sort;
	param.fetchPage = req.query.page || 0;

	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	User.ListUser(param);
});

module.exports = router;