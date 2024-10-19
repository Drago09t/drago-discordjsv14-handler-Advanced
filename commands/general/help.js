const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays a list of all available commands.'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Help Menu')
      .setDescription('Here are all the available commands:')
      .setColor(0x00AE86)
      .addFields(
        { name: '/ping', value: 'Check the bot\'s latency.' },
        { name: '/premium', value: 'Manage user premium status (Admin only).' },
        { name: '/maintenance', value: 'Toggle maintenance mode (Admin only).' },
        { name: '/help', value: 'Displays this help menu.' }
      )
      .setFooter({ text: 'More commands coming soon!' });

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
