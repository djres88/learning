exports.index = function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['David', 'OJ', 'The Barrister', 'ChiChi', 'Sara McDuff', 'Cap Rafferty', 'Holly Saint Doon', 'Marco Vicarious', 'Jimmy Bones', 'Talia Bananas']
  })
};

exports.about = function(req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  })
}
