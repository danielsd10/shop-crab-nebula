var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET pagina principal */
router.get('/', function(req, res, next) {
	res.render('index');
});

/* GET categoria */
router.get('/category', function(req, res, next) {
	res.render('category');
});

/* GET producto */
router.get('/product', function(req, res, next) {
	res.render('product');
});

/* GET show categories test */
router.get('/category/test', function(req, res, next) {
	models.Category.all().then(function(categories){
		res.json(categories);
	});
});

module.exports = router;