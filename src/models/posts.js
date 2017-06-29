const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: String,
  summary: String,
  category: String,
  picture: String,
  source: String
});

module.exports = mongoose.model('Post', PostsSchema);
