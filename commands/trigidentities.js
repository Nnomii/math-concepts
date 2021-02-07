const Discord = require('discord.js');
const command = require('../command.js');

// Shows a sheet of trig identities
module.exports = (client) => {
    command(client, ['trigidentities'], message => {
        const trigIdentities = new Discord.MessageEmbed()
            .setTitle('Trigonometric Identities')
            .setDescription('Useful trigonometric identities')
            .attachFiles(['images/trig/identities.png'])
            .setImage('attachment://identities.png');

        message.channel.send(trigIdentities)
            .catch(console.error);
    });
}