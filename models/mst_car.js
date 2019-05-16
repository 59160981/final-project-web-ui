const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = new Schema({
  generation: {type: String},
  brand: {type: String},
  register: {type: String},
  tanknumber: {type: String},
  color: {type: String},
  power: {type: String},
  price: {type: String},
  type: {type: String}}, 
  {
    collection: 'mst_car'
  });

module.exports = mongoose.model('Car', Car);