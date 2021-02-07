const Discord = require('discord.js');
const command = require('../command.js');
const { prefix } = require('../config.json');

// Descriptions of commands
module.exports = (client) => {
    command(client, ['help', 'commands'], message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Below is a list of commands. When called, the bot replies with info on that topic')
            .addField(`${prefix}ping`, `Pong!`)
            .addField(`${prefix}quad / ${prefix}quadratic / ${prefix}quadraticformula`, `Displays the quadratic formula and help on how to use it`)
            .addField(`${prefix}trig`, 'Displays a list of trig related commands')
            .addField(`${prefix}exponents`, 'Displays the exponent rules')

        message.channel.send(embed)
            .catch(console.error);
    });
}
