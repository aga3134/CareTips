var express = require("express");
var ejs = require("ejs");
var router = express.Router();
var Config = require("../../config.json");
var util = require("../controller/util");
var caseSolution = require("../controller/caseSolution");

//router registers to /solution
//=================ajax api====================
router.get('/list', function(req, res) {
	var param = {};
	param.keyword = req.query.keyword;
	param.sort = req.query.sort;
	param.profession = req.query.profession;
	param.fetchPage = req.query.page || 0;
	param.ownerID = req.query.owner;
	param.caseID = req.query.case;
	param.caseVersion = req.query.caseVersion;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.ListSolution(param);
});

router.get('/view', function(req, res) {
	if(!req.query.solution) return res.status(200).json({"status":"fail","message": "solution not found"});
	var param = {};
	param.solutionID = req.query.solution;
	param.user = req.user;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.ViewSolution(param);
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
	caseSolution.CreateSolution(param);
});

router.post('/edit', util.CheckMySolution, util.CSRF, function(req, res) {
	var param = {};
	param.user = req.user;
	param.caseID = req.body.data.caseID;
	param.caseVersion = req.body.data.caseVersion;
	param.info = req.body.data.info;
	param.solutionID = req.query.solution;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.EditSolution(param);
});

router.post('/delete', util.CheckMySolution, util.CSRF, function(req, res){
	var param = {};
	param.solutionID = req.query.solution;
	param.caseID = req.query.case;
	param.ownerID = req.user.id;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.DeleteSolution(param);
});

//============================like==============================
router.post('/like/create', util.CheckLogin, util.CSRF, function(req, res) {
	var param = {};
	param.solutionID = req.body.solutionID;
	param.ownerID = req.user.id;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.CreateLike(param);
});

router.post('/like/delete', util.CheckLogin, util.CSRF, function(req, res) {
	var param = {};
	param.solutionID = req.body.solutionID;
	param.ownerID = req.user.id;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result.id});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.DeleteLike(param);
});

//============================message==============================
router.post('/message/create', util.CheckLogin, util.CSRF, function(req, res) {
	var param = {};
	param.ownerID = req.user.id;
	param.message = req.body.message;
	param.solutionID = req.body.solutionID;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.CreateMessage(param);
});

router.get('/message/list', function(req, res) {
	var param = {};
	param.solutionID = req.query.solution;
	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.ListMessage(param);
});

router.post('/message/delete', util.CheckMySolutionMessage, util.CSRF, function(req, res) {
	var param = {};
	param.ownerID = req.user.id;
	param.solutionID = req.body.solution;
	param.messageID = req.body.message;

	param.succFunc = function(result){
		res.status(200).json({"status":"ok","data": result});
	};
	param.failFunc = function(result){
		res.status(200).json({"status": "fail","message": result.err});
	};
	caseSolution.DeleteMessage(param);
});

module.exports = router;