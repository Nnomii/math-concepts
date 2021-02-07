const Discord = require('discord.js');
const command = require('../command.js');

// Shows the trig table
module.exports = (client) => {
    command(client, ['trigtable'], message => {
        const trigTable = new Discord.MessageEmbed()
            .setTitle('Trig Table')
            .setDescription('The trig table for common angles')
            .attachFiles(['images/trig/table.jpg'])
            .setImage('attachment://table.jpg');

        message.channel.send(trigTable)
            .catch(console.error);
    });
}