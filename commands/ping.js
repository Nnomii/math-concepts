const command = require('../command.js');

// Command for testing
module.exports = (client) => {
    command(client, 'ping', message => {
        message.channel.send('doop');
    });
}