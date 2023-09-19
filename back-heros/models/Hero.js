const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroSchema = new Schema({
  nickname: String,
  real_name: String,
  origin_description: String,
  superpowers: String,
  catch_phrase: String,
  images: [String],
});

module.exports = mongoose.model("Hero", heroSchema);