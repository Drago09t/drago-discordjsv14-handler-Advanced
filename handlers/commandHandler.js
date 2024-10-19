const fs = require('fs');
const { Collection } = require('discord.js');

module.exports = (client) => {
  client.commands = new Collection();
  client.prefixCommands = new Collection();
  let slashCommandCount = 0;
  let prefixCommandCount = 0;

  const commandFolders = fs.readdirSync('./commands');

  for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/${file}`);

      // Register Slash Commands
      if (command.data) {
        client.commands.set(command.data.name, command);
        slashCommandCount++;
      }

      // Register Prefix Commands
      if (command.name) {
        client.prefixCommands.set(command.name, command);
        prefixCommandCount++;
      }
    }
  }

  console.log(`Loaded ${slashCommandCount} slash commands.`);
  console.log(`Loaded ${prefixCommandCount} prefix commands.`);

  client.slashCommandCount = slashCommandCount;
  client.prefixCommandCount = prefixCommandCount;
};
