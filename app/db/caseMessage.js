module.exports = function(sequelize, DataTypes) {
	return sequelize.define("caseMessage", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		caseID: {
			type: DataTypes.UUID,
			references: { model: "careCases", key: "id" },
		},
		caseVersion: DataTypes.INTEGER,
		userID: {
			type: DataTypes.UUID,
			references: { model: "users", key: "id" },
		},
		message: DataTypes.TEXT
	});
};