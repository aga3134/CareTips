module.exports = function(sequelize, DataTypes) {
	return sequelize.define("careCase", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		version: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
			primaryKey: true
		},
		ownerID: {
			type: DataTypes.UUID,
			references: { model: "users", key: "id" },
		},
		desc: DataTypes.TEXT,
		problem: DataTypes.TEXT,	//json problem list
		//statistic
		D1Num: DataTypes.INTEGER,
		D2Num: DataTypes.INTEGER,
		D3Num:  DataTypes.INTEGER,
		D4Num: DataTypes.INTEGER,
		solNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
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