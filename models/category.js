module.exports = function(db, Sequelize) {

	var Category = db.define('categories', {
		name: Sequelize.STRING(50),
		description: Sequelize.TEXT
	});

	Category.sync({force: true}).then(function() {
		Category.create({
			name: "Category One",
			description: "This is the first category"
		});
		Category.create({
			name: "Category Two",
			description: "This is the second category"
		});
		Category.create({
			name: "Category 3",
			description: "This is the third category"
		});
	});

	return Category;

};