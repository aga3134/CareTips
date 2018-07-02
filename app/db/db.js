var Sequelize = require('sequelize');
var Config = require('../../config');

var db = {};

db.Init = function(){
	db.sequelize = new Sequelize(Config.mysqlAuth.dbName, Config.mysqlAuth.username, Config.mysqlAuth.password,
		{host: Config.mysqlAuth.host, port: '3306', logging: false, dialect: "mysql"});
	
	db.User = db.sequelize.import("./user.js");
	db.CareCase = db.sequelize.import("./careCase.js");
	db.CaseMessage = db.sequelize.import("./caseMessage.js");
	db.CaseLike = db.sequelize.import("./caseLike.js");

	db.CaseSolution = db.sequelize.import("./caseSolution.js");
	db.SolutionMessage = db.sequelize.import("./solutionMessage.js");
	db.SolutionLike = db.sequelize.import("./solutionLike.js");

	//accociation
	db.User.hasMany(db.CareCase, {foreignKey: "ownerID"});
	db.CareCase.belongsTo(db.User, {foreignKey: "ownerID"});
	db.CareCase.hasMany(db.CaseMessage, {foreignKey: "caseID"});
	db.CareCase.hasMany(db.CaseLike, {foreignKey: "caseID"});
	db.CaseMessage.belongsTo(db.CareCase, {foreignKey: "caseID"});
	db.CaseMessage.belongsTo(db.User, {foreignKey: "ownerID"});
	db.CaseLike.belongsTo(db.User, {foreignKey: "ownerID"});
	db.CaseLike.belongsTo(db.CareCase, {foreignKey: "caseID"});

	db.CaseSolution.belongsTo(db.User, {foreignKey: "ownerID"});
	db.CaseSolution.hasMany(db.SolutionMessage, {foreignKey: "solutionID"});
	db.CaseSolution.hasMany(db.SolutionLike, {foreignKey: "solutionID"});
	db.SolutionMessage.belongsTo(db.CaseSolution, {foreignKey: "solutionID"});
	db.SolutionMessage.belongsTo(db.User, {foreignKey: "ownerID"});
	db.SolutionLike.belongsTo(db.User, {foreignKey: "ownerID"});
	db.SolutionLike.belongsTo(db.CaseSolution, {foreignKey: "solutionID"});
	
	var syncOp = {};
	syncOp.force = false;
    db.sequelize.sync(syncOp);
}

module.exports = db;
