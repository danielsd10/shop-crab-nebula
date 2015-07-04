module.exports = function(db, Sequelize) {

	return db.define('categories', {
		name: { type: Sequelize.STRING(50), allowNull: false },
		description: Sequelize.TEXT,
		image: Sequelize.STRING(50)
	}, {underscored: true});

};