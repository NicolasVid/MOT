const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  name: { type: String, required: true},
  minutes: { type: Number, required: true},
  seconds: {type: Number, required: true}
});

module.exports = mongoose.model('score', scoreSchema);