var Sequelize = require('sequelize');
var db = new Sequelize('mysql://root@localhost/shop_crab_nebula');
var models = {};

models.Category =  db.import('./category');

db.sync(); // crear las tablas, incluir {force: true} para eliminar primero

module.exports = models;