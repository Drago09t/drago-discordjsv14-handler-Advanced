const axios = require('axios');
require('dotenv').config();

module.exports = {
  name: 'guildCreate',
  async execute(guild) {
    const webhookUrl = process.env.LOG_WEBHOOK_URL;

    const logMessage = `Bot joined new guild: **${guild.name}** (ID: ${guild.id}) with **${guild.memberCount}** members.`;

    console.log(logMessage);

    try {
      await axios.post(webhookUrl, {
        content: logMessage,
      });
    } catch (error) {
      console.error('Error sending join log to webhook:', error);
    }
  },
};
