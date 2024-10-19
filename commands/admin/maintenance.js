const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('maintenance')
    .setDescription('Toggle maintenance mode.')
    .addBooleanOption(option =>
      option.setName('enabled').setDescription('Enable or disable maintenance mode.')
    ),
  async execute(interaction) {
    const enabled = interaction.options.getBoolean('enabled');
    const config = JSON.parse(fs.readFileSync('./config.json'));

    config.maintenance = enabled;
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

    return interaction.reply(`Maintenance mode is now ${enabled ? 'enabled' : 'disabled'}.`);
  },
};
