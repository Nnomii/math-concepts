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
            .addField(`${prefix}trig`, 'Displays a list of trig related commands')

        message.channel.send(embed)
            .catch(console.error);
    });

    // Command for testing
    command(client, 'ping', message => {
        message.channel.send('doop');
    });

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

    command(client, ['trig', 'trigonometry'], message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Trigonometry')
            .setDescription('Please specify - here is the list of trig related commands')
            .addField(`${prefix}trigtable`, `Displays the trig table`)
            .addField(`${prefix}trigidentities`, 'Displays a sheet of useful trigonometric identites')

        message.channel.send(embed)
            .catch(console.error);
    });

    command(client, ['trigtable'], message => {
        const trigTable = new Discord.MessageEmbed()
            .setTitle('Trig Table')
            .setDescription('The trig table for common angles')
            .attachFiles(['images/trig/table.jpg'])
            .setImage('attachment://table.jpg');

        message.channel.send(trigTable)
            .catch(console.error);
    });

    command(client, ['trigidentities'], message => {
        const trigIdentities = new Discord.MessageEmbed()
            .setTitle('Trigonometric Identities')
            .setDescription('Useful trigonometric identities')
            .attachFiles(['images/trig/identities.png'])
            .setImage('attachment://identities.png');

        message.channel.send(trigIdentities)
            .catch(console.error);
    });

});

client.login(process.env.TOKEN);
