const mongoose = require('mongoose');

const animaSchema = new mongoose.Schema({
  ghost: {
    type: Boolean,
    required: false,
  },
  name: {
    type: String,
    required: [true, 'An animatronic must have a name'],
  },
  type: {
    type: String,
    required: [true, 'Must specify the type of the animatronic'],
  },
  anger: {
    type: String,
  },
  difficulty: {
    type: Number,
  },
});
const animaModel = mongoose.model('Model', animaSchema);

module.exports = animaModel;
