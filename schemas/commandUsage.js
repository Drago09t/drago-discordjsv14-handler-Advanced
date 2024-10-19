const mongoose = require('mongoose');

const commandUsageSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  commandName: { type: String, required: true },
  count: { type: Number, default: 0 },
});

module.exports = mongoose.model('CommandUsage', commandUsageSchema);
