var DB = require("../db/db");
var util = require("./util");

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

};

module.exports = user;