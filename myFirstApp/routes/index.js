var express = require('express');
var router = express.Router();

/* GET home page. */
exports.index = function(req, res) {
  res.render('default-views', {
    title: 'Welcome!',
    classname: 'main',
    weeks: ['Week 8', 'Week 9', 'Week 10']
  })
};

module.exports = router;
