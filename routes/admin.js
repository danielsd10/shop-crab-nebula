var express = require('express');
var router = express.Router();

/* Rutas de administración */

/* página principal */
router.get('/', function(req, res, next) {
	res.render('admin/index');
});

/* categorías */

// listar categorías
router.get('/categories', function(req, res, next) {
	res.render('admin/categories');
});
// formulario de registro
router.get('/categories/create', function(req, res, next) {
	res.render('admin/categories-edit');
});
// formulario de edición
router.get('/categories/:id', function(req, res, next) {
	res.render('admin/categories-edit');
});
// guardar nueva categoría
router.post('/categories', function(req, res, next) {
	res.redirect('admin/categories');
});
// modificar categoría existente
router.post('/categories/:id', function(req, res, next) {
	res.redirect('admin/categories');
});
// eliminar categoría
router.delete('/categories/:id', function(req, res, next) {
	res.status(204);
});

/* GET producto */
router.get('/products', function(req, res, next) {
	res.render('admin/products');
});

module.exports = router;