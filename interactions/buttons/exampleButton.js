module.exports = {
    data: {
      id: 'example_button',
    },
    async execute(interaction) {
      await interaction.reply({
        content: 'You clicked the example button!',
        ephemeral: true,
      });
    },
  };
  