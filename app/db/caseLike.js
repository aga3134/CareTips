module.exports = function(sequelize, DataTypes) {
	return sequelize.define("caseLike", {
		caseID: {
			type: DataTypes.UUID,
			references: { model: "careCases", key: "id" },
			primaryKey: true
		},
		ownerID: {
			type: DataTypes.UUID,
			references: { model: "users", key: "id" },
			primaryKey: true
		}
	});
};