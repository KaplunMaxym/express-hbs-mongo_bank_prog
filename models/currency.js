const {Schema, model} = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  currency_to_grn: {
    type: Number,
    required: true
  },
  currency_to_grn_sell: {
    type: Number,
    required: true
  },
  black_market_buy: {
    type: Number,
    required: true
  },
  black_market_sell: {
    type: Number,
    required: true
  },
  NBU: {
    type: Number,
    required: true
  },
});

module.exports = model('currency', schema);
