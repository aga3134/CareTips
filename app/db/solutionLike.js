module.exports = function(sequelize, DataTypes) {
	return sequelize.define("solutionLike", {
		solutionID: {
			type: DataTypes.UUID,
			references: { model: "caseSolutions", key: "id" },
			primaryKey: true
		},
		ownerID: {
			type: DataTypes.UUID,
			references: { model: "users", key: "id" },
			primaryKey: true
		}
	});
};