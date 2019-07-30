

var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js')

router.get('/', function(req, res) {
	burger.all(function(burger_data) {
	
		console.log(burger_data);
		res.render('index',{burger_data});
	});
});
module.exports = router;


// router.get("/", function(req, res) {
//     burger.selectAll(function(data) {
//       var hbsObject = {
//         burgers: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });