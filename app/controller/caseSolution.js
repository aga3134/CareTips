var DB = require("../db/db");
var util = require("./util");

var caseSolution = {};
var numPerPage = 4;

caseSolution.CreateSolution = function(param){
	var newSolution = {};
	newSolution.ownerID = param.user.id;
	newSolution.caseID = param.data.caseID;
	newSolution.caseVersion = param.data.caseVersion;
	newSolution.info = param.data.info;

	DB.CaseSolution.create(newSolution).then(function(result) {
		DB.User.increment('solNum', {where: {id: newSolution.ownerID}});
		DB.CareCase.increment('solNum', {where: {id: newSolution.caseID}});
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"create solution fail"});
	});
};

caseSolution.ViewSolution = function(param){
	var includeArr = [];
	includeArr.push({model: DB.User, attributes: ["id","name","icon","profession","desc"]});

	DB.CaseSolution.findOne({where: {id: param.solutionID},include: includeArr})
	.then(function(result) {
		if(!result) return param.failFunc({"err":"solution not found"});
		result.increment("viewNum");
		if(param.user){
			DB.SolutionLike.findOne({where: {solutionID: param.solutionID, ownerID: param.user.id}})
			.then(function(like){
				if(like) result.dataValues.liked = true;
				param.succFunc(result);
			});
		}
		else param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"find case fail"});
	});
};

caseSolution.ListSolution = function(param){
	var query = {};
	if(param.caseID) query.caseID = param.caseID;
	if(param.ownerID) query.ownerID = param.ownerID;
	if(param.keyword){
		var pattern = '%'+param.keyword+'%';
		query.$or.push({'info': {$like: pattern}});
	}
	var includeArr = [];
	includeArr.push({model: DB.User, attributes: ["id","name","icon","profession"]});

	var sort = [];
	sort.push(['createdAt', 'DESC']);

	var offset = numPerPage*param.fetchPage;

	DB.CaseSolution.findAll({where: query, include: includeArr,
		offset: offset, limit: numPerPage, order: sort})
	.then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"list case fail"});
	});
};

caseSolution.EditSolution = function(param){
	var editSolution = {};
	editSolution.id = param.solutionID;
	editSolution.caseID = param.caseID;
	editSolution.caseVersion = param.caseVersion;
	editSolution.ownerID = param.user.id;
	editSolution.info = param.info;

	DB.CaseSolution.update(editSolution, {where: {id:param.solutionID, ownerID:param.user.id}})
	.then(function(result) {
		param.succFunc({id: param.solutionID});
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"update solution fail"});
	});
};

caseSolution.DeleteSolution = function(param){
	DB.CaseSolution.findOne({where: {id: param.solutionID}, ownerID: param.ownerID})
	.then(function(caseSolution) {
		if(caseSolution.msgNum > 0) return param.failFunc({"err":"msgNum not zero"});
		if(caseSolution.likeNum > 0) return param.failFunc({"err":"likeNum not zero"});

		DB.CaseSolution.destroy({where: {id: param.solutionID, caseID: param.caseID, ownerID: param.ownerID}})
		.then(function(result) {
			DB.User.decrement('solNum', {where: {id: param.ownerID}});
			DB.CareCase.decrement('solNum', {where: {id: param.caseID}});
			param.succFunc(result);
		}).catch(function(err){
			console.log(err);
			param.failFunc({"err":"delete solution fail"});
		});
	});
};

//============================message==============================
caseSolution.CreateMessage = function(param){
	var newMsg = {};
	newMsg.solutionID = param.solutionID;
	newMsg.ownerID = param.ownerID;
	newMsg.message = param.message;

	DB.SolutionMessage.create(newMsg).then(function(result) {
		DB.CaseSolution.increment('msgNum', {where: {id: param.solutionID}});
		DB.User.increment('msgNum', {where: {id: param.ownerID}});
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"add solution message fail"});
	});
};

caseSolution.ListMessage = function(param){
	var query = {};
	query.solutionID = param.solutionID;

	var includeArr = [];
	includeArr.push({model: DB.User, attributes: ["id","name","icon","profession"]});

	var sort = [];
	sort.push(['createdAt', 'DESC']);

	DB.SolutionMessage.findAll({where: query, include: includeArr, order: sort})
	.then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"list solution message fail"});
	});
};

caseSolution.DeleteMessage = function(param){
	DB.SolutionMessage.destroy({where: {id: param.messageID, ownerID: param.ownerID}})
	.then(function(result) {
		DB.CaseSolution.decrement('msgNum', {where: {id: param.solutionID}});
		DB.User.decrement('msgNum', {where: {id: param.ownerID}});
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"delete solution message fail"});
	});
};

//============================like==============================
caseSolution.CreateLike = function(param){
	DB.SolutionLike.create({solutionID: param.solutionID, ownerID: param.ownerID})
	.then(function(result) {
		DB.CaseSolution.increment('likeNum', {where: {id: param.solutionID}});
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"create solution like fail"});
	});
};

caseSolution.DeleteLike = function(param){
	DB.SolutionLike.destroy({where: {solutionID: param.solutionID, ownerID: param.ownerID}})
	.then(function(result) {
		DB.CaseSolution.decrement('likeNum', {where: {id: param.solutionID}});
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"delete solution like fail"});
	});
};

module.exports = caseSolution;