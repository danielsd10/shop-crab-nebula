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

/* productos */

// listar productos
router.get('/products', function(req, res, next) {
	var Product = models.Product;
	Product.all({ include: { all: true } }).then(function(products){
		res.render('admin/products', { products: products });
	});
});
// formulario de registro
router.get('/products/create', function(req, res, next) {
	var Category = models.Category;
	Category.all().then( function(categories) {
		res.render('admin/products-edit', { categories: categories });
	});
});
// formulario de edición
router.get('/products/:id', function(req, res, next) {
	var Product = models.Product;
	var Category = models.Category;
	Product.findById(req.params.id).then(function(product){
		Category.all().then(function(categories){
			res.render('admin/products-edit', { product: product, categories: categories });
		});
	});
});
// guardar nuevo producto
router.post('/products', function(req, res, next) {
	var Product = models.Product;
	Product.build({
		name: req.body.name,
		category_id: req.body.category_id,
		price: req.body.price,
		description: req.body.description,
		image: req.body.image
	}).save().then(function(){
		res.redirect('/admin/products');
	});
});
// guardar producto existente
router.post('/products/:id', function(req, res, next) {
	var Product = models.Product;
	Product.findById(req.params.id).then( function(product) {
		product.name = req.body.name;
		product.category_id = req.body.category_id;
		product.price = req.body.price;
		product.description = req.body.description;
		product.image = req.body.image;
		product.save().then(function () {
			res.redirect('/admin/products');
		});
	});
});
// eliminar producto
router.delete('/products/:id', function(req, res, next) {
	var Product = models.Product;
	Product.findById(req.params.id).then(function(product) {
		product.destroy().then(function () {
			res.status(204).end();
		});
	});
});

module.exports = router;