const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    try {
      const logFile = path.join(__dirname, '../logs/commands.log');

      if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) throw new Error(`Command ${interaction.commandName} not found`);

        if (client.config.maintenance && interaction.user.id !== process.env.OWNER_ID) {
          return interaction.reply('The bot is currently in maintenance mode. Please try again later.');
        }

        // Log the command usage
        const logMessage = `[${new Date().toISOString()}] ${interaction.user.tag} used /${interaction.commandName} in ${interaction.guild ? interaction.guild.name : 'DMs'}.\n`;
        fs.appendFileSync(logFile, logMessage);

        await command.execute(interaction, client);
      } else if (interaction.isButton()) {
        const button = client.buttons.get(interaction.customId);
        if (!button) throw new Error(`Button with ID ${interaction.customId} not found`);

        await button.execute(interaction, client);
      } else if (interaction.isSelectMenu()) {
        const menu = client.menus.get(interaction.customId);
        if (!menu) throw new Error(`Select menu with ID ${interaction.customId} not found`);

        await menu.execute(interaction, client);
      }
    } catch (error) {
      console.error('Error handling interaction:', error);
      await interaction.reply({
        content: `An error occurred: ${error.message}. Please contact the bot owner.`,
        ephemeral: true,
      });
    }
  },
};
