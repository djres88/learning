var express = require('express');
var router = express.Router();
//Require data.json file and assign it to a variable. Same thing as the app.locals object in the app.js file, but for the routes directory:
var appdata = require('../data.json')

/* GET home page. */
router.get('/', function(req, res) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork
  });
});

module.exports = router;
