module.exports = function(sequelize, DataTypes) {
	return sequelize.define("caseMessage", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		caseID: DataTypes.UUID,
		caseVersion: type: DataTypes.INTEGER,
		userID: DataTypes.UUID,
		message: DataTypes.TEXT
	});
};