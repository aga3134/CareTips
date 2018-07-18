var express = require("express");
var ejs = require("ejs");
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");
var careCase = require("../controller/careCase");

//router registers to /case
var meta = {};
meta.version = Config.version;
meta.hostname = Config.hostname;

router.get('/', util.CSRF, function(req, res) {
	var caseID = req.query.case;
	if(!caseID) res.redirect('/?message='+encodeURIComponent('無此案例'));
	meta.title = "照服秘笈 - 案例分享";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	meta.csrfToken = req.csrfToken();
	ejs.renderFile("view/content/case-view.ejs")
	.then(function(content){
		res.render("template.ejs",{meta: meta, content: content});
	});
});

router.get('/create', util.CheckLogin, util.CSRF, function(req, res) {
	meta.title = "照服秘笈 - 新增案例";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	meta.csrfToken = req.csrfToken();
	ejs.renderFile("view/content/case-editor.ejs",{action: "create"})
	.then(function(content){
		res.render("template.ejs",{meta: meta, content: content});
	});
});

router.get('/edit', util.CheckLogin, util.CSRF, function(req, res) {
	var caseID = req.query.case;
	if(!caseID) res.redirect('/?message='+encodeURIComponent('無此案例'));

	meta.title = "照服秘笈 - 修改案例";
	meta.path = req.originalUrl;
	meta.desc = Config.desc;
	meta.csrfToken = req.csrfToken();
	ejs.renderFile("view/content/case-editor.ejs",{action: "edit"})
	.then(function(content){
		res.render("template.ejs",{meta: meta, content: content});
	});
});

router.get('/random', function(req, res) {
	var param = {};
	param.succFunc = function(result){
		res.redirect("/case?case="+result.id);
	};
	param.failFunc = function(result){
		res.redirect("/?message="+encodeURIComponent("讀取隨機案例失敗"));
	}
	careCase.RandomCase(param);
});

//=================ajax api====================
router.get('/list', function(req, res) {
	var param = {};
	param.keyword = req.query.keyword;
	param.sort = req.query.sort;
	param.profession = req.query.profession;
	param.fetchPage = req.query.page || 0;
	param.ownerID = req.query.owner;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.ListCase(param);
});

router.get('/view', function(req, res) {
	if(!req.query.case) return res.status(200).json({"status":"fail","message": "case not found"});
	var param = {};
	param.caseID = req.query.case;
	param.user = req.user;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.ViewCase(param);
});

router.post('/create', util.CheckLogin, util.CSRF, function(req, res) {
	var param = {};
	param.user = req.user;
	param.data = req.body.data;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.CreateCase(param);
});

router.post('/edit', util.CheckMyCase, util.CSRF, function(req, res) {
	if(!req.query.case) return res.status(200).json({"status":"fail","message": "case not found"});

	var param = {};
	param.user = req.user;
	param.data = req.body.data;
	param.caseID = req.query.case;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.EditCase(param);
});

router.post('/delete', util.CheckLogin, util.CheckMyCase, util.CSRF, function(req, res) {
	var param = {};
	param.caseID = req.query.case;
	param.ownerID = req.user.id;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": param.caseID});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.DeleteCase(param);
});
//============================like==============================
router.post('/like/create', util.CheckLogin, util.CSRF, function(req, res) {
	var param = {};
	param.caseID = req.body.caseID;
	param.ownerID = req.user.id;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.CreateLike(param);
});

router.post('/like/delete', util.CheckLogin, util.CSRF, function(req, res) {
	var param = {};
	param.caseID = req.body.caseID;
	param.ownerID = req.user.id;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.DeleteLike(param);
});

//============================message==============================
router.post('/message/create', util.CheckLogin, util.CSRF, function(req, res) {
	var param = {};
	param.ownerID = req.user.id;
	param.message = req.body.message;
	param.caseID = req.body.caseID;
	param.caseVersion = req.body.caseVersion;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.CreateMessage(param);
});

router.get('/message/list', function(req, res) {
	var param = {};
	param.caseID = req.query.case;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.ListMessage(param);
});

router.post('/message/delete', util.CheckMyCaseMessage, util.CSRF, function(req, res) {
	var param = {};
	param.ownerID = req.user.id;
	param.caseID = req.body.case;
	param.messageID = req.body.message;

	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	careCase.DeleteMessage(param);
});

module.exports = router;