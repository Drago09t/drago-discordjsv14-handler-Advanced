const fs = require('fs');

module.exports = (client) => {
  client.buttons = new Map();
  client.menus = new Map();
  let buttonsCount = 0;
  let menusCount = 0;

  const buttonFiles = fs.readdirSync('./interactions/buttons').filter(file => file.endsWith('.js'));
  const menuFiles = fs.readdirSync('./interactions/menus').filter(file => file.endsWith('.js'));

  // Load button interactions
  for (const file of buttonFiles) {
    const button = require(`../interactions/buttons/${file}`);
    client.buttons.set(button.data.id, button);
    buttonsCount++;
  }

  // Load menu interactions
  for (const file of menuFiles) {
    const menu = require(`../interactions/menus/${file}`);
    client.menus.set(menu.data.id, menu);
    menusCount++;
  }

  console.log(`Loaded ${buttonsCount} button interactions.`);
  console.log(`Loaded ${menusCount} menu interactions.`);

  client.buttonsCount = buttonsCount;
  client.menusCount = menusCount;
};
