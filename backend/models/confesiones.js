const mongoose = require('mongoose');

const confesionSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  mensaje: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  leido: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Confesion', confesionSchema);
