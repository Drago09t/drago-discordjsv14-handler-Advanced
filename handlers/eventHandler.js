const fs = require('fs');

module.exports = (client) => {
  let eventsCount = 0;

  const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

  for (const file of eventFiles) {
    const event = require(`../events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }
    eventsCount++;
  }

  console.log(`Loaded ${eventsCount} events.`);
  client.eventsCount = eventsCount;
};
