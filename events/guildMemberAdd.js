const Guild = require('../schemas/guildSchema');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    const guildSettings = await Guild.findOne({ guildId: member.guild.id });

    if (guildSettings && guildSettings.joinLogsChannel) {
      const channel = member.guild.channels.cache.get(guildSettings.joinLogsChannel);
      if (channel) {
        channel.send(`Welcome ${member.user.tag} to the server!`);
      }
    }
  },
};
