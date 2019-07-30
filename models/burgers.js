
var orm = require('../config/orm.js');

var burger = {
	all: function (cb) {
		orm.all('Burgers', function (res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create('Burgers', cols, vals, function (res){
			cb(res);
		});
    }
}

module.exports = burger; 