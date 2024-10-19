const { SlashCommandBuilder } = require('discord.js');
const Premium = require('../../schemas/premiumSchema');
const { DateTime } = require('luxon');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('premium')
    .setDescription('Manage premium status for a user.')
    .addUserOption(option => 
      option.setName('user')
        .setDescription('The user to give/remove premium status.')
        .setRequired(true)
    )
    .addBooleanOption(option => 
      option.setName('status')
        .setDescription('Set premium status to true/false.')
        .setRequired(true)
    )
    .addIntegerOption(option =>
      option.setName('days')
        .setDescription('Duration in days for premium status.')
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const status = interaction.options.getBoolean('status');
    const days = interaction.options.getInteger('days') || 30;

    let expirationDate = DateTime.now().plus({ days }).toJSDate();

    const premiumData = await Premium.findOneAndUpdate(
      { userId: user.id },
      {
        premium: status,
        expirationDate: status ? expirationDate : null
      },
      { upsert: true, new: true }
    );

    interaction.reply({
      content: `${user.username} is now ${status ? `a premium member until ${expirationDate}` : 'no longer a premium member'}.`,
      ephemeral: true,
    });
  },
};
