const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: false,
    minlength: 3,
    max: 250,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
