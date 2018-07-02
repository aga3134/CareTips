module.exports = function(sequelize, DataTypes) {
	return sequelize.define("caseSolution", {
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
		info: DataTypes.TEXT,	//json with solution list
		status: {
			type: DataTypes.STRING,
			defaultValue: 'valid'
		},
		//statistic
		msgNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		likeNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		viewNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		}
	});
};