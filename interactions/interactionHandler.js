const fs = require('fs');

module.exports = (client) => {
  client.buttons = new Map();
  client.menus = new Map();

  const buttonFiles = fs.readdirSync('./interactions/buttons').filter(file => file.endsWith('.js'));
  const menuFiles = fs.readdirSync('./interactions/menus').filter(file => file.endsWith('.js'));

  // Load button interactions
  for (const file of buttonFiles) {
    const button = require(`../interactions/buttons/${file}`);
    client.buttons.set(button.data.id, button);
  }

  // Load menu interactions
  for (const file of menuFiles) {
    const menu = require(`../interactions/menus/${file}`);
    client.menus.set(menu.data.id, menu);
  }

  console.log('Loaded buttons:', client.buttons.keys());
  console.log('Loaded menus:', client.menus.keys());
};
