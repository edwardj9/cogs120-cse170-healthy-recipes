module.exports = function(app) {

  app.get('/api/1.0/food/test', function(req, res){
    res.json({
      hello: 'there'
    });
  });

};