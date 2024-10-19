const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  premium: { type: Boolean, default: false },
  joinLogsChannel: { type: String },
  leaveLogsChannel: { type: String },
});

module.exports = mongoose.model('Guild', guildSchema);
