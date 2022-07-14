const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AudioPoints", audioSchema);
