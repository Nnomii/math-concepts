const Discord = require('discord.js');
const command = require('../command.js');

// Displays the quadratic formula and info on how to use it
module.exports = (client) => {
    command(client, ['quad', 'quadratic', 'quadraticformula'], message => {
        const quadFormula = new Discord.MessageEmbed()
            .setTitle('The Quadratic Formula')
            .setDescription('The quadratic formula is used to solve quadratic equations:')
            .attachFiles(['images/quad/1.png'])
            .setImage('attachment://1.png');

        const quadFormula2 = new Discord.MessageEmbed()
            .setDescription('It helps in solving equations like this:')
            .attachFiles(['images/quad/2.png'])
            .setImage('attachment://2.png');

        message.channel.send(quadFormula)
            .catch(console.error);
        message.channel.send(quadFormula2)
            .catch(console.error);
    });
}