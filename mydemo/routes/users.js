var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getdata', function(req, res, next) {

  	res.send({id:1, name: "your name"});
});

module.exports = router;
