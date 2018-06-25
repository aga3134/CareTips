module.exports = function(sequelize, DataTypes) {
	return sequelize.define("solMessage", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		solutionID: {
			type: DataTypes.UUID,
			references: { model: "careSolutions", key: "id" },
		},
		ownerID: {
			type: DataTypes.UUID,
			references: { model: "users", key: "id" },
		},
		message: DataTypes.TEXT
	});
};