module.exports = function(sequelize, DataTypes) {
	return sequelize.define("caseSolution", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		caseID: DataTypes.UUID,
		caseVersion: type: DataTypes.INTEGER,
		userID: DataTypes.UUID,
		info: DataTypes.TEXT,	//json with solution list
		//statistic
		msgNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		likeNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		dislikeNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		}
	});
};