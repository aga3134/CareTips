var DB = require("../db/db");
var util = require("./util");

var careCase = {};
var numPerPage = 6;

careCase.CreateCase = function(param){
	var newCase = {};
	newCase.ownerID = param.user.id;
	newCase.desc = param.data.desc;
	
	var info = {};
	info.version = 1;
	info.desc = param.data.desc;
	info.problem = param.data.problem;
	newCase.info = JSON.stringify([info]);

	var problem = info.problem;
	newCase.D1Num = problem.D1?problem.D1.length:0;
	newCase.D2Num = problem.D2?problem.D2.length:0;
	newCase.D3Num = problem.D3?problem.D3.length:0;
	newCase.D4Num = problem.D4?problem.D4.length:0;

	DB.CareCase.create(newCase).then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"create case fail"});
	});
};

careCase.ViewCase = function(param){
	var includeArr = [];
	includeArr.push({model: DB.User, attributes: ["id","name","icon","profession","desc"]});

	DB.CareCase.findOne({where: {id: param.caseID},include: includeArr})
	.then(function(result) {
		if(!result) return param.failFunc({"err":"case not found"});
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"find case fail"});
	});
};

careCase.ListCase = function(param){
	var query = {};
	if(param.ownerID) query.ownerID = param.ownerID;
	if(param.keyword){
		var pattern = '%'+param.keyword+'%';
		query.$or.push({'desc': {$like: pattern}});
		query.$or.push({'problem': {$like: pattern}});
	}
	var includeArr = [];
	includeArr.push({model: DB.User, attributes: ["id","name","icon","profession"]});

	var sort = [];
	sort.push(['updatedAt', 'DESC']);

	var offset = numPerPage*param.fetchPage;

	DB.CareCase.findAll({where: query, include: includeArr,
		offset: offset, limit: numPerPage, order: sort})
	.then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"list case fail"});
	});
};

careCase.EditCase = function(param){
	var caseID = param.caseID;
	var ownerID = param.user.id;
	var editCase = {};
	editCase.id = caseID;
	editCase.ownerID = param.user.id;
	editCase.desc = param.data.desc;
	var problem = param.data.problem;
	var info = {};
	info.desc = param.data.desc;
	info.problem = problem;
	editCase.D1Num = problem.D1?problem.D1.length:0;
	editCase.D2Num = problem.D2?problem.D2.length:0;
	editCase.D3Num = problem.D3?problem.D3.length:0;
	editCase.D4Num = problem.D4?problem.D4.length:0;

	DB.CareCase.findOne({where: {id: caseID, ownerID: ownerID}})
	.then(function(result) {
		if(!result) return param.failFunc({"err":"case not found"});
		
		var infoList = JSON.parse(result.info);
		info.version = infoList[infoList.length-1].version+1;
		infoList.push(info);
		editCase.info = JSON.stringify(infoList);
		//create a new case for edited version
		DB.CareCase.update(editCase, {where: {id:caseID, ownerID:ownerID}})
		.then(function(result) {
			param.succFunc({id: caseID});
		}).catch(function(err){
			console.log(err);
			param.failFunc({"err":"update case fail"});
		});

	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"find case fail"});
	});
};

careCase.DeleteCase = function(param){
	DB.CareCase.destroy({where: {id: param.caseID, ownerID: param.ownerID}})
	.then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"delete case fail"});
	});
};

//============================message==============================
careCase.CreateMessage = function(param){
	var newMsg = {};
	newMsg.caseID = param.caseID;
	newMsg.caseVersion = param.caseVersion;
	newMsg.userID = param.userID;
	newMsg.message = param.message;

	DB.CaseMessage.create(newMsg).then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"add case message fail"});
	});
};

careCase.ListMessage = function(param){
	var query = {};
	query.caseID = param.caseID;
	console.log(query);

	var includeArr = [];
	includeArr.push({model: DB.User, attributes: ["id","name","icon","profession"]});

	var sort = [];
	sort.push(['createdAt', 'DESC']);

	DB.CaseMessage.findAll({where: query, include: includeArr, order: sort})
	.then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"list message fail"});
	});
};

module.exports = careCase;