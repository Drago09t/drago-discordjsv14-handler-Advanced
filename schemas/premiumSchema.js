const mongoose = require('mongoose');

const premiumSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  premium: { type: Boolean, default: false },
  expirationDate: { type: Date },
});

module.exports = mongoose.model('Premium', premiumSchema);
