module.exports = function(db, Sequelize) {

	return db.define('products', {
		name: { type: Sequelize.STRING(100), allowNull: false },
		description: Sequelize.TEXT,
		image: Sequelize.STRING(50),
		price: { type: Sequelize.DECIMAL(8,2), defaultValue: 0.00 },
		rate: { type: Sequelize.INTEGER, defaultValue: 0 }
	}, {underscored: true});

};