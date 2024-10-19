const { Client, GatewayIntentBits, Collection } = require('discord.js');
const mongoose = require('mongoose');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.config = require('./config.json');
client.commands = new Collection();
client.events = new Collection();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

  require('./handlers/commandHandler')(client);
  require('./handlers/eventHandler')(client);
  // Other requires...
require('./handlers/interactionHandler')(client);


  client.login(process.env.TOKEN);
})();
