const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("VideoPoints", videoSchema);
