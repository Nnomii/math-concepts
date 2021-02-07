const Discord = require('discord.js');
const client = new Discord.Client();

const { prefix } = require('./config.json');
const command = require('./command.js');

client.on('ready', () => {
    console.log('The client is ready');

    // Set the client user's presence
    client.user.setPresence({ activity:{
            name: '%help',
            type: 'LISTENING'
        },
        status: 'online'
    })
        .catch(console.error);

    // Descriptions of commands
    command(client, ['help', 'commands'], message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Below is a list of commands. When called, the bot replies with info on that topic')
            .addField(`${prefix}ping`, `Pong!`)
            .addField(`${prefix}quad / ${prefix}quadratic / ${prefix}quadraticformula`, `Displays the quadratic formula and help on how to use it`)
            .addField(`${prefix}trig / ${prefix}trigtable`, 'Displays the trig table')

        message.channel.send(embed);
    });

    // Command for testing
    command(client, 'ping', message => {
        message.channel.send('doop');
    });

    command(client, ['quad', 'quadratic', 'quadraticformula'], message => {
        const quadFormula = new Discord.MessageEmbed()
            .setTitle('The quadratic formula')
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

    command(client, ['trig', 'trigtable'], message => {
        const trigTable = new Discord.MessageEmbed()
            .setTitle('Trig table')
            .setDescription('The trig table for common angles')
            .attachFiles(['images/trig/1.jpg'])
            .setImage('attachment://1.jpg');

        message.channel.send(trigTable)
            .catch(console.error);
    });
});

client.login(process.env.TOKEN);
