const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'guildDelete',
  async execute(guild) {
    const logFile = path.join(__dirname, '../logs/guilds.log');

    const logMessage = `[${new Date().toISOString()}] Bot was removed from guild: ${guild.name} (ID: ${guild.id}).\n`;
    console.log(logMessage);
    fs.appendFileSync(logFile, logMessage);
  },
};
