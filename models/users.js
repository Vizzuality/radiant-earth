const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: String,
  password: String
});

module.exports = mongoose.model('User', UsersSchema);
