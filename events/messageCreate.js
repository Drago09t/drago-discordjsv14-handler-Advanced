module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
      if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
  
      const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
  
      const command = client.prefixCommands.get(commandName);
      if (!command) return;
  
      try {
        if (client.config.maintenance && message.author.id !== process.env.OWNER_ID) {
          return message.reply('The bot is currently in maintenance mode. Please try again later.');
        }
        await command.execute(message, args, client);
      } catch (error) {
        console.error('Error executing command:', error);
        message.reply('There was an error while executing this command!');
      }
    },
  };
  