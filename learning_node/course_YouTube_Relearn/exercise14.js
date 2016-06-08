var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.locals.pagetitle = "Awesome Website";

app.get('/', function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['David', 'OJ', 'The Barrister', 'ChiChi', 'Sara McDuff', 'Cap Rafferty', 'Holly Saint Doon', 'Marco Vicarious', 'Jimmy Bones', 'Talia Bananas']
  });
});


app.get('/about', function(req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  });
})

app.get('*', function(req, res) {
  res.send('bad route');
});

app.listen(3000);
