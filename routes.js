// packages
var path = require('path');
var Bike = require('./models/bike');

module.exports = function(app) {
  app.get('/', function(req, res) {

    Bike.find({}, function(err, bike) {
      if (err) {
        res.send(err);
      }

      res.json(bike);
    })
  });

  app.post('/add-bike', function(req, res) {

    var bike = new Bike();

    bike.model = req.body.model;
    bike.brand = req.body.brand;
    bike.year = req.body.year;
    bike.geo.ht_ang = req.body.ht_ang;
    bike.geo.wh_base = req.body.wh_base;
    bike.travel = req.body.travel;
    bike.fs = req.body.fs;
    bike.wh_size = req.body.wh_size;

    bike.save(function(err, bike) {
      if (err) {
        res.send(err);
      }

      res.json({message: "Bike Saved: " + bike});
    });
  });

  app.put('/update-bike', function(req, res) {
    Bike.findOne({_id: req.body.id}, function(err, bike) {
      Bike.update({
        "model": req.body.model,
        "brand": req.body.brand,
        "year": req.body.year,
        "geo.ht_ang": req.body.ht_ang,
        "geo.wh_base": req.body.wh_base,
        "travel": req.body.travel,
        "fs": req.body.fs,
        "wh_size": req.body.wh_size
      }, function(err, bike) {
        if (err) {
          res.send(err);
        }

        res.json(bike);
      })
    })
  })

  app.get('/travel', function(req, res) {

    Bike.find({travel: {$gte: 100}, "geo.ht_ang": {$lte: 68}}, function(err, bike) {
      if (err) {
        res.send(err);
      }

      res.json(bike);
    })
  })
};
