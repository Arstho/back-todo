const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;