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
        .then(console.log)
        .catch(console.error);

    // Descriptions of commands
    command(client, ['help', 'commands'], message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Below is a list of commands. When called, the bot replies with info on that topic')
            .addField(`${prefix}ping`, `Pong!`)
            .addField(`${prefix}quad / ${prefix}quadratic / ${prefix}quadraticformula`, `Displays the quadratic formula and help on how to use it`);

        message.channel.send(embed);
    });

    // Command for testing
    command(client, 'ping', message => {
        message.channel.send('doop');
    });

    command(client, ['quad', 'quadratic', 'quadraticformula'], message => {
        const embed = new Discord.MessageEmbed()
            .setTitle('The quadratic formula')
            .attachFiles(['../images/quad/1.png', '../images/quad/2.png'])
            .setImage('attachment://1.png')

        message.channel.send(embed);
    });
});

client.login(process.env.TOKEN);
