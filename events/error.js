module.exports = {
    name: 'error',
    async execute(error) {
      console.error('--------------------------------');
      console.error('An error occurred in the bot:');
      console.error(error);
      console.error('--------------------------------');
    },
  };
  