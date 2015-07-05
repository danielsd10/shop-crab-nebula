var express = require('express');
var router = express.Router();
var models = require('../models');

// cargar las categorías para todas las rutas
var categories = [];
router.all('*', function(req, res, next){
	var Category = models.Category;
	Category.all({order: 'name'}).then( function(c) {
		categories = c;
		next();
	});
});

/* GET pagina principal */
router.get('/', function(req, res, next) {
	var Product = models.Product;
	Product.all({order: 'name'}).then( function(products){
		res.render('shop/index', { categories: categories, products: products });
	});
});

/* nosotros (about) */
router.get('/about', function(req, res, next) {
	res.render('shop/about');
});
/* servicios (services) */
router.get('/services', function(req, res, next) {
	res.render('shop/services');
});
/* contacto (contact) */
router.get('/contact', function(req, res, next) {
	res.render('shop/contact');
});

/* GET categoria */
router.get('/category/:id', function(req, res, next) {
	res.render('shop/category', { categories: categories });
});

/* GET producto */
router.get('/product', function(req, res, next) {
	res.render('shop/product', { categories: categories });
});

/* GET show categories test */
router.get('/category/test', function(req, res, next) {
	models.Category.all().then(function(categories){
		res.json(categories);
	});
});

module.exports = router;