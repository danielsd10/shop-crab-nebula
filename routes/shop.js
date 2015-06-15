var express = require('express');
var router = express.Router();

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

module.exports = router;