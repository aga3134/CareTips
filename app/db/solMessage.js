module.exports = function(sequelize, DataTypes) {
	return sequelize.define("solMessage", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		solutionID: DataTypes.UUID,
		userID: DataTypes.UUID,
		message: DataTypes.TEXT
	});
};