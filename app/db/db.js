var Sequelize = require('sequelize');
var Config = require('../../config');

var db = {};

db.Init = function(){
	db.sequelize = new Sequelize(Config.mysqlAuth.dbName, Config.mysqlAuth.username, Config.mysqlAuth.password,
		{host: Config.mysqlAuth.host, port: '3306', logging: false, dialect: "mysql"});
	
	db.User = db.sequelize.import("./user.js");
	db.CareCase = db.sequelize.import("./careCase.js");

	db.User.hasMany(db.CareCase, {foreignKey: "ownerID"});
	db.CareCase.belongsTo(db.User, {foreignKey: "ownerID"});
	
	var syncOp = {};
	syncOp.force = false;
    db.sequelize.sync(syncOp);
}

module.exports = db;
