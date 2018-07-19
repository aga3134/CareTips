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