# Advanced Discord Bot

An advanced Discord bot built with `discord.js` v14, integrated with MongoDB using `mongoose`. This bot supports both prefix and slash commands, features button and menu interactions, and includes robust logging for commands, guild joins, and leaves. It also offers a premium system, maintenance mode, and detailed startup statistics.

## Features

- **Command Handling**: Supports both prefix and slash commands.
- **Button & Select Menu Interactions**: Handles button clicks and select menus dynamically.
- **Guild Logging**: Tracks when the bot joins or leaves servers.
- **Command Logging**: Records command usage for better tracking.
- **Premium System**: Manage premium status for users and servers.
- **Maintenance Mode**: Easily toggle maintenance mode to prevent interactions during updates.
- **Dynamic Stats**: Displays loaded commands, buttons, menus, and event counts during startup.
- **Error Logging**: Captures errors for better debugging.

## Prerequisites

- [Node.js v18+](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) for database
- Discord Bot Token (get one from the [Discord Developer Portal](https://discord.com/developers/applications))
- Optional: A webhook URL for logging if you want to receive logs in a Discord channel

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/advanced-discord-bot.git
    cd advanced-discord-bot
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Create `.env` File**:

   Create a `.env` file in the root directory and add your configuration:

    ```env
    TOKEN=YOUR_DISCORD_BOT_TOKEN
    MONGO_URI=YOUR_MONGO_DB_CONNECTION_STRING
    PREFIX=!
    OWNER_ID=YOUR_DISCORD_USER_ID
    LOG_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_URL
    ```

4. **Update `config.json`**:

   Update the `config.json` file to adjust your bot settings:

    ```json
    {
      "prefix": "!",
      "maintenance": false
    }
    ```
    

5. **Run the Bot**:

    ```bash
    npm start
    ```

   The bot will now connect to Discord and MongoDB, and will log stats about loaded commands, events, and interactions.

## File Structure


## Usage

### Basic Commands

- **/ping**: Check the bot's response time.
- **/help**: Displays a list of available commands.
- **/maintenance**: Toggle maintenance mode (Admin only).
- **/premium**: Manage premium status for a user (Admin only).
- **!ping**: Responds with "Pong!" (Prefix command example).

### Logging Commands

Logs are recorded in the `logs/` folder:

- **commands.log**: Records every command used, including the user, command, and server.
- **guilds.log**: Records when the bot joins or leaves a server, with details.

### Adding New Commands

1. **Slash Command**: Create a new file in `commands/general/`:

    ```js
    const { SlashCommandBuilder } = require('discord.js');

    module.exports = {
      data: new SlashCommandBuilder()
        .setName('example')
        .setDescription('An example command.'),
      async execute(interaction) {
        await interaction.reply('This is an example command!');
      },
    };
    ```

2. **Prefix Command**: Create a new file in `commands/general/`:

    ```js
    module.exports = {
      name: 'example',
      description: 'An example prefix command.',
      async execute(message, args) {
        message.channel.send('This is an example prefix command!');
      },
    };
    ```

3. **Restart the Bot**:

   Restart the bot for the new command to be loaded:

    ```bash
    npm start
    ```
## FIles Stucture
```advanced-discord-bot/
│
├── commands/                    # Command files (both slash & prefix)
│   ├── admin/                   # Admin-specific commands (e.g., maintenance, premium)
│   │   ├── maintenance.js       # Command to toggle maintenance mode
│   │   └── premium.js           # Command to manage premium status for users
│   └── general/                 # General commands (e.g., help, ping)
│       ├── help.js              # Help command to list commands
│       ├── ping.js              # Simple ping command
│       ├── stats.js             # Shows bot stats (servers, users, commands loaded)
│       ├── testButton.js        # Example command that sends a button
│       └── testMenu.js          # Example command that sends a select menu
│
├── events/                      # Event handlers for various Discord events
│   ├── guildCreate.js           # Logs and handles when the bot joins a new server
│   ├── guildDelete.js           # Logs and handles when the bot is removed from a server
│   ├── interactionCreate.js     # Handles command, button, and menu interactions
│   ├── ready.js                 # Logs the bot's stats when it starts
│   └── messageCreate.js         # Handles messages for prefix commands
│
├── interactions/                # Interaction handlers (buttons & menus)
│   ├── buttons/                 # Button interaction handlers
│   │   └── exampleButton.js     # Example button interaction handler
│   ├── menus/                   # Select menu interaction handlers
│   │   └── exampleMenu.js       # Example select menu interaction handler
│   └── interactionHandler.js    # Loads all button and menu interactions dynamically
│
├── logs/                        # Log files for tracking activities
│   ├── commands.log             # Logs of all commands used by users
│   └── guilds.log               # Logs of guild joins and leaves
│
├── schemas/                     # Mongoose schemas for database models
│   ├── userSchema.js            # Tracks user data, including premium status
│   ├── guildSchema.js           # Tracks server-specific settings (e.g., log channels)
│   └── premiumSchema.js         # Tracks premium status for users and servers
│
├── handlers/                    # Handlers for commands, events, and interactions
│   ├── commandHandler.js        # Dynamically loads and registers all commands
│   ├── eventHandler.js          # Dynamically loads and registers all events
│   └── interactionHandler.js    # Dynamically loads button and select menu interactions
│
├── index.js                     # Main bot file that initializes the client and connects to Discord
├── config.json                  # Configuration file for bot settings (e.g., prefix, maintenance)
├── .env                         # Environment variables for sensitive data (e.g., token, MongoDB URI)
├── .gitignore                   # Specifies files and directories to be ignored by Git
├── LICENSE                      # License file for your project (e.g., MIT)
└── README.md                    # Detailed documentation for setup, usage, and contribution```

### Adding Buttons and Menus

1. **Button Interaction**: Create a file in `interactions/buttons/`:

    ```js
    module.exports = {
      data: {
        id: 'example_button',
      },
      async execute(interaction) {
        await interaction.reply('Button clicked!');
      },
    };
    ```

2. **Select Menu Interaction**: Create a file in `interactions/menus/`:

    ```js
    module.exports = {
      data: {
        id: 'example_menu',
      },
      async execute(interaction) {
        const selectedValue = interaction.values[0];
        await interaction.reply(`You selected: ${selectedValue}`);
      },
    };
    ```

3. **Use the Button or Menu** in a command as shown in `testButton.js` and `testMenu.js`.

## Troubleshooting

- **MongoDB Connection Error**: Make sure your `MONGO_URI` in the `.env` file is correct and that MongoDB is running.
- **Bot Not Responding**: Ensure the `TOKEN` in `.env` is correct. Check for errors in the console.
- **Command Not Found**: Ensure the command file is in the right directory and has the correct export structure.

## Contributing

Feel free to fork this repository and make your improvements. Submit a pull request if you think something can be improved or added.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For help and support, you can reach out through the following:

- **Discord Server**: [Your Discord Server Invite Link](https://discord.gg/yourinvite)
- **Issues**: Report bugs or request features in the [GitHub Issues](https://github.com/yourusername/advanced-discord-bot/issues) section.
