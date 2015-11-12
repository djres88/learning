var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// // LESSON 12: Default Template
// app.get('/', function(req, res) {
//   res.render('default', {
//     title: 'Home',
//     users: ['David', 'OJ', 'The Barrister', 'ChiChi', 'Sara McDuff', 'Cap Rafferty', 'Holly Saint Doon', 'Marco Vicarious', 'Jimmy Bones', 'Talia Bananas']
//   });
// });

// LESSON 13: Default with Bootstrap, Partials
app.get('/', function(req, res) {
  res.render('default-bootstrap', { //takes default-bootstrap from views folder
    title: 'Home',
    classname: 'home',
    users: ['David', 'OJ', 'The Barrister', 'ChiChi', 'Sara McDuff', 'Cap Rafferty', 'Holly Saint Doon', 'Marco Vicarious', 'Jimmy Bones', 'Talia Bananas']
  });
});


app.get('/about', function(req, res) {
  res.render('default-bootstrap', { //takes default-bootstrap from views folder
    title: 'About Us',
    classname: 'about'
  });
})

app.get('*', function(req, res) {
  res.send('bad route');
});

app.listen(3000);
