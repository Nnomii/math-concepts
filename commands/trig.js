const Discord = require('discord.js');
const command = require('../command.js');
const { prefix } = require('../config.json');

// Displays trig related commands
module.exports = (client) => {
    command(client, ['trig', 'trigonometry'], message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Trigonometry')
            .setDescription('Please specify - here is the list of trig related commands')
            .addField(`${prefix}trigtable`, `Displays the trig table`)
            .addField(`${prefix}trigidentities`, 'Displays a sheet of useful trigonometric identities')

        message.channel.send(embed)
            .catch(console.error);
    });
}