const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  githubUsername: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  codeforcesHandle: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', UserSchema);
