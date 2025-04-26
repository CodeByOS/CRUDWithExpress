const mongoose = require('mongoose');

const GroupOneSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  tele: {
    type: String,
    required: true,
    unique: true
  },
  skills: {
    type: [String],
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  adress: {
    type: [String],
    required: true
  }
}, {
    timestamps : true
});

module.exports = mongoose.model('GroupOne', GroupOneSchema);
