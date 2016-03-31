var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BikeSchema = new Schema({
  model: String,
  brand: String,
  year: String,
  geo: {
    ht_ang: Number,
    wh_base: Number
  },
  travel: Number,
  fs: Boolean,
  wh_size: String
});

module.exports = mongoose.model("Bike", BikeSchema);
