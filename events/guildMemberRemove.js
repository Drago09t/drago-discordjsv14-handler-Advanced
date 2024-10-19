const Guild = require('../schemas/guildSchema');

module.exports = {
  name: 'guildMemberRemove',
  async execute(member) {
    const guildSettings = await Guild.findOne({ guildId: member.guild.id });

    if (guildSettings && guildSettings.leaveLogsChannel) {
      const channel = member.guild.channels.cache.get(guildSettings.leaveLogsChannel);
      if (channel) {
        channel.send(`${member.user.tag} has left the server.`);
      }
    }
  },
};
