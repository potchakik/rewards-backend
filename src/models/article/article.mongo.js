const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ArticlePoints", articleSchema);
