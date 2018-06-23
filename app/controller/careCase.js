var DB = require("../db/db");
var util = require("./util");

var careCase = {};
var numPerPage = 6;

careCase.CreateCase = function(param){
	var newCase = {};
	newCase.ownerID = param.user.id;
	newCase.desc = param.data.desc;
	var problem = param.data.problem;
	newCase.problem = JSON.stringify(problem);
	newCase.D1Num = problem.D1?problem.D1.length:0;
	newCase.D2Num = problem.D2?problem.D2.length:0;
	newCase.D3Num = problem.D3?problem.D3.length:0;
	newCase.D4Num = problem.D4?problem.D4.length:0;

	DB.CareCase.create(newCase).then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		param.failFunc({"err":err});
	});
};

careCase.ViewCase = function(param){
	DB.CareCase.findOne({where: {id: param.caseID} })
	.then(function(result) {
		if(!result) param.failFunc({"err":"case not found"});
		param.succFunc(result);
	}).catch(function(err){
		param.failFunc({"err":err});
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
	includeArr.push({model: DB.User});

	var sort = [];
	sort.push(['createdAt', 'DESC']);

	var offset = numPerPage*param.fetchPage;

	DB.CareCase.findAll({where: query, include: includeArr,
		offset: offset, limit: numPerPage, order: sort})
	.then(function(result) {
		if(!result) param.failFunc({"err":"case not found"});
		param.succFunc(result);
	}).catch(function(err){
		param.failFunc({"err":err});
	});
};

careCase.EditCase = function(param){

};

careCase.DeleteCase = function(param){

};

module.exports = careCase;