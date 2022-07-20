const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ArticlePoints", articleSchema);
