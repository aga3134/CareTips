var DB = require("../db/db");
var util = require("./util");
var solOption = require("../../static/solution.json");

var user = {};
var numPerPage = 6;

user.GetUserInfo = function(param){
	var attr = ["id","name","profession","county","company","contactEmail",
		"tel","desc","photo","icon","caseNum","solNum","msgNum"];
	DB.User.findOne({where: {id: param.userID}, attributes:attr})
	.then(function(result) {
		if(!result) return param.failFunc({"err":"user not found"});
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"find user fail"});
	});
};

user.EditUserInfo = function(param){
	var modify = {};
	modify.name = param.body.name;
	modify.profession = param.body.profession;
	modify.county = param.body.county;
	modify.company = param.body.company;
	modify.contactEmail = param.body.contactEmail;
	modify.tel = param.body.tel;
	modify.desc = param.body.desc;

	DB.User.update(modify, {where: {"id": param.userID}}).then(function() {
	    param.succFunc(modify);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"edit user fail"});
	});
};

user.ChangeUserPhoto = function(param){
	var randomStr = "?rand="+Math.floor(Math.random()*100);
	var modify = {};
	modify.photo = param.photo+randomStr;
	modify.icon = param.icon+randomStr;
	DB.User.update(modify, {where: {"id": param.userID}}).then(function() {
		param.succFunc(modify);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"change user photo fail"});
	});
};

user.ListUser = function(param){
	var query = {};
	if(param.keyword){
		var pattern = '%'+param.keyword+'%';
		query.$or = [];
		query.$or.push({'desc': {$like: pattern}});
		query.$or.push({'company': {$like: pattern}});
		query.$or.push({'name': {$like: pattern}});
	}
	if(param.profession){
		if(param.profession == "其他"){
			query.profession = {[DB.Op.notIn]: solOption.profession};
		}
		else query.profession = param.profession;
	}
	if(param.county){
		query.county = param.county;
	}
	var sort = [];
	if(param.sort){
		switch(param.sort){
			case "caseNum": sort.push(['caseNum', 'DESC']); break;
			case "solNum": sort.push(['solNum', 'DESC']); break;
			case "newest": sort.push(['createdAt', 'DESC']); break;
			case "oldest": sort.push(['createdAt']); break;
			default: sort.push(['caseNum', 'DESC']); break;
		}
	}
	var attr = ["id","name","profession","county","company","contactEmail",
		"tel","desc","photo","icon","caseNum","solNum","msgNum"];

	var offset = numPerPage*param.fetchPage;

	DB.User.findAll({where: query, attributes: attr,
		offset: offset, limit: numPerPage, order: sort})
	.then(function(result) {
		param.succFunc(result);
	}).catch(function(err){
		console.log(err);
		param.failFunc({"err":"list user fail"});
	});
};

module.exports = user;