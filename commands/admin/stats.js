const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('Shows the bot\'s current statistics.'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle('Bot Statistics')
      .setColor(0x1D82B6)
      .addFields(
        { name: 'Servers', value: `${client.guilds.cache.size}`, inline: true },
        { name: 'Users', value: `${client.users.cache.size}`, inline: true },
        { name: 'Prefix Commands', value: `${client.prefixCommandCount}`, inline: true },
        { name: 'Slash Commands', value: `${client.slashCommandCount}`, inline: true },
        { name: 'Buttons', value: `${client.buttonsCount}`, inline: true },
        { name: 'Select Menus', value: `${client.menusCount}`, inline: true },
        { name: 'Event Listeners', value: `${client.eventsCount}`, inline: true },
        { name: 'Uptime', value: `<t:${Math.floor(client.readyTimestamp / 1000)}:R>`, inline: true },
      )
      .setTimestamp()
      .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });

    await interaction.reply({ embeds: [embed] });
  },
};
