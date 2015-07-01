var express = require('express');
var router = express.Router();
var models = require('../models');

/* Rutas de administración */

/* página principal */
router.get('/', function(req, res, next) {
	res.render('admin/index');
});

/* categorías */

// listar categorías
router.get('/categories', function(req, res, next) {
	var Category = models.Category;
	Category.all().then(function(categories){
		res.render('admin/categories', { categories: categories });
	});
});
// formulario de registro
router.get('/categories/create', function(req, res, next) {
	res.render('admin/categories-edit');
});
// formulario de edición
router.get('/categories/:id', function(req, res, next) {
	var Category = models.Category;
	Category.findById(req.params.id).then(function(category){
		res.render('admin/categories-edit', { category: category });
	});
});
// guardar nueva categoría
router.post('/categories', function(req, res, next) {
	var Category = models.Category;
	Category.build({
		name: req.body.name,
		description: req.body.description,
		image: req.body.image
	}).save().then(function(){
		res.redirect('/admin/categories');
	});
});
// modificar categoría existente
router.post('/categories/:id', function(req, res, next) {
	var Category = models.Category;
	Category.findById(req.params.id).then(function(category) {
		category.name = req.body.name;
		category.description = req.body.description;
		category.image = req.body.image;
		category.save().then(function () {
			res.redirect('/admin/categories');
		});
	});
});
// eliminar categoría
router.delete('/categories/:id', function(req, res, next) {
	var Category = models.Category;
	Category.findById(req.params.id).then(function(category) {
		category.destroy().then(function () {
			res.status(204).end();
		});
	});
});

/* GET producto */
router.get('/products', function(req, res, next) {
	res.render('admin/products');
});

module.exports = router;