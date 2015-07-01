var Sequelize = require('sequelize');
var db = new Sequelize('mysql://root:@localhost/shop_crab_nebula');
var models = {};

models.Category = require('./category')(db, Sequelize);

module.exports = models;