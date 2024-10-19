module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      console.log('--------------------------------');
      console.log(`Logged in as: ${client.user.tag}`);
      console.log(`Bot ID: ${client.user.id}`);
      console.log('--------------------------------');
  
      console.log('Bot is now online and ready to serve:');
      console.log(`Servers: ${client.guilds.cache.size}`);
      console.log(`Users: ${client.users.cache.size}`);
      console.log('--------------------------------');
  
      console.log('Loaded Command Stats:');
      console.log(`Prefix Commands: ${client.prefixCommandCount}`);
      console.log(`Slash Commands: ${client.slashCommandCount}`);
      console.log('--------------------------------');
  
      console.log('Loaded Interaction Stats:');
      console.log(`Buttons: ${client.buttonsCount}`);
      console.log(`Select Menus: ${client.menusCount}`);
      console.log('--------------------------------');
  
      console.log('Loaded Events:');
      console.log(`Event Listeners: ${client.eventsCount}`);
      console.log('--------------------------------');
  
      client.user.setActivity('Serving the Discord world!', {
        type: 'PLAYING',
      });
    },
  };
  