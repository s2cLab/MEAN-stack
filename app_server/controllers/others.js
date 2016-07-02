/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('index', { title: 'About' });
};

module.exports.gridSys = function(req, res){
  res.render('gridSys', { title: 'gridSys' });
};