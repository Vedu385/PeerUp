// backend/src/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
  skills: [String],
  rating: { type: Number, default: 0 },
  totalRatings: { type: Number, default: 0 },
  pricePerSession: Number
});

module.exports = mongoose.model("User", userSchema);