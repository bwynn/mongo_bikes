// packages
var path = require('path');
var Bike = require('../models/bike');

module.exports = function(app) {
  var bikeCtrl = require('../controllers/bike_controller');

// BIKE ROUTES
// =============================================================================
  // get all bikes
  app.get('/bikes', bikeCtrl.getBikes);

  // create a new bike
  app.post('/add-bike', bikeCtrl.newBike);

  // update a bike record
  app.put('/update-bike', bikeCtrl.updateBike);

  // delete a bike
  app.delete('/delete-bike', bikeCtrl.removeBike);

// FRONT END ROUTES
// =============================================================================
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

}; // end exports