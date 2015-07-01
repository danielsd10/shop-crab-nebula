module.exports = function(db, Sequelize) {

	var Category = db.define('categories', {
		name: { type: Sequelize.STRING(50), allowNull: false },
		description: Sequelize.TEXT,
		image: Sequelize.STRING(50)
	});

	//Category.drop(); // eliminar la tabla
	Category.sync(); // crear la tabla

	return Category;

};