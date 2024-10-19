const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  premium: { type: Boolean, default: false },
  premiumExpiration: { type: Date },
  commandsUsed: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
