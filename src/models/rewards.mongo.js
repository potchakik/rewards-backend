const mongoose = require("mongoose");

const rewardsSchema = new mongoose.Schema({
  videoPoints: {
    type: Number,
    required: true,
  },
  audioPoints: {
    type: Number,
    required: true,
  },
  articlePoints: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Rewards", rewardsSchema);
