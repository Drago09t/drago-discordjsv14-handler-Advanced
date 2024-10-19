module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    async execute(message, args) {
      message.channel.send('Pong!');
    },
  };
  