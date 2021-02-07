const Discord = require('discord.js');
const command = require('../command.js');

// Shows a table of exponent rules
module.exports = (client) => {
    command(client, ['exponents'], message => {
        const exponentRules = new Discord.MessageEmbed()
            .setTitle('Exponent Rules')
            .setDescription('The rules and laws of exponents:')
            .attachFiles(['images/exponent/exponentrules.png'])
            .setImage('attachment://exponentrules.png');

        message.channel.send(exponentRules)
            .catch(console.error);
    });
}
