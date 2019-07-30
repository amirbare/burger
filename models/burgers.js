
var orm = require('../config/orm.js');

var burger = {
	all: function (cb) {
		orm.all('Burgers', function (res) {
			cb(res);
		});
	},
	update: function (id, cb) {
		orm.update('Burgers',id, cb, function (res) {
			cb(res);
		});
	},

	create: function (name, cb) {
		orm.create('Burgers',name, cb, function (res) {
			cb(res);
		});
	}
}

module.exports = burger; 