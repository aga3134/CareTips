module.exports = function(sequelize, DataTypes) {
	return sequelize.define("solutionMessage", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		solutionID: {
			type: DataTypes.UUID,
			references: { model: "caseSolutions", key: "id" },
		},
		ownerID: {
			type: DataTypes.UUID,
			references: { model: "users", key: "id" },
		},
		status: {
			type: DataTypes.STRING,
			alowNull: false,
			defaultValue: 'valid'
		},
		message: DataTypes.TEXT
	});
};