module.exports = function(sequelize, DataTypes) {
	return sequelize.define("user", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		provider: {
			type: DataTypes.ENUM,
			values: ['google', 'facebook', 'local'],
			alowNull: false
		},
		oauthID: DataTypes.STRING,
		signupEmail: DataTypes.STRING,
		signupName: DataTypes.STRING,
		password: DataTypes.STRING,
		status: {
			type: DataTypes.STRING,
			alowNull: false,
			defaultValue: 'valid'
		},
		authType:{
			type: DataTypes.ENUM,
			values: ['member', 'admin'],
			alowNull: false,
			defaultValue: 'member'
		},
		//public contact fields
		name: DataTypes.STRING,
		profession: DataTypes.STRING,
		county: DataTypes.STRING,
		company: DataTypes.STRING,
		contactEmail: DataTypes.STRING,
		tel: DataTypes.STRING,
		desc: DataTypes.TEXT,
		photo: DataTypes.STRING,
		icon: DataTypes.STRING,
		//statistic
		caseNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
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