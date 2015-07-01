var express = require('express');
var router = express.Router();

/* Rutas de administración */

/* página principal */
router.get('/', function(req, res, next) {
	res.render('admin/index');
});

/* categorías */
router.get('/categories', function(req, res, next) {
	res.render('admin/categories');
});

/* GET producto */
router.get('/products', function(req, res, next) {
	res.render('admin/products');
});

module.exports = router;